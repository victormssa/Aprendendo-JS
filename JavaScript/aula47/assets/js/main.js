function timerGlobal() {
function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};

let seconds = 0;
let time;

function initiateTimer() {
    time = setInterval(function() {
        seconds++;
        timer.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        timer.classList.remove('paused');
        clearInterval(time);
        initiateTimer();
    }
    if(el.classList.contains('pausar')){
        timer.classList.add('paused');
        clearInterval(time);
    }
    if(el.classList.contains('reiniciar')) {
        clearInterval(time);
        timer.innerHTML = '00:00:00';
        seconds = 0;
    }
})};
timerGlobal();