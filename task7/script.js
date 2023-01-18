const table = document.getElementById("myTable");
let tableContent = "";
function createTable(){
  let row = prompt("Rows : ");
  let col = prompt("Columns : ");

   for(let i = 0; i<row; i++){
    tableContent += "<tr> "
    for(let k = 0; k<col; k++){
        tableContent += "<td>Row-"+(i+1)+" Column-"+(k+1)+"</td>"
    }
    tableContent += "</tr>"
   }

   table.innerHTML += tableContent;
}