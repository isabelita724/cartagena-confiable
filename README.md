# Cartagena Confiable 🌊🏛️
> **Sistema Multi-Agente de Asistencia Turística Inteligente**

[![Unicolombo](https://img.shields.io/badge/Institución-UNICOLOMBO-0077B6.svg)](https://unicolombo.edu.co/)
[![Año](https://img.shields.io/badge/Año-2026-00B4D8.svg)]()
[![Tecnología](https://img.shields.io/badge/Multi--Agent-LangChain%20%7C%20DeepSeek%20%7C%20Whisper-FF6B6B.svg)]()
[![Licencia](https://img.shields.io/badge/Licencia-Académica-10B981.svg)]()

---

## 📌 Descripción del Proyecto

**Cartagena Confiable** es un asistente turístico inteligente accesible directamente a través de **Telegram**, diseñado específicamente para proteger, guiar y empoderar a los turistas nacionales e internacionales en Cartagena de Indias.

> *"Cartagena Confiable es el guía turístico inteligente que protege al turista: le dice dónde ir, cuánto pagar, qué evitar y a quién llamar — en su idioma, por voz o texto, las 24 horas."*

---

## 👥 Equipo Creador & Autores

- **Isabella Torres Yepes** — *Desarrolladora*
- **Andrés David Rodríguez Cantillo** — *Desarrollador*

**Programa Académico:**  
Tecnología En Desarrollo De Sistemas De Información Y De Software  
**Institución:**  
Fundación Universitaria Colombo Internacional (**UNICOLOMBO**) — Cartagena de Indias, Colombia (2026).

---

## 🚀 Características Principales (13 Funciones)

1. **Multilingüe Nativo:** Fluidez en español, inglés, portugués, francés y alemán.
2. **Voz Bidireccional:** Recibe notas de voz (Groq Whisper) y responde con audio claro (gTTS).
3. **Botón SOS de Emergencia:** Enlace directo con Policía (123), Ambulancia (125), Bomberos (119) y Hotel.
4. **Sistema de Quejas Estructurado:** Notificación directa e inmediata a la administración del hotel.
5. **Sitios Autorizados y Verificados:** Directorio auditado con Registro Nacional de Turismo (RNT).
6. **Zonas de Riesgo y Zonas Seguras:** Mapeo preventivo de cuadrantes urbanos según franja horaria.
7. **Precios Justos & Veredicto:** Auditoría instantánea contra el tarifario oficial de la Alcaldía de Cartagena.
8. **Proximidad (< 1 km):** Detección inteligente de servicios indispensables a corta distancia.
9. **Indicador de Actividad:** Reporte de afluencia y ambiente de cada sitio turístico.
10. **Clima y Recomendaciones según la Hora:** Integración con OpenWeatherMap para alertas meteorológicas y solares.
11. **Rutas GPS con Google Maps:** Navegación guiada a través de vías concurridas y seguras.
12. **Modo Texto, Voz o Ambos:** Flexibilidad total para el usuario en movimiento.
13. **Detección de Intención Natural:** Sin botones rígidos ni árboles forzados; lenguaje natural fluido.

---

## 🧠 Arquitectura del Sistema

```
[ Usuario en Telegram ] 
       │ (Texto o Nota de Voz)
       ▼
[ Orquestador Central (LangChain) ] ── Deduce Intención
       │
       ├──► [ Agente de Seguridad ]  (Cuadrantes, SOS, CAI)
       ├──► [ Agente de Experiencia] (Clima, Sitios < 1 km)
       └──► [ Agente de Precios ]    (Tarifario Oficial, Veredictos)
       │
       ▼
[ Base de Conocimiento RAG (Obsidian Markdown) ] ── Anclaje sin alucinaciones
       │
       ▼
[ Inferencia Híbrida LLM (DeepSeek / Gemini Vision) ]
       │
       ▼
[ Respuesta Multimodal (Texto estructurado + Audio gTTS) ]
```

---

## 💰 Modelo de Negocio & FinOps

- **Triple Impacto:**
  - **Hoteles:** Suscripción mensual SaaS (conserje digital 24/7 de bolsillo).
  - **Comercios Autorizados:** Membresía de certificación y visibilidad prioritaria.
  - **Turista:** **100% gratuito** sin descargas ni registros molestos.
- **FinOps:** Costo operativo menor a **$18 USD/mes (~$70.000 COP)** para procesar **10.000 consultas** mensuales mediante modelos de ultra-bajo costo por token.

---

## 📂 Estructura del Repositorio Web

```
c:\Pagina Proyecto Cartagena Confiable/
├── index.html       # Estructura semántica completa (13 secciones)
├── styles.css       # Estilos puros con paleta caribeña y alto contraste
├── script.js        # Interactividad vanilla JS, animaciones y QR dinámico
└── README.md        # Ficha técnica y documentación académica
```

---

## 🌐 Publicación en GitHub Pages

Para publicar este proyecto:
1. Sube este repositorio a tu cuenta de GitHub como repositorio público.
2. Ve a **Settings** > **Pages**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** y obtendrás la URL pública: `https://<tu-usuario>.github.io/cartagena-confiable/`.

