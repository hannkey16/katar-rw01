'use client'

import { useState } from 'react'
import { berita } from '@/lib/data'
import { Edit2, Trash2, Plus, Eye } from 'lucide-react'
import { AdminModal, AdminFormGroup } from '@/components/admin-modal'
import { ImageUploader } from '@/components/image-uploader'

export default function AdminBeritaPage() {
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    judul: '',
    kategori: '',
    ringkas: '',
    isi: '',
    gambar: '',
  })

  const editingItem = berita.find((b) => b.slug === editingId)

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAddingNew(false)
      setFormData({ judul: '', kategori: '', ringkas: '', isi: '', gambar: '' })
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
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kelola Berita</h1>
          <p className="text-gray-600">Total {berita.length} berita</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Tambah Berita
        </button>
      </div>

      {/* Berita Table - Responsive */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Judul
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                  Kategori
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
                  Tanggal
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {berita.map((item) => (
                <tr key={item.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium max-w-xs truncate">
                    {item.judul}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">
                    {item.kategori}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden md:table-cell">
                    {item.tanggal}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <div className="flex gap-1 md:gap-2 justify-end">
                      <button className="inline-flex items-center gap-1 px-2 md:px-3 py-1 text-xs md:text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                        <Eye className="w-4 h-4" />
                        <span className="hidden md:inline">Lihat</span>
                      </button>
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
        title="Tambah Berita Baru"
        onClose={() => {
          setIsAddingNew(false)
          setFormData({ judul: '', kategori: '', ringkas: '', isi: '', gambar: '' })
        }}
        onSubmit={handleAddSubmit}
        isLoading={isLoading}
      >
        <ImageUploader
          onImageChange={(url) => setFormData({ ...formData, gambar: url })}
          label="Gambar Berita"
          required
        />

        <AdminFormGroup label="Judul Berita" required>
          <input
            type="text"
            value={formData.judul}
            onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
            placeholder="Masukkan judul berita"
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
            <option>Sosial</option>
            <option>Kegiatan</option>
            <option>Pendidikan</option>
            <option>Lingkungan</option>
            <option>Ekonomi</option>
            <option>Olahraga</option>
          </select>
        </AdminFormGroup>

        <AdminFormGroup label="Ringkasan" required>
          <textarea
            value={formData.ringkas}
            onChange={(e) => setFormData({ ...formData, ringkas: e.target.value })}
            placeholder="Ringkasan berita (preview)"
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Isi Berita" required>
          <textarea
            value={formData.isi}
            onChange={(e) => setFormData({ ...formData, isi: e.target.value })}
            placeholder="Isi berita lengkap"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            required
          />
        </AdminFormGroup>
      </AdminModal>

      {/* Edit Modal */}
      {editingItem && (
        <AdminModal
          isOpen={!!editingId}
          title={`Edit Berita: ${editingItem.judul}`}
          onClose={() => setEditingId(null)}
          onSubmit={handleEditSubmit}
          isLoading={isLoading}
        >
          <ImageUploader
            currentImage={editingItem.gambar}
            onImageChange={(url) => setFormData({ ...formData, gambar: url })}
            label="Gambar Berita"
          />

          <AdminFormGroup label="Judul Berita" required>
            <input
              type="text"
              defaultValue={editingItem.judul}
              placeholder="Judul berita"
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
              <option>Sosial</option>
              <option>Kegiatan</option>
              <option>Pendidikan</option>
              <option>Lingkungan</option>
              <option>Ekonomi</option>
              <option>Olahraga</option>
            </select>
          </AdminFormGroup>

          <AdminFormGroup label="Penulis">
            <input
              type="text"
              defaultValue={editingItem.penulis}
              placeholder="Nama penulis"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </AdminFormGroup>

          <AdminFormGroup label="Ringkasan">
            <textarea
              defaultValue={editingItem.ringkas}
              placeholder="Ringkasan berita"
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>

          <AdminFormGroup label="Isi Berita">
            <textarea
              defaultValue={editingItem.isi}
              placeholder="Isi berita"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
        <p className="text-blue-800">
          Admin dapat menambah, mengedit, dan menghapus berita dari sini. Setiap berita yang
          diubah akan langsung ter-update di halaman berita public.
        </p>
      </div>
    </div>
  )
}
