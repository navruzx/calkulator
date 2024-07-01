let input = document.querySelector("input");

function addValues(n) {
  input.value += n;
}
function teng() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert("Only number");
    input.value = "";
  }
}

function deletes() {
  input.value = "";
}