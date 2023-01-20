const picLinks = ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"
,"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg","http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"];
const imgHeight = ["160px","195px","343px"];
const imgWidth = ["240px","320px","500px"];

let imgTag = document.getElementById("image");

function showRandomImg(){
    //randomly (0 to 2) generates the index that will be used for the array that contains links to images
    let index = Math.floor(Math.random() * 3);
    imgTag.setAttribute("src", picLinks[index]);
    imgTag.setAttribute("height", imgHeight[index]);
    imgTag.setAttribute("width", imgWidth[index]);
}