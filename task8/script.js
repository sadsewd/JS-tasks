const selector = document.getElementById("colorSelect");
let option = selector.getElementsByTagName("option");

function removecolor(){
    for(i = 0; i<option.length;i++){
        if(selector.value == option[i].value){
            selector.remove(i);
        }
    }
}