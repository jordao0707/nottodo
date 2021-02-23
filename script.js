var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("i");
    var txt = document.createTextNode("close");
    span.setAttribute("class", "close material-icons");
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function add() {
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item align-items-center");
    var desc = document.getElementById("descNote").value;

    var ulName = "", radioName = "";

    if (document.getElementById("radioHoje").checked) {
        ulName = "ulHoje";
        radioName = "radioHoje";
    }
    if (document.getElementById("radioAman").checked) {
        ulName = "ulAmanha";
        radioName = "radioAman";
    }
    if (document.getElementById("radioAlgDia").checked) {
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

    var span = document.createElement("i");
    var txt = document.createTextNode("close");
    span.setAttribute("class", "close material-icons");
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
