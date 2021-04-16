// --------------------Image slider --------------
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');

function bg() {
    setInterval(bgChange, 3000);
}

function bgChange() {
    if (s1.classList.contains('bgactive')) {
        s1.classList.remove('bgactive');
        s2.classList.add('bgactive');
    } else if (s2.classList.contains('bgactive')) {
        s2.classList.remove('bgactive');
        s1.classList.add('bgactive');
    }
}

bg();

// --------------------------Image slider end-----------

const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');
const img5 = document.querySelector('.img-5');

function img() {
    setInterval(imgChange, 3000);
}

function imgChange() {
    if (img1.classList.contains('on')) {
        img1.classList.remove('on');
        img2.classList.add('on');
    } else if (img2.classList.contains('on')) {
        img2.classList.remove('on');
        img3.classList.add('on');
    } else if (img3.classList.contains('on')) {
        img3.classList.remove('on');
        img4.classList.add('on');
    } else if (img4.classList.contains('on')) {
        img4.classList.remove('on');
        img5.classList.add('on');
    } else if (img5.classList.contains('on')) {
        img5.classList.remove('on');
        img1.classList.add('on');
    }
}

img();

// ----------------hamburgur button---------------------
const menuBtn = document.querySelector('.menu-btn');
const toggle = document.querySelector('#toggle');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    toggle.classList.toggle('active');
})