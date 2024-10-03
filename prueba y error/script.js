// Obtener los elementos
const modal = document.getElementById("fullScreenModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Función para abrir el modal a pantalla completa
openModalBtn.addEventListener("click", function() {
    modal.style.display = "flex"; // Mostrar el modal en modo "flex" para centrar su contenido
});

// Función para cerrar el modal
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
