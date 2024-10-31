document
  .getElementById("raffle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const numberCount =
      parseInt(document.getElementById("number-input-1").value) || 0
    const rangeStart =
      parseInt(document.getElementById("number-input-2").value) || 0
    const rangeEnd =
      parseInt(document.getElementById("number-input-3").value) || 0

    if (numberCount <= 0 || rangeStart >= rangeEnd) {
      document.getElementById("result").innerHTML =
        "<p class='text-danger'>Por favor, insira valores válidos.</p>"
      return
    }

    const results = []
    for (let i = 0; i < numberCount; i++) {
      const randomNumber =
        Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
      results.push(randomNumber)
    }

    const resultText =
      numberCount === 1 ? "Número Sorteado:" : "Números Sorteados:"

    document.getElementById(
      "result"
    ).innerHTML = `<h5 class="raffle-result">${resultText} ${results.join(", ")}</h5>`
  })
