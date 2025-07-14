document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle para móviles
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Cargar dinámicamente los tipos de energía
    const energyGrid = document.querySelector('.energy-grid');
    
    const energyTypes = [
        {
            title: "Energía Solar",
            description: "La energía solar se obtiene de dos maneras: Fotovoltaica: Paneles con células de silicio convierten directamente la luz solar en electricidad corriente continua, luego convertida a alterna por un inversor    . Térmica: Colectores solares absorben el calor del sol para calentar un fluido, que se usa para agua caliente, calefacción o, a gran escala termosolar, para generar electricidad.Ambos métodos aprovechan el sol para reducir el uso de combustibles fósiles.",
            image: "img/panelsolar.jpg",
            stats: {
                capacity: "1.5",
                efficiency: "22",
                growth: "35"
            }
        },
        {
            title: "Energía Eólica",
            description: "La energía eólica es la electricidad generada por la fuerza del viento que mueve las aspas de los aerogeneradores. Es una energía renovable porque el viento es una fuente natural inagotable y su aprovechamiento no produce emisiones de gases de efecto invernadero ni contaminantes atmosféricos durante su operación. Esto la convierte en una pieza fundamental para combatir el cambio climático y lograr un futuro energético más limpio y sostenible.",
            image: "img/eolica.jpg",
            stats: {
                capacity: "2.8",
                efficiency: "45",
                growth: "25"
            }
        },
        {
            title: "Energía Hidroeléctrica",
            description: "La energía hidroeléctrica se obtiene aprovechando la fuerza del agua en movimiento, generalmente al caer desde una altura en represas o al fluir por ríos. Es una energía renovable porque el ciclo del agua es un recurso continuo y natural, impulsado por el sol. Además, su operación no emite gases de efecto invernadero ni contaminantes al aire, lo que la convierte en una fuente limpia y sostenible para generar electricidad a gran escala, contribuyendo significativamente a la lucha contra el cambio climático.",
            image: "img/represa.jpg",
            stats: {
                capacity: "4.2",
                efficiency: "90",
                growth: "15"
            }
        },
        {
            title: "Biomasa",
            description: "La energía de biomasa se obtiene del aprovechamiento de materia orgánica, como residuos agrícolas y forestales, cultivos energéticos o estiércol. Es una energía renovable porque la biomasa proviene de recursos biológicos que pueden regenerarse constantemente (plantas, árboles) y el carbono que liberan al ser quemados o transformados fue previamente absorbido de la atmósfera durante su crecimiento. Esto la convierte en una fuente energética más neutra en carbono, contribuyendo a la gestión de residuos y a la reducción de nuestra huella ambiental.",
            image: "img/biomasa.jpg",
            stats: {
                capacity: "0.8",
                efficiency: "30",
                growth: "20"
            }
        },
        {
            title: "Energía Geotérmica",
            description: "La energía geotérmica aprovecha el calor del interior de la Tierra, generado por la desintegración radiactiva de minerales. Es una energía renovable porque este calor es una fuente constante y virtualmente inagotable. Se utiliza para generar electricidad y para sistemas de calefacción/refrigeración. A diferencia de los combustibles fósiles, su uso no produce emisiones de gases de efecto invernadero significativas ni contaminantes atmosféricos, lo que la convierte en una opción limpia y estable para una transición energética sostenible.",
            image: "img/geotermica.jpg",
            stats: {
                capacity: "0.5",
                efficiency: "75",
                growth: "10"
            }
        },
        {
            title: "Energía Nuclear",
            description: "La energía nuclear se genera a partir de la fisión de átomos (principalmente uranio) en centrales nucleares. Aunque a menudo se debate su clasificación, se considera una fuente de energía limpia en términos de emisiones de gases de efecto invernadero, ya que no produce CO2 ni otros contaminantes atmosféricos durante su operación. Sin embargo, no se clasifica como renovable en el sentido estricto porque utiliza un recurso (uranio) que es finito, y genera residuos radiactivos de larga vida útil que requieren un manejo especializado. Su gran ventaja es la alta producción de energía con una mínima huella de carbono.",
            image: "img/nuclear.jpg",
            stats: {
                capacity: "0.4",
                efficiency: "33",
                growth: "3.9"
            }
        }
    ];
    
    energyTypes.forEach(type => {
        const energyCard = document.createElement('div');
        energyCard.className = 'energy-card';
        
        energyCard.innerHTML = `
            <div class="energy-img">
                <img src="${type.image}" alt="${type.title}">
            </div>
            <div class="energy-content">
                <h3>${type.title}</h3>
                <p>${type.description}</p>
                <div class="energy-stats">
                    <div class="stat">
                        <h4>${type.stats.capacity} TW</h4>
                        <p>Capacidad</p>
                    </div>
                    <div class="stat">
                        <h4>${type.stats.efficiency}%</h4>
                        <p>Eficiencia</p>
                    </div>
                    <div class="stat">
                        <h4>${type.stats.growth}%</h4>
                        <p>Crecimiento</p>
                    </div>
                </div>
            </div>
        `;
        
        energyGrid.appendChild(energyCard);
    });
    
    // Funcionalidad de FAQ (Acordeón)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Selecciona el padre (.faq-item) del elemento clicado
        const faqItem = this.closest('.faq-item');
        
        // Verifica si el item ya está activo
        const isActive = faqItem.classList.contains('active');

        // Opcional: Cierra todos los otros items si quieres que solo uno esté abierto a la vez
        // document.querySelectorAll('.faq-item').forEach(item => {
        //     item.classList.remove('active');
        // });

        // Alterna la clase 'active' en el faq-item
        faqItem.classList.toggle('active', !isActive);

        // Ajusta la altura del faq-answer para el efecto de acordeón
        const faqAnswer = faqItem.querySelector('.faq-answer');
        
        if (faqItem.classList.contains('active')) {
            // Establece max-height a la altura real del contenido para mostrarlo
            // Esto es necesario para la transición, ya que max-height: auto no funciona con transiciones
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        } else {
            // Cierra el acordeón estableciendo max-height a 0
            faqAnswer.style.maxHeight = "0";
        }
    });
});

    // Gráfico de beneficios
    const benefitsCtx = document.getElementById('benefitsChart').getContext('2d');
    const benefitsChart = new Chart(benefitsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Reducción de CO2', 'Ahorro económico', 'Creación de empleo', 'Independencia energética'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: [
                    '#4CAF50',
                    '#8BC34A',
                    '#CDDC39',
                    '#2E7D32'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                }
            },
            cutout: '70%'
        }
    });
    
    // Slider de proyectos
    const projectsSlider = document.querySelector('.projects-slider');
    
    const projects = [
        {
            title: "Parque Solar del Desierto de Tengger",
            description: "El Parque Solar del Desierto de Tengger en China es una de las mayores plantas fotovoltaicas del mundo, apodada La Gran Muralla China del Sol. Ubicada en el árido desierto de Tengger, ocupa extensas áreas y, al momento de su puesta en marcha en 2015-2017, fue la más grande del planeta con una capacidad de 1.547 MW. Su desarrollo subraya el compromiso de China con la energía solar a gran escala para descarbonizar su matriz energética.",
            image: "img/parquesolar.jpg",
            location: "China",
            url:"https://en.wikipedia.org/wiki/Tengger_Desert_Solar_Park"
        },
        {
            title: "East Anglia Hub",
            description: "El East Anglia Hub es un mega complejo de parques eólicos marinos en el Mar del Norte, frente a la costa del Reino Unido, desarrollado por ScottishPower Renewables (parte de Iberdrola). Este hub agrupa varios proyectos (como East Anglia ONE North, TWO y THREE) que, combinados, buscan alcanzar una capacidad instalada total de aproximadamente 2.9 a 3.1 Gigavatios (GW). Una vez completado, será capaz de suministrar energía limpia a millones de hogares británicos, jugando un papel fundamental en los ambiciosos objetivos del Reino Unido para descarbonizar su red eléctrica y alcanzar el cero neto.",
            image: "img/UKeolica.jpg",
            location: "Reino Unido",
             url:"https://en.wikipedia.org/wiki/East_Anglia_Array"
        },
        {
            title: "Gran Presa del Renacimiento Etíope",
            description: "La Gran Presa del Renacimiento Etíope (GERD) es un gigantesco proyecto hidroeléctrico en el río Nilo Azul, Etiopía, considerado el más grande de África con una capacidad proyectada de hasta 6.450 MW. Su construcción es vital para Etiopía, buscando impulsar su desarrollo económico y social al proporcionar electricidad a millones de personas y permitir la exportación de energía. Sin embargo, ha generado tensiones significativas con países aguas abajo como Egipto y Sudán, quienes temen por la reducción del flujo de agua del Nilo, crucial para su agricultura y suministro. Actualmente, el llenado del embalse está completo y varias turbinas ya están operativas, marcando un hito en la ambición etíope de convertirse en una potencia energética regional.",
            image: "img/etiopia.jpg",
            location: "Etiopia",
             url:"https://es.wikipedia.org/wiki/Gran_Presa_del_Renacimiento_Et%C3%ADope"
        }
    ];
    
    projects.forEach(project => {
        const projectSlide = document.createElement('div');
        projectSlide.className = 'project-slide';
        
        projectSlide.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                <p>${project.description}</p>
                <a href=${project.url} class="btn"
                target="_blank"
                >Más información</a>
            </div>
        `;
        
        projectsSlider.appendChild(projectSlide);
    });
    
    // Formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxbwk6052TuDYRjaMfR2n7Jze2I6VFCRITtb8Und8S3CC92ksEzw4NbjdRwlt78sXxasw/exec', {
                method: 'POST',
                mode: 'cors', // Especificar modo CORS
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            this.reset();
            
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente más tarde.');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
    
    // Animación al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.energy-card, .benefits-content, .project-slide');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Establecer opacidad inicial para los elementos a animar
    document.querySelectorAll('.energy-card, .benefits-content, .project-slide').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página
});