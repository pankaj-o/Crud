const form = document.getElementById("form");
let index = 0;
let selectrow = null
  
form.addEventListener("submit", (e) => {
  e.preventDefault();
  index++;
  let formdata = accptdata();
  if(selectrow==null){

    insertdata(formdata);
  }
  else{
    updaterecord(formdata) 

  }
});

const accptdata = () => {
  let data = {};
  data["name"] = document.getElementById("Name").value;
  data["city"] = document.getElementById("City").value;
  data["counrty"] = document.getElementById("Country").value;
 console.log(data)
  return data;
};

function insertdata(data1) {
  let table = document
    .getElementById("formlist")
    .getElementsByTagName("tbody")[0];
  let newrow = table.insertRow(table.length);
  cell0 = newrow.insertCell(0);
  cell0.innerHTML = index;
  cell1 = newrow.insertCell(1);
  cell1.innerHTML = data1.name;
  cell2 = newrow.insertCell(2);
  cell2.innerHTML = data1.city;
  cell3 = newrow.insertCell(3);
  cell3.innerHTML = data1.counrty;
  cell4 = newrow.insertCell(4);
  cell4.innerHTML = `<a   onclick="updated(${index})">Edit </a>|<a onclick=" deleted(this)">Delete</a>`;
  document.getElementById("Name").value = "";
  document.getElementById("City").value = "";
  document.getElementById("Country").value = "";
}

function deleted(e) {
  
  let row = e.parentElement.parentElement;
  document.getElementsByTagName
  document.getElementById("formlist").deleteRow(row.rowIndex);
  
}

function updated(e) {
  index--
  let selectrow = e.parentElement.parentElement;
  document.getElementById("City").value = selectrow.cells[2].innerHTML;
  document.getElementById("Name").value = selectrow.cells[1].innerHTML;
  document.getElementById("Country").value = selectrow.cells[3].innerHTML;
  document.getElementById("formlist").deleteRow(selectrow.rowIndex);
  // cell0.innerHTML = index--;
}
function updaterecord(e) {
  let selectrow = e.parentElement.parentElement;
  
  // cell0.innerHTML = index++;
  electrow.cells[1].innerHTML=e.name
  electrow.cells[2].innerHTML=e.city
  selectrow.cells[3].innerHTMLe.counrty
  
}
