import Glide from '@glidejs/glide';

const MainSlider = class MainSlider {
    constructor(){}
    initSlider() {
      document.addEventListener('DOMContentLoaded', () => {
        const glideElement = document.querySelector('.slider_glide_js');
        const counterElement = document.querySelector('.slider_counter span');
        if (glideElement) {
          const glide = new Glide(glideElement, {
              type: 'carousel',
              perView: 1,
              startAt: 0
          });

          glide.on('mount.after', function () {
            const totalSlides = glide.settings.slideCount;
            counterElement.textContent = '1';
          });

          glide.on('run.after', function () {
            const currentSlide = glide.index + 1;
            counterElement.textContent = currentSlide ;
          });

          glide.mount();
        }
      });
    }    
    init() {
        this.initSlider();
    }
}

export default MainSlider;
