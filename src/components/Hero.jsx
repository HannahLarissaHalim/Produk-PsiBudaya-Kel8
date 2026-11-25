import Bunny from './Bunny'

const Sparkle = ({ className = '', delay = '0s' }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`twinkle absolute h-6 w-6 text-sage ${className}`}
    style={{ animationDelay: delay }}
  >
    <path
      d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z"
      fill="currentColor"
    />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-lime/60">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[38%] w-full"
      >
        <path d="M0 140 Q360 20 720 120 T1440 90 V320 H0Z" fill="#d7dd83" />
        <path d="M0 220 Q400 120 800 210 T1440 180 V320 H0Z" fill="#adc681" />
      </svg>

      <Sparkle className="left-[8%] top-[14%]" />
      <Sparkle className="right-[12%] top-[10%] h-8 w-8" delay="1s" />
      <Sparkle className="right-[30%] bottom-[30%] h-5 w-5" delay="1.8s" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.25fr_1fr]">
        <div>
          <span className="inline-block rounded-full border-2 border-sage bg-lime px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            Surat terbuka untuk para ayah
          </span>

          <div className="relative mt-6 -rotate-1 rounded-[2rem] border-2 border-sage bg-cream/95 p-7 shadow-[8px_8px_0_#667e69] md:p-10">
            <span className="tape absolute -top-3 left-10" aria-hidden="true" />
            <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-sage md:text-7xl">
              “Nggak apa-apa,{' '}
              <span className="inline-block rotate-1 bg-lime-deep px-2">Yah.</span>”
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg">
              Kalimat yang sering kami ucapkan, padahal sebenarnya lagi tidak
              baik-baik saja. Kenapa begitu, dan apa yang bisa Ayah lakukan?
            </p>
          </div>

          <a
            href="#kamus"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-sage bg-sage px-6 py-3 font-display font-bold text-cream shadow-[4px_4px_0_#4b565a] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#4b565a]"
          >
            Baca suratnya <span aria-hidden="true">↓</span>
          </a>

          <p className="mt-8 text-sm text-charcoal/80">
            Berdasarkan penelitian terhadap 60 mahasiswa · Psikologi Budaya,
            Universitas Tarumanagara
          </p>
        </div>

        <div className="relative flex justify-center pt-14">
          <div className="absolute left-2 top-0 -rotate-[4deg] rounded-2xl border-2 border-sage bg-white px-4 py-2 font-display font-bold text-sage shadow-[4px_4px_0_#adc681] md:-left-4">
            Nggak apa-apa kok, Yah.
            <span
              aria-hidden="true"
              className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b-2 border-r-2 border-sage bg-white"
            />
          </div>
          <div className="absolute inset-x-8 bottom-2 h-6 rounded-full bg-sage/25 blur-md" />
          <Bunny className="bob relative w-56 md:w-80" />
        </div>
      </div>
    </section>
  )
}