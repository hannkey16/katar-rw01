'use client'

import { useState } from 'react'
import { berita } from '@/lib/data'
import { Edit2, Trash2, Plus, Eye } from 'lucide-react'

export default function AdminBeritaPage() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kelola Berita</h1>
          <p className="text-gray-600">Total {berita.length} berita</p>
        </div>
        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Tambah Berita
        </button>
      </div>

      {/* Add Form */}
      {isAddingNew && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Form Tambah Berita</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Judul Berita"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Pilih Kategori</option>
              <option>Sosial</option>
              <option>Kegiatan</option>
              <option>Pendidikan</option>
              <option>Lingkungan</option>
              <option>Ekonomi</option>
              <option>Olahraga</option>
            </select>
            <textarea
              placeholder="Excerpt/Ringkasan"
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <textarea
              placeholder="Isi Berita (pisahkan paragraf dengan enter)"
              rows={6}
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

      {/* Berita Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Judul</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Penulis
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tanggal</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {berita.map((item) => (
                <tr key={item.slug} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium line-clamp-2">
                    {item.judul}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.kategori}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.penulis}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.tanggal}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                        <Eye className="w-4 h-4" />
                        Lihat
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          Admin dapat menambah, mengedit, dan menghapus berita dari sini. Setiap berita yang
          diubah akan langsung ter-update di halaman berita public.
        </p>
      </div>
    </div>
  )
}
