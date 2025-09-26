document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  card.style.animationDelay = `${index * 0.3}s`;
});
// Modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Evento para TODAS las imágenes de las cards
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; // usa el alt como descripción
  });
});

// Cerrar modal con botón
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
