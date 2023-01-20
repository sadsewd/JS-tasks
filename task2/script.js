let form = document.getElementById("form1");
function getFormValue(event){
    event.preventDefault();
    console.log("First name : " + document.getElementById('fname').value + "\nLast name : " + document.getElementById('lname').value);
    event.preventDefault();
}

form.addEventListener('submit', getFormValue);
