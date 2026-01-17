interface InvitationSlideProps {
  title: string
  subtitle: string
}

export function InvitationSlide({ title, subtitle }: InvitationSlideProps) {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative">
      <div className="max-w-3xl w-full text-center space-y-6 text-white">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-8 mb-8">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-balance">{title}</h2>
        <p className="text-xl md:text-2xl text-white/90 text-pretty">{subtitle}</p>
      </div>

      <div className="absolute bottom-6 right-6">
        <img src="/logo.png" alt="Logo Universidad" className="h-12 w-auto max-w-[120px] object-contain opacity-80" />
      </div>
    </div>
  )
}
