interface ReflectionsSlideProps {
  title: string
  item: string
  index: number
}

export function ReflectionsSlide({ title, item, index }: ReflectionsSlideProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-teal-600 to-emerald-700 text-white relative">
      <div className="max-w-4xl w-full space-y-10">
        <h2 className="text-5xl font-bold text-center mb-12 border-b border-white/20 pb-6">
          {title}
        </h2>
        
        <div className="flex justify-center">
          <div className="flex gap-6 items-start bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl max-w-3xl">
            <span className="flex-shrink-0 w-12 h-12 bg-white text-teal-700 rounded-full flex items-center justify-center font-bold text-2xl">
              {index + 1}
            </span>
            <p className="text-3xl md:text-4xl leading-tight font-medium">
              {item}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8">
        <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain opacity-60" />
      </div>
    </div>
  )
}
