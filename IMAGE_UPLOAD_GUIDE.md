# Admin Panel Image Upload Guide

## Overview

Semua halaman admin di Karang Taruna RW 01 website sekarang dilengkapi dengan fitur image upload yang fully responsive dan user-friendly.

## Features

### Image Uploader Component

**File**: `/components/image-uploader.tsx`

Component reusable untuk upload/ganti foto di semua bagian admin panel.

#### Features:
- ✓ Drag-and-drop support
- ✓ Click to upload
- ✓ File validation (hanya image, max 5MB)
- ✓ Image preview
- ✓ Change/remove existing images
- ✓ Responsive design (mobile, tablet, desktop)
- ✓ Success indicator badge ("Dipilih")

### Supported File Types
- PNG
- JPG/JPEG
- GIF
- WebP

### File Size Limit
- Maximum 5MB per file

## Admin Pages dengan Image Upload

### 1. Kelola Kegiatan (`/admin/kegiatan`)

**Untuk Tambah Kegiatan**:
- Click "Tambah Kegiatan" button
- Upload gambar kegiatan
- Isi informasi lainnya (nama, kategori, deskripsi, tanggal, status)
- Click "Simpan"

**Untuk Edit Kegiatan**:
- Click tombol "Edit" pada kegiatan yang ingin diubah
- Ganti gambar jika diperlukan dengan "Ganti Foto"
- Atau hapus gambar dengan "Hapus"
- Update informasi lainnya
- Click "Simpan"

**Fitur Image Upload**:
```
Label: Gambar Kegiatan (required)
Workflow: Upload → Preview → Submit
```

### 2. Kelola Berita (`/admin/berita`)

**Untuk Tambah Berita**:
- Click "Tambah Berita" button
- Upload gambar berita
- Isi judul, kategori, ringkasan, isi
- Click "Simpan"

**Untuk Edit Berita**:
- Click tombol "Edit" pada berita
- Ganti gambar dengan button "Ganti Foto"
- Update informasi berita
- Click "Simpan"

**Fitur Image Upload**:
```
Label: Gambar Berita (required)
Workflow: Upload → Preview → Submit
```

### 3. Kelola Galeri (`/admin/galeri`)

**Untuk Tambah Foto**:
- Click "Tambah Foto" button
- Upload foto galeri
- Isi judul dan kategori
- Click "Simpan"

**Untuk Edit Foto**:
- Hover on foto galeri
- Click tombol Edit (pensil icon)
- Ganti foto dengan "Ganti Foto" atau "Hapus"
- Update informasi foto
- Click "Simpan"

**Fitur Image Upload**:
```
Label: Foto (no label - direct drag-drop area)
Workflow: Upload → Preview → Submit
Grid Display: Responsive (1-4 columns based on screen size)
```

### 4. Kelola Struktur Pengurus (`/admin/struktur`)

#### Pengurus Inti:

**Untuk Tambah Pengurus**:
- Click "Tambah Pengurus" button
- Upload foto pengurus
- Isi nama dan jabatan
- Tambahkan deskripsi (optional)
- Click "Simpan"

**Untuk Edit Pengurus**:
- Click tombol "Edit" pada pengurus
- Ganti foto dengan "Ganti Foto"
- Update nama, jabatan, deskripsi
- Click "Simpan"

**Fitur Image Upload**:
```
Label: Foto Pengurus
Workflow: Upload → Preview → Submit
```

#### Bidang Kerja:

- Bidang kerja tidak memiliki foto
- Hanya memiliki nama, koordinator, dan anggota information

## User Workflow: Upload Gambar

### 1. Via Click

```
User clicks upload area
  ↓
Browser file dialog opens
  ↓
User selects image file
  ↓
Image preview loads
  ↓
"Ganti Foto" & "Hapus" buttons appear
```

### 2. Via Drag-and-Drop

```
User drags image file
  ↓
Upload area highlights
  ↓
User drops file
  ↓
Image preview loads
  ↓
Ready to submit
```

## Image Upload States

### 1. Empty State (No Image)

- Drag-drop area visible
- Upload instructions: "Klik untuk upload atau drag foto di sini"
- File type info: "PNG, JPG, GIF max 5MB"
- Click area to select file

### 2. Preview State (Image Selected)

- Image preview displayed (height: 192px)
- Success badge: "Dipilih" (green with checkmark)
- Action buttons:
  - "Ganti Foto" (blue): Replace with new image
  - "Hapus" (red): Remove current image

### 3. Uploading State

- "Mengupload..." text shown
- Buttons disabled
- Cursor changes to wait state

## Validation & Error Handling

### File Type Validation
- Only image files accepted
- Alert: "Silakan pilih file gambar (JPG, PNG, GIF)"

### File Size Validation
- Maximum 5MB enforced
- Alert: "Ukuran file maksimal 5MB"

### After Successful Upload
- Preview image displayed
- Badge shows "Dipilih"
- Form ready for submission

## Mobile Responsiveness

### Mobile (375px)
- Image preview: Full width with padding
- Upload area: Responsive, clear touch targets
- Buttons: Full width, stacked vertically

### Tablet (768px)
- Image preview: Medium size
- Upload area: Optimized for tablet
- Buttons: Side-by-side when space allows

### Desktop (1024px+)
- Image preview: Full size
- Upload area: Generous padding
- Buttons: Flexbox layout with gaps

## Technical Implementation

### Components Used
- `ImageUploader` component: `/components/image-uploader.tsx`
- `AdminModal`: Container for forms
- `AdminFormGroup`: Consistent field styling

### Data Flow
1. User selects/drops image file
2. File validation (type, size)
3. FileReader API converts to Data URL
4. Preview rendered
5. State updated with image URL
6. Form ready for submission

### Supported Features
- File type validation
- File size validation
- Image preview via FileReader
- Remove image functionality
- Drag-and-drop support
- Mobile-friendly UI

## Production Deployment Notes

### For Demo/Development
- Current: Uses FileReader API with Data URLs
- Images stored in component state
- No actual server upload

### For Production
Recommended changes:
1. **Use Vercel Blob Storage**
   - Install: `npm install @vercel/blob`
   - Upload files directly to Blob
   - Get permanent URLs
   - Delete old images when replacing

2. **Alternative Storage Options**
   - AWS S3
   - Cloudinary
   - Firebase Storage
   - Supabase Storage

3. **Server-Side Implementation**
   - Create API endpoint: `/api/upload`
   - Handle multipart/form-data
   - Validate file types server-side
   - Optimize images (resize, compression)
   - Return permanent URL to client

4. **Database Updates**
   - Store image URLs in database
   - Track image metadata (upload date, size)
   - Setup image deletion on record delete

## Example API Integration (Production)

```typescript
// Upload to Vercel Blob
const uploadImage = async (file: File) => {
  const blob = await put(file.name, file, {
    access: 'public',
  })
  return blob.url
}

// Usage in component
const handleImageChange = async (url: string) => {
  if (url.startsWith('blob:')) {
    // Data URL, convert to file for upload
    const response = await fetch(url)
    const file = await response.blob()
    const uploadedUrl = await uploadImage(new File([file], 'image.jpg'))
    // Save uploadedUrl to database
  }
}
```

## Troubleshooting

### Image not uploading
- Check file type (must be image)
- Check file size (max 5MB)
- Try different browser
- Clear browser cache

### Image preview not showing
- File may be corrupted
- Try uploading different image
- Check browser console for errors

### Mobile upload issues
- Ensure file manager has image access
- Try both click and drag-drop methods
- Check mobile browser supports FileReader API

## Summary

Fitur image upload di admin panel memberikan kemudahan bagi admin untuk mengelola foto/gambar di semua bagian:
- Kegiatan
- Berita
- Galeri
- Pengurus

Setiap upload fully responsive, user-friendly, dan ready untuk production dengan integrasi ke cloud storage yang tepat.
