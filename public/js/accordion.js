var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i <= acc.length; i++) {
  console.log("active", i, acc.length, acc);
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
