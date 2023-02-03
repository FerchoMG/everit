window.sr = ScrollReveal();

var modal = document.getElementById("myModal");
var modalcont =document.getElementById("modalcont")
var btn = document.querySelector(".buy-button");
var btn2 =document.getElementById("myBtn2")
var btn3 =document.getElementById("myBtn3")
var btn4 =document.getElementById("myBtn4")
var btn5 =document.getElementById("myBtn5")
btn.onclick = function() {
  modal.style.display = "flex";
}
btn2.onclick = function() {
    modal.style.display = "flex";
  }
  btn3.onclick = function() {
    modal.style.display = "flex";
  }
  btn4.onclick = function() {
    modal.style.display = "flex";
  }
  btn5.onclick = function() {
    modal.style.display = "flex";
  }



modal.onclick = function() {
  modal.style.display = "none";
}





sr.reveal('.container-horizontal', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'

});
sr.reveal('.container', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'

});
sr.reveal('.adventages-cards', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'

});
sr.reveal('.contactanos', {
	duration: 2000,
    origin: 'top',
    distance: '-100px'

});

sr.reveal('.adventages-cards', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'

});
sr.reveal('.principal', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'

});
sr.reveal('.pre-footer h2', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.pre-footer img', {
	duration: 1000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('#product1', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('#product2', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'
});
sr.reveal('#product3', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('#product4', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'
});
sr.reveal('#product5', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});

sr.reveal('#product5', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});

sr.reveal('.form', {
	duration: 1000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.button', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('.button', {
	duration: 1000,
    origin: 'right',
    distance: '-100px'
});




const typed = new Typed('.typed',{
  strings: ['',
    'increibles',
    'epicos', 
    'accesibles',
    'comodos'],

  //stringsElement: '#cadenas-texto', 
	typeSpeed: 75, 
	startDelay: 300,
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '', 
	contentType: 'html', 
});


