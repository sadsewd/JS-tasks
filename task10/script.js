let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

function calculateVolume(){
    let rad = radius.value;
    let calculation = 4/3 * Math.PI * Math.pow(rad, 3);
    volume.value = calculation.toFixed(4);
    // return false allows me to not reset the form after pressing submit therefore i can show the volume calculation
    return false;
}