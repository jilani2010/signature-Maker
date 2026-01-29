const fonts = [
"Pacifico","Great Vibes","Allura","Dancing Script","Satisfy",
"Sacramento","Alex Brush","Yellowtail","Parisienne","Cookie"
];

const nameInput = document.getElementById("nameInput");
const colorPicker = document.getElementById("colorPicker");
const sizeRange = document.getElementById("sizeRange");
const container = document.getElementById("signatures");

nameInput.addEventListener("input", generate);
colorPicker.addEventListener("input", generate);
sizeRange.addEventListener("input", generate);

function generate() {
container.innerHTML = "";
const name = nameInput.value;
const color = colorPicker.value;
const size = sizeRange.value;

fonts.forEach(font => {
const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 150;

const ctx = canvas.getContext("2d");
ctx.font = `${size}px '${font}'`;
ctx.fillStyle = color;
ctx.fillText(name, 20, 100);

canvas.className = "signature";
canvas.onclick = () => download(canvas);

container.appendChild(canvas);
});
}

function download(canvas) {
const link = document.createElement("a");
link.download = "signature.png";
link.href = canvas.toDataURL("image/png");
link.click();
}
