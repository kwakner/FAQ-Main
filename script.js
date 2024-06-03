const button = document.getElementsByClassName('accord')
var i
for (i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        this.classList.toggle('active')
        var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
    })
}