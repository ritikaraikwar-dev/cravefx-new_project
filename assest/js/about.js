const nav1 = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY >= 100) {
nav1.classList.add('scroll-down')
}
else if (window.scrollY <= 100) {
nav1.classList.remove('scroll-down')
}
})

// our team section 

var body = document.getElementById('body')
var team = document.getElementById('ourteam')
var image = document.getElementById('image')

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function movebackground(event) {
    
    var mouseXposition = event.offsetX;
    
    var mouseYposition = event.offsetY;
    
    var calculateX = mouseXposition/(windowWidth/5)
    
    var calculateY = mouseYposition/(windowHeight/5)
    
    image.style.transform = "translate(-" +calculateX.toString() + "%,-" + calculateY.toString()+"%)";
    
    
}

body.addEventListener('mousemove',movebackground)


// our team section 
