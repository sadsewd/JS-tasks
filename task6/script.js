function changeContent(){
    let rowid = prompt("Enter row nr: ");
    let cellid = prompt("Enter cell nr: ");
    let inputContent = prompt("Enter text that you would like to insert into your selected cell");

    //added -1 to id's so users can more easily understand which cell is which
    let Row = document.getElementsByTagName("tr")[rowid-1];
    let Cells = Row.getElementsByTagName("td")[cellid-1].innerText = inputContent;
}

