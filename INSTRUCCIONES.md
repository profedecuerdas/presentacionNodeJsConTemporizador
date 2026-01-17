# Guía de Uso - Presentación Interactiva de Sostenibilidad (REA)

Este proyecto es una aplicación web interactiva desarrollada con **Next.js**. Ha sido personalizada para la asignatura de Sostenibilidad y evaluación de los recursos virtuales de aprendizaje, centrada en el estudio de caso de la Universidad de Costa Rica.

## 🚀 Cómo Ejecutar el Proyecto

A diferencia de un sitio web estático, esta aplicación requiere un entorno de **Node.js**:

1. **Instalar dependencias:** (Solo la primera vez)
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Acceder:** Abre tu navegador en [http://localhost:3000](http://localhost:3000).

## 📊 Estructura de la Presentación (15 Diapositivas)

La aplicación sigue una secuencia lógica de 15 estaciones:

1. **Diapositiva 1:** Portada Institucional (BIU).
2. **Diapositiva 2:** Introducción a los Recursos Educativos Abiertos.
3. **Diapositivas 3-10:** Bloque de 8 preguntas principales (Participan: Adriana y Yesmin).
4. **Diapositiva 11:** Invitación a preguntas del público ("¡Momento de Preguntas!").
5. **Diapositiva 12:** Selector Público 1 - Asignado a **Jefferson**.
6. **Diapositiva 13:** Selector Público 2 - Asignado a **Adriana**.
7. **Diapositiva 14:** Selector Público 3 - Asignado a **Yesmin**.
8. **Diapositiva 15:** Agradecimiento y cierre.

## 🎯 El "Azar Controlado" (La Ruleta)

La aplicación mantiene el efecto visual de una ruleta aleatoria para la audiencia, pero los resultados están predeterminados para asegurar la fluidez académica:

- **Cómo funciona:** La ruleta girará mostrando nombres al azar durante 3 segundos, pero siempre se detendrá en el presentador asignado en el código o en el archivo JSON.
- **Temporizador:** Una vez seleccionado el presentador, se activa automáticamente un temporizador de **90 segundos**.

## ⌨️ Controles de Navegación

- **Avanzar:** Flecha Derecha (→) o Flecha Abajo (↓).
- **Retroceder:** Flecha Izquierda (←) o Flecha Arriba (↑).
- **Inicio/Fin:** Teclas Home y End para saltar al principio o al final.
- **Modo Aula:** Se recomienda presionar **F11** en el navegador para vista de pantalla completa.

## 📝 Personalización (data/presentation-config.json)

Puedes modificar el contenido de las preguntas y los presentadores asignados editando el archivo JSON:

```json
"questions": [
  {
    "id": 1,
    "question": "¿Tu pregunta aquí?",
    "assignedPresenter": "Adriana"
  }
]
```
*Nota: Asegúrate de que el nombre en `assignedPresenter` coincida exactamente con la lista de `presenters`.*

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**, lo que lo define como un Recurso Educativo Abierto (REA) libre para ser usado, modificado y compartido por la comunidad docente.
