# Admin Panel - Karang Taruna RW 01

## Akses Admin Panel

### Login
- **URL**: `http://localhost:3000/admin-login` atau `/admin-login`
- **Username**: `admin`
- **Password**: `admin123`

### Fitur Admin Panel

Admin panel memungkinkan pengelolaan konten website Karang Taruna RW 01, termasuk:

#### 1. Dashboard
- Overview statistik website
- Total kegiatan, berita, galeri, dan pengurus
- Quick links ke halaman manajemen konten

#### 2. Kelola Kegiatan (`/admin/kegiatan`)
- Lihat daftar semua kegiatan
- Tambah kegiatan baru
- Edit informasi kegiatan
- Hapus kegiatan
- Fitur yang dapat dikelola:
  - Nama kegiatan
  - Kategori (Olahraga, Sosial, Lingkungan, dll)
  - Tanggal dan waktu
  - Lokasi
  - Deskripsi dan konten
  - Status (Selesai, Berlangsung, Akan Datang)

#### 3. Kelola Berita (`/admin/berita`)
- Lihat daftar semua berita
- Tambah berita baru
- Edit artikel yang sudah ada
- Hapus berita
- Fitur yang dapat dikelola:
  - Judul berita
  - Kategori
  - Penulis
  - Excerpt (ringkasan)
  - Konten lengkap
  - Tanggal publikasi

#### 4. Kelola Galeri (`/admin/galeri`)
- Lihat galeri foto dalam grid
- Upload foto baru
- Edit informasi foto
- Hapus foto
- Fitur yang dapat dikelola:
  - Upload gambar (JPG/PNG, max 5MB)
  - Judul foto
  - Kategori
  - Deskripsi

#### 5. Kelola Struktur Pengurus (`/admin/struktur`)
- Manajemen Pengurus Inti
- Manajemen Koordinator Bidang (6 bidang)
- Fitur yang dapat dikelola:
  - Nama pengurus
  - Jabatan/posisi
  - Anggota per bidang
  - Deskripsi

### Navigasi Sidebar
Sidebar navigasi memudahkan akses ke semua halaman admin:
- Dashboard
- Kegiatan
- Berita
- Galeri
- Struktur Pengurus
- Logout button

### Catatan Penting

**Version Saat Ini**: Prototype/Demo
- Data tersimpan dalam file `lib/data.ts`
- Perubahan data akan hilang setelah restart server
- Ini adalah versi dasar untuk demonstrasi

### Untuk Production

Untuk menggunakan admin panel di production, perlu dilakukan integrasi dengan:

1. **Database**
   - Gunakan Supabase, Neon, atau database lain
   - Implementasikan API endpoints untuk CRUD operations

2. **Authentication**
   - Gunakan Better Auth, Auth.js, atau sistem auth lain
   - Implementasikan proper password hashing
   - Setup session management

3. **File Storage**
   - Untuk upload gambar, gunakan Vercel Blob atau service lain
   - Implementasikan image optimization

4. **API Routes**
   - Buat API endpoints di `/app/api/`
   - Implementasikan proper validation dan error handling

### File Struktur
```
app/
├── admin/                    # Admin panel pages
│   ├── layout.tsx           # Sidebar layout
│   ├── page.tsx             # Dashboard
│   ├── kegiatan/page.tsx    # Manage kegiatan
│   ├── berita/page.tsx      # Manage berita
│   ├── galeri/page.tsx      # Manage galeri
│   ├── struktur/page.tsx    # Manage struktur
│   └── login/page.tsx       # Redirect ke admin-login
├── admin-login/page.tsx     # Login page
└── ...
```

### Troubleshooting

**Tidak bisa login?**
- Pastikan username: `admin` dan password: `admin123` (case-sensitive)
- Cek browser console untuk error messages

**Redirect ke login page?**
- Bersihkan localStorage di browser
- Coba buka incognito/private window

**Sidebar tidak tampil di mobile?**
- Klik menu icon di top-left
- Responsive design fully supported

### Kontak Support
Untuk pertanyaan atau masalah, hubungi admin Karang Taruna RW 01.

---

**Last Updated**: Juli 2026
**Version**: 1.0 (Demo/Prototype)
