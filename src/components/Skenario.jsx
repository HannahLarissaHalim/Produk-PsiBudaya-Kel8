import { useState } from 'react'
import Reveal from './Reveal'
import { skenario } from '../data/konten'

export default function Skenario() {
  const [aktif, setAktif] = useState(0)
  const s = skenario[aktif]

  return (
    <section className="bg-lime/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Untuk Ayah
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight text-sage md:text-5xl">
            Coba begini, Yah
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed">
            Tidak perlu jadi ayah yang sempurna. Pilih situasi, lalu lihat satu
            kalimat yang bisa dicoba.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            {skenario.map((k, i) => (
              <button
                key={k.tab}
                type="button"
                onClick={() => setAktif(i)}
                aria-pressed={aktif === i}
                className={`rounded-full border-2 border-sage px-5 py-2 font-display font-bold transition ${
                  aktif === i
                    ? 'bg-sage text-cream'
                    : 'bg-white text-sage shadow-[3px_3px_0_#adc681] hover:bg-lime'
                } ${i % 2 ? 'rotate-1' : '-rotate-1'}`}
              >
                {k.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={aktif} style={{ animation: 'pop .35s ease-out' }} aria-live="polite">
          <p className="mt-8 text-lg font-medium text-sage">{s.situasi}</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="-rotate-1 rounded-[1.75rem] border-2 border-sage/60 bg-white/70 p-6">
              <span className="rounded-full border-2 border-sage/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sage/80">
                Yang sering terjadi
              </span>
              <p className="mt-4 font-display text-2xl font-bold leading-snug text-charcoal/80">
                {s.biasa}
              </p>
            </div>

            <div className="rotate-1 rounded-[1.75rem] border-2 border-sage bg-white p-6 shadow-[6px_6px_0_#667e69]">
              <span className="rounded-full bg-sage px-3 py-1 text-xs font-bold uppercase tracking-widest text-cream">
                Coba begini
              </span>
              <p className="mt-4 font-display text-2xl font-bold leading-snug text-sage">
                {s.coba}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl rounded-2xl border-2 border-dashed border-sage bg-cream/70 p-4 leading-relaxed">
            <b className="font-display text-sage">Kenapa membantu: </b>
            {s.alasan}
          </p>
        </div>

        <Reveal>
          <p className="mt-10 text-xs text-charcoal/70">
            Saran ini disusun dari pembahasan teori dalam laporan kami, bukan hasil
            uji intervensi.
          </p>
        </Reveal>
      </div>
    </section>
  )
}