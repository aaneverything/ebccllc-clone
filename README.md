# ebccllc

Repositori ini merupakan website landing page untuk **ebccllc** yang dibuat menggunakan React.js dan TypeScript. Website ini menampilkan layanan call center dan telemarketing yang ditawarkan oleh ebccllc.

## 📋 Deskripsi Project

ebccllc adalah landing page modern yang mencakup:

- **Landing Page** dengan animasi scroll dan background dinamis
- **Halaman Layanan** dengan carousel interaktif untuk berbagai service
- **About Us Section** dengan accordion detail layanan
- **PCI Compliance Section** menampilkan sertifikasi keamanan
- **Testimonials** dari pelanggan dengan auto-sliding carousel
- **Partner Logos** dengan marquee auto-scrolling
- **Contact Form** untuk menghubungi tim ebccllc
- **Responsive Design** yang optimal di semua perangkat

## 🛠️ Teknologi yang Digunakan

- **React.js** - Library frontend utama
- **TypeScript** - Type safety dan better development experience
- **Tailwind CSS** - Styling dan responsive design
- **AOS (Animate On Scroll)** - Animasi scroll yang smooth
- **OGL** - Background animation (Threads effect)
- **Lucide React** - Icon library
- **Vite** - Build tool dan development server

## 🚀 Cara Instalasi

### Prasyarat

Pastikan Anda sudah menginstall:

- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn**
- **Git**

### Langkah Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/your-username/kento.git
   cd kento
   ```

2. **Install Dependencies**

   Menggunakan npm:

   ```bash
   npm install
   ```

   Atau menggunakan yarn:

   ```bash
   yarn install
   ```

3. **Install Library Tambahan** (jika belum terinstall)

   ```bash
   npm install aos lucide-react ogl
   npm install @types/aos
   ```

4. **Jalankan Development Server**

   Menggunakan npm:

   ```bash
   npm run dev
   ```

   Atau menggunakan yarn:

   ```bash
   yarn dev
   ```

5. **Buka Browser**

   Buka browser dan akses: `http://localhost:5173`

## 📁 Struktur Project

```
src/
├── components/
│   ├── bg.tsx                    # Background animation (Threads)
│   └── layout/
│       ├── Navbar.tsx            # Navigation header (sticky)
│       ├── Hero.tsx              # Hero section component
│       ├── SalesGoals.tsx        # Sales goals section
│       ├── AboutUs.tsx           # About us dengan accordion
│       ├── OurValues.tsx         # Our values carousel
│       ├── PCICompliance.tsx     # PCI compliance section
│       ├── Kerjasama.tsx         # Partner logos marquee
│       ├── Services.tsx          # Services carousel
│       ├── ThreeSteps.tsx        # Three steps to success
│       ├── Testimonials.tsx      # Testimonials carousel
│       ├── ContactForm.tsx       # Contact form section
│       └── Footer.tsx            # Footer component
├── assets/
│   ├── download.svg             # Logo utama
│   ├── logo/                    # Logo partner & sertifikasi
│   └── reviewers/               # Foto reviewer/testimonial
├── types/
│   └── aos.d.ts                 # Type declaration untuk AOS
├── App.tsx                      # Main app component
├── App.css                      # App-level styles
├── index.css                    # Global styles & Tailwind
└── main.tsx                     # Entry point
```

## ✨ Fitur Utama

### 🎯 Landing Page

- Hero section dengan background Threads animation
- Sales goals section dengan card layout
- About Us dengan interactive accordion (B2B, B2C, TCPA, QA)
- PCI Compliance certification showcase
- Three steps to success guide
- Contact form full-width

### 📱 Responsive Design

- Mobile-first approach
- Hamburger menu untuk mobile
- Adaptive grid layouts (1/2/3 kolom)
- Responsive carousel yang menyesuaikan jumlah card per screen

### 🎨 Animasi & Interaksi

- Smooth scroll animations menggunakan AOS
- Auto-sliding carousels (OurValues, Services, Testimonials)
- Marquee auto-scrolling untuk partner logos
- Hover effects pada cards dan buttons
- Accordion toggle pada About Us section

### 🎠 Carousel System

- **Our Values** - Auto-slide dengan manual navigation
- **Services** - Responsive (1 card mobile, 2 tablet, 3 desktop)
- **Testimonials** - Auto-slide dengan reviewer avatar
- **Partner Logos** - Infinite marquee scrolling

### 🚀 Performance

- Optimized bundle dengan Vite
- Efficient re-rendering dengan React best practices
- CSS animations untuk smooth transitions

## 🔧 Scripts yang Tersedia

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build hasil
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

Project ini dapat di-deploy menggunakan **Vercel**:

1. Push repository ke GitHub
2. Connect repository di [Vercel](https://ebccllc-clone.vercel.app/)
3. Vercel akan otomatis build dan deploy

## 📞 Kontak & Support

Jika Anda memiliki pertanyaan atau membutuhkan bantuan:

- **Website**: [ebccllc.com](https://ebccllc.com/)
- **Telepon**: +971 5434 76408

## 📄 Lisensi

Project ini dibuat untuk tujuan pembelajaran dan demonstrasi. Semua hak cipta konten dan desain tetap milik ebccllc.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambah fitur baru'`)
4. Push ke branch (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## 📝 Changelog

### Version 1.0.0

- ✅ Implementasi landing page lengkap
- ✅ Responsive design untuk semua perangkat
- ✅ Integrasi AOS animations
- ✅ Carousel system (OurValues, Services, Testimonials)
- ✅ Partner logos marquee auto-scrolling
- ✅ PCI Compliance section
- ✅ Contact form functionality
- ✅ Sticky navbar dengan hamburger menu
- ✅ Background Threads animation
- ✅ Deploy ke Vercel

---

**Dibuat dengan ❤️ oleh Tim Developer**

_Powered by React.js + TypeScript + Tailwind CSS_
