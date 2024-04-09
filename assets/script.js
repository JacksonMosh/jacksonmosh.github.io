let menuBars = document.querySelector('.menu-bars');
const aside = document.querySelector('aside');
const body = document.querySelector('body');


menuBars.addEventListener('click', function () {
    aside.classList.toggle('aside-open');
    body.classList.toggle('lock');
    if (aside.classList.contains('aside-open')) {
        window.addEventListener("click", function (e) {
            const clickTarget = e.composedPath().includes(aside);
            if (!clickTarget) {
                aside.classList.remove('aside-open');
                body.classList.remove('lock');
            }
        });
    }
});



window.addEventListener("keydown", function (e) {
    if (e.key == 'Escape') {
        aside.classList.remove('aside-open');
        body.classList.remove('lock');
    }

});

const distortion = document.querySelectorAll('.distortion-text h1 span');
const distortionH2 = document.querySelectorAll('h2 span');


setInterval(blur, 1050);
setInterval(unblur, 300);

function blur() {
    distortionH2.forEach((element, i) => {
        setTimeout(() => {
            element.style.cssText = 'filter: blur(3px);';
        }, 50 * (i + 1));
    })
};

function unblur() {
    distortionH2.forEach((element, i) => {
        setTimeout(() => {
            element.style.cssText = 'filter: blur(0px);';
        }, 50 * (i + 1));
        return
    })
}

let numX = Math.round(Math.random() * 10);

function getRandomValue() {
    const transformValues = ['rotate(10deg)', 'rotate(-8deg)', 'skew(30deg, 10deg)',
        'scale(0.8, 1)', 'scale(0.9, 1.1)', 'scale(0.9, 0.7)', 'scale(0.7, 1.1)',
        'scale(1.2, 0.6)', 'scale(0.9, 0.7)', 'skew(20deg, 40deg)', 'skew(10deg, -10deg);']

    const transformValue = transformValues[Math.floor(Math.random() * transformValues.length)];

    const values = ['text-shadow: 0 0 20px #fff;', 'text-shadow: 0 10px 20px #ffffffaa;',
        `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`,
        `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`];

    let value = values[Math.floor(Math.random() * values.length)] +
        values[Math.floor(Math.random() * values.length)];
    return value;
}
distortion.forEach(e => {

    e.addEventListener("mouseenter", function () {
        e.style.cssText = getRandomValue() + 'filter: blur(1.5px);';
    })
    e.addEventListener("mouseleave", function () {
        setTimeout(function () {
            e.style.cssText = '';
        }, 300)
    })


});

const flameScene = document.querySelectorAll('.flame');
if (!window.matchMedia("(pointer: coarse)").matches) {
    window.addEventListener("mousemove", function (e) {
        let htmlWidth = document.documentElement.offsetWidth;
        let htmlHeight = document.documentElement.clientHeight;
        let offsetWidth = (e.clientX) - (htmlWidth / 2);
        let offsetHeight = (e.clientY) - (htmlHeight / 2);
        let offsetWidthBg = ((e.clientX) - (htmlWidth / 2));
        let offsetHeightBg = ((e.clientY) - (htmlHeight / 2));


        let bg = document.querySelector('.scene__bg');
        bg.style.cssText = `right: ${(offsetWidth * 0.08)}px; bottom: ${(-offsetHeight * 0.04)}px;`;
        let bgImg = document.querySelector('.scene__bg img');
        bgImg.style.cssText = `transform: rotateX(${(offsetHeightBg / 700)}deg) rotateY(${offsetWidthBg / 500}deg);`;

        const headerWrapper = document.querySelector('.header-inner');
        headerWrapper.style.cssText = `left: ${(offsetWidth * 0.01)}px; top: ${(offsetHeight * 0.01)}px;`;
        flameScene.forEach(() => {
            flameScene[0].style.cssText = 'right: ' + -(offsetWidth * 0.04) + 'px; bottom:' + -(offsetHeight * 0.02) + 'px;';
            flameScene[1].style.cssText = 'right: ' + -(offsetWidth * 0.06) + 'px; bottom:' + (offsetHeight * 0.02) + 'px;';
            flameScene[2].style.cssText = 'right: ' + -(offsetWidth * 0.10) + 'px; bottom:' + (offsetHeight * 0.04) + 'px;';
        });
    });
}


