

function changeColor(color) {
  document.body.style.backgroundColor = color;
}




function changeColor(color) {
  document.body.style.backgroundColor = color;
}

// attach color input after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const picker = document.getElementById("colorPicker");
  if (!picker) return;

  // update background while user picks (input event) and on change
  picker.addEventListener("input", (e) => {
    changeColor(e.target.value);
  });
});