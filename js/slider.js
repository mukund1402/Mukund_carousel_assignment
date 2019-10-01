var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var dots = document.querySelectorAll('.dot_container .dot');
var currentDot = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
    goToSlide(currentSlide+1);
    goToSlide(currentDot);
}

function previousSlide(){
    goToSlide(currentSlide-1);
    goToSlide(currentDot);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    dots[currentDot].className = 'dot';
    currentSlide = (n+slides.length)%slides.length;
    currentDot = (n+dots.length)%dots.length;
    slides[currentSlide].className = 'slide showing';
    dots[currentDot].className = 'dot active';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    //pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    //pauseSlideshow();
    previousSlide();
};
