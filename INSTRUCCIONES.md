# Juego de Presentación Educativa - Instrucciones de Uso

## 📋 Descripción General

Este es un Recurso Educativo Abierto (REA) diseñado para presentaciones académicas interactivas. Es completamente modular y puede adaptarse fácilmente a diferentes temas y contextos educativos.

## 🎮 Controles de Navegación

### Controles de Teclado (Recomendados)
- **Flecha Derecha (→)** o **Flecha Abajo (↓)**: Avanzar a la siguiente diapositiva
- **Flecha Izquierda (←)** o **Flecha Arriba (↑)**: Retroceder a la diapositiva anterior
- **Inicio (Home)**: Ir a la primera diapositiva
- **Fin (End)**: Ir a la última diapositiva

### Controles en Pantalla
- **Botones de navegación**: En la parte inferior central de la pantalla
- **Indicador de progreso**: Barra superior que muestra el avance de la presentación
- **Contador de diapositivas**: Muestra la diapositiva actual y el total

## 🖥️ Compatibilidad

### Sistemas Operativos
- ✅ Linux Mint (recomendado)
- ✅ Windows
- ✅ macOS
- ✅ Otros sistemas basados en Linux

### Navegadores Web
- ✅ Google Chrome (recomendado)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

## 📝 Cómo Personalizar el Contenido

### Archivo de Configuración: `data/presentation-config.json`

Este archivo JSON contiene toda la información de la presentación. Puede editarlo con cualquier editor de texto.

#### 1. Información de la Portada
```json
"metadata": {
  "university": "Nombre de tu Universidad",
  "program": "Nombre del Programa Académico",
  "topic": "Título de tu Presentación",
  "date": "Fecha de la Presentación"
}
```

#### 2. Nombres de los Expositores
```json
"presenters": ["Nombre1", "Nombre2", "Nombre3", "Nombre4"]
```
- Puedes tener 2 o más expositores
- Los primeros 2 serán seleccionados aleatoriamente como expositores principales
- Los siguientes 2 responderán preguntas del público

#### 3. Introducción (2 diapositivas)
```json
"introduction": {
  "slide1": {
    "title": "Título de la primera introducción",
    "content": "Contenido descriptivo..."
  },
  "slide2": {
    "title": "Título de la segunda introducción",
    "content": "Continuación del contenido..."
  }
}
```

#### 4. Preguntas (12 preguntas)
```json
"questions": [
  {
    "id": 1,
    "question": "¿Tu primera pregunta aquí?"
  },
  // ... hasta 12 preguntas
]
```
- Puedes modificar cualquiera de las 12 preguntas
- El sistema asigna automáticamente expositores de manera aleatoria
- Cada pregunta tiene un temporizador de 1 minuto y 30 segundos

#### 5. Mensajes de Cierre
```json
"closing": {
  "invitationText": "Texto de invitación a preguntas",
  "invitationSubtext": "Subtexto descriptivo",
  "thanksText": "Mensaje de agradecimiento",
  "thanksSubtext": "Subtexto de cierre"
}
```

## 🎯 Estructura de las Diapositivas

1. **Vista 1**: Portada con información institucional
2. **Vista 2**: Primera introducción al tema
3. **Vista 3**: Segunda introducción al tema
4. **Vistas 4-15**: 12 preguntas con temporizador y expositor asignado
5. **Vista 16**: Invitación a preguntas del público
6. **Vista 17+**: Selector aleatorio para preguntas del público (repetible)
7. **Vista Final**: Agradecimientos

## ⏱️ Funcionamiento del Temporizador

- **Duración**: 1 minuto y 30 segundos por pregunta
- **Comportamiento**: 
  - El temporizador NO avanza automáticamente las diapositivas
  - Es un elemento visual para gestionar el tiempo
  - Cambia de color según el tiempo restante (verde → amarillo → rojo)
  - El presentador controla manualmente el avance

## 🎲 Selector Aleatorio

- **Efecto visual**: Similar a una ruleta que desacelera progresivamente
- **Duración**: 4-5 segundos
- **Funcionamiento**:
  - Los nombres rotan rápidamente al inicio
  - La velocidad disminuye gradualmente
  - Se detiene en el expositor seleccionado
  - Inicia automáticamente el temporizador

## 🚀 Cómo Ejecutar la Presentación

### Desde el Navegador Web

1. Abra el archivo `index.html` en su navegador preferido
2. O acceda a la URL donde esté alojada la aplicación
3. La presentación se cargará en pantalla completa

### Modo Presentación (Recomendado)

1. Presione **F11** en la mayoría de los navegadores para pantalla completa
2. O use el menú del navegador: Ver → Pantalla completa

### Consejos para la Presentación

- **Ensaye** la navegación antes de la presentación real
- **Familiarícese** con los controles de teclado
- **Pruebe** en el equipo donde realizará la presentación
- **Tenga** el archivo JSON con contenido de respaldo
- **Verifique** que todos los nombres aparezcan correctamente

## 🔧 Modificación Avanzada

### Cambiar el Número de Preguntas

Si desea más o menos de 12 preguntas:

1. Edite el array `questions` en el archivo JSON
2. Agregue o elimine objetos de pregunta según necesite
3. El sistema se ajustará automáticamente

### Cambiar el Tiempo del Temporizador

En el archivo `components/slides/question-slide.tsx`:
```tsx
<Timer duration={90} /> // Cambie 90 por los segundos deseados
```

En el archivo `components/slides/random-selector.tsx`:
```tsx
<Timer duration={90} /> // Cambie aquí también
```

### Cambiar Colores y Diseño

Los colores están definidos en `app/globals.css` usando variables CSS. Puede modificar:
- Colores primarios y secundarios
- Gradientes de fondo
- Tamaños de fuente
- Espaciados

## 📄 Licencia y Uso

Este es un **Recurso Educativo Abierto (REA)**:
- ✅ Libre para usar en cualquier contexto educativo
- ✅ Puede modificarse y adaptarse según sus necesidades
- ✅ Puede compartirse con otros educadores
- ✅ No requiere atribución (aunque se agradece)
- ✅ Interoperable y accesible

## 🆘 Solución de Problemas

### La presentación no carga
- Verifique que todos los archivos estén en la ubicación correcta
- Revise la consola del navegador (F12) para ver errores
- Asegúrese de que el archivo JSON tenga sintaxis válida

### Los nombres no aparecen
- Verifique que el array `presenters` tenga al menos 2 nombres
- Compruebe que no haya errores de sintaxis en el JSON

### El temporizador no funciona
- Refresque la página (F5)
- Verifique que JavaScript esté habilitado en el navegador

### Las teclas no funcionan
- Haga clic en cualquier parte de la pantalla para dar foco
- Verifique que no haya campos de texto seleccionados

## 📞 Contacto y Contribuciones

Este proyecto es de código abierto. Puede:
- Reportar problemas o sugerencias
- Contribuir con mejoras
- Adaptar para sus propias necesidades
- Compartir con la comunidad educativa

---

**¡Buena suerte con su presentación!** 🎓
