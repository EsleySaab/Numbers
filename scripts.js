const numberCount = document.getElementById("number-input-1").value || 0
const rangeStart = document.getElementById("number-input-2").value || 0
const rangeEnd = document.getElementById("number-input-3").value || 0

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault()
})

if (numberCount <= 0 || rangeStart >= rangeEnd) {
  document.getElementById("result").innerHTML =
    "<p class='text-danger'>Por favor, insira valores válidos.</p>"
  return
}
