const home = document.querySelector("#portrait-home")
const aboutMe = document.querySelector("#aboutMe")
const myStack = document.querySelector("#myStack")
const myProjects = document.querySelector("#myProjects")
const contact = document.querySelector("#contact")

function homeFunction() {

    home.innerHTML = 
    `
        <div class="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
            <div class="order-1 order-md-2">
                <img src="./assets/images/portrait/myslef.JPEG" class="img-fluid rounded-circle" alt="Foto de perfil" style="max-width: 300px;">
            </div>
            <div class="text-center text-md-start order-2 order-md-1">
                <h1 class="display-5 fw-bold mb-1">
                    Hola, soy <span style="color: var(--color-remark);">David</span> !
                </h1>
                <h5 class="mb-4">Desarrollador <span style="color: #7eb2ee;">FullStack</span></h5>
                <h4>
                    Programador buscavidas con +1 año de experiencia autodidacta mientras curso un Bootcamp FullStack de desarrollo de páginas web
                </h4>
                <div class="d-flex justify-content-center justify-content-md-start gap-3 mt-4 flex-wrap">
                    <a href="https://www.linkedin.com/in/david-rodr%C3%ADguez-p%C3%A9rez-softdev/" target="_blank" class="btn btn-outline-light d-flex align-items-center gap-2">
                        <i class="bi bi-linkedin"></i>LinkedIn
                    </a>
                    <a href="https://github.com/davidrguez98" target="_blank" class="btn btn-outline-light d-flex align-items-center gap-2">
                        <i class="bi bi-github"></i> GitHub
                    </a>
                    <button id="copyEmailBtn" class="btn btn-outline-light d-flex align-items-center px-2">
                        ropeda98@gmail.com
                    </button>
                    <a href="./assets/files/cv-david-rodriguez.pdf" download class="btn btn-outline-light d-flex align-items-center px-2">
                        <i class="bi bi-file-earmark-arrow-down-fill me-1"></i>CV
                    </a>
                </div>
            </div>
        </div>
    `
}

function aboutMeFunction() {

    aboutMe.innerHTML = 
    `
        <div class="container">
            <div class="row align-items-center">
                <h3 class="fw-bold">Sobre mí</h3>
                <p class="mt-3">
                    Desde pequeño me ha fascinado la tecnología. Me pasaba el día leyendo sobre nuevos móviles, ordenadores y cualquier gadget que saliera. Siempre quería entender cómo funcionaban y qué los hacía diferentes.
                    <br><br>
                    Esa curiosidad me ha acompañado hasta hoy. Tras varios años trabajando como técnico de equipos médicos, decidí dar el salto a la programación. Actualmente me estoy formando como desarrollador full stack, creando proyectos reales que resuelven problemas del mundo real.
                    <br><br>
                    La diferencia es que <strong style="color: var(--color-remark);">ahora no solo entiendo la tecnología, también la creo.</strong>
                </p>
            </div>
        </div>
    `
}

function myStackFunction() {

    myStack.innerHTML = 
    `
        <div class="container" style="width: 100%;">
            <h3 class="fw-bold mb-4">Mis tecnologías y skills</h3>
            <div class="stack-container d-flex justify-content-center gap-3">

                <div class="container-tech-card d-flex flex-column gap-3 p-3">
                    <div>
                        <h4>Back-End</h4>
                        <div class="p-3">
                            <div class="tech-grid" style="width: 100%;">
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/python-c.png" alt="Python" class="tech-icon">
                                    <p class="m-0 pt-1" style="font-size: 16px;">Python</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                        <h5 style="padding-top: 1rem;">Aprendiendo</h5>
                        <div class="pt-3">
                            <div class="tech-grid">
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/nodejs.png" alt="NodeJS" class="tech-icon">
                                    <p class="m-0 pt-2">NodeJS</p>
                                </div>
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/expressjs.png" alt="ExpressJS" class="tech-icon">
                                    <p class="m-0 pt-2">ExpressJS</p>
                                </div>
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/mongodb.png" alt="MongoDB" class="tech-icon">
                                    <p class="m-0 pt-2">MongoDB</p>
                                </div>
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/socketio.png" alt="Socket.IO" class="tech-icon">
                                    <p class="m-0 pt-2">Socket.IO</p>
                                </div>
                                <div class="tech-card text-center">
                                    <img src="./assets/images/stack/sql.png" alt="SQL" class="tech-icon">
                                    <p class="m-0 pt-2">SQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-tech-card d-flex flex-column gap-3 p-3">
                    <div>
                        <h4>Front-End</h4>
                        <div class="tech-grid p-3">
                            <div class="tech-card text-center">
                                <img src="./assets/images/stack/js-c.png" alt="JavaScript" class="tech-icon">
                                <p class="m-0 pt-2">JavaScript</p>
                            </div>
                            <div class="tech-card text-center">
                                <img src="./assets/images/stack/html5-c.png" alt="HTML" class="tech-icon">
                                <p class="m-0 pt-2">HTML</p>
                            </div>
                            <div class="tech-card text-center">
                                <img src="./assets/images/stack/css-c.png" alt="CSS" class="tech-icon">
                                <p class="m-0 pt-2">CSS</p>
                            </div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                        <h5 style="padding-top: 1rem;">Aprendiendo</h5>
                        <div class="tech-grid pt-3">
                            <div class="tech-card text-center">
                                <img src="./assets/images/stack/react.png" alt="ReactJS" class="tech-icon">
                                <p class="m-0 pt-2">ReactJS</p>
                            </div>
                            <div class="tech-card text-center">
                                <img src="./assets/images/stack/angularjs.png" alt="Angular" class="tech-icon">
                                <p class="m-0 pt-2">Angular</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container-tech-card d-flex flex-column gap-3 p-3">
                    <div>
                        <h4>Skills</h4>
                        <div class="row pt-3 g-2">
                        <h5 class="m-0 pb-2 ps-3">• Manejo de APIs</h5>
                        <h5 class="m-0 pb-2 ps-3">• Uso de Git/GitHub</h5>
                        <h5 class="m-0 pb-2 ps-3">• Testing básico con Unittest</h5>
                        <h5 class="m-0 pb-2 ps-3">• Gestión de archivos JSON</h5>
                        <h5 class="m-0 pb-2 ps-3">• Manipulación del DOM</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
}

function myProjectsFunction() {

    myProjects.innerHTML = 
    `
        <div class="container">
            <h3 class="fw-bold mb-4">Mis proyectos</h3>
            <div class="d-flex flex-column align-items-center justify-content-center">

                <div id="card" class="card mb-3" style="width: 100%; background-color: rgba(101, 101, 101, 0.2) !important; backdrop-filter: blur(30px); color: var(--color-text);">
                    <div class="project-container row g-5 p-2 flex-column flex-md-row">
                        <div class="project-container-img col-md-4">
                            <a href="https://github.com/davidrguez98/Neoland-Proyecto-Lista-Compra"
                                class="project-link"
                                target="_blank"
                                aria-label="Abrir repositorio en GitHub">
                                <img src="./assets/images/projects/home_display.png"
                                    class="img-fluid"
                                    style="border-radius: .25rem; width: 100%;"
                                    alt="Captura Coffee Store Web App">
                                <span class="overlay" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="34" height="34">
                                    <path fill="currentColor"
                                        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5
                                            5h6V3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-2v6H5V5Z"/>
                                </svg>
                                <span class="overlay-text">Ver repositorio</span>
                                </span>
                            </a>
                        </div>

                        <div class="project-container-rest col-md-8 d-flex flex-column justify-content-between p-0 pe-3">
                            <div class="project-container-rest-descript">
                                <div class="card-header border-bottom-0 p-0">
                                    <ul class="nav nav-tabs card-header-tabs px-3" id="myTab-one" role="tablist">
                                        <li class="nav-item" role="presentation"><button class="nav-link active" id="fullStack-tab-one" data-bs-toggle="tab" data-bs-target="#fullStack-one" type="button" role="tab" aria-controls="fullStack-one" aria-selected="true" style="background-color: var(--color-background); color: var(--color-text); border: none">Full stack</button></li>
                                    </ul>
                                </div>

                                <div class="tab-content px-3 pb-0 ps-3">
                                    <div class="tab-pane fade show active" id="fullStack-one" role="tabpanel" aria-labelledby="fullStack-tab-one">
                                        <h5 class="card-title mt-3">Coffee Store Web App</h5>
                                        <p class="card-text">Aplicación web para gestionar una tienda de café con carrito de compras y gestión
                                        de inventario. Todo funciona en el navegador usando HTML, CSS y JavaScript con LocalStorage.</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/js-c.png"   alt="JavaScript" class="tech-icon">
                                            <img src="./assets/images/stack/html5-c.png" alt="HTML"       class="tech-icon">
                                            <img src="./assets/images/stack/css-c.png"   alt="CSS"        class="tech-icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card mb-3" style="width: 100%; background-color: rgba(101, 101, 101, 0.2) !important; backdrop-filter: blur(30px); color: var(--color-text);">
                    <div class="project-container row g-5 p-2 flex-column flex-md-row">
                        <div class="project-container-img col-md-4">
                            <a href="https://github.com/davidrguez98/weather-web"
                                class="project-link"
                                target="_blank"
                                aria-label="Abrir repositorio en GitHub">
                                <img src="./assets/images/projects/bigsize-1.png"
                                    class="img-fluid"
                                    style="border-radius: .25rem; width: 100%;"
                                    alt="Captura Weather-Web App">

                                <span class="overlay" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="34" height="34"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6V3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-2v6H5V5Z"/></svg>
                                    <span class="overlay-text">Ver repositorio</span>
                                </span>
                            </a>
                        </div>

                        <div class="project-container-rest col-md-8 d-flex flex-column justify-content-between p-0 pe-3">
                            <div class="project-container-rest-descript">
                                <div class="card-header border-bottom-0 p-0">
                                    <ul class="nav nav-tabs card-header-tabs px-3" id="myTab-two" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="fullStack-tab-two" data-bs-toggle="tab" data-bs-target="#fullStack-two" type="button" role="tab" aria-controls="fullStack-two" aria-selected="true" style="background-color: var(--color-background); color: var(--color-text); border: none">Full stack</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="backEnd-tab-two" data-bs-toggle="tab" data-bs-target="#backEnd-two" type="button" role="tab" aria-controls="backEnd-two" aria-selected="false" style="background-color: var(--color-background); color: var(--color-text); border: none">Back-End</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content px-3 pb-0 ps-3">
                                    <div class="tab-pane fade show active" id="fullStack-two" role="tabpanel" aria-labelledby="fullStack-tab-two">
                                        <h5 class="card-title mt-3">WeatherApp</h5>
                                        <p class="card-text">WeatherApp es una aplicación web que muestra información detallada del clima para cualquier ciudad del mundo durante los próximos 7 días. Muestra condiciones como temperatura, humedad, probabilidad de lluvia, salida y puesta de sol, ¡con un diseño limpio y responsive!</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/js-c.png" alt="JavaScript" class="tech-icon">
                                            <img src="./assets/images/stack/html5-c.png" alt="HTML" class="tech-icon">
                                            <img src="./assets/images/stack/css-c.png" alt="CSS" class="tech-icon">
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="backEnd-two" role="tabpanel" aria-labelledby="backEnd-tab-two">
                                        <h5 class="card-title mt-3">Weather Console App</h5>
                                        <p class="card-text">Aplicación de consola desarrollada en Python que permite consultar la previsión meteorológica de una ciudad durante un rango de días. Se conecta a la API de Visual Crossing y devuelve un informe detallado del tiempo, incluyendo temperatura media, máximas, mínimas y probabilidad de precipitaciones.</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/python-c.png" alt="Python" class="tech-icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3" style="width: 100%; background-color: rgba(101, 101, 101, 0.2) !important; backdrop-filter: blur(30px); color: var(--color-text);">
                    <div class="project-container row g-5 p-2 flex-column flex-md-row">
                        <div class="project-container-img col-md-4">
                            <a href="https://github.com/davidrguez98/ytshorts-generator"
                                class="project-link"
                                target="_blank"
                                aria-label="Abrir repositorio en GitHub">
                                <img src="./assets/images/projects/yt.png"
                                    class="img-fluid"
                                    style="border-radius: .25rem; width: 100%;"
                                    alt="Captura To-Do Web App">

                                <span class="overlay" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="34" height="34">
                                    <path fill="currentColor"
                                        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5
                                            5h6V3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2
                                            2 0 0 0 2-2v-6h-2v6H5V5Z"/>
                                </svg>
                                <span class="overlay-text">Ver repositorio</span>
                                </span>
                            </a>
                        </div>

                        <div class="project-container-rest col-md-8 d-flex flex-column justify-content-between p-0 pe-3">
                            <div class="project-container-rest-descript">
                                <div class="card-header border-bottom-0 p-0">
                                    <ul class="nav nav-tabs card-header-tabs px-3" id="myTab-three" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="backEnd-tab-three" data-bs-toggle="tab" data-bs-target="#backEnd-three" type="button" role="tab" aria-controls="backEnd-three" aria-selected="true" style="background-color: var(--color-background); color: var(--color-text); border: none">Back-End</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content px-3 pb-0 ps-3">
                                    <div class="tab-pane fade show active" id="backEnd-three" role="tabpanel" aria-labelledby="backEnd-tab-three">
                                        <h5 class="card-title mt-3">Automatizador de Shorts de YouTube</h5>
                                        <p class="card-text">Este proyecto genera vídeos tipo Short de YouTube de forma automatizada, combinando clips de vídeo, audios y subtítulos. Además, recopila noticias actuales desde NewsAPI para crear contenido diario basado en temas tecnológicos, económicos, salud, ciencia, deportes y políticos.</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/python-c.png" alt="Python" class="tech-icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3" style="width: 100%; background-color: rgba(101, 101, 101, 0.2) !important; backdrop-filter: blur(30px); color: var(--color-text);">
                    <div class="project-container row g-5 p-2 flex-column flex-md-row">
                        <div class="project-container-img col-md-4">
                            <a href="https://github.com/davidrguez98/to-do-web"
                                class="project-link"
                                target="_blank"
                                aria-label="Abrir repositorio en GitHub">
                                <img src="./assets/images/projects/todo.jpg"
                                    class="img-fluid"
                                    style="border-radius: .25rem; width: 100%;"
                                    alt="Captura To-Do Web App">

                                <!-- Overlay que aparece al pasar el puntero -->
                                <span class="overlay" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="34" height="34">
                                    <path fill="currentColor"
                                        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5
                                            5h6V3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2
                                            2 0 0 0 2-2v-6h-2v6H5V5Z"/>
                                </svg>
                                <span class="overlay-text">Ver repositorio</span>
                                </span>
                            </a>
                        </div>

                        <div class="project-container-rest col-md-8 d-flex flex-column justify-content-between p-0 pe-3">
                            <div class="project-container-rest-descript">
                                <div class="card-header border-bottom-0 p-0">
                                    <ul class="nav nav-tabs card-header-tabs px-3" id="myTab-four" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="fullStack-tab-four" data-bs-toggle="tab" data-bs-target="#fullStack-four" type="button" role="tab" aria-controls="fullStack-four" aria-selected="true" style="background-color: var(--color-background); color: var(--color-text); border: none">Full stack</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="backEnd-tab-four" data-bs-toggle="tab" data-bs-target="#backEnd-four" type="button" role="tab" aria-controls="backEnd-four" aria-selected="false" style="background-color: var(--color-background); color: var(--color-text); border: none">Back-End</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content px-3 pb-0 ps-3">
                                    <div class="tab-pane fade show active" id="fullStack-four" role="tabpanel" aria-labelledby="fullStack-tab-four">
                                        <h5 class="card-title mt-3">To-Do Web App</h5>
                                        <p class="card-text">Este proyecto es una aplicación web de lista de tareas (To-Do List), desarrollada como práctica de HTML, CSS y JavaScript puro. Permite añadir, editar, marcar como realizadas y visualizar tareas con una interfaz limpia y responsive.</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/js-c.png" alt="JavaScript" class="tech-icon">
                                            <img src="./assets/images/stack/html5-c.png" alt="HTML" class="tech-icon">
                                            <img src="./assets/images/stack/css-c.png" alt="CSS" class="tech-icon">
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="backEnd-four" role="tabpanel" aria-labelledby="backEnd-tab-four">
                                        <h5 class="card-title mt-3">To-Do</h5>
                                        <p class="card-text">Aplicación de consola en Python que permite crear, listar, modificar, marcar como completadas y eliminar tareas. Las tareas se almacenan de forma persistente en un archivo JSON local. Es un proyecto ideal para practicar estructuras de control, manejo de archivos, clases y persistencia de datos sin base de datos.</p>
                                        <div class="tech-card-project d-flex gap-3">
                                            <img src="./assets/images/stack/python-c.png" alt="Python" class="tech-icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
}

function contactFunction() {

    contact.innerHTML = 
    `
        <div class="container">
            <div class="row">
                <div class="row align-items-center">
                    <h3 class="fw-bold">Contacto</h3>
                    <p class="mt-3">
                        Si quieres ponerte en contacto conmigo, aquí tienes mis enlaces directos. Ya sea para colaborar, contratarme o simplemente charlar sobre tecnología, estaré encantado de responderte.
                    </p>
                    <div class="contact-container d-flex flex-wrap align-items-center mt-3">
                        <button id="copyEmailBtn" class="btn btn-outline-light d-flex align-items-center px-2">
                            ropeda98@gmail.com
                        </button>
                        <a href="./assets/files/cv-david-rodriguez.pdf" download class="btn btn-outline-light d-flex align-items-center px-2">
                            <i class="bi bi-file-earmark-arrow-down-fill me-1"></i>CV
                        </a>
                        <a href="https://github.com/davidrguez98" target="_blank" class="btn btn-outline-light d-flex align-items-center px-2">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/david-rodr%C3%ADguez-p%C3%A9rez-softdev/" target="_blank" class="btn btn-outline-light d-flex align-items-center px-2">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}

export function mainSection() {
    homeFunction()
    aboutMeFunction()
    myStackFunction()
    myProjectsFunction()
    contactFunction()
}