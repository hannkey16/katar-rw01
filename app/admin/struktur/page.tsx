'use client'

import { useState } from 'react'
import { Edit2, Trash2, Plus } from 'lucide-react'

export default function AdminStrukturPage() {
  const [isAddingInti, setIsAddingInti] = useState(false)
  const [isAddingBidang, setIsAddingBidang] = useState(false)

  // Demo data - in production, fetch from database
  const pengurus = [
    { id: '1', nama: 'Ahmad Syaiful', jabatan: 'Ketua' },
    { id: '2', nama: 'Fatimah Nurhaliza', jabatan: 'Wakil Ketua' },
    { id: '3', nama: 'Budi Santoso', jabatan: 'Sekretaris' },
    { id: '4', nama: 'Siti Rahayu', jabatan: 'Bendahara' },
  ]

  const bidang = [
    { id: '1', nama: 'Olahraga', koordinator: 'Budi Santoso', anggota: '3 orang' },
    { id: '2', nama: 'Sosial', koordinator: 'Siti Rahayu', anggota: '4 orang' },
    { id: '3', nama: 'Lingkungan', koordinator: 'Ahmad Syaiful', anggota: '3 orang' },
    { id: '4', nama: 'Pendidikan', koordinator: 'Fatimah Nurhaliza', anggota: '3 orang' },
    { id: '5', nama: 'Ekonomi', koordinator: 'Budi Santoso', anggota: '2 orang' },
    { id: '6', nama: 'Kesenian', koordinator: 'Siti Rahayu', anggota: '4 orang' },
  ]

  return (
    <div>
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Struktur Pengurus</h1>

      {/* Pengurus Inti Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pengurus Inti</h2>
            <p className="text-gray-600">Total {pengurus.length} orang</p>
          </div>
          <button
            onClick={() => setIsAddingInti(!isAddingInti)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Tambah Pengurus
          </button>
        </div>

        {/* Add Form */}
        {isAddingInti && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tambah Pengurus Inti</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="Jabatan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Deskripsi (Opsional)"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Simpan
                </button>
                <button
                  onClick={() => setIsAddingInti(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Jabatan
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {pengurus.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.nama}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.jabatan}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Koordinator Bidang Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Koordinator Bidang</h2>
            <p className="text-gray-600">Total {bidang.length} bidang</p>
          </div>
          <button
            onClick={() => setIsAddingBidang(!isAddingBidang)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Tambah Bidang
          </button>
        </div>

        {/* Add Form */}
        {isAddingBidang && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tambah Bidang</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Bidang"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="Koordinator"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Deskripsi Bidang"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Simpan
                </button>
                <button
                  onClick={() => setIsAddingBidang(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Bidang
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Koordinator
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Anggota
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {bidang.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.nama}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.koordinator}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.anggota}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          Kelola struktur organisasi Karang Taruna RW 01 dari sini. Setiap perubahan akan
          langsung ter-update di halaman profil dan struktur pengurus.
        </p>
      </div>
    </div>
  )
}
