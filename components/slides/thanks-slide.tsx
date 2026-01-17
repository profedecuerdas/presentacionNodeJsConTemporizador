interface ThanksSlideProps {
  title: string
  subtitle: string
}

export function ThanksSlide({ title, subtitle }: ThanksSlideProps) {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 relative">
      <div className="max-w-3xl w-full text-center space-y-8 text-white">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-8 mb-8">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-balance">{title}</h2>
        <p className="text-xl md:text-2xl text-white/90 text-pretty">{subtitle}</p>

        <div className="pt-8 text-lg text-white/80">
          <p>Este es un Recurso Educativo Abierto</p>
          <p className="text-sm mt-2">Libre para usar, adaptar y compartir</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <img src="/logo.png" alt="Logo Universidad" className="h-12 w-auto max-w-[120px] object-contain opacity-80" />
      </div>
    </div>
  )
}
