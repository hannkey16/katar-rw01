'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Upload, X, Check } from 'lucide-react'

interface ImageUploaderProps {
  currentImage?: string
  onImageChange: (imageUrl: string) => void
  label?: string
  required?: boolean
}

export function ImageUploader({
  currentImage,
  onImageChange,
  label = 'Upload Foto/Gambar',
  required = false,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | undefined>(currentImage)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Silakan pilih file gambar (JPG, PNG, GIF)')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file maksimal 5MB')
      return
    }

    setIsUploading(true)

    // Simulate file upload - dalam production, upload ke Vercel Blob atau cloud storage
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setPreview(result)
      onImageChange(result)
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleRemove = () => {
    setPreview(undefined)
    onImageChange('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {preview ? (
        <div className="space-y-2 sm:space-y-3">
          {/* Preview - Responsive Height */}
          <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200 shadow-sm">
            <Image
              src={preview}
              alt="Preview"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-medium">
              <Check className="w-3 h-3" />
              Dipilih
            </div>
          </div>

          {/* Action Buttons - Stack on Mobile */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base flex-1 sm:flex-1"
              disabled={isUploading}
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Ganti Foto</span>
              <span className="sm:hidden">Ganti</span>
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="px-3 sm:px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base flex-1"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Hapus</span>
              <span className="sm:hidden">Hapus</span>
            </button>
          </div>

          {/* File info on mobile */}
          <p className="text-xs text-gray-500 sm:hidden">Max 5MB</p>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center transition-colors ${
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-gray-300 hover:border-primary/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex flex-col items-center gap-2 cursor-pointer disabled:opacity-50 w-full"
          >
            <div className="p-2 sm:p-3 bg-gray-100 rounded-lg">
              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <div className="w-full px-2">
              <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">
                {isUploading ? 'Mengupload...' : 'Tap untuk upload'}
              </p>
              <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                atau drag foto di sini
              </p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF - max 5MB</p>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
