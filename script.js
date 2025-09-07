const sonic = document.querySelector('.sonic');
const motobug = document.querySelector('.motobug');

const jump = () =>{
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const motobugPosition = motobug.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(sonicPosition);
    
    if (motobugPosition <= 105 && sonicPosition < 45){
        motobug.style.animation = 'none';
        motobug.style.left = `${motobugPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;
        
        sonic.src = './assets/die.png'
        sonic.style.width = '70px'
    }
}, 10);
document.addEventListener('keydown', jump);