function popup(which) {
    console.log(document.getElementById(which).style.display);
    document.getElementById(which).style.display = "flex";
}

function popdown(which) {
    document.getElementById(which).style.display = "none";
}