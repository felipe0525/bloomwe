export const MOCK_EXPERTS = [
  {
    id: '1',
    category: 'Médicos',
    name: 'Dr. Carlos Castro',
    specialty: 'Medicina General y Preventiva',
    experience: 8,
    bio: 'Especialista en salud joven y prevención de enfermedades crónicas con enfoque en hábitos saludables.',
    phone: '+573001234567',
    email: 'carlos.castro@bloomwe.com',
    location: 'Centro Médico Norte, Piso 4',
    hours: 'Lun-Vie 8am - 5pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523408/76044a1e-e275-4988-8990-45b519617d96_tjlxx5.jpg'
  },
  {
    id: '2',
    category: 'Médicos',
    name: 'Dra. Elena Castiblanco',
    specialty: 'Medicina Interna',
    experience: 12,
    bio: 'Dedicada al diagnóstico integral y manejo de condiciones de salud en adultos jóvenes.',
    phone: '+573109876543',
    email: 'elena.c@bloomwe.com',
    location: 'Hospital San Lucas, Consultorio 302',
    hours: 'Mar-Jue 2pm - 7pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770322799/01167078-9403-45fe-88f0-47e23a9abe8b.png'
  },
  {
    id: '3',
    category: 'Psicólogos',
    name: 'Dr. Ricardo Gómez',
    specialty: 'Psicología Clínica y Cognitiva',
    experience: 10,
    bio: 'Experto en manejo de ansiedad, estrés académico y desarrollo personal en jóvenes.',
    phone: '+573152223344',
    email: 'ricardo.g@bloomwe.com',
    location: 'Torre Empresarial, Of. 901',
    hours: 'Lun-Vie 9am - 6pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770322763/f53d1073-a2b2-4169-a987-0029f6569ae2.png'
  },
  {
    id: '4',
    category: 'Psicólogos',
    name: 'Dra. Camila Velez',
    specialty: 'Psicoterapia Juvenil',
    experience: 6,
    bio: 'Enfoque empático para tratar temas de autoestima, relaciones y bienestar emocional.',
    phone: '+573201112233',
    email: 'camila.v@bloomwe.com',
    location: 'Centro Zen, Calle 80',
    hours: 'Mié-Sáb 8am - 2pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770322679/b4ad95ce-e7dc-40f4-b3c2-ee28ce9e9e53.png'
  },
  {
    id: '5',
    category: 'Nutricionistas',
    name: 'Dra. Sofía Mendez',
    specialty: 'Nutrición Deportiva',
    experience: 5,
    bio: 'Ayudo a jóvenes a optimizar su rendimiento físico y mental a través de una alimentación balanceada.',
    phone: '+573007654321',
    email: 'sofia.m@bloomwe.com',
    location: 'Consultorio Vitalia 202',
    hours: 'Lun-Sáb 9am - 1pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770322650/efbadf20-6ab5-452a-9490-1e36ef7f9420.png'
  },
  {
    id: '6',
    category: 'Nutricionistas',
    name: 'Dr. Andrés Pardo',
    specialty: 'Nutrición Clínica Integral',
    experience: 7,
    bio: 'Especialista en planes de alimentación personalizados para mejorar la salud metabólica.',
    phone: '+573014445566',
    email: 'andres.p@bloomwe.com',
    location: 'Plaza Médica, Local 12',
    hours: 'Lun-Vie 7am - 4pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770322644/6cf77b39-6200-498d-a8cc-cac2a3063730.png'
  }
];

export const MOCK_RECIPES = [
  {
    id: '1',
    category: 'Ligeras',
    name: 'Bowl de Quinoa y Mango',
    time: '15 min',
    difficulty: 'Fácil',
    ingredients: ['1 taza quinoa cocida', '1 Mango maduro picado', '2 tazas de Espinacas baby', 'Aderezo de limón y miel', 'Semillas de chía'],
    instructions: [
      'Lava bien la quinoa y cocínala siguiendo las instrucciones del paquete.',
      'En un bowl grande, coloca una base de espinacas frescas.',
      'Añade la quinoa cocida templada o fría.',
      'Incorpora el mango picado en cubos.',
      'Rocía con el aderezo de limón y espolvorea las semillas de chía.'
    ],
    nutrition: { calories: 320, protein: '12g', carbs: '45g', fats: '8g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000'
  },
  {
    id: '2',
    category: 'Snacks',
    name: 'Energy Balls de Avena',
    time: '10 min',
    difficulty: 'Muy Fácil',
    ingredients: ['1 taza de Avena en hojuelas', '1/2 taza de Crema de maní natural', '1/4 taza de Miel o sirope de agave', '2 cucharadas de Chispas de cacao dark'],
    instructions: [
      'En un recipiente mediano, mezcla la avena con la crema de maní y la miel.',
      'Añade las chispas de cacao y mezcla hasta tener una masa homogénea.',
      'Forma bolitas pequeñas con las manos.',
      'Colócalas en un plato y refrigera por al menos 20 minutos antes de consumir.'
    ],
    nutrition: { calories: 150, protein: '5g', carbs: '20g', fats: '6g' },
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323174/50ed4977-25f2-4e7d-a122-69a4ff289b79.png'
  },
  {
    id: '3',
    category: 'Fuertes',
    name: 'Salmón al Horno con Espárragos',
    time: '25 min',
    difficulty: 'Media',
    ingredients: ['1 filete de Salmón fresco', '1 manojo de Espárragos verdes', 'Aceite de oliva extra virgen', 'Limón, sal y pimienta', 'Ajo en polvo'],
    instructions: [
      'Precalienta el horno a 200°C.',
      'Coloca el salmón y los espárragos en una bandeja para horno.',
      'Sazona con sal, pimienta, ajo en polvo y un chorrito de aceite de oliva.',
      'Hornea durante 12-15 minutos dependiendo del grosor del pescado.',
      'Sirve con rodajas de limón fresco encima.'
    ],
    nutrition: { calories: 450, protein: '35g', carbs: '10g', fats: '28g' },
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1000'
  },
  {
    id: '4',
    category: 'Fuertes',
    name: 'Tacos de Pollo Saludables',
    time: '20 min',
    difficulty: 'Fácil',
    ingredients: ['Pechuga de pollo desmechada', 'Tortillas de maíz integral', 'Aguacate machacado', 'Pico de gallo (tomate y cebolla)', 'Cilantro fresco'],
    instructions: [
      'Cocina el pollo y desméchalo.',
      'Calienta las tortillas en una sartén.',
      'Unta un poco de aguacate en cada tortilla.',
      'Añade el pollo y el pico de gallo.',
      'Termina con cilantro fresco y unas gotas de limón.'
    ],
    nutrition: { calories: 380, protein: '28g', carbs: '32g', fats: '15g' },
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000'
  }
];

export const MOCK_PLACES = [
  {
    id: '1',
    name: 'Parque Metropolitano Simón Bolívar',
    address: 'Av. Calle 63 y Av. Carrera 68',
    activities: ['Running', 'Ciclismo', 'Eventos Masivos', 'Yoga'],
    hours: '5am - 7pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323625/a7261b44-1ce1-41dc-878d-b89168baad35.png',
    rating: 5
  },
  {
    id: '2',
    name: 'Parque de los Novios (El Lago)',
    address: 'Calle 63 # 45-10',
    activities: ['Yoga', 'Caminata', 'Navegación en Bote', 'Picnic'],
    hours: '6am - 6pm',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323648/1c3564ef-eaad-4e7e-8386-1532b38b1944.png',
    rating: 4
  },
  {
    id: '3',
    name: 'Parque El Virrey',
    address: 'Carrera 15 con Calle 88',
    activities: ['Running', 'Calistenia', 'Paseo de Mascotas'],
    hours: 'Abierto 24h',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323666/39cefa5c-6590-48dd-b9b9-6167d8320e0b.png',
    rating: 5
  },
  {
    id: '4',
    name: 'Parque El Tunal',
    address: 'Calle 48B Sur y Avenida Boyacá',
    activities: ['Skateboarding', 'Fútbol', 'Atletismo', 'Ciclismo'],
    hours: '5am - 6pm',
    image: 'https://picsum.photos/seed/tunal/600/400',
    rating: 3
  },
  {
    id: '5',
    name: 'Parque de la 93',
    address: 'Calle 93 # 11A-41',
    activities: ['Yoga Matutino', 'Eventos Culturales', 'Caminata'],
    hours: 'Abierto 24h',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323713/8d4ddf3a-efe2-4e51-a8fa-6ba7d912885a.png',
    rating: 4
  }
];

export const MOCK_SHOPS = [
  {
    id: 'shop1',
    name: 'BioMarket Orgánico',
    category: 'Alimentación',
    distance: '800 m',
    address: 'Calle Verde #10-20',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000',
    description: 'Productos locales y orgánicos para una vida equilibrada.',
    products: [
      { name: 'Miel de Abeja Pura', price: '$12.000' },
      { name: 'Quinoa Real 500g', price: '$8.500' },
      { name: 'Kombucha Ancestral', price: '$6.000' }
    ],
    coupons: [
      { code: 'BIO10', discount: '10% OFF', description: 'En toda la tienda' },
      { code: 'FRUTAS20', discount: '20% OFF', description: 'En sección frutería' }
    ]
  },
  {
    id: 'olu',
    name: 'OLU',
    category: 'Helados y Postres',
    distance: '1.1 km',
    address: 'Av. Carrera 11 #94-12',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523608/0e858cec-69da-45be-9878-fd52c2b20e26.png',
    description: 'Es de helados y postres saludables para disfrutar sin culpa.',
    products: [
      { name: 'Helado de Yogurt Fit', price: '$12.000' },
      { name: 'Mousse de Cacao 70%', price: '$9.500' },
      { name: 'Cheesecake Vegano', price: '$14.000' }
    ],
    coupons: [
      { code: 'OLUFIRST', discount: '15% OFF', description: 'En tu primera compra' }
    ]
  },
  {
    id: 'avocalia',
    name: 'Avocalia',
    category: 'Alimentación Saludable',
    distance: '1.5 km',
    address: 'Calle 85 #12-44',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523612/4d096da8-910e-4617-972e-cd0cca00681a.png',
    description: 'Bowls, ensaladas y snacks donde el aguacate es el protagonista saludable.',
    products: [
      { name: 'Avo-Bowl Clásico', price: '$22.000' },
      { name: 'Toast de Aguacate', price: '$16.500' },
      { name: 'Batido Green Power', price: '$12.000' }
    ],
    coupons: [
      { code: 'AVOHEALTH', discount: '10% OFF', description: 'Válido en combos' }
    ]
  },
  {
    id: 'paranice',
    name: 'Paranice',
    category: 'Snacks Saludables',
    distance: '2.0 km',
    address: 'Carrera 13 #78-05',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523621/f95d6dc2-ba18-4ec2-a789-b94d6dd647d3.png',
    description: 'Snack sano y delicioso — Disfruta granola sin azúcar ni gluten, rica en proteína y con sabores irresistibles.',
    products: [
      { name: 'Granola Proteica 500g', price: '$25.000' },
      { name: 'Mix Energético', price: '$12.000' },
      { name: 'Barras de Avena y Miel', price: '$4.500' }
    ],
    coupons: [
      { code: 'NICEICE', discount: '20% OFF', description: 'En la segunda unidad' }
    ]
  },
  {
    id: 'madame_sucree',
    name: 'Madame Sucrée',
    category: 'Repostería Saludable',
    distance: '2.2 km',
    address: 'Calle 90 #14-26',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523625/c37ec9cf-ef94-4827-8534-1c510200d139.png',
    description: 'Pastelería fina con opciones sin gluten, veganas y bajas en calorías.',
    products: [
      { name: 'Muffin de Arándanos', price: '$8.000' },
      { name: 'Tarta de Chocolate Vegana', price: '$14.000' },
      { name: 'Galletas de Avena y Chía', price: '$5.500' }
    ],
    coupons: [
      { code: 'SWEETBLOOM', discount: '10% OFF', description: 'En tortas completas' }
    ]
  },
  {
    id: 'nuve_verde',
    name: 'Nuve Verde',
    category: 'Alimentación Saludable',
    distance: '3.1 km',
    address: 'Calle 100 #19-45',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523631/f9f4a460-ba30-46bc-bc89-64c3659f36b0.png',
    description: 'Ensaladas y comida saludable preparada con los mejores ingredientes frescos.',
    products: [
      { name: 'Ensalada César Fit', price: '$18.000' },
      { name: 'Bowl de Pollo y Vegetales', price: '$24.000' },
      { name: 'Wrap Integral de Pavo', price: '$15.500' }
    ],
    coupons: [
      { code: 'NUVE20', discount: '20% OFF', description: 'En productos a granel' }
    ]
  },
  {
    id: 'cana_y_bijao',
    name: 'Caña y Bijao',
    category: 'Restaurante',
    distance: '3.5 km',
    address: 'Carrera 7 #65-33',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523640/52d0a1d4-c702-43fa-a9fc-4e0e0bf01f9f.png',
    description: 'Restaurante de comida saludable tipo buffet con gran variedad de opciones.',
    products: [
      { name: 'Buffet Saludable (Almuerzo)', price: '$28.000' },
      { name: 'Jugo Natural de la Casa', price: '$6.000' },
      { name: 'Postre de la Casa (Sin Azúcar)', price: '$8.000' }
    ],
    coupons: [
      { code: 'TRADICION', discount: '10% OFF', description: 'En toda la despensa' }
    ]
  },
  {
    id: 'shop2',
    name: 'SportXtreme',
    category: 'Ropa Deportiva',
    distance: '1.2 km',
    address: 'C.C. Portal Norte, Local 45',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000',
    description: 'Equipamiento de alto rendimiento para todos los niveles.',
    products: [
      { name: 'Tenis de Running Pro', price: '$250.000' },
      { name: 'Mat de Yoga Premium', price: '$45.000' },
      { name: 'Bandas Elásticas (Set)', price: '$15.000' }
    ],
    coupons: [
      { code: 'RUN25', discount: '25% OFF', description: 'En calzado de correr' }
    ]
  },
  {
    id: 'shop3',
    name: 'Zen Apothecary',
    category: 'Bienestar',
    distance: '2.5 km',
    address: 'Carrera 15 #82-11',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000',
    description: 'Aceites esenciales, cristales y herramientas para meditación.',
    products: [
      { name: 'Difusor de Aromas', price: '$110.000' },
      { name: 'Incienso de Sándalo', price: '$5.000' },
      { name: 'Aceite de Lavanda', price: '$25.000' }
    ],
    coupons: [
      { code: 'PAZINTERIOR', discount: '15% OFF', description: 'En primer kit de aceites' }
    ]
  },
  {
    id: 'shop4',
    name: 'NutriFit Store',
    category: 'Suplementos',
    distance: '5.0 km',
    address: 'Av. El Dorado #68',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000',
    description: 'Todo lo que necesitas para tu nutrición y recuperación muscular.',
    products: [
      { name: 'Proteína Whey 2lb', price: '$140.000' },
      { name: 'Creatina Monohidratada', price: '$60.000' },
      { name: 'BCAAs 30 servicios', price: '$75.000' }
    ],
    coupons: [
      { code: 'FIT2024', discount: '20% OFF', description: 'En toda la sección de proteínas' }
    ]
  }
];

export const MOCK_CHATS = [
  {
    id: 'c1',
    name: 'Mateo González',
    photo: 'https://picsum.photos/seed/u1/150/150',
    lastMessage: '¿Vamos al parque Simón Bolívar hoy?',
    time: '10:30 AM',
    unreadCount: 2,
    online: true
  },
  {
    id: 'c2',
    name: 'Valentina Ruiz',
    photo: 'https://picsum.photos/seed/u2/150/150',
    lastMessage: '¡Esa receta de quinoa estuvo genial!',
    time: 'Ayer',
    unreadCount: 0,
    online: false
  },
  {
    id: 'c3',
    name: 'Dr. Ricardo Gómez',
    photo: 'https://picsum.photos/seed/u3/150/150',
    lastMessage: 'Recuerda practicar la respiración profunda.',
    time: 'Lunes',
    unreadCount: 0,
    online: false
  },
  {
    id: 'c4',
    name: 'Sofía Mendez',
    photo: 'https://picsum.photos/seed/u4/150/150',
    lastMessage: 'Mañana sale nuevo tip de nutrición.',
    time: '2h ago',
    unreadCount: 0,
    online: true
  }
];

export const MOCK_SPORTS_ACTIVITIES = [
  {
    id: 's1',
    sport: 'Yoga',
    title: 'Yoga al Atardecer',
    date: 'Miércoles, 18 Oct',
    time: '05:30 PM',
    duration: '60 min',
    location: 'Mirador del Parque',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000',
    description: 'Encuentra tu equilibrio interior con una sesión guiada frente al sol poniente.'
  },
  {
    id: 's2',
    sport: 'Running',
    title: 'Carrera 5K Comunitaria',
    date: 'Sábado, 21 Oct',
    time: '07:00 AM',
    duration: '45-60 min',
    location: 'Entrada Principal Parque',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000',
    description: 'Únete a nuestro grupo de corredores para una ruta escénica de 5 kilómetros.'
  },
  {
    id: 's3',
    sport: 'Fútbol',
    title: 'Torneo Relámpago 5x5',
    date: 'Domingo, 22 Oct',
    time: '10:00 AM',
    duration: '120 min',
    location: 'Canchas Sintéticas Norte',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
    description: 'Arma tu equipo y participa en nuestro torneo amistoso de fin de semana.'
  },
  {
    id: 's4',
    sport: 'Natación',
    title: 'Clase Abierta de Técnica',
    date: 'Lunes, 23 Oct',
    time: '06:00 PM',
    duration: '50 min',
    location: 'Complejo Acuático Municipal',
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1000',
    description: 'Mejora tu brazada con consejos de instructores profesionales en piscina climatizada.'
  },
  {
    id: 's5',
    sport: 'Pilates',
    title: 'Pilates Integral para Jóvenes',
    date: 'Martes, 24 Oct',
    time: '09:00 AM',
    duration: '55 min',
    location: 'Estudio de Bienestar bloomWe',
    image: 'https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=1000',
    description: 'Mejora tu postura y fortalece tu core con nuestra sesión especializada de Pilates mat.'
  },
  {
    id: 's6',
    sport: 'Danza',
    title: 'Ritmos Latinos y Cardio',
    date: 'Viernes, 27 Oct',
    time: '06:30 PM',
    duration: '60 min',
    location: 'Plaza Principal del Parque',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000',
    description: 'Diviértete mientras te ejercitas al ritmo de los mejores hits latinos. ¡No se requiere experiencia previa!'
  },
  {
    id: 's7',
    sport: 'Danza',
    title: 'Space Dance Studio - Hip Hop',
    date: 'Miércoles, 1 Nov',
    time: '07:00 PM',
    duration: '90 min',
    location: 'Sede Principal Space',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523800/0d48e693-bb2c-4f56-8268-52363e12b7e5.png',
    description: 'Aprende las mejores coreografías de danza urbana en el estudio más tecnológico de la ciudad.'
  },
  {
    id: 's8',
    sport: 'Danza',
    title: 'Umaima Shek - Danza Oriental',
    date: 'Jueves, 2 Nov',
    time: '06:00 PM',
    duration: '60 min',
    location: 'Estudio Umaima',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523809/f5deb1a4-799f-4368-8444-a2e6413471af.png',
    description: 'Descubre el arte de la danza oriental y mejora tu flexibilidad y fuerza abdominal.'
  },
  {
    id: 's9',
    sport: 'Fútbol',
    title: 'Kanteranos - Entrenamiento Elite',
    date: 'Viernes, 3 Nov',
    time: '04:00 PM',
    duration: '120 min',
    location: 'Canchas El Campincito',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523819/65a91507-6850-4ed1-87d3-c31aa0e17f5f.png',
    description: 'Entrenamiento técnico de alto nivel para jóvenes que quieren llevar su juego al siguiente nivel.'
  },
  {
    id: 's10',
    sport: 'Fútbol',
    title: 'Six Sensations - Torneo Mixto',
    date: 'Sábado, 4 Nov',
    time: '11:00 AM',
    duration: '180 min',
    location: 'Club Six Sensations',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523822/9890551d-1ab4-4d83-aa09-60f7c3e4c55d.png',
    description: 'Participa en nuestro torneo relámpago mixto con premios y hidratación incluida.'
  },
  {
    id: 's11',
    sport: 'Pilates',
    title: 'Pulse Pilates - Reformer Session',
    date: 'Domingo, 5 Nov',
    time: '10:00 AM',
    duration: '50 min',
    location: 'Sede Pulse 93',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523885/74715870-8804-4334-aa53-612281d34d26.png',
    description: 'Sesión de Pilates Reformer enfocada en el control y la tonificación profunda.'
  },
  {
    id: 's12',
    sport: 'Pilates',
    title: 'Ulai Pilates - Power Flow',
    date: 'Lunes, 6 Nov',
    time: '08:00 AM',
    duration: '60 min',
    location: 'Ulai Studio',
    image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770523890/0fbd1c00-1bc9-4cfd-9266-f0e58ffeaf72.png',
    description: 'Un flujo dinámico de Pilates que combina fuerza tradicional con movimientos modernos.'
  }
];

export const MOCK_TALKS = [
  {
    id: 't1',
    topic: 'Nutrición',
    title: 'Alimentación Consciente para Estudiantes',
    location: 'Auditorio Central',
    date: '25 de Octubre',
    time: '10:00 AM',
    expert: 'Dra. Sofía Mendez',
    duration: '90 min',
    description: 'Aprende a nutrir tu cerebro para mejorar el rendimiento académico.'
  },
  {
    id: 't2',
    topic: 'Obesidad',
    title: 'Prevención de Riesgos Metabólicos',
    location: 'Sala de Conferencias B',
    date: '26 de Octubre',
    time: '02:00 PM',
    expert: 'Dr. Carlos Castro',
    duration: '60 min',
    description: 'Charla sobre hábitos saludables para prevenir el sobrepeso desde joven.'
  },
  {
    id: 't3',
    topic: 'Salud Mental',
    title: 'Manejo del Estrés Académico',
    location: 'Salón Comunitario',
    date: '27 de Octubre',
    time: '09:00 AM',
    expert: 'Dr. Ricardo Gómez',
    duration: '120 min',
    description: 'Herramientas psicológicas para afrontar periodos de alta carga de estudio.'
  },
  {
    id: 't4',
    topic: 'Covid',
    title: 'Secuelas y Recuperación Post-Pandemia',
    location: 'Centro de Salud Norte',
    date: '28 de Octubre',
    time: '11:00 AM',
    expert: 'Dra. Elena Castiblanco',
    duration: '45 min',
    description: 'Información médica sobre el cuidado del sistema respiratorio e inmune.'
  },
  {
    id: 't5',
    topic: 'Nutrición',
    title: 'Mitos de las Dietas de Moda',
    location: 'Gimnasio Municipal',
    date: '29 de Octubre',
    time: '04:00 PM',
    expert: 'Dr. Andrés Pardo',
    duration: '75 min',
    description: 'Un análisis científico sobre lo que realmente funciona para tu cuerpo.'
  }
];

export const MOCK_SOCIAL_FEED = [
  {
    id: '1',
    name: 'Mateo González',
    photo: 'https://picsum.photos/seed/u1/150/150',
    bio: 'Amante del yoga y la vida sana. ¡Vamos por esos 30 días!',
    recentActivity: 'Completó sesión de Yoga 20 min',
    interests: ['Yoga', 'Lectura'],
    streak: 15,
    comments: [
      { id: 'com1', name: 'Valentina Ruiz', text: '¡Increíble Mateo! Yo también quiero llegar a los 30 días.' },
      { id: 'com2', name: 'Dr. Ricardo Gómez', text: 'Excelente disciplina, Mateo.' }
    ]
  },
  {
    id: '2',
    name: 'Valentina Ruiz',
    photo: 'https://picsum.photos/seed/u2/150/150',
    bio: 'Correr me hace libre. Busco partners para el parque.',
    recentActivity: 'Corrió 5km en el Parque Central',
    interests: ['Running', 'Ciclismo'],
    streak: 7,
    comments: [
      { id: 'com3', name: 'Mateo González', text: '¿Qué días vas? Me encantaría unirme.' }
    ]
  },
  {
    id: '3',
    name: 'Dr. Ricardo Gómez',
    photo: 'https://picsum.photos/seed/u3/150/150',
    bio: 'Como psicólogo, creo que el bienestar mental es la base de todo.',
    recentActivity: 'Publicó: Tips para la ansiedad',
    interests: ['Meditación', 'Salud Mental'],
    streak: 22,
    comments: [
      { id: 'com4', name: 'Sofía Mendez', text: 'Muy necesarios estos consejos hoy en día, doctor.' }
    ]
  },
  {
    id: '4',
    name: 'Sofía Mendez',
    photo: 'https://picsum.photos/seed/u4/150/150',
    bio: 'Nutricionista apasionada por las recetas fáciles y ricas.',
    recentActivity: 'Compartió nueva receta de Smoothie',
    interests: ['Nutrición', 'Culinaria'],
    streak: 30,
    comments: [
      { id: 'com5', name: 'Valentina Ruiz', text: '¡Se ve delicioso! Lo probaré después de correr.' }
    ]
  },
  {
    id: '5',
    name: 'Andrés Pardo',
    photo: 'https://picsum.photos/seed/u5/150/150',
    bio: 'Entrenador personal. El secreto es la disciplina.',
    recentActivity: 'Hizo 100 flexiones hoy',
    interests: ['Gimnasio', 'Crossfit'],
    streak: 45,
    comments: []
  }
];

export const MOCK_RELAXATION = {
  podcasts: [
    { 
      id: 'p1', 
      title: 'Mente Serena', 
      duration: '20 min', 
      author: 'Dr. Calma', 
      image: 'https://res.cloudinary.com/dwoyltoyd/image/upload/v1770323282/f67f2d8c-99f8-4fe3-bc0a-9056b09e67fe.png',
      description: 'Una guía diaria para reducir el estrés y encontrar paz mental en minutos.'
    },
    { 
      id: 'p2', 
      title: 'Wellness Diario', 
      duration: '15 min', 
      author: 'Ana Salud', 
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000',
      description: 'Pequeños consejos de salud mental para aplicar en tu rutina universitaria.'
    },
    { 
      id: 'p3', 
      title: 'Sonidos del Bosque', 
      duration: '45 min', 
      author: 'Naturaleza Viva', 
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000',
      description: 'Inmersión acústica total para concentrarte o dormir profundamente.'
    }
  ],
  books: [
    { 
      id: 'b1', 
      title: 'El Arte de Respirar', 
      author: 'James Nestor', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000',
      description: 'Explora cómo la forma en que respiras afecta cada aspecto de tu bienestar físico.' 
    },
    { 
      id: 'b2', 
      title: 'Hábitos Atómicos', 
      author: 'James Clear', 
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000',
      description: 'Aprende a construir rutinas que duren toda la vida con cambios minúsculos.' 
    },
    { 
      id: 'b3', 
      title: 'Minimalismo Digital', 
      author: 'Cal Newport', 
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000',
      description: 'Encuentra el equilibrio en un mundo lleno de distracciones tecnológicas.'
    }
  ]
};

export const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    title: '¡Nueva actividad cerca!',
    description: 'Se ha programado "Yoga al Atardecer" en el Parque de la Salud.',
    time: 'Hace 5 min',
    unread: true,
    category: 'activity'
  },
  {
    id: '2',
    title: 'Match aceptado',
    description: 'Valentina Ruiz ha aceptado tu solicitud de conexión. ¡Salúdala!',
    time: 'Hace 1 hora',
    unread: true,
    category: 'match'
  },
  {
    id: '3',
    title: 'Nueva racha alcanzada',
    description: '¡Felicidades! Has mantenido tu bienestar por 7 días seguidos.',
    time: 'Hoy, 8:00 AM',
    unread: false,
    category: 'streak'
  },
  {
    id: '4',
    title: 'Consejo del día',
    description: 'No olvides hidratarte. Beber agua mejora tu concentración.',
    time: 'Ayer',
    unread: false,
    category: 'tip'
  }
];

export const HOBBIES_LIST = [
  'Yoga', 'Gimnasio', 'Ciclismo', 'Meditación', 'Lectura', 'Natación', 'Danza', 'Correr', 'Pilates'
];

export const LEVELS = ['Nuevo', 'Medio', 'Avanzado', 'Experto'];
