'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galeri } from '@/lib/data'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { AdminModal, AdminFormGroup } from '@/components/admin-modal'

export default function AdminGaleriPage() {
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAddingNew(false)
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
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kelola Galeri</h1>
          <p className="text-gray-600">Total {galeri.length} foto</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Tambah Foto
        </button>
      </div>

      {/* Galeri Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {galeri.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.src}
              alt={item.judul}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <button
                onClick={() => setEditingId(idx)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-sm line-clamp-2">
              {item.judul}
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      <AdminModal
        isOpen={isAddingNew}
        title="Tambah Foto Galeri Baru"
        onClose={() => setIsAddingNew(false)}
        onSubmit={handleAddSubmit}
        isLoading={isLoading}
      >
        <AdminFormGroup label="Upload Foto" required>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <Plus className="w-6 h-6 text-gray-400" />
              <span className="text-sm text-gray-600">Klik atau drag file foto</span>
              <span className="text-xs text-gray-500">PNG, JPG, GIF max 5MB</span>
            </label>
          </div>
        </AdminFormGroup>

        <AdminFormGroup label="Judul Foto" required>
          <input
            type="text"
            placeholder="Masukkan judul foto"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Kategori">
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
            <option>Pilih Kategori</option>
            <option>Kegiatan</option>
            <option>Olahraga</option>
            <option>Sosial</option>
            <option>Lingkungan</option>
            <option>Pendidikan</option>
          </select>
        </AdminFormGroup>

        <AdminFormGroup label="Deskripsi (Opsional)">
          <textarea
            placeholder="Tambahkan deskripsi foto"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </AdminFormGroup>
      </AdminModal>

      {/* Edit Modal */}
      {editingId !== null && (
        <AdminModal
          isOpen={editingId !== null}
          title={`Edit Foto: ${galeri[editingId]?.judul}`}
          onClose={() => setEditingId(null)}
          onSubmit={handleEditSubmit}
          isLoading={isLoading}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Preview Foto</label>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={galeri[editingId]?.src || ''}
                alt="Preview"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <AdminFormGroup label="Judul Foto" required>
            <input
              type="text"
              defaultValue={galeri[editingId]?.judul}
              placeholder="Judul foto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Kategori">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
              <option>Kegiatan</option>
              <option>Olahraga</option>
              <option>Sosial</option>
              <option>Lingkungan</option>
              <option>Pendidikan</option>
            </select>
          </AdminFormGroup>

          <AdminFormGroup label="Deskripsi">
            <textarea
              placeholder="Deskripsi foto"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Info Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
        <p className="text-blue-800">
          Upload foto galeri di sini. Foto akan ditampilkan di halaman galeri public setelah
          diupload. Maksimal ukuran file 5MB, format JPG/PNG.
        </p>
      </div>
    </div>
  )
}
