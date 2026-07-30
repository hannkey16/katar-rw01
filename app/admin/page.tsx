'use client'

import { Calendar, Newspaper, Image as ImageIcon, Users } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Kegiatan',
      value: 10,
      icon: Calendar,
      href: '/admin/kegiatan',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Total Berita',
      value: 5,
      icon: Newspaper,
      href: '/admin/berita',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Total Galeri',
      value: 24,
      icon: ImageIcon,
      href: '/admin/galeri',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Total Pengurus',
      value: 12,
      icon: Users,
      href: '/admin/struktur',
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
        <p className="text-gray-600">Selamat datang di panel admin Karang Taruna RW 01</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Kegiatan Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Kegiatan Terbaru</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Lihat dan kelola semua kegiatan Karang Taruna</p>
            <Link
              href="/admin/kegiatan"
              className="block text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kelola Kegiatan
            </Link>
          </div>
        </div>

        {/* Berita Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Kelola berita dan artikel Karang Taruna</p>
            <Link
              href="/admin/berita"
              className="block text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kelola Berita
            </Link>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Informasi Penting</h3>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>• Data yang ditampilkan disimpan dalam file data.ts (demo purposes)</li>
          <li>• Untuk production, gunakan database yang proper seperti Supabase atau Neon</li>
          <li>• Admin panel ini adalah versi dasar untuk mengelola konten website</li>
        </ul>
      </div>
    </div>
  )
}
