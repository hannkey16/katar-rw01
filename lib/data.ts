export type Kegiatan = {
  slug: string
  nama: string
  tanggal: string
  tanggalIso: string
  waktu: string
  lokasi: string
  kategori: string
  status: 'Selesai' | 'Berlangsung' | 'Akan Datang'
  gambar: string
  ringkas: string
  isi: string[]
  penanggungJawab: string
  peserta: string
}

export const kegiatan: Kegiatan[] = [
  {
    slug: 'turnamen-futsal-hut-ri-81',
    nama: 'Turnamen Futsal HUT RI ke-81',
    tanggal: '10 Agustus 2026',
    tanggalIso: '2026-08-10',
    waktu: '19.00 – 23.00 WIB',
    lokasi: 'Lapangan Serbaguna RW 01',
    kategori: 'Olahraga',
    status: 'Akan Datang',
    gambar: '/images/futsal.png',
    ringkas:
      'Turnamen futsal antar RT dalam rangka memperingati HUT Kemerdekaan RI ke-81 dengan total 12 tim peserta.',
    isi: [
      'Turnamen futsal antar RT menjadi agenda tahunan Karang Taruna RW 01 dalam rangka memperingati Hari Ulang Tahun Kemerdekaan Republik Indonesia. Tahun ini turnamen diikuti oleh 12 tim yang berasal dari seluruh RT di lingkungan RW 01.',
      'Pertandingan digelar setiap malam selama satu minggu di Lapangan Serbaguna RW 01 dengan sistem gugur. Selain memperebutkan piala bergilir, kegiatan ini juga menjadi ajang mempererat kekeluargaan antar warga dan menghidupkan kembali semangat olahraga di kalangan pemuda.',
      'Pendaftaran tim dibuka melalui koordinator RT masing-masing atau langsung menghubungi panitia melalui WhatsApp Karang Taruna RW 01.',
    ],
    penanggungJawab: 'Bidang Olahraga',
    peserta: '12 tim antar RT',
  },
  {
    slug: 'bakti-sosial-santunan-anak-yatim',
    nama: 'Bakti Sosial Santunan Anak Yatim',
    tanggal: '28 Juli 2026',
    tanggalIso: '2026-07-28',
    waktu: '09.00 – 12.00 WIB',
    lokasi: 'Balai Warga RW 01',
    kategori: 'Sosial',
    status: 'Selesai',
    gambar: '/images/bakti-sosial.png',
    ringkas:
      'Penyaluran santunan dan paket sembako kepada 40 anak yatim serta keluarga prasejahtera di lingkungan RW 01.',
    isi: [
      'Kegiatan bakti sosial ini merupakan wujud kepedulian pemuda RW 01 terhadap warga yang membutuhkan. Sebanyak 40 anak yatim dan keluarga prasejahtera menerima santunan tunai serta paket sembako berisi beras, minyak, dan kebutuhan pokok lainnya.',
      'Dana kegiatan dihimpun dari donasi warga, iuran anggota Karang Taruna, dan dukungan dari beberapa pelaku usaha di lingkungan RW 01. Seluruh penerimaan dan penyaluran dana dilaporkan secara terbuka kepada warga.',
      'Karang Taruna RW 01 berkomitmen menjadikan kegiatan santunan sebagai agenda rutin setiap semester.',
    ],
    penanggungJawab: 'Bidang Sosial',
    peserta: '40 penerima manfaat',
  },
  {
    slug: 'kerja-bakti-lingkungan-rw-01',
    nama: 'Kerja Bakti Lingkungan RW 01',
    tanggal: '13 Juli 2026',
    tanggalIso: '2026-07-13',
    waktu: '07.00 – 10.00 WIB',
    lokasi: 'Seluruh Wilayah RW 01',
    kategori: 'Lingkungan',
    status: 'Selesai',
    gambar: '/images/kerja-bakti.png',
    ringkas:
      'Kerja bakti bersama warga membersihkan saluran air, memangkas tanaman liar, dan menata jalan lingkungan.',
    isi: [
      'Kerja bakti bulanan dilaksanakan bersama warga dari seluruh RT. Fokus kegiatan kali ini adalah pembersihan saluran air untuk mencegah genangan pada musim hujan, pemangkasan tanaman liar, serta penataan jalan lingkungan.',
      'Pemuda Karang Taruna bertugas sebagai koordinator lapangan sekaligus menyiapkan peralatan dan konsumsi bagi warga yang berpartisipasi.',
      'Kegiatan ditutup dengan makan bersama di balai warga sebagai bentuk apresiasi atas gotong royong seluruh warga RW 01.',
    ],
    penanggungJawab: 'Bidang Lingkungan',
    peserta: '± 90 warga',
  },
  {
    slug: 'pelatihan-desain-grafis-pemuda',
    nama: 'Pelatihan Desain Grafis Pemuda',
    tanggal: '29 Juni 2026',
    tanggalIso: '2026-06-29',
    waktu: '13.00 – 16.00 WIB',
    lokasi: 'Sekretariat Karang Taruna RW 01',
    kategori: 'Pendidikan',
    status: 'Selesai',
    gambar: '/images/pelatihan.png',
    ringkas:
      'Kelas desain grafis dasar untuk remaja RW 01 sebagai bekal keterampilan digital dan peluang penghasilan tambahan.',
    isi: [
      'Pelatihan desain grafis dasar diadakan untuk membekali remaja RW 01 dengan keterampilan digital yang dapat digunakan untuk kebutuhan organisasi maupun peluang penghasilan tambahan.',
      'Materi mencakup dasar tipografi, komposisi warna, dan praktik membuat poster kegiatan menggunakan aplikasi gratis. Pelatihan dibimbing oleh pemuda RW 01 yang berprofesi sebagai desainer.',
      'Peserta terbaik dilibatkan langsung dalam tim publikasi Karang Taruna RW 01.',
    ],
    penanggungJawab: 'Bidang Pendidikan',
    peserta: '25 peserta remaja',
  },
  {
    slug: 'lomba-anak-hut-ri',
    nama: 'Lomba Anak & Karnaval HUT RI',
    tanggal: '17 Agustus 2026',
    tanggalIso: '2026-08-17',
    waktu: '08.00 – 15.00 WIB',
    lokasi: 'Jalan Lingkungan RW 01',
    kategori: 'Kepemudaan',
    status: 'Akan Datang',
    gambar: '/images/lomba-anak.png',
    ringkas:
      'Rangkaian lomba tradisional untuk anak-anak dan karnaval keliling lingkungan pada puncak peringatan HUT RI.',
    isi: [
      'Puncak peringatan HUT Kemerdekaan RI diisi dengan rangkaian lomba tradisional untuk anak-anak seperti balap karung, makan kerupuk, dan estafet air, dilanjutkan karnaval keliling lingkungan RW 01.',
      'Karang Taruna bertindak sebagai panitia penuh, mulai dari penyusunan acara, dekorasi jalan, hingga penyediaan hadiah bagi seluruh peserta.',
      'Warga yang ingin menjadi donatur hadiah dapat menghubungi panitia melalui kontak Karang Taruna RW 01.',
    ],
    penanggungJawab: 'Panitia HUT RI ke-81',
    peserta: 'Terbuka untuk seluruh warga',
  },
  {
    slug: 'senam-sehat-warga',
    nama: 'Senam Sehat Bersama Warga',
    tanggal: '8 Juni 2026',
    tanggalIso: '2026-06-08',
    waktu: '06.30 – 08.00 WIB',
    lokasi: 'Lapangan Badminton RW 01',
    kategori: 'Olahraga',
    status: 'Berlangsung',
    gambar: '/images/senam.png',
    ringkas:
      'Senam sehat rutin setiap dua pekan yang diikuti warga dari berbagai usia bersama pemuda Karang Taruna.',
    isi: [
      'Senam sehat dilaksanakan setiap dua pekan sebagai program hidup sehat warga RW 01. Kegiatan dipandu instruktur dan diikuti warga dari berbagai kelompok usia.',
      'Selain menjaga kebugaran, kegiatan ini menjadi ruang temu warga yang mempererat hubungan antar tetangga.',
      'Karang Taruna menyediakan sound system, air minum, serta pembagian buah bagi peserta.',
    ],
    penanggungJawab: 'Bidang Olahraga',
    peserta: '± 60 warga',
  },
]

export type Berita = {
  slug: string
  judul: string
  kategori: string
  tanggal: string
  tanggalIso: string
  penulis: string
  gambar: string
  excerpt: string
  isi: string[]
}

export const berita: Berita[] = [
  {
    slug: 'karang-taruna-rw-01-gelar-bakti-sosial',
    judul: 'Karang Taruna RW 01 Gelar Bakti Sosial untuk 40 Anak Yatim',
    kategori: 'Sosial',
    tanggal: '29 Juli 2026',
    tanggalIso: '2026-07-29',
    penulis: 'Tim Publikasi',
    gambar: '/images/bakti-sosial.png',
    excerpt:
      'Sebanyak 40 anak yatim dan keluarga prasejahtera menerima santunan serta paket sembako dari hasil penggalangan dana warga RW 01.',
    isi: [
      'MEKARJAYA — Karang Taruna RW 01 Kelurahan Mekarjaya kembali menggelar kegiatan bakti sosial pada Selasa (28/7) di Balai Warga RW 01. Kegiatan ini menyalurkan santunan tunai dan paket sembako kepada 40 anak yatim serta keluarga prasejahtera.',
      '"Kegiatan ini bukan sekadar membagikan bantuan, tetapi menumbuhkan kebiasaan peduli di kalangan pemuda," ujar Ketua Karang Taruna RW 01 dalam sambutannya.',
      'Dana kegiatan berasal dari donasi warga, iuran anggota, serta dukungan pelaku usaha di lingkungan RW 01. Seluruh laporan penerimaan dan penyaluran dana dipublikasikan secara terbuka di papan informasi sekretariat.',
      'Ke depan, Karang Taruna RW 01 berencana menjadikan santunan sebagai program rutin setiap semester dan menambah cakupan penerima manfaat.',
    ],
  },
  {
    slug: 'persiapan-hut-ri-81-pemuda-rw-01',
    judul: 'Persiapan HUT RI ke-81, Pemuda RW 01 Mulai Rapat Kepanitiaan',
    kategori: 'Kegiatan',
    tanggal: '20 Juli 2026',
    tanggalIso: '2026-07-20',
    penulis: 'Sekretariat',
    gambar: '/images/rapat.png',
    excerpt:
      'Rapat perdana kepanitiaan membahas susunan acara, anggaran, dan pembagian tugas untuk rangkaian peringatan HUT RI ke-81.',
    isi: [
      'MEKARJAYA — Pengurus dan anggota Karang Taruna RW 01 menggelar rapat perdana kepanitiaan peringatan HUT Kemerdekaan RI ke-81 di sekretariat, Sabtu (18/7). Rapat dihadiri perwakilan seluruh RT serta pengurus RW.',
      'Agenda rapat meliputi penyusunan rangkaian acara, estimasi anggaran, serta pembagian tugas kepanitiaan. Rangkaian kegiatan direncanakan berlangsung sejak awal Agustus hingga puncak acara pada 17 Agustus 2026.',
      'Beberapa agenda yang disepakati antara lain turnamen futsal antar RT, lomba anak-anak, malam tirakatan, dan karnaval lingkungan.',
      'Warga yang ingin berpartisipasi sebagai donatur atau relawan dapat mendaftar melalui koordinator RT masing-masing.',
    ],
  },
  {
    slug: 'pelatihan-desain-untuk-pemuda-rw-01',
    judul: 'Pelatihan Desain untuk Pemuda RW 01 Diikuti 25 Peserta',
    kategori: 'Pendidikan',
    tanggal: '30 Juni 2026',
    tanggalIso: '2026-06-30',
    penulis: 'Tim Publikasi',
    gambar: '/images/pelatihan.png',
    excerpt:
      'Kelas desain grafis dasar membekali remaja RW 01 dengan keterampilan digital yang bisa dimanfaatkan untuk peluang usaha.',
    isi: [
      'MEKARJAYA — Sebanyak 25 remaja mengikuti pelatihan desain grafis dasar yang diselenggarakan Karang Taruna RW 01 di sekretariat, Minggu (29/6). Pelatihan dibimbing oleh pemuda RW 01 yang berprofesi sebagai desainer grafis.',
      'Materi yang diberikan meliputi dasar tipografi, komposisi warna, serta praktik langsung membuat poster kegiatan menggunakan aplikasi gratis yang dapat diakses dari ponsel.',
      '"Kami ingin pemuda RW 01 punya keterampilan yang bisa dipakai, baik untuk organisasi maupun untuk mencari penghasilan tambahan," kata koordinator Bidang Pendidikan.',
      'Peserta dengan hasil karya terbaik langsung dilibatkan dalam tim publikasi Karang Taruna RW 01.',
    ],
  },
  {
    slug: 'penghijauan-gang-rw-01',
    judul: 'Program Penghijauan Gang RW 01 Sasar 100 Titik Tanaman',
    kategori: 'Lingkungan',
    tanggal: '15 Juni 2026',
    tanggalIso: '2026-06-15',
    penulis: 'Bidang Lingkungan',
    gambar: '/images/penghijauan.png',
    excerpt:
      'Pemuda RW 01 menata tanaman di sepanjang gang lingkungan untuk menciptakan suasana yang lebih hijau dan sejuk.',
    isi: [
      'MEKARJAYA — Bidang Lingkungan Karang Taruna RW 01 memulai program penghijauan gang dengan target 100 titik tanaman di sepanjang jalan lingkungan.',
      'Program ini melibatkan warga untuk merawat tanaman di depan rumah masing-masing, sementara Karang Taruna menyediakan bibit, polybag, dan media tanam.',
      'Selain memperindah lingkungan, program ini diharapkan menurunkan suhu udara di gang-gang yang padat serta menjadi contoh bagi RW lain di Kelurahan Mekarjaya.',
    ],
  },
  {
    slug: 'bazar-umkm-warga-rw-01',
    judul: 'Bazar UMKM Warga Ramaikan Akhir Pekan di RW 01',
    kategori: 'Ekonomi',
    tanggal: '25 Mei 2026',
    tanggalIso: '2026-05-25',
    penulis: 'Bidang Ekonomi',
    gambar: '/images/bazar.png',
    excerpt:
      'Belasan pelaku usaha rumahan membuka gerai dalam bazar yang digagas Karang Taruna untuk mendorong ekonomi warga.',
    isi: [
      'MEKARJAYA — Bazar UMKM warga RW 01 berlangsung ramai pada Sabtu (23/5). Belasan pelaku usaha rumahan membuka gerai makanan, minuman, dan kerajinan di area balai warga.',
      'Karang Taruna RW 01 berperan sebagai penyelenggara, mulai dari penyediaan tenda, publikasi, hingga pengaturan lokasi gerai. Tidak ada biaya sewa bagi pelaku usaha warga RW 01.',
      'Kegiatan ini direncanakan menjadi agenda bulanan agar produk warga lebih dikenal dan perputaran ekonomi lingkungan meningkat.',
    ],
  },
  {
    slug: 'senam-sehat-rutin-warga',
    judul: 'Senam Sehat Rutin Jadi Ruang Temu Warga RW 01',
    kategori: 'Olahraga',
    tanggal: '9 Juni 2026',
    tanggalIso: '2026-06-09',
    penulis: 'Bidang Olahraga',
    gambar: '/images/senam.png',
    excerpt:
      'Digelar setiap dua pekan, senam sehat menjadi kegiatan favorit warga lintas usia di lingkungan RW 01.',
    isi: [
      'MEKARJAYA — Senam sehat yang digelar Karang Taruna RW 01 setiap dua pekan terus mendapat sambutan positif dari warga. Kegiatan pada Minggu (8/6) diikuti sekitar 60 warga dari berbagai kelompok usia.',
      'Selain menjaga kebugaran, kegiatan ini menjadi ruang temu warga yang sebelumnya jarang berinteraksi karena kesibukan masing-masing.',
      'Karang Taruna menyediakan sound system, air minum, dan pembagian buah bagi peserta yang hadir.',
    ],
  },
]

export type Pengumuman = {
  judul: string
  tanggal: string
  badge: 'PENTING' | 'INFORMASI' | 'INFO'
  isi: string
}

export const pengumuman: Pengumuman[] = [
  {
    judul: 'Pendaftaran Turnamen Futsal Dibuka',
    tanggal: '25 Juli 2026',
    badge: 'PENTING',
    isi: 'Pendaftaran tim futsal antar RT dibuka hingga 5 Agustus 2026 melalui koordinator RT masing-masing.',
  },
  {
    judul: 'Rapat Pengurus Karang Taruna RW 01',
    tanggal: '22 Juli 2026',
    badge: 'INFORMASI',
    isi: 'Rapat pengurus dan koordinator bidang digelar Sabtu, 1 Agustus 2026 pukul 19.30 WIB di sekretariat.',
  },
  {
    judul: 'Informasi Kegiatan Bulanan',
    tanggal: '18 Juli 2026',
    badge: 'INFO',
    isi: 'Jadwal kerja bakti dan senam sehat bulan Agustus dapat dilihat di papan informasi sekretariat RW 01.',
  },
]

export type ProgramKategori = {
  slug: string
  nama: string
  icon: 'sosial' | 'olahraga' | 'pendidikan' | 'ekonomi' | 'lingkungan' | 'kepemudaan'
  jumlah: number
  deskripsi: string
  program: string[]
}

export const programKategori: ProgramKategori[] = [
  {
    slug: 'sosial',
    nama: 'Sosial',
    icon: 'sosial',
    jumlah: 3,
    deskripsi:
      'Program kepedulian untuk warga yang membutuhkan, mulai dari santunan hingga bantuan kesehatan.',
    program: [
      'Santunan anak yatim setiap semester',
      'Bantuan warga sakit dan lansia',
      'Donor darah bersama PMI',
    ],
  },
  {
    slug: 'olahraga',
    nama: 'Olahraga',
    icon: 'olahraga',
    jumlah: 3,
    deskripsi:
      'Kegiatan olahraga rutin dan kompetitif untuk menjaga kebugaran serta kekeluargaan warga.',
    program: [
      'Turnamen futsal antar RT',
      'Senam sehat dua pekan sekali',
      'Latihan badminton pemuda',
    ],
  },
  {
    slug: 'pendidikan',
    nama: 'Pendidikan',
    icon: 'pendidikan',
    jumlah: 2,
    deskripsi:
      'Peningkatan kapasitas remaja melalui pelatihan keterampilan dan bimbingan belajar.',
    program: [
      'Pelatihan desain grafis dan literasi digital',
      'Bimbingan belajar gratis anak SD–SMP',
    ],
  },
  {
    slug: 'ekonomi',
    nama: 'Ekonomi',
    icon: 'ekonomi',
    jumlah: 2,
    deskripsi:
      'Dukungan bagi usaha rumahan warga agar lebih dikenal dan berkembang.',
    program: ['Bazar UMKM warga bulanan', 'Pendampingan promosi digital UMKM'],
  },
  {
    slug: 'lingkungan',
    nama: 'Lingkungan',
    icon: 'lingkungan',
    jumlah: 2,
    deskripsi:
      'Menjaga kebersihan dan kenyamanan lingkungan RW 01 bersama seluruh warga.',
    program: ['Kerja bakti bulanan', 'Penghijauan gang dan bank sampah'],
  },
  {
    slug: 'kepemudaan',
    nama: 'Kepemudaan',
    icon: 'kepemudaan',
    jumlah: 2,
    deskripsi:
      'Wadah kreativitas, kekompakan, dan pengembangan karakter pemuda RW 01.',
    program: [
      'Peringatan HUT RI dan karnaval lingkungan',
      'Malam kreativitas pemuda RW 01',
    ],
  },
]

export type Pengurus = {
  nama: string
  jabatan: string
  foto?: string
  inisial: string
}

export const pengurusInti: Pengurus[] = [
  {
    nama: 'Rizky Ananda Putra',
    jabatan: 'Ketua',
    foto: '/images/pengurus-1.png',
    inisial: 'RA',
  },
  {
    nama: 'Bayu Prakoso',
    jabatan: 'Wakil Ketua',
    foto: '/images/pengurus-2.png',
    inisial: 'BP',
  },
  {
    nama: 'Nadia Salsabila',
    jabatan: 'Sekretaris',
    foto: '/images/pengurus-3.png',
    inisial: 'NS',
  },
  {
    nama: 'Dita Maharani',
    jabatan: 'Bendahara',
    foto: '/images/pengurus-4.png',
    inisial: 'DM',
  },
]

export const pengurusBidang: Pengurus[] = [
  { nama: 'Fajar Ramadhan', jabatan: 'Koordinator Bidang Sosial', inisial: 'FR' },
  { nama: 'Aditya Nugraha', jabatan: 'Koordinator Bidang Olahraga', inisial: 'AN' },
  { nama: 'Salma Kurnia', jabatan: 'Koordinator Bidang Pendidikan', inisial: 'SK' },
  { nama: 'Hendra Wijaya', jabatan: 'Koordinator Bidang Ekonomi', inisial: 'HW' },
  { nama: 'Yoga Pratama', jabatan: 'Koordinator Bidang Lingkungan', inisial: 'YP' },
  { nama: 'Alya Rahmadani', jabatan: 'Koordinator Bidang Kepemudaan', inisial: 'AR' },
  { nama: 'Iqbal Maulana', jabatan: 'Humas & Publikasi', inisial: 'IM' },
  { nama: 'Tiara Anggraeni', jabatan: 'Dokumentasi', inisial: 'TA' },
]

export type Galeri = {
  src: string
  judul: string
  kategori: string
}

export const galeri: Galeri[] = [
  { src: '/images/futsal.png', judul: 'Turnamen Futsal Antar RT', kategori: 'Olahraga' },
  { src: '/images/bakti-sosial.png', judul: 'Bakti Sosial Santunan', kategori: 'Bakti Sosial' },
  { src: '/images/kerja-bakti.png', judul: 'Kerja Bakti Lingkungan', kategori: 'Kerja Bakti' },
  { src: '/images/rapat.png', judul: 'Rapat Pengurus', kategori: 'Rapat' },
  { src: '/images/pelatihan.png', judul: 'Pelatihan Desain Grafis', kategori: 'Kegiatan Pemuda' },
  { src: '/images/lomba-anak.png', judul: 'Lomba Anak HUT RI', kategori: 'Kegiatan Masyarakat' },
  { src: '/images/senam.png', judul: 'Senam Sehat Warga', kategori: 'Olahraga' },
  { src: '/images/bazar.png', judul: 'Bazar UMKM Warga', kategori: 'Kegiatan Masyarakat' },
  { src: '/images/penghijauan.png', judul: 'Penghijauan Gang RW 01', kategori: 'Kerja Bakti' },
  { src: '/images/tentang.png', judul: 'Persiapan Acara Lingkungan', kategori: 'Kegiatan Pemuda' },
  { src: '/images/hero-pemuda.png', judul: 'Kebersamaan Pemuda RW 01', kategori: 'Kegiatan Pemuda' },
]

export const galeriKategori = [
  'Semua',
  'Olahraga',
  'Bakti Sosial',
  'Kerja Bakti',
  'Rapat',
  'Kegiatan Pemuda',
  'Kegiatan Masyarakat',
]

export const statistik = [
  { label: 'Anggota Aktif', value: '85+', icon: 'users' as const },
  { label: 'Kegiatan', value: '24+', icon: 'calendar' as const },
  { label: 'Program Kerja', value: '12+', icon: 'clipboard' as const },
  { label: 'Tahun Aktif', value: '2026', icon: 'sparkles' as const },
]

export const nilaiOrganisasi = [
  {
    judul: 'Kepedulian Sosial',
    deskripsi: 'Hadir untuk warga yang membutuhkan melalui santunan dan bantuan sosial.',
    icon: 'sosial' as const,
  },
  {
    judul: 'Kreativitas Pemuda',
    deskripsi: 'Menyalurkan ide dan karya pemuda menjadi kegiatan yang bermanfaat.',
    icon: 'kepemudaan' as const,
  },
  {
    judul: 'Olahraga',
    deskripsi: 'Menjaga kebugaran dan sportivitas melalui kegiatan olahraga rutin.',
    icon: 'olahraga' as const,
  },
  {
    judul: 'Pendidikan',
    deskripsi: 'Pelatihan keterampilan dan bimbingan belajar untuk generasi muda.',
    icon: 'pendidikan' as const,
  },
  {
    judul: 'Lingkungan',
    deskripsi: 'Kerja bakti dan penghijauan agar lingkungan RW 01 nyaman dan sehat.',
    icon: 'lingkungan' as const,
  },
  {
    judul: 'Kegiatan Masyarakat',
    deskripsi: 'Mendukung setiap agenda warga RW 01 dari perencanaan hingga pelaksanaan.',
    icon: 'ekonomi' as const,
  },
]
