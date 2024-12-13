
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function colorRandom() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeColorInput() {
    const inputColor = document.querySelector('.inputColor');
    document.body.style.backgroundColor = inputColor.value;
}

function changeImage() {
    const inputImage = document.querySelector('input[type="file"]');
    const image = inputImage.files[0];
    const url = URL.createObjectURL(image);
    document.body.style.backgroundImage = `url(${url})`;
}