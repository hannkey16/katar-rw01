'use client'

import { useState, useEffect, useRef } from 'react'
import { kegiatan as initialKegiatan } from '@/lib/data'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { AdminModal, AdminFormGroup } from '@/components/admin-modal'
import { ImageUploader } from '@/components/image-uploader'
import { useAdminData } from '@/lib/use-admin-data'

export default function AdminKegiatanPage() {
  const { data: kegiatan, updateItem, addItem, deleteItem } = useAdminData('kegiatan', initialKegiatan)
  
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nama: '',
    kategori: '',
    deskripsi: '',
    gambar: '',
  })

  // Refs untuk capture form values
  const namaInputRef = useRef<HTMLInputElement>(null)
  const kategoriSelectRef = useRef<HTMLSelectElement>(null)
  const tanggalInputRef = useRef<HTMLInputElement>(null)
  const statusSelectRef = useRef<HTMLSelectElement>(null)
  const deskripsiTextareaRef = useRef<HTMLTextAreaElement>(null)
  const gambarImageRef = useRef<string>('')

  const editingItem = kegiatan.find((k) => k.slug === editingId)

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    const newKegiatan = {
      slug: `kegiatan-${Date.now()}`,
      nama: namaInputRef.current?.value || 'Kegiatan Baru',
      kategori: kategoriSelectRef.current?.value || 'Sosial',
      tanggal: new Date().toLocaleDateString('id-ID'),
      tanggalIso: new Date().toISOString().split('T')[0],
      status: 'Akan Datang' as const,
      ringkas: deskripsiTextareaRef.current?.value || '',
      gambar: gambarImageRef.current,
    }

    addItem(newKegiatan)

    setTimeout(() => {
      setIsLoading(false)
      setIsAddingNew(false)
      setFormData({ nama: '', kategori: '', deskripsi: '', gambar: '' })
      gambarImageRef.current = ''
    }, 500)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingId) return

    setIsLoading(true)

    const updatedData = {
      nama: namaInputRef.current?.value || editingItem?.nama || '',
      kategori: kategoriSelectRef.current?.value || editingItem?.kategori || '',
      tanggalIso: tanggalInputRef.current?.value || editingItem?.tanggalIso || '',
      tanggal: new Date(tanggalInputRef.current?.value || '').toLocaleDateString('id-ID'),
      status: (statusSelectRef.current?.value || editingItem?.status || 'Akan Datang') as const,
      ringkas: deskripsiTextareaRef.current?.value || editingItem?.ringkas || '',
      gambar: gambarImageRef.current || editingItem?.gambar || '',
    }

    updateItem(editingId, updatedData)

    setTimeout(() => {
      setIsLoading(false)
      setEditingId(null)
      gambarImageRef.current = ''
    }, 500)
  }

  const handleDelete = (slug: string) => {
    if (confirm('Yakin ingin menghapus kegiatan ini?')) {
      deleteItem(slug)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kelola Kegiatan</h1>
          <p className="text-gray-600">Total {kegiatan.length} kegiatan</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Tambah Kegiatan
        </button>
      </div>

      {/* Kegiatan Table - Responsive */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Nama
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                  Kategori
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
                  Tanggal
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {kegiatan.map((item) => (
                <tr key={item.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium max-w-xs truncate">
                    {item.nama}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">
                    {item.kategori}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden md:table-cell">
                    {item.tanggal}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <span
                      className={`px-2 md:px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                        item.status === 'Selesai'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'Berlangsung'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <div className="flex gap-1 md:gap-2 justify-end">
                      <button
                        onClick={() => setEditingId(item.slug)}
                        className="inline-flex items-center gap-1 px-2 md:px-3 py-1 text-xs md:text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                        <span className="hidden md:inline">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item.slug)}
                        className="inline-flex items-center gap-1 px-2 md:px-3 py-1 text-xs md:text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden md:inline">Hapus</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      <AdminModal
        isOpen={isAddingNew}
        title="Tambah Kegiatan Baru"
        onClose={() => {
          setIsAddingNew(false)
          setFormData({ nama: '', kategori: '', deskripsi: '', gambar: '' })
        }}
        onSubmit={handleAddSubmit}
        isLoading={isLoading}
      >
        <ImageUploader
          onImageChange={(url) => {
            gambarImageRef.current = url
          }}
          label="Gambar Kegiatan"
          required
        />

        <AdminFormGroup label="Nama Kegiatan" required>
          <input
            ref={namaInputRef}
            type="text"
            placeholder="Masukkan nama kegiatan"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Kategori" required>
          <select
            ref={kategoriSelectRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
            required
          >
            <option value="">Pilih Kategori</option>
            <option>Olahraga</option>
            <option>Sosial</option>
            <option>Lingkungan</option>
            <option>Pendidikan</option>
            <option>Kepemudaan</option>
          </select>
        </AdminFormGroup>

        <AdminFormGroup label="Deskripsi Kegiatan">
          <textarea
            ref={deskripsiTextareaRef}
            placeholder="Masukkan deskripsi kegiatan"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </AdminFormGroup>
      </AdminModal>

      {/* Edit Modal */}
      {editingItem && (
        <AdminModal
          isOpen={!!editingId}
          title={`Edit Kegiatan: ${editingItem.nama}`}
          onClose={() => setEditingId(null)}
          onSubmit={handleEditSubmit}
          isLoading={isLoading}
        >
          <ImageUploader
            currentImage={editingItem.gambar}
            onImageChange={(url) => {
              gambarImageRef.current = url
            }}
            label="Gambar Kegiatan"
          />

          <AdminFormGroup label="Nama Kegiatan" required>
            <input
              ref={namaInputRef}
              type="text"
              defaultValue={editingItem.nama}
              placeholder="Nama kegiatan"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Kategori" required>
            <select
              ref={kategoriSelectRef}
              defaultValue={editingItem.kategori}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              required
            >
              <option>Olahraga</option>
              <option>Sosial</option>
              <option>Lingkungan</option>
              <option>Pendidikan</option>
              <option>Kepemudaan</option>
            </select>
          </AdminFormGroup>

          <AdminFormGroup label="Tanggal">
            <input
              ref={tanggalInputRef}
              type="date"
              defaultValue={editingItem.tanggalIso}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </AdminFormGroup>

          <AdminFormGroup label="Status">
            <select
              ref={statusSelectRef}
              defaultValue={editingItem.status}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
            >
              <option>Akan Datang</option>
              <option>Berlangsung</option>
              <option>Selesai</option>
            </select>
          </AdminFormGroup>

          <AdminFormGroup label="Deskripsi">
            <textarea
              ref={deskripsiTextareaRef}
              defaultValue={editingItem.ringkas}
              placeholder="Deskripsi kegiatan"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Info Box */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
        <p className="text-green-800">
          ✓ Data tersimpan di browser Anda menggunakan localStorage. Perubahan akan tetap ada meskipun halaman di-refresh. Untuk production, integrasikan dengan database backend.
        </p>
      </div>
    </div>
  )
}
