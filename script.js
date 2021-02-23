
//Open a note for update
function update(event) {

  var input = document.getElementById("descNote");
  input.value = event.target.parentElement.children[0].innerText;
  var btn = document.getElementById('sub')
  btn.innerText = "Editar"
  closeNote(event)
  btn.onclick = updateNote;


}

//Update a note
function updateNote(event) {
  var inputValue = document.getElementById("descNote").value;
  add()
  document.getElementById("descNote").value = "";
  event.target.innerText = "Adicionar"
  event.target.onclick = add;

}

//Add a new note
function add() {
  var inputValue = document.getElementById("descNote").value;
  let li = createNote(inputValue)

  Array.from(document.getElementsByClassName("form-check-input")).forEach(element => {
    if (element.checked) {
      var idCampo = element.id.split('-')[1];
      var campoNota = document.getElementById(`ul-${idCampo}`);
      campoNota.appendChild(li)
    }
  })
  document.getElementById("descNote").value = "";

}

//Create a note
function createNote(inputValue) {

  if (inputValue === '') {
    alert("You must write something!");
    return;
  }
  var li = document.createElement("LI");  //  localStorage.setItem(inputValue, inputValue);
  var text = document.createElement('SPAN')
  text.innerText = inputValue

  li.appendChild(text);
  li.appendChild(editButton());
  li.appendChild(clearButton());
  return li;
}

//Create a edit button
function editButton() {
  var spanEdit = document.createElement("SPAN");
  spanEdit.className = "material-icons"
  spanEdit.innerText = "create";
  spanEdit.onclick = update;

  return spanEdit;
}

//Create a clear button
function clearButton() {
  var spanClear = document.createElement("SPAN");
  spanClear.className = "material-icons"
  spanClear.innerText = "clear";
  spanClear.onclick = closeNote;
  return spanClear;
}

//Remover a note
function closeNote(event) {
  let ul = event.target.parentElement.parentElement;
  let li = event.target.parentElement;
  localStorage.removeItem(li.innerText);

  ul.removeChild(li);
}


// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
