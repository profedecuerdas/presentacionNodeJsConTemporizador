interface IntroductionSlideProps {
  title: string
  content: string
}

export function IntroductionSlide({ title, content }: IntroductionSlideProps) {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16 relative bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">{title}</h2>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-pretty">{content}</p>
      </div>

      <div className="absolute bottom-6 right-6">
        <img src="/logo.png" alt="Logo Universidad" className="h-12 w-auto max-w-[120px] object-contain opacity-70" />
      </div>
    </div>
  )
}
