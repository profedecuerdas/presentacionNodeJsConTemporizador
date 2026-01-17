# Juego de Presentación Educativa - REA

Recurso Educativo Abierto para presentaciones académicas interactivas sobre Recursos Educativos Abiertos (REA).

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18.x o superior
- npm, pnpm o yarn

### Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 🔧 Solución de Problemas de Estilos

### Problema: Los colores y fondos no se muestran

**Solución 1: Limpiar caché de Next.js**
```bash
rm -rf .next
npm run dev
```

**Solución 2: Reinstalar dependencias**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Solución 3: Verificar que PostCSS esté configurado**

Asegúrate de que existe el archivo `postcss.config.mjs`:
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
export default config
```

### Problema: El logo se ve desproporcionado

Los logos ya están configurados con restricciones de tamaño:
- **Logo superior (portada)**: `h-20 w-auto max-w-xs` (máx 320px)
- **Logo inferior (esquina)**: `h-12 w-auto max-w-[120px]` (máx 120px)

Si necesitas ajustar, edita las clases `className` en los archivos:
- `components/slides/cover-slide.tsx`
- `components/slides/introduction-slide.tsx`
- `components/slides/invitation-slide.tsx`
- `components/slides/question-slide-with-selector.tsx`
- `components/slides/thanks-slide.tsx`

### Problema: Los gradientes no aparecen

Verifica que en `app/globals.css` esté presente:
```css
@import "tailwindcss";
@import "tw-animate-css";
```

Si usas Tailwind CSS v4, este es el formato correcto.

### Problema: Estilos diferentes entre navegadores

El proyecto está optimizado para:
- Chrome/Chromium (recomendado)
- Firefox
- Edge
- Safari

Si encuentras diferencias, asegúrate de tener la última versión del navegador.

## ⌨️ Controles de Navegación

| Tecla | Acción |
|-------|--------|
| **→** o **↓** | Siguiente diapositiva |
| **←** o **↑** | Diapositiva anterior |
| **Espacio** | Siguiente diapositiva |
| **Inicio** | Primera diapositiva |
| **Fin** | Última diapositiva |

## 📝 Personalización del Contenido

Edita el archivo `data/presentation-config.json` para cambiar:

### Información de portada
```json
{
  "cover": {
    "reportTitle": "Tu título",
    "university": "Tu universidad",
    "presenters": [...]
  }
}
```

### Textos de introducción
```json
{
  "introduction": [
    {
      "title": "Título introducción",
      "content": "Contenido..."
    }
  ]
}
```

### Preguntas (12 preguntas preparadas)
```json
{
  "questions": [
    {
      "id": 1,
      "text": "Tu pregunta aquí"
    }
  ]
}
```

### Participantes y roles
```json
{
  "presenters": [
    { "name": "Nombre 1", "role": "initial" },
    { "name": "Nombre 2", "role": "initial" },
    { "name": "Nombre 3", "role": "final" },
    { "name": "Nombre 4", "role": "final" }
  ]
}
```

## 🎨 Características del Juego

### Vistas implementadas (19 en total):

1. **Vista 1**: Portada universitaria
2. **Vistas 2-3**: Introducción al tema REA
3. **Vistas 4-15**: 12 preguntas con:
   - Selector aleatorio de expositor (ruleta con desaceleración)
   - Temporizador de 1:30 minutos
   - Nombre del expositor en esquina superior izquierda
   - Pregunta en el centro
4. **Vista 16**: Invitación a preguntas del público
5. **Vista 17**: Selector de respondedor aleatorio
6. **Vista 18**: Agradecimientos finales

### Elementos interactivos:

- **Selector tipo ruleta**: Efecto de desaceleración progresiva (4-5 segundos)
- **Temporizador visual**: Cambio de colores según tiempo restante
- **Control manual**: El temporizador no avanza automáticamente
- **Logo persistente**: Aparece en todas las diapositivas

## 🌐 Compatibilidad y Accesibilidad

### Sistemas operativos probados:
- ✅ Linux Mint
- ✅ Ubuntu
- ✅ Debian
- ✅ Windows 10/11
- ✅ macOS

### Principios REA implementados:
- **Accesible**: Funciona en cualquier navegador moderno
- **Interoperable**: No requiere software propietario
- **Adaptable**: Configuración modular mediante JSON
- **Sostenible**: Código open source, fácil de mantener

## 📦 Despliegue en Producción

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Build local
```bash
npm run build
npm run start
```

El servidor estará en `http://localhost:3000`

### Opción 3: Exportar como estático
```bash
npm run build
```

Los archivos estarán en la carpeta `.next`

## 🛠️ Estructura del Proyecto

```
├── app/
│   ├── page.tsx           # Página principal con navegación
│   ├── layout.tsx         # Layout y fuentes
│   └── globals.css        # Estilos globales y tokens de diseño
├── components/
│   ├── slides/            # Componentes de diapositivas
│   │   ├── cover-slide.tsx
│   │   ├── introduction-slide.tsx
│   │   ├── question-slide-with-selector.tsx
│   │   ├── invitation-slide.tsx
│   │   ├── random-selector.tsx
│   │   └── thanks-slide.tsx
│   └── timer.tsx          # Componente de temporizador
├── data/
│   └── presentation-config.json  # Configuración modular
└── public/
    └── logo.png           # Logo de la universidad
```

## 📄 Licencia

Este es un Recurso Educativo Abierto (REA). Libre para usar, adaptar y compartir según los principios de la UNESCO.

## 🤝 Soporte

Si encuentras problemas:

1. Revisa la sección "Solución de Problemas de Estilos"
2. Verifica que Node.js sea versión 18+: `node -v`
3. Asegúrate de que el puerto 3000 no esté en uso
4. Consulta los logs de la terminal para errores específicos

## 👥 Autores

- Yesmín Cantillo Brochero
- María Teresa Del Niño Jesús Parra Gil
- Jefferson Johan Soto González
- Adriana Zárate Carvajal

**Broward International University**  
EVED7013 - Sostenibilidad y evaluación de los recursos virtuales de aprendizaje  
Docente: Dra. Anaylen López  
2026
