import { useState } from 'react'
import Reveal from './Reveal'
import { kemungkinan } from '../data/konten'

const angka = [
  { nilai: '60', label: 'mahasiswa aktif mengisi kuesioner kami', miring: '-rotate-2' },
  {
    nilai: '0,11',
    label: 'kekuatan hubungan ayah dan kemampuan mengelola emosi (skala 0 sampai 1): sangat lemah',
    miring: 'rotate-1',
  },
  {
    nilai: '0,8%',
    label: 'variasi kemampuan mengelola emosi yang bisa dijelaskan skor keterlibatan ayah',
    miring: '-rotate-1',
  },
]

export default function Temuan() {
  const [buka, setBuka] = useState(false)

  return (
    <section className="bg-sage px-6 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            Apa kata penelitian kami
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight text-lime md:text-5xl">
            Kami kira jawabannya jelas. Ternyata tidak sesederhana itu.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/90">
            Kami menduga mahasiswa yang ayahnya lebih terlibat akan lebih pandai
            mengelola emosi. Pada kelompok ini, hubungan itu tidak terbukti
            secara statistik.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {angka.map((a, i) => (
            <Reveal key={a.nilai} delay={i * 120}>
              <div
                className={`${a.miring} rounded-[1.75rem] border-2 border-lime bg-cream p-7 text-charcoal shadow-[6px_6px_0_#adc681]`}
              >
                <p className="font-display text-6xl font-extrabold leading-none text-sage">
                  {a.nilai}
                </p>
                <p className="mt-3 leading-relaxed">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <button
            type="button"
            onClick={() => setBuka((b) => !b)}
            aria-expanded={buka}
            className="mt-12 rounded-full border-2 border-lime bg-lime px-6 py-3 font-display text-lg font-bold text-sage shadow-[4px_4px_0_#adc681] transition hover:-translate-y-0.5"
          >
            Terus, ayah nggak penting dong? {buka ? '↑' : '↓'}
          </button>
        </Reveal>

        {buka && (
          <div style={{ animation: 'pop .4s ease-out' }}>
            <p className="mt-8 max-w-2xl font-display text-2xl font-bold text-lime">
              Bukan itu kesimpulannya.
            </p>
            <p className="mt-2 max-w-2xl leading-relaxed text-cream/90">
              Hasil ini hanya berarti satu angka keterlibatan ayah tidak terbukti
              berkaitan dengan satu angka kemampuan regulasi emosi. Beberapa
              kemungkinan penjelasannya:
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {kemungkinan.map((k) => (
                <div
                  key={k.judul}
                  className="rounded-2xl border-2 border-lime bg-charcoal/40 p-6"
                >
                  <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest text-sage">
                    Kemungkinan, belum diuji
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-lime">
                    {k.judul}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/90">
                    {k.isi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-10 max-w-2xl text-xs text-cream/60">
          Sampel dipilih lewat teknik convenience sampling sehingga hasilnya tidak
          bisa digeneralisasi ke seluruh mahasiswa.
        </p>
      </div>
    </section>
  )
}