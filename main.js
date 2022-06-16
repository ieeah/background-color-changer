const colorList = [
    'red',
    '#000',
    '#fcba03',
    '#6f9bab',
    'rgb(239, 199, 240)',
    'dodgerblue',
    'yellow',
    'rgb(255, 255, 255)'
];

const hexComposer =
[
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];

const btnList = document.querySelector('.btn-list');
const btnHex = document.querySelector('.btn-hex');
const btnRgb = document.querySelector('.btn-rgb');
const hexLi = document.getElementById('hexLi');
const simpleLi = document.getElementById('simpleLi');
const rgbLi = document.getElementById('rgbLi');
let bgColor = 0;
let hxRandom = 0;
const colorTextlist = document.getElementById('bghere1');
const colorTextHex = document.getElementById('bghere2');
const colorTextRgb = document.getElementById('bghere3');


hexLi.addEventListener('click', function() {
    document.querySelector('.hex.d-none').classList.remove('d-none');
    document.querySelector('.list').classList.add('d-none');
    document.querySelector('.rgb').classList.add('d-none');
});

simpleLi.addEventListener('click', function() {
    
    document.querySelector('.list.d-none').classList.remove('d-none');
    document.querySelector('.hex').classList.add('d-none');
    document.querySelector('.rgb').classList.add('d-none');
});

rgbLi.addEventListener('click', function() {
    
    document.querySelector('.rgb.d-none').classList.remove('d-none');
    document.querySelector('.hex').classList.add('d-none');
    document.querySelector('.list').classList.add('d-none');
});

btnList.addEventListener('click', function () {

    bgColor++;
    if (bgColor > colorList.length - 1) {
        bgColor = 0;
    }
    document.body.style.backgroundColor = colorList[bgColor];
    colorTextlist.innerText = ` ${colorList[bgColor]}`;

});


btnHex.addEventListener('click', function() {
    let hex1 = Math.floor(Math.random() * 16);
    let hex2 = Math.floor(Math.random() * 16);
    let hex3 = Math.floor(Math.random() * 16);
    let hex4 = Math.floor(Math.random() * 16);
    let hex5 = Math.floor(Math.random() * 16);
    let hex6 = Math.floor(Math.random() * 16);
    let hexColor = `#${hexComposer[hex1]}${hexComposer[hex2]}${hexComposer[hex3]}${hexComposer[hex4]}${hexComposer[hex5]}${hexComposer[hex6]}`;

    console.log(hexColor);

    document.body.style.backgroundColor = hexColor;
    colorTextHex.innerText = `${hexColor}`;
});

btnRgb.addEventListener('click', function () {
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

    document.body.style.backgroundColor = rgbColor;
    colorTextRgb.innerText = `${rgbColor}`;

    console.log(rgbColor);
});