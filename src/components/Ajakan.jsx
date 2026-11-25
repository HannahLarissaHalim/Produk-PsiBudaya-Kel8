import { useState } from 'react'
import Reveal from './Reveal'
import { langkah } from '../data/konten'

function buatPesan() {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return `Yah, aku habis lihat ini dan kepikiran Ayah. Kadang aku bilang "nggak apa-apa" padahal lagi capek. Bukan karena Ayah nggak penting, tapi aku bingung mulainya dari mana. Kalau Ayah ada waktu, coba lihat ya: ${url}`
}

export default function Ajakan() {
  const [pilih, setPilih] = useState(0)
  const [tersalin, setTersalin] = useState(false)
  const pesan = buatPesan()

  const salin = async () => {
    try {
      await navigator.clipboard.writeText(pesan)
      setTersalin(true)
      setTimeout(() => setTersalin(false), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {/* untuk ayah */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Untuk Ayah
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight text-sage">
            Minggu ini, satu langkah kecil saja
          </h2>

          <div className="mt-6 space-y-3">
            {langkah.map((l, i) => (
              <button
                key={l.judul}
                type="button"
                onClick={() => setPilih(i)}
                aria-pressed={pilih === i}
                className={`block w-full rounded-2xl border-2 border-sage px-5 py-3 text-left font-display font-bold transition ${
                  pilih === i
                    ? 'bg-sage text-cream'
                    : 'bg-white text-sage shadow-[3px_3px_0_#d7dd83] hover:bg-lime/60'
                }`}
              >
                {l.judul}
              </button>
            ))}
          </div>

          <div
            key={pilih}
            className="mt-5 rotate-1 rounded-2xl border-2 border-sage bg-lime p-5 leading-relaxed shadow-[5px_5px_0_#667e69]"
            style={{ animation: 'pop .35s ease-out' }}
            aria-live="polite"
          >
            {langkah[pilih].isi}
          </div>
        </Reveal>

        {/* untuk mahasiswa */}
        <Reveal delay={150}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Untuk kamu yang membaca ini
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight text-sage">
            Susah memulai obrolan? Kirim ini ke Ayah
          </h2>

          <div className="relative mt-6 -rotate-1 rounded-[1.75rem] border-2 border-sage bg-white p-6 shadow-[6px_6px_0_#adc681]">
            <span className="tape absolute -top-3 right-8" aria-hidden="true" />
            <p className="leading-relaxed">{pesan}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(pesan)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-sage bg-sage px-6 py-3 font-display font-bold text-cream shadow-[4px_4px_0_#4b565a] transition hover:-translate-y-0.5"
            >
              Kirim lewat WhatsApp
            </a>
            <button
              type="button"
              onClick={salin}
              className="rounded-full border-2 border-sage bg-white px-6 py-3 font-display font-bold text-sage shadow-[4px_4px_0_#d7dd83] transition hover:-translate-y-0.5"
            >
              {tersalin ? 'Tersalin!' : 'Salin pesan'}
            </button>
          </div>
          <p className="mt-3 text-xs text-charcoal/70">
            Ubah kata-katanya sesuai caramu bicara dengan Ayah. Tautan akan terisi
            otomatis setelah situs ini diunggah.
          </p>
        </Reveal>
      </div>
    </section>
  )
}