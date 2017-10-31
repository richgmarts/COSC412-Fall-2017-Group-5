var btn = document.getElementById('myBtn');
var btnclose = document.getElementById('btnclose');

// When user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

btnclose.onclick = function() {
    modal.style.display = "none";
}