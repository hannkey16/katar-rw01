'use client'

import { X } from 'lucide-react'

interface AdminModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  children: React.ReactNode
  submitLabel?: string
  isLoading?: boolean
}

export function AdminModal({
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
  submitLabel = 'Simpan',
  isLoading = false,
}: AdminModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          {children}

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Memproses...' : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export function AdminFormGroup({
  label,
  children,
  required = false,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}
