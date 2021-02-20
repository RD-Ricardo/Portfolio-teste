var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
  
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    var that = this;
    var delta = 100 - Math.random() * 0; //velocidade para escrever
  
    if (this.isDeleting) {
      delta /= 4; //velocidade para apagar
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };









  function animeScroll(){
    const header = document.querySelector('.bck2');

    function anime(){
        if(window.scrollY > 300){
            header.classList.add('anime-start');
        } else {
            header.classList.remove('anime-start');
        }
    }
    window.addEventListener('scroll', anime);
}

animeScroll();


function animeScroll2(){
    const header2 = document.querySelector('.bck3');

    function anime2(){
        if(window.scrollY > 900){
            header2.classList.add('anime-start2');
        } else {
            header2.classList.remove('anime-start2');
        }
    }
    window.addEventListener('scroll', anime2);
}

animeScroll2();

function animeScroll3(){
    const header2 = document.querySelector('.bck4');

    function anime3(){
        if(window.scrollY > 2000){
            header2.classList.add('anime-start3');
        } else {
            header2.classList.remove('anime-start3');
        }
    }
    window.addEventListener('scroll', anime3);
}

animeScroll3();