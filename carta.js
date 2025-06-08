const invitado = JSON.parse(localStorage.getItem('invitado'));

if (!invitado) {
  window.location.href = 'login.html';
}

document.getElementById('nombreInvitado').textContent = invitado.nombre;
document.getElementById('regalo').textContent = invitado.regalo;

const sobre = document.getElementById('sobre');
const hoja = document.getElementById('hoja');

sobre.addEventListener('click', () => {
  hoja.classList.add('visible');
  const sonido = new Audio('https://www.fesliyanstudios.com/play-mp3/387'); // sonido suave
  sonido.play().catch(err => console.warn("El sonido no pudo reproducirse:", err));
});

function cerrarSesion() {
  localStorage.removeItem('invitado');
  window.location.href = 'login.html';
}
