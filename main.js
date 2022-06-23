const colorList = [
  "red",
  "#000",
  "#fcba03",
  "#6f9bab",
  "rgb(239, 199, 240)",
  "dodgerblue",
  "yellow",
  "rgb(255, 255, 255)",
  "#00bd55",
];

const hexComposer = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const sections = document.querySelectorAll("section");
let bgColor = 0;
let hxRandom = 0;
const bodyColor = document.body.style.backgroundColor;
const colorTextlist = document.getElementById("bghere1");
const colorTextHex = document.getElementById("bghere2");
const colorTextRgb = document.getElementById("bghere3");

const tabs = ["0", "1", "2"];
let activeTab = "0";

function setActiveTab(tab) {
  activeTab = tab.toString();
}
function setActiveSection(index) {
  sections.forEach((section, i) => {
    if (i != index) {
      section.classList.add("d-none");
    } else {
      section.classList.remove("d-none");
    }
  });
}

function troughList() {
  bgColor >= colorList.length - 1 ? (bgColor = 0) : bgColor++;
  document.body.style.backgroundColor = colorList[bgColor];
  colorTextlist.innerText = `${colorList[bgColor]}`;
}

function generateHEX() {
  let hexColorNew = "#";

  for (let i = 0; i < 6; i++) {
    let hex = Math.floor(Math.random() * 16);
    hexColorNew += hexComposer[hex];
  }

  document.body.style.backgroundColor = hexColorNew;
  colorTextHex.innerText = `${hexColorNew}`;
}

function generateRGB() {
  let rgb1 = Math.floor(Math.random() * 256);
  let rgb2 = Math.floor(Math.random() * 256);
  let rgb3 = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

  document.body.style.backgroundColor = rgbColor;
  colorTextRgb.innerText = `${rgbColor}`;
}
