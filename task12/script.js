let boldText = document.getElementsByTagName("strong");

function highlight(){
    for(i = 0; i < boldText.length; i++){
        boldText[i].style.textDecoration = "underline";
}
}

function stopHighlighting(){
    for(k = 0; k < boldText.length; k++){
        boldText[k].style.textDecoration = "none";
    }
}