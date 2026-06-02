// Activar el menú hamburguesa en móviles
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
});
/* =========================================
   CONTROL DE VENTANAS MODALES
   ========================================= */

// Función para abrir el modal
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = 'block';
    
    // Opcional: Auto-reproducir el video largo al abrir el modal
    const video = modal.querySelector('video');
    if(video) {
        video.play();
    }
}

// Función para cerrar el modal y pausar el video
function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = 'none';
    
    // Si cerramos la ventana, el video debe pausarse y regresar al inicio
    const video = modal.querySelector('video');
    if(video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Cerrar el modal si el usuario hace clic en la parte oscura fuera de la caja blanca
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        
        // Pausar video también aquí
        const video = event.target.querySelector('video');
        if(video) {
            video.pause();
            video.currentTime = 0;
        }
    }
}