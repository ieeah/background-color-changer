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
const bodyColor = document.body.style.backgroundColor;
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


    bgColor >= 7 ? bgColor = 0 : bgColor++;
    document.body.style.backgroundColor = colorList[bgColor];
    colorTextlist.innerText = ` ${colorList[bgColor]} ${bgColor}`;

});


btnHex.addEventListener('click', function() {
  let hexColorNew = "#";

  for (let i = 0; i < 6; i++) {
    let hex = Math.floor(Math.random() * 16);
    hexColorNew += hexComposer[hex];
  }

  document.body.style.backgroundColor = hexColorNew;
  colorTextHex.innerText = `${hexColorNew}`;
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