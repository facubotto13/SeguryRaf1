
/*DESHABILITAR CLICK DERECHO
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
*/

document.addEventListener('DOMContentLoaded', function() {
  const showElement = document.querySelector('.show');
  
  // Muestra el elemento de inmediato sin esperar a hacer scroll
  if (showElement) {
      showElement.classList.add('visible');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.story-image, .story-text, .company');
  elements.forEach(element => {
      element.classList.add('show');
  });
});

//HISTORIA MODO PRESENTACION
document.addEventListener('DOMContentLoaded', () => {
  const elementsToShow = document.querySelectorAll('.story-image, .story-text');

  const animateOnScroll = () => {
      elementsToShow.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
              element.classList.add('show');
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ejecuta la función al cargar la página
});

//MODAL SERVICIO
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blog1 = document.querySelector(".blog-1");
  var span = document.getElementsByClassName("close")[0];

  // Verifica si el modal fue encontrado
  if (!modal) {
      
      return;
  }

  // Verifica si el bloque de noticias fue encontrado
  if (!blog1) {
      
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      
      return;
  }

  // Cuando el usuario hace clic en el bloque de noticias, se abre el modal
  blog1.onclick = function() {
      modal.style.display = "block";
  }

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

//ABRIR MODAL SIN BOTON
// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blogs = document.querySelectorAll(".blog-1");
  var span = document.getElementsByClassName("close")[0];
  var modalTitle = document.getElementById("modalTitle");
  var modalContent = document.getElementById("modalContent");
  var modalImage = document.getElementById("modalImage");

  // Verifica si el modal fue encontrado
  if (!modal) {
      //console.error('Modal with ID "myModal" not found.');
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      //console.error('Element with class "close" not found.');
      return;
  }

  // Añade el evento de clic a cada bloque de noticias
  blogs.forEach(function(blog) {
      blog.onclick = function(event) {
          var title = blog.getAttribute("data-title");
          var content = blog.getAttribute("data-content");
          var image = blog.getAttribute("data-image");

          // Actualiza el contenido del modal
          modalTitle.textContent = title;
          modalContent.textContent = content;
          modalImage.src = image;

          // Muestra el modal
          modal.style.display = "block";
      }
  });

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});


 
 // Función para desplazamiento suave
 function scrollToSection(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del enlace

  const targetId = event.currentTarget.getAttribute("href").substring(1); // Obtiene el id del objetivo (sin el '#')
  const targetSection = document.getElementById(targetId); // Busca el elemento por su id

  if (targetSection) {
      const offsetTop = targetSection.offsetTop; // Calcula la posición superior del elemento
      window.scrollTo({
          top: offsetTop,
          behavior: "smooth" // Hace el desplazamiento suave
      });
  }
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('open');
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón del menú hamburguesa y el menú
    var menuButton = document.querySelector('img.menu');
    var menu = document.querySelector('.menu');
  
    if (menuButton && menu) {
      // Función para cerrar el menú
      function closeMenu() {
        menu.classList.remove('open');
      }
  
      // Event listener para el botón del menú
      menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces del menú
      var menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
          // Cerrar el menú
          closeMenu();
  
          // Manejar la navegación suave a través de anclas (#)
          var targetId = menuLink.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  
      // Event listener para cerrar el menú al hacer clic fuera de él
      document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideMenuButton = menuButton.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideMenuButton) {
          menu.classList.remove('open');
        }
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces internos (#)
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          var targetId = anchor.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Cerrar el menú después de navegar a la sección
          }
        });
      });
    } else {
      //console.error('No se encontró el botón del menú o el menú.');
    }
  });


//FUNCION PARA QUE SE CIERRE EL MENU CUANDO ME DESPLAZO EN LA PANTALLA CON EL ANCLAJE #
document.addEventListener("DOMContentLoaded", function() {
  const menuCheckbox = document.getElementById('menu');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (link.getAttribute('href').startsWith('#')) {
        menuCheckbox.checked = false;
      }
    });
  });
});

document.addEventListener('scroll', function() {
    const header = document.querySelector('.menu.container');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.btn-4');
    const closeBtns = document.querySelectorAll('.close-btn');
    const volverBtns = document.querySelectorAll('.volver-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            } else {
                //console.error(`Modal with ID ${modalId} not found.`);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    volverBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
/*
document.getElementById("toggle-ver").addEventListener("click", function() {
  var hiddenElements = document.querySelectorAll(".blog-1.hidden");
  var visibleElements = document.querySelectorAll(".blog-1:not(.hidden)");

  if (this.textContent === "Ver más") {
      hiddenElements.forEach(function(element) {
          element.classList.remove("hidden");
      });
      this.textContent = "Ver menos";
  } else {
      hiddenElements.forEach(function(element) {
          element.classList.add("hidden");
      });
      visibleElements.forEach(function(element, index) {
          if (index >= 4) {
              element.classList.add("hidden");
          }
      });
      this.textContent = "Ver más";
  }
});
*/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const images = [
    'imagenes/1.png',
    'imagenes/2.png',
    'imagenes/3.png',
  ]; // Lista de imágenes de fondo
  let currentIndex = 0;

  // Crear las tres capas de fondo y la capa de contenido
  const backgroundLayer1 = document.createElement('div');
  backgroundLayer1.classList.add('background-layer', 'visible');
  backgroundLayer1.style.backgroundImage = `url(${images[0]})`;
  header.appendChild(backgroundLayer1);

  const backgroundLayer2 = document.createElement('div');
  backgroundLayer2.classList.add('background-layer');
  backgroundLayer2.style.backgroundImage = `url(${images[1]})`;
  header.appendChild(backgroundLayer2);

  const backgroundLayer3 = document.createElement('div');
  backgroundLayer3.classList.add('background-layer');
  backgroundLayer3.style.backgroundImage = `url(${images[2]})`;
  header.appendChild(backgroundLayer3);

  const foregroundLayer = document.createElement('div');
  foregroundLayer.classList.add('foreground-layer');
  header.appendChild(foregroundLayer);

  // Función para cambiar el fondo con transición suave
  function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length;

    const layers = [backgroundLayer1, backgroundLayer2, backgroundLayer3];
    const currentLayer = layers[currentIndex];
    const nextLayer = layers[nextIndex];

    nextLayer.classList.add('visible');
    currentLayer.classList.remove('visible');

  }

  // Cambia el fondo cada 6 segundos (6000 milisegundos)
  setInterval(changeBackground, 6000);
});


// Función para mostrar más noticias al hacer clic en el botón "Ver más"
function mostrarMas() {
  var noticiasOcultas = document.querySelectorAll('.blog-1.hidden');
  noticiasOcultas.forEach(function(noticia) {
      noticia.classList.remove('hidden');
  });

  // Re-initialize Swiper
  swiper.update();
}

// Inicialización de Swiper
/*var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});*/

//PARRAFOS DEL MODAL DE SERVICIOS
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}

// Opcional: Manejar el evento de entrada para ocultar el mensaje de error cuando el usuario empieza a escribir
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', function() {
      const errorSpan = document.getElementById(`${this.id}Error`);
      if (this.validity.valid) {
          errorSpan.style.display = 'none';
      }
  });
});
//HISTORIA MODO PRESENTACION
document.addEventListener('DOMContentLoaded', () => {
  const elementsToShow = document.querySelectorAll('.story-image, .story-text');

  const animateOnScroll = () => {
      elementsToShow.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
              element.classList.add('show');
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ejecuta la función al cargar la página
});

//MODAL SERVICIO
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blog1 = document.querySelector(".blog-1");
  var span = document.getElementsByClassName("close")[0];

  // Verifica si el modal fue encontrado
  if (!modal) {
      //console.error('Modal with ID "myModal" not found.');
      return;
  }

  // Verifica si el bloque de noticias fue encontrado
  if (!blog1) {
      //console.error('Element with class "blog-1" not found.');
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      //console.error('Element with class "close" not found.');
      return;
  }

  // Cuando el usuario hace clic en el bloque de noticias, se abre el modal
  blog1.onclick = function() {
      modal.style.display = "block";
  }

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

//ABRIR MODAL SIN BOTON
// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blogs = document.querySelectorAll(".blog-1");
  var span = document.getElementsByClassName("close")[0];
  var modalTitle = document.getElementById("modalTitle");
  var modalContent = document.getElementById("modalContent");
  var modalImage = document.getElementById("modalImage");

  // Verifica si el modal fue encontrado
  if (!modal) {
      //console.error('Modal with ID "myModal" not found.');
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      //console.error('Element with class "close" not found.');
      return;
  }

  // Añade el evento de clic a cada bloque de noticias
  blogs.forEach(function(blog) {
      blog.onclick = function(event) {
          var title = blog.getAttribute("data-title");
          var content = blog.getAttribute("data-content");
          var image = blog.getAttribute("data-image");

          // Actualiza el contenido del modal
          modalTitle.textContent = title;
          modalContent.textContent = content;
          modalImage.src = image;

          // Muestra el modal
          modal.style.display = "block";
      }
  });

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});


 
 // Función para desplazamiento suave
 function scrollToSection(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del enlace

  const targetId = event.currentTarget.getAttribute("href").substring(1); // Obtiene el id del objetivo (sin el '#')
  const targetSection = document.getElementById(targetId); // Busca el elemento por su id

  if (targetSection) {
      const offsetTop = targetSection.offsetTop; // Calcula la posición superior del elemento
      window.scrollTo({
          top: offsetTop,
          behavior: "smooth" // Hace el desplazamiento suave
      });
  }
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('open');
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón del menú hamburguesa y el menú
    var menuButton = document.querySelector('img.menu');
    var menu = document.querySelector('.menu');
  
    if (menuButton && menu) {
      // Función para cerrar el menú
      function closeMenu() {
        menu.classList.remove('open');
      }
  
      // Event listener para el botón del menú
      menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces del menú
      var menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
          // Cerrar el menú
          closeMenu();
  
          // Manejar la navegación suave a través de anclas (#)
          var targetId = menuLink.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  
      // Event listener para cerrar el menú al hacer clic fuera de él
      document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideMenuButton = menuButton.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideMenuButton) {
          menu.classList.remove('open');
        }
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces internos (#)
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          var targetId = anchor.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Cerrar el menú después de navegar a la sección
          }
        });
      });
    } else {
      //console.error('No se encontró el botón del menú o el menú.');
    }
  });

 /*  
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.img.menu');
    const navbar = document.querySelector('.menu .navbar');
    const menuContainer = document.querySelector('.menu.container');

   menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuContainer.classList.toggle('scrolled'); // Ajustar según sea necesario
    });

    // Cerrar el menú si se hace clic en el mismo botón de toggle
    menuToggle.addEventListener('click', function(event) {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuContainer.classList.remove('scrolled'); // Ajustar según sea necesario
        }
    });
});*/

//FUNCION PARA QUE SE CIERRE EL MENU CUANDO ME DESPLAZO EN LA PANTALLA CON EL ANCLAJE #
document.addEventListener("DOMContentLoaded", function() {
  const menuCheckbox = document.getElementById('menu');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (link.getAttribute('href').startsWith('#')) {
        menuCheckbox.checked = false;
      }
    });
  });
});






document.addEventListener('scroll', function() {
    const header = document.querySelector('.menu.container');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.btn-4');
    const closeBtns = document.querySelectorAll('.close-btn');
    const volverBtns = document.querySelectorAll('.volver-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            } else {
                //console.error(`Modal with ID ${modalId} not found.`);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    volverBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
/*
document.getElementById("toggle-ver").addEventListener("click", function() {
  var hiddenElements = document.querySelectorAll(".blog-1.hidden");
  var visibleElements = document.querySelectorAll(".blog-1:not(.hidden)");

  if (this.textContent === "Ver más") {
      hiddenElements.forEach(function(element) {
          element.classList.remove("hidden");
      });
      this.textContent = "Ver menos";
  } else {
      hiddenElements.forEach(function(element) {
          element.classList.add("hidden");
      });
      visibleElements.forEach(function(element, index) {
          if (index >= 4) {
              element.classList.add("hidden");
          }
      });
      this.textContent = "Ver más";
  }
});
*/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const images = [
    'imagenes/1.png',
    'imagenes/2.png',
    'imagenes/3.png',
  ]; // Lista de imágenes de fondo
  let currentIndex = 0;

  // Crear las tres capas de fondo y la capa de contenido
  const backgroundLayer1 = document.createElement('div');
  backgroundLayer1.classList.add('background-layer', 'visible');
  backgroundLayer1.style.backgroundImage = `url(${images[0]})`;
  header.appendChild(backgroundLayer1);

  const backgroundLayer2 = document.createElement('div');
  backgroundLayer2.classList.add('background-layer');
  backgroundLayer2.style.backgroundImage = `url(${images[1]})`;
  header.appendChild(backgroundLayer2);

  const backgroundLayer3 = document.createElement('div');
  backgroundLayer3.classList.add('background-layer');
  backgroundLayer3.style.backgroundImage = `url(${images[2]})`;
  header.appendChild(backgroundLayer3);

  const foregroundLayer = document.createElement('div');
  foregroundLayer.classList.add('foreground-layer');
  header.appendChild(foregroundLayer);

  // Función para cambiar el fondo con transición suave
  function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length;

    const layers = [backgroundLayer1, backgroundLayer2, backgroundLayer3];
    const currentLayer = layers[currentIndex];
    const nextLayer = layers[nextIndex];

    //console.log(`Changing from image ${currentIndex + 1} to image ${nextIndex + 1}`);

    nextLayer.classList.add('visible');
    currentLayer.classList.remove('visible');

    currentIndex = nextIndex;
    //console.log(`Current image index is now ${currentIndex}`);
  }

  // Cambia el fondo cada 6 segundos (6000 milisegundos)
  setInterval(changeBackground, 6000);
});





// Función para mostrar más noticias al hacer clic en el botón "Ver más"
function mostrarMas() {
  var noticiasOcultas = document.querySelectorAll('.blog-1.hidden');
  noticiasOcultas.forEach(function(noticia) {
      noticia.classList.remove('hidden');
  });

  // Re-initialize Swiper
  swiper.update();
}

/* Inicialización de Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});*/

//PARRAFOS DEL MODAL DE SERVICIOS
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}
//HISTORIA MODO PRESENTACION
document.addEventListener('DOMContentLoaded', () => {
  const elementsToShow = document.querySelectorAll('.story-image, .story-text');

  const animateOnScroll = () => {
      elementsToShow.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
              element.classList.add('show');
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ejecuta la función al cargar la página
});

//MODAL SERVICIO
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blog1 = document.querySelector(".blog-1");
  var span = document.getElementsByClassName("close")[0];

  // Verifica si el modal fue encontrado
  if (!modal) {
      //console.error('Modal with ID "myModal" not found.');
      return;
  }

  // Verifica si el bloque de noticias fue encontrado
  if (!blog1) {
      //console.error('Element with class "blog-1" not found.');
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      //console.error('Element with class "close" not found.');
      return;
  }

  // Cuando el usuario hace clic en el bloque de noticias, se abre el modal
  blog1.onclick = function() {
      modal.style.display = "block";
  }

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});

//ABRIR MODAL SIN BOTON
// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
  var modal = document.getElementById("myModal");
  var blogs = document.querySelectorAll(".blog-1");
  var span = document.getElementsByClassName("close")[0];
  var modalTitle = document.getElementById("modalTitle");
  var modalContent = document.getElementById("modalContent");
  var modalImage = document.getElementById("modalImage");

  // Verifica si el modal fue encontrado
  if (!modal) {
      //console.error('Modal with ID "myModal" not found.');
      return;
  }

  // Verifica si el botón de cierre fue encontrado
  if (!span) {
      //console.error('Element with class "close" not found.');
      return;
  }

  // Añade el evento de clic a cada bloque de noticias
  blogs.forEach(function(blog) {
      blog.onclick = function(event) {
          var title = blog.getAttribute("data-title");
          var content = blog.getAttribute("data-content");
          var image = blog.getAttribute("data-image");

          // Actualiza el contenido del modal
          modalTitle.textContent = title;
          modalContent.textContent = content;
          modalImage.src = image;

          // Muestra el modal
          modal.style.display = "block";
      }
  });

  // Cuando el usuario hace clic en <span> (x), se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});


 
 // Función para desplazamiento suave
 function scrollToSection(event) {
  event.preventDefault(); // Evita el comportamiento por defecto del enlace

  const targetId = event.currentTarget.getAttribute("href").substring(1); // Obtiene el id del objetivo (sin el '#')
  const targetSection = document.getElementById(targetId); // Busca el elemento por su id

  if (targetSection) {
      const offsetTop = targetSection.offsetTop; // Calcula la posición superior del elemento
      window.scrollTo({
          top: offsetTop,
          behavior: "smooth" // Hace el desplazamiento suave
      });
  }
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('open');
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón del menú hamburguesa y el menú
    var menuButton = document.querySelector('img.menu');
    var menu = document.querySelector('.menu');
  
    if (menuButton && menu) {
      // Función para cerrar el menú
      function closeMenu() {
        menu.classList.remove('open');
      }
  
      // Event listener para el botón del menú
      menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces del menú
      var menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
          // Cerrar el menú
          closeMenu();
  
          // Manejar la navegación suave a través de anclas (#)
          var targetId = menuLink.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  
      // Event listener para cerrar el menú al hacer clic fuera de él
      document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideMenuButton = menuButton.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideMenuButton) {
          menu.classList.remove('open');
        }
      });
  
      // Event listener para cerrar el menú al hacer clic en enlaces internos (#)
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          var targetId = anchor.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault(); // Evitar la navegación predeterminada
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Cerrar el menú después de navegar a la sección
          }
        });
      });
    } else {
      //console.error('No se encontró el botón del menú o el menú.');
    }
  });

  /*
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.img.menu');
    const navbar = document.querySelector('.menu .navbar');
    const menuContainer = document.querySelector('.menu.container');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuContainer.classList.toggle('scrolled'); // Ajustar según sea necesario
    });

    // Cerrar el menú si se hace clic en el mismo botón de toggle
    menuToggle.addEventListener('click', function(event) {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuContainer.classList.remove('scrolled'); // Ajustar según sea necesario
        }
    });
});*/

//FUNCION PARA QUE SE CIERRE EL MENU CUANDO ME DESPLAZO EN LA PANTALLA CON EL ANCLAJE #
document.addEventListener("DOMContentLoaded", function() {
  const menuCheckbox = document.getElementById('menu');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (link.getAttribute('href').startsWith('#')) {
        menuCheckbox.checked = false;
      }
    });
  });
});






document.addEventListener('scroll', function() {
    const header = document.querySelector('.menu.container');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.btn-4');
    const closeBtns = document.querySelectorAll('.close-btn');
    const volverBtns = document.querySelectorAll('.volver-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            } else {
                //console.error(`Modal with ID ${modalId} not found.`);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    volverBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
/*
document.getElementById("toggle-ver").addEventListener("click", function() {
  var hiddenElements = document.querySelectorAll(".blog-1.hidden");
  var visibleElements = document.querySelectorAll(".blog-1:not(.hidden)");

  if (this.textContent === "Ver más") {
      hiddenElements.forEach(function(element) {
          element.classList.remove("hidden");
      });
      this.textContent = "Ver menos";
  } else {
      hiddenElements.forEach(function(element) {
          element.classList.add("hidden");
      });
      visibleElements.forEach(function(element, index) {
          if (index >= 4) {
              element.classList.add("hidden");
          }
      });
      this.textContent = "Ver más";
  }
});
*/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const images = [
    'imagenes/1.png',
    'imagenes/2.png',
    'imagenes/3.png',
  ]; // Lista de imágenes de fondo
  let currentIndex = 0;

  // Crear las tres capas de fondo y la capa de contenido
  const backgroundLayer1 = document.createElement('div');
  backgroundLayer1.classList.add('background-layer', 'visible');
  backgroundLayer1.style.backgroundImage = `url(${images[0]})`;
  header.appendChild(backgroundLayer1);

  const backgroundLayer2 = document.createElement('div');
  backgroundLayer2.classList.add('background-layer');
  backgroundLayer2.style.backgroundImage = `url(${images[1]})`;
  header.appendChild(backgroundLayer2);

  const backgroundLayer3 = document.createElement('div');
  backgroundLayer3.classList.add('background-layer');
  backgroundLayer3.style.backgroundImage = `url(${images[2]})`;
  header.appendChild(backgroundLayer3);

  const foregroundLayer = document.createElement('div');
  foregroundLayer.classList.add('foreground-layer');
  header.appendChild(foregroundLayer);

  // Función para cambiar el fondo con transición suave
  function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length;

    const layers = [backgroundLayer1, backgroundLayer2, backgroundLayer3];
    const currentLayer = layers[currentIndex];
    const nextLayer = layers[nextIndex];

    //console.log(`Changing from image ${currentIndex + 1} to image ${nextIndex + 1}`);

    nextLayer.classList.add('visible');
    currentLayer.classList.remove('visible');

    currentIndex = nextIndex;
    //console.log(`Current image index is now ${currentIndex}`);
  }

  // Cambia el fondo cada 6 segundos (6000 milisegundos)
  setInterval(changeBackground, 6000);
});





// Función para mostrar más noticias al hacer clic en el botón "Ver más"
function mostrarMas() {
  var noticiasOcultas = document.querySelectorAll('.blog-1.hidden');
  noticiasOcultas.forEach(function(noticia) {
      noticia.classList.remove('hidden');
  });

  // Re-initialize Swiper
  swiper.update();
}

/* Inicialización de Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});*/

//PARRAFOS DEL MODAL DE SERVICIOS
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}
