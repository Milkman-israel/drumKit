


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // if not sound, stop the function

    audio.currentTime = 0; //restart the sound
    audio.play();
    key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip the rest of the propertys

    this.classList.remove('playing');
}