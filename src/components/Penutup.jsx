import Reveal from './Reveal'
import { referensi, tim } from '../data/konten'

export default function Penutup() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-cream">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold text-lime">
            Sebelum pergi
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/90">
            Situs ini bukan alat diagnosis dan tidak menilai kondisi psikologis
            siapa pun. Kalau perasaan terasa terlalu berat, bicaralah dengan
            psikolog atau konselor.
          </p>

          <details className="mt-8 rounded-2xl border-2 border-lime/60 p-5">
            <summary className="cursor-pointer font-display font-bold text-lime">
              Referensi
            </summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cream/80">
              {referensi.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </details>

          <p className="mt-10 text-sm text-cream/80">
            <b className="text-lime">Kelompok 8</b> · {tim.join(', ')}
          </p>
          <p className="mt-1 text-sm text-cream/60">
            Mata kuliah Psikologi Budaya, Fakultas Psikologi, Universitas
            Tarumanagara, 2026.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}