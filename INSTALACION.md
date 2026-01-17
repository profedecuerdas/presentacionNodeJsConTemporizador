# Instrucciones de Instalación y Uso en Local

## Requisitos Previos
- Node.js 18.x o superior
- npm, pnpm o yarn

## Instalación

### 1. Instalar dependencias

```bash
npm install
# o
pnpm install
# o
yarn install
```

### 2. Verificar el logo
Asegúrate de que el archivo `logo.png` esté en la carpeta `public/`:
```
public/
  └── logo.png
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
# o
pnpm dev
# o
yarn dev
```

El proyecto estará disponible en: `http://localhost:3000`

## Solución de Problemas Comunes

### Los estilos no se cargan correctamente

Si los colores de fondo, gradientes o estilos no aparecen:

1. **Limpia el caché de Next.js:**
```bash
rm -rf .next
npm run dev
```

2. **Reinstala las dependencias:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

3. **Verifica que globals.css esté importado en layout.tsx**

### El logo se ve desproporcionado

El logo ya está configurado con clases responsivas:
- Logo superior: máximo 320px de ancho
- Logo inferior: máximo 120px de ancho

Si necesitas ajustar el tamaño, edita las clases en cada componente:
- `className="h-20 w-auto max-w-xs"` (logo superior)
- `className="h-12 w-auto max-w-[120px]"` (logo inferior)

### Los gradientes no se muestran

Asegúrate de que Tailwind CSS esté procesando correctamente. En `app/globals.css` debe estar:
```css
@import "tailwindcss";
```

## Navegación con Teclado

- **Flecha Derecha / Flecha Abajo**: Siguiente diapositiva
- **Flecha Izquierda / Flecha Arriba**: Diapositiva anterior
- **Barra Espaciadora**: Siguiente diapositiva
- **Tecla Inicio (Home)**: Primera diapositiva
- **Tecla Fin (End)**: Última diapositiva

## Personalización del Contenido

Edita el archivo `data/presentation-config.json` para cambiar:
- Información de la portada
- Textos de introducción
- Las 12 preguntas preparadas
- Nombres de los participantes
- Roles de expositores

## Despliegue en Producción

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Build estático
```bash
npm run build
npm run start
```

## Compatibilidad

Probado en:
- ✅ Linux Mint
- ✅ Ubuntu
- ✅ Windows 10/11
- ✅ macOS

Navegadores compatibles:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Soporte

Si encuentras problemas, verifica:
1. Versión de Node.js: `node -v` (debe ser 18+)
2. Que todas las dependencias estén instaladas
3. Que el puerto 3000 no esté en uso
4. Los logs en la terminal para errores específicos
```

```json file="" isHidden
