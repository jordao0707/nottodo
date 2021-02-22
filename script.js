function add() {
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    var desc = document.getElementById("descNote").value;

    var ulName = "", radioName = "";

    if (document.getElementById("radioHoje").checked){
        ulName = "ulHoje";
        radioName = "radioHoje";
    }
    if (document.getElementById("radioAman").checked){
        ulName = "ulAmanha";
        radioName = "radioAman";
    }
    if (document.getElementById("radioAlgDia").checked){
        ulName = "ulAlgumDia";
        radioName = "radioAlgDia";
    }

    var t = document.createTextNode(desc);
    li.appendChild(t);
    if (desc === '' || ulName === '') {
        alert("Adicione nome e selecione a categoria de sua anotação");
    } else {
        document.getElementById(ulName).appendChild(li);
        document.getElementById("descNote").value = "";
        document.getElementById(radioName).checked = false;
    }
}
