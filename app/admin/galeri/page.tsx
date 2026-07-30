'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galeri } from '@/lib/data'
import { Edit2, Trash2, Plus } from 'lucide-react'

export default function AdminGaleriPage() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kelola Galeri</h1>
          <p className="text-gray-600">Total {galeri.length} foto</p>
        </div>
        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Tambah Foto
        </button>
      </div>

      {/* Add Form */}
      {isAddingNew && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Form Tambah Foto Galeri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Upload Foto</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <input
              type="text"
              placeholder="Judul Foto"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Pilih Kategori</option>
              <option>Kegiatan</option>
              <option>Olahraga</option>
              <option>Sosial</option>
              <option>Lingkungan</option>
            </select>
            <textarea
              placeholder="Deskripsi Foto (Opsional)"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Simpan
              </button>
              <button
                onClick={() => setIsAddingNew(false)}
                className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Galeri Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {galeri.map((item, idx) => (
          <div key={idx} className="relative group rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={item.src}
              alt={item.judul}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-sm line-clamp-2">
              {item.judul}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          Upload foto galeri di sini. Foto akan ditampilkan di halaman galeri public setelah
          diupload. Maksimal ukuran file 5MB, format JPG/PNG.
        </p>
      </div>
    </div>
  )
}
