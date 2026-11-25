import { useState } from 'react'
import Reveal from './Reveal'
import { kamus } from '../data/konten'

export default function Kamus() {
  const [buka, setBuka] = useState([])
  const toggle = (i) =>
    setBuka((b) => (b.includes(i) ? b.filter((x) => x !== i) : [...b, i]))

  return (
    <section id="kamus" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Kamus kecil
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight text-sage md:text-5xl">
            Bahasa anak yang sering dipendam
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed">
            Di keluarga yang menjunjung harmoni dan hormat pada orang tua, anak
            sering memilih diam daripada membuat suasana canggung. Ketuk tiap
            kalimat untuk melihat kemungkinan maksudnya.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {kamus.map((k, i) => {
            const open = buka.includes(i)
            const kanan = i % 2 === 1
            return (
              <Reveal key={k.kata} delay={i * 100}>
                <div className={`flex flex-col ${kanan ? 'items-end' : 'items-start'}`}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    className={`rounded-[1.5rem] border-2 border-sage bg-white px-6 py-4 text-left font-display text-2xl font-bold text-sage shadow-[5px_5px_0_#d7dd83] transition hover:-translate-y-0.5 ${
                      kanan ? 'rotate-1' : '-rotate-1'
                    }`}
                  >
                    {k.kata}
                    <span className="ml-3 text-sm font-normal text-sage/70">
                      {open ? 'tutup' : 'artinya apa?'}
                    </span>
                  </button>

                  {open && (
                    <div
                      className="mt-3 max-w-md rounded-2xl border-2 border-dashed border-sage bg-lime/60 p-4 leading-relaxed"
                      style={{ animation: 'pop .35s ease-out' }}
                    >
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-sage">
                        Mungkin maksudnya
                      </span>
                      <p className="mt-1">{k.arti}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-12 text-sm text-charcoal/70">
            Ini ilustrasi untuk membantu membayangkan, bukan hasil survei kami.
            Setiap anak berbeda.
          </p>
        </Reveal>
      </div>
    </section>
  )
}