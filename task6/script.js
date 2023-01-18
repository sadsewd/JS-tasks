function changeContent(){
    var rowid = prompt("Enter row nr: ");
    var cellid = prompt("Enter cell nr: ");
    var inputContent = prompt("Enter text that you would like to insert into your selected cell");

    //added -1 to id's so users can more easily understand which cell is which
    var Row = document.getElementsByTagName("tr")[rowid-1];
    var Cells = Row.getElementsByTagName("td")[cellid-1].innerText = inputContent;
}

