// Datos por defecto de Alta Mare Hotel & Suites
const DEFAULT_HOTEL_CONTENT = {
  // Datos Generales
  general: {
    nombre: "Alta Mare Hotel & Suites",
    direccion: "Av. 79 Nº 217 (a 30m del mar), Necochea, Buenos Aires",
    distanciaMar: "30m",
    telefono: "+54 9 2262 67-2626",
    whatsappNumero: "5492262672626",
    email: "altamarenecochea@gmail.com",
    instagram: "@altamare.hotel",
    instagramUrl: "https://www.instagram.com/altamare.hotel",
    horarioRecepcion: "Recepción 24 Horas",
    checkinHora: "14:00 hs",
    checkoutHora: "10:00 hs"
  },

  // Cintillo Promocional (Opcional)
  promoBanner: {
    activo: false,
    texto: "🌟 Temporada 2026: Reserve su estadía directamente con recepción con beneficios exclusivos.",
    botonTexto: "Consultar Tarifas",
    botonUrl: "reservas.html"
  },

  // Inicio (Home)
  home: {
    heroBadge: "Necochea • A 30 Metros del Mar",
    heroTitulo: "Mar, descanso y hospitalidad en Necochea",
    heroSubtitulo: "Disfrutá de suites confortables con hidromasaje, microcine para 60 personas y la mejor ubicación frente a las playas más amplias del país.",
    heroImagen: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop",
    
    nosotrosSubtitulo: "Tradición & Confort",
    nosotrosTitulo: "Bienvenidos a Alta Mare Hotel & Suites",
    nosotrosTexto1: "Ubicado en el sector más privilegiado de Necochea, a escasos 30 metros de la costa, nuestro hotel combina instalaciones de categoría superior con una atención cálida y personalizada.",
    nosotrosTexto2: "Pensado para familias, parejas y viajes de trabajo, ofrecemos habitaciones equipadas con la última tecnología de confort térmico y acústico, además de servicios exclusivos como nuestro microcine de 60 butacas y espacios de relax.",
    nosotrosImagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
  },

  // Habitaciones
  habitaciones: {
    preferencial: {
      titulo: "Habitación Preferencial al Frente",
      tipo: "Doble Matrimonial o Triple",
      descripcion: "Nuestra opción más destacada con vista directa al frente y al mar de costado. Equipada con bañera de hidromasaje privada y aberturas con doble vidriado hermético (DVH) para una insonorización y confort térmico total.",
      imagenes: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      ],
      equipamiento: [
        "Sommier Queen Size",
        "Hidromasaje Privado",
        "Smart TV 43 pulgadas",
        "A/C + Radiadores",
        "Aberturas DVH",
        "Cofre de Seguridad",
        "Secador de Pelo",
        "Wi-Fi Alta Velocidad"
      ]
    },
    standard: {
      titulo: "Habitación Standard",
      tipo: "Doble Matrimonial o Twin (Camas Individuales)",
      descripcion: "Habitaciones cálidas, confortables y funcionales. Ideales para estancias de descanso o viajes corporativos, con sommier de alta calidad, climatización integral y amenities completos.",
      imagenes: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
      ],
      equipamiento: [
        "Sommier Matrimonial / Twin",
        "LED TV con Cable",
        "A/C + Radiadores",
        "Baño Privado Completo",
        "Cofre de Seguridad",
        "Secador de Pelo",
        "Wi-Fi Alta Velocidad",
        "Amenities de Baño"
      ]
    }
  },

  // Microcine
  microcine: {
    badge: "Capacidad para 60 Personas",
    titulo: "Microcine & Sala de Conferencias",
    subtitulo: "Un espacio exclusivo en Necochea con equipamiento audiovisual de alta definición para conferencias, reuniones corporativas, presentaciones y ciclos de cine.",
    descripcion: "Nuestro auditorio fue diseñado para brindar una experiencia inmersiva con acústica tratada, butacas confortables y conectividad total para disertantes y eventos privados.",
    imagenPrincipal: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    especificaciones: [
      "Pantalla Gigante de 200 Pulgadas",
      "Proyector Profesional de 5000 Lumens HD",
      "Sistema de Sonido Envolvente Pro",
      "Ambiente 100% Climatizado Frío/Calor",
      "Capacidad para 60 Espectadores",
      "Conectividad HDMI / Wi-Fi para Disertantes"
    ]
  },

  // Servicios
  servicios: {
    desayuno: {
      titulo: "Breakfast & Snack Bar",
      descripcion: "Comenzá tus mañanas frente al mar con nuestro desayuno buffet completo: infusiones de primera línea, panadería artesanal, frutas frescas, cereales y opciones para todos los gustos. Durante la tarde, disponemos de servicio de snack bar y cafetería.",
      horario: "07:30 a 10:30 hs • Servicio Diario",
      imagen: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1000&auto=format&fit=crop"
    },
    sauna: {
      titulo: "Sauna Seco & Relax",
      descripcion: "Un espacio diseñado para distender el cuerpo y la mente luego de una jornada de playa o reuniones de trabajo. Nuestro sauna seco y área de relax garantizan una desconexión total durante tus vacaciones.",
      detalle: "Acceso para Huéspedes • Espacio Climatizado",
      imagen: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?q=80&w=1000&auto=format&fit=crop"
    },
    gym: {
      titulo: "Mini Gym & Fitness",
      descripcion: "Mantené tu rutina activa con equipamiento aeróbico y funcional disponible para todos los huéspedes del hotel.",
      imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    },
    recepcion: {
      titulo: "Hall & Recepción 24h",
      descripcion: "Un living cómodo y luminoso con asistencia permanente, check-in ágil y asesoría turística para conocer los mejores rincones de Necochea.",
      imagen: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop"
    }
  },

  // Preguntas Frecuentes (FAQ)
  faqs: [
    {
      pregunta: "¿A qué distancia exacta está el hotel del mar?",
      respuesta: "Estamos ubicados en Av. 79 Nº 217, a exactamente 30 metros de la costanera. Solo tenés que cruzar la avenida para acceder a la playa."
    },
    {
      pregunta: "¿Cuáles son los horarios de Check-in y Check-out?",
      respuesta: "El ingreso (Check-in) es a partir de las 14:00 hs y el egreso (Check-out) hasta las 10:00 hs. Recepción funciona las 24 horas."
    },
    {
      pregunta: "¿Qué servicios incluye la estadía?",
      respuesta: "Todas las estadías incluyen desayuno buffet completo, acceso al Wi-Fi de alta velocidad en todo el complejo y atención personalizada 24h."
    },
    {
      pregunta: "¿Se puede reservar el microcine para eventos privados?",
      respuesta: "Sí, el auditorio para 60 personas está disponible para conferencias, capacitaciones o eventos corporativos coordinando previamente con recepción."
    }
  ]
};
