interface CoverSlideProps {
  data: {
    reportTitle: string
    university: string
    course: string
    courseCode: string
    professor: string
    date: string
    presenters: Array<{ name: string }>
  }
}

export function CoverSlide({ data }: CoverSlideProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-700 text-white relative">
      <div className="max-w-5xl w-full space-y-6 text-center">
        {/* LOGO PRINCIPAL */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-28 w-auto object-contain drop-shadow-xl" />
        </div>

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-balance leading-tight mb-2">
          {data.reportTitle}
        </h1>

        {/* PRESENTADORES - Espaciado reducido de mb-10 a mb-6 */}
        <div className="space-y-3 text-xl md:text-2xl text-white/90 mb-6">
          <p className="font-semibold text-base uppercase tracking-[0.2em] text-white/70">Elaborado por:</p>
          <div className="space-y-1">
            {data.presenters.map((presenter, index) => (
              <p key={index} className="text-white/95 font-medium">
                {presenter.name}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/20">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-wider text-white/60">Asignatura</p>
            <p className="font-bold text-lg md:text-xl">{data.course}</p>
            <p className="text-base opacity-80">{data.courseCode}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-wider text-white/60">Docente</p>
            <p className="font-bold text-lg md:text-xl">{data.professor}</p>
          </div>
        </div>

        {/* SECCIÓN FINAL - Reducido pt-10 a pt-4 para subir el texto */}
        <div className="pt-4">
            <p className="text-white/80 text-lg italic">{data.date}</p>
            <p className="font-bold text-2xl mt-1 tracking-tight">{data.university}</p>
        </div>
      </div>

      {/* Mini logo de esquina opcional */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <img src="/logo.png" alt="Mini Logo" className="h-12 w-auto opacity-30 grayscale brightness-200" />
      </div>
    </div>
  )
}
