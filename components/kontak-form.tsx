'use client'

import { useState } from 'react'
import { WhatsappIcon } from '@/components/social-icons'

const subjekOptions = [
  'Informasi Kegiatan',
  'Usulan / Ide Kegiatan',
  'Pendaftaran Anggota',
  'Kerja Sama / Donasi',
  'Lainnya',
]

export function KontakForm() {
  const [nama, setNama] = useState('')
  const [subjek, setSubjek] = useState(subjekOptions[0])
  const [pesan, setPesan] = useState('')

  const teks = encodeURIComponent(
    `Halo Karang Taruna RW 01 Mekarjaya.\n\nNama: ${nama || '-'}\nPerihal: ${subjek}\nPesan: ${pesan || '-'}`,
  )

  const isValid = nama.trim().length > 1 && pesan.trim().length > 4

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        if (!isValid) return
        window.open(`https://wa.me/6281234567890?text=${teks}`, '_blank')
      }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nama" className="text-sm font-semibold text-primary">
          Nama Lengkap
        </label>
        <input
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-3 focus:ring-primary/15"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subjek" className="text-sm font-semibold text-primary">
          Perihal
        </label>
        <select
          id="subjek"
          value={subjek}
          onChange={(e) => setSubjek(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary/40 focus:ring-3 focus:ring-primary/15"
        >
          {subjekOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="text-sm font-semibold text-primary">
          Pesan
        </label>
        <textarea
          id="pesan"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          rows={4}
          placeholder="Tuliskan pertanyaan, usulan, atau informasi yang ingin disampaikan."
          className="rounded-xl border border-border bg-background p-4 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-3 focus:ring-primary/15"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-[0.95rem] font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <WhatsappIcon className="size-5 text-accent" />
        Kirim via WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Pesan akan diteruskan ke WhatsApp pengurus Karang Taruna RW 01. Kami
        biasanya membalas dalam 1×24 jam.
      </p>
    </form>
  )
}
