'use client'

import { useState } from 'react'
import { kegiatan } from '@/lib/data'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { AdminModal, AdminFormGroup } from '@/components/admin-modal'
import { ImageUploader } from '@/components/image-uploader'

export default function AdminKegiatanPage() {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nama: '',
    kategori: '',
    deskripsi: '',
    gambar: '',
  })

  const editingItem = kegiatan.find((k) => k.slug === editingId)

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAddingNew(false)
      setFormData({ nama: '', kategori: '', deskripsi: '', gambar: '' })
    }, 500)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setEditingId(null)
    }, 500)
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
                      <button className="inline-flex items-center gap-1 px-2 md:px-3 py-1 text-xs md:text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
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
          onImageChange={(url) => setFormData({ ...formData, gambar: url })}
          label="Gambar Kegiatan"
          required
        />

        <AdminFormGroup label="Nama Kegiatan" required>
          <input
            type="text"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            placeholder="Masukkan nama kegiatan"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Kategori" required>
          <select
            value={formData.kategori}
            onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
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
            value={formData.deskripsi}
            onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
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
            onImageChange={(url) => setFormData({ ...formData, gambar: url })}
            label="Gambar Kegiatan"
          />

          <AdminFormGroup label="Nama Kegiatan" required>
            <input
              type="text"
              defaultValue={editingItem.nama}
              placeholder="Nama kegiatan"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Kategori" required>
            <select
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
              type="date"
              defaultValue={editingItem.tanggalIso}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </AdminFormGroup>

          <AdminFormGroup label="Status">
            <select
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
              defaultValue={editingItem.ringkas}
              placeholder="Deskripsi kegiatan"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
        <p className="text-blue-800">
          Catatan: Ini adalah prototype admin panel. Data saat ini tersimpan statis. Untuk
          production, integrasi dengan database dan API backend yang proper.
        </p>
      </div>
    </div>
  )
}
