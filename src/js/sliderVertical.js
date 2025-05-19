export class Slider {
  constructor(infoElementos) {
    this.seciones = document.querySelectorAll(infoElementos.claseSeccion);
    this.contenedorNav = document.querySelector(infoElementos.idPuntitos);

    this.contenedorNav.addEventListener('click', this.irALaSeccion.bind(this));
    window.addEventListener('scroll', this.establecerEstadoPuntoNav.bind(this));
  }

  quitarEstiloUltimoPunto() {
    const puntos = this.contenedorNav;
    const ultimoActivo = puntos.querySelector('.is-active');

    if (ultimoActivo != null) {
      ultimoActivo.classList.remove('is-active');
    }
  }

  establecerEstadoPuntoNav() {
    const posicionScroll = window.scrollY;
    const puntos = Array.from(this.contenedorNav.children);

    this.seciones.forEach((seccion, i) => {
      const mitadScroll = window.innerHeight / 2;
      const distanciaPadre = seccion.offsetTop;

      if (posicionScroll > distanciaPadre - mitadScroll && posicionScroll < distanciaPadre + mitadScroll) {
        this.quitarEstiloUltimoPunto();
        puntos[i].classList.add('is-active');
      }
    })
  }

  irALaSeccion(e) {
    const puntos = Array.from(this.contenedorNav.children);
    const alturaNavegadorCliente = window.innerHeight;

    puntos.forEach((punto, i) => {
      if (punto == e.target) {

        window.scrollTo({
          top: alturaNavegadorCliente * i,
          behavior: 'smooth',
        });
      }
    });
  }
}