var table = document.querySelector("#sampleTable tbody");
var counter = 3;

function insert_Row(){
    table.innerHTML += '<tr><td>Row'+counter+' cell1</td> <td>Row'+counter+' cell2</td></tr>';
    counter ++;

}