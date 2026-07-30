'use client'

import { useState } from 'react'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { AdminModal, AdminFormGroup } from '@/components/admin-modal'
import { ImageUploader } from '@/components/image-uploader'

export default function AdminStrukturPage() {
  const [isAddingInti, setIsAddingInti] = useState(false)
  const [isAddingBidang, setIsAddingBidang] = useState(false)
  const [editingIntiId, setEditingIntiId] = useState<string | null>(null)
  const [editingBidangId, setEditingBidangId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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

  const editingIntiItem = pengurus.find((p) => p.id === editingIntiId)
  const editingBidangItem = bidang.find((b) => b.id === editingBidangId)

  const handleAddIntiSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAddingInti(false)
    }, 500)
  }

  const handleEditIntiSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setEditingIntiId(null)
    }, 500)
  }

  const handleAddBidangSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAddingBidang(false)
    }, 500)
  }

  const handleEditBidangSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setEditingBidangId(null)
    }, 500)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola Struktur Pengurus</h1>
      </div>

      {/* Pengurus Inti Section */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pengurus Inti</h2>
            <p className="text-gray-600">Total {pengurus.length} orang</p>
          </div>
          <button
            onClick={() => setIsAddingInti(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Tambah Pengurus
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Nama
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                    Jabatan
                  </th>
                  <th className="px-4 md:px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pengurus.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium max-w-xs truncate">
                      {item.nama}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">
                      {item.jabatan}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm">
                      <div className="flex gap-1 md:gap-2 justify-end">
                        <button
                          onClick={() => setEditingIntiId(item.id)}
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
      </div>

      {/* Koordinator Bidang Section */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Koordinator Bidang</h2>
            <p className="text-gray-600">Total {bidang.length} bidang</p>
          </div>
          <button
            onClick={() => setIsAddingBidang(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Tambah Bidang
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Bidang
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                    Koordinator
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
                    Anggota
                  </th>
                  <th className="px-4 md:px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bidang.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium max-w-xs truncate">
                      {item.nama}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">
                      {item.koordinator}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 hidden md:table-cell">
                      {item.anggota}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm">
                      <div className="flex gap-1 md:gap-2 justify-end">
                        <button
                          onClick={() => setEditingBidangId(item.id)}
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
      </div>

      {/* Add Pengurus Inti Modal */}
      <AdminModal
        isOpen={isAddingInti}
        title="Tambah Pengurus Inti"
        onClose={() => setIsAddingInti(false)}
        onSubmit={handleAddIntiSubmit}
        isLoading={isLoading}
      >
        <ImageUploader
          onImageChange={() => {}}
          label="Foto Pengurus"
        />

        <AdminFormGroup label="Nama" required>
          <input
            type="text"
            placeholder="Masukkan nama pengurus"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Jabatan" required>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" required>
            <option value="">Pilih Jabatan</option>
            <option>Ketua</option>
            <option>Wakil Ketua</option>
            <option>Sekretaris</option>
            <option>Bendahara</option>
          </select>
        </AdminFormGroup>

        <AdminFormGroup label="Deskripsi (Opsional)">
          <textarea
            placeholder="Deskripsi singkat"
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </AdminFormGroup>
      </AdminModal>

      {/* Edit Pengurus Inti Modal */}
      {editingIntiItem && (
        <AdminModal
          isOpen={!!editingIntiId}
          title={`Edit Pengurus: ${editingIntiItem.nama}`}
          onClose={() => setEditingIntiId(null)}
          onSubmit={handleEditIntiSubmit}
          isLoading={isLoading}
        >
          <ImageUploader
            onImageChange={() => {}}
            label="Foto Pengurus"
          />

          <AdminFormGroup label="Nama" required>
            <input
              type="text"
              defaultValue={editingIntiItem.nama}
              placeholder="Nama pengurus"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Jabatan" required>
            <select
              defaultValue={editingIntiItem.jabatan}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              required
            >
              <option>Ketua</option>
              <option>Wakil Ketua</option>
              <option>Sekretaris</option>
              <option>Bendahara</option>
            </select>
          </AdminFormGroup>

          <AdminFormGroup label="Deskripsi">
            <textarea
              placeholder="Deskripsi"
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Add Bidang Modal */}
      <AdminModal
        isOpen={isAddingBidang}
        title="Tambah Bidang Kerja"
        onClose={() => setIsAddingBidang(false)}
        onSubmit={handleAddBidangSubmit}
        isLoading={isLoading}
      >
        <AdminFormGroup label="Nama Bidang" required>
          <input
            type="text"
            placeholder="Masukkan nama bidang"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Koordinator" required>
          <input
            type="text"
            placeholder="Nama koordinator"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          />
        </AdminFormGroup>

        <AdminFormGroup label="Deskripsi Bidang">
          <textarea
            placeholder="Deskripsi bidang kerja"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </AdminFormGroup>
      </AdminModal>

      {/* Edit Bidang Modal */}
      {editingBidangItem && (
        <AdminModal
          isOpen={!!editingBidangId}
          title={`Edit Bidang: ${editingBidangItem.nama}`}
          onClose={() => setEditingBidangId(null)}
          onSubmit={handleEditBidangSubmit}
          isLoading={isLoading}
        >
          <AdminFormGroup label="Nama Bidang" required>
            <input
              type="text"
              defaultValue={editingBidangItem.nama}
              placeholder="Nama bidang"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Koordinator" required>
            <input
              type="text"
              defaultValue={editingBidangItem.koordinator}
              placeholder="Nama koordinator"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </AdminFormGroup>

          <AdminFormGroup label="Jumlah Anggota">
            <input
              type="text"
              defaultValue={editingBidangItem.anggota}
              placeholder="Contoh: 3 orang"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </AdminFormGroup>

          <AdminFormGroup label="Deskripsi Bidang">
            <textarea
              placeholder="Deskripsi bidang kerja"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </AdminFormGroup>
        </AdminModal>
      )}

      {/* Info Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
        <p className="text-blue-800">
          Kelola struktur pengurus Karang Taruna RW 01. Tambah, edit, atau hapus pengurus inti dan
          koordinator bidang kerja.
        </p>
      </div>
    </div>
  )
}
