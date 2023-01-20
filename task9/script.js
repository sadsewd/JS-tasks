const selector = document.getElementById("mySelect");
let option = selector.getElementsByTagName("option");
let listOfOptions = "";

function getOptions(){

    //since I don't want to have a space before first value i put the first value of the array into the string manually without the space before it
    listOfOptions += option[0].value;
    //Within this for options array is transferred to listOfOptions as a string
    for(i = 1; i<option.length;i++){
            listOfOptions += " " + option[i].value;
    }

    alert("Selector contains " + option.length + " options and those options are "+listOfOptions);
}