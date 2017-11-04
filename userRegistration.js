var modal = document.getElementById("myModal");
var myBtn = document.getElementById("myBtn");
var inline = document.getElementById("close")[0];

// When user clicks on the button, open the modal
myBtn.onclick = function() {
    modal.style.display = "block";
}

inline.onclick = function() {
    modal.style.display = "none";
}