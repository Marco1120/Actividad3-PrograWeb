
let temporizador = null;

function mostrarModal(icono, titulo, mensaje, color, segundos) {
  // Si ya hay un modal abierto, lo cerramos primero
  cerrarModal();

  // Creamos el fondo oscuro y la caja
  const fondo = document.createElement("div");
  fondo.className = "modal-fondo";

  const caja = document.createElement("div");
  caja.className = "modal-caja";
  caja.style.setProperty("--color-modal", color || "#a3213a");

  // Creamos el contenido con los datos que recibe la función
  const divIcono = document.createElement("div");
  divIcono.className = "modal-icono";
  divIcono.textContent = icono || "ℹ️";

  const h2Titulo = document.createElement("h2");
  h2Titulo.className = "modal-titulo";
  h2Titulo.textContent = titulo;

  const pMensaje = document.createElement("p");
  pMensaje.className = "modal-mensaje";
  pMensaje.textContent = mensaje;

  const botonCerrar = document.createElement("button");
  botonCerrar.className = "modal-boton";
  botonCerrar.textContent = "Cerrar";
  botonCerrar.addEventListener("click", cerrarModal);

  // Metemos todo dentro de la caja y lo mostramos en la página
  caja.append(divIcono, h2Titulo, pMensaje, botonCerrar);
  fondo.appendChild(caja);
  document.body.appendChild(fondo);

  // Se cierra al hacer clic fuera de la caja
  fondo.addEventListener("click", function (evento) {
    if (evento.target === fondo) {
      cerrarModal();
    }
  });

  // Se cierra con la tecla Esc
  document.addEventListener("keydown", cerrarConEsc);

  // Se cierra solo después de los segundos indicados
  if (segundos) {
    temporizador = setTimeout(cerrarModal, segundos * 1000);
  }
}

function cerrarConEsc(evento) {
  if (evento.key === "Escape") {
    cerrarModal();
  }
}

function cerrarModal() {
  const fondo = document.querySelector(".modal-fondo");
  if (fondo) {
    fondo.remove();
  }
  clearTimeout(temporizador);
  document.removeEventListener("keydown", cerrarConEsc);
}