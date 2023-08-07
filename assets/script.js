let MenuBars = document.querySelector('.menu-bars');
const aside = document.querySelector('aside');

MenuBars.addEventListener('click', () => {
    aside.classList.toggle('aside-open');
});


const distortion = document.querySelectorAll('.distortion-text span');

let numX = Math.round(Math.random() * 10);

function getRandomValue() {
    const transformValues = ['rotate(10deg)', 'rotate(-8deg)', 'skew(30deg, 10deg)', 'scale(0.8, 1)', 'scale(0.9, 1.1)', 'scale(0.9, 0.7)', 'scale(0.7, 1.1)', 'scale(1.2, 0.6)', 'scale(0.9, 0.7)', 'skew(20deg, 40deg)', 'skew(10deg, -10deg);']
    const transformValue = transformValues[Math.floor(Math.random() * transformValues.length)];
    const values = ['text-shadow: 0 0 20px #fff;', 'text-shadow: 0 10px 20px #ffffffaa;', `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`, `transform: ${transformValue};`];
    let value = values[Math.floor(Math.random() * values.length)] + values[Math.floor(Math.random() * values.length)];
    return value;
}
distortion.forEach(e => {

    e.addEventListener("mouseenter", function () {
        e.style.cssText = getRandomValue() + 'filter: blur(3px);';
    })
    e.addEventListener("mouseleave", function () {
        setTimeout(function () {
            e.style.cssText = '';
        }, 300)
    })


});


const flameScene = document.querySelectorAll('.flame');



window.addEventListener("mousemove", function (e) {
    flameScene.forEach(() => {
        let htmlWidth = document.documentElement.offsetWidth;
        let htmlHeight = document.documentElement.offsetHeight;
        let offsetWidth = (e.clientX) - (htmlWidth / 2);
        let offsetHeight = (e.clientY) - (htmlHeight / 2)
        flameScene[0].style.cssText = 'right: ' + -(offsetWidth * 0.06) + 'px; bottom:' + ((offsetHeight * 0.015)) + 'px;';
        flameScene[1].style.cssText = 'right: ' + -(offsetWidth * 0.09) + 'px; bottom:' + (offsetHeight * 0.030) + 'px;';
        flameScene[2].style.cssText = 'right: ' + -(offsetWidth * 0.12) + 'px; bottom:' + (offsetHeight * 0.020) + 'px;';
    });
});











// let scrollTextStart = document.querySelector('.dynamic');
// let scrollTextFinish = document.querySelector('.about-text h4');

// let htmlElement = document.documentElement;

// let start = getCord(scrollTextStart) - htmlElement.clientHeight;
// let finish = getCord(scrollTextFinish);
// let wayTop = finish.top - start.top;
// let wayLeft = finish.left - start.left;



// window.addEventListener('scroll', function () {
//     const current = window.scrollY;
//     console.log(current);
//     // scrollTextStart.style.top = `${Math.min(start.top * scrolled / 350, wayTop + -50)}px`;
//     // scrollTextStart.style.left = `${Math.min(start.left * scrolled / 300, wayLeft)}px`;
//     scrollTextStart.style.fontSize = `clamp(96px, ${current / 100 }px, 26px)`;
// });


// function incr(param) {
//     return param += 1;
// }
// function decr(param) {
//     return param -= 1;
// }

// function getCord(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//         left: rect.left,
//         top: rect.top
//     };
// }



