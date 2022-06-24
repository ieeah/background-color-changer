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

let activeTab = "0";
let activeColor = null;
const sections = document.querySelectorAll("section");
let colorListIndex = 0;
const colorTextlist = document.querySelectorAll("#bghere");
const setActiveColor = (color) => activeColor = color;
const setActiveTab = (tab) => activeTab = tab;
const setActiveSection = (index) => {
  sections.forEach((section, i) => {
    if (i != index) {
      section.classList.add("d-none");
    } else {
      section.classList.remove("d-none");
    }
  });
}
const setInnerText = () => colorTextlist[activeTab].innerText = `${activeColor}`;
const setBgColor = () => document.body.style.backgroundColor = activeColor;

function troughList() {
  colorListIndex >= colorList.length - 1 ? (colorListIndex = 0) : colorListIndex++;
  doTheThing(colorList[colorListIndex], activeTab);
}

function generateHEX() {
  let newColor = "#";
  while(newColor.length < 7) {
    newColor += hexComposer[Math.floor(Math.random() * 16)];
  }
  doTheThing(newColor, activeTab);
}

function generateRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  doTheThing(`rgb(${r}, ${g}, ${b})`, activeTab);
}

const doTheThing = (color, tab) => {
  setActiveColor(color);
  setActiveTab(tab);
  setActiveSection(tab);
  setBgColor();
  setInnerText();
}