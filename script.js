const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime/5 ;

breathAnimation();

function breathAnimation () {
    text.textContent='BREATHE IN!';
    container.className = 'container grow';

    setTimeout(() => {
        text.textContent='HOLD...';

        setTimeout(() => {
            text.textContent='BREATHE OUT!';
            container.className = 'container shrink'
        }, holdTime)

    },breatheTime)
}

setInterval(breathAnimation, totalTime);
