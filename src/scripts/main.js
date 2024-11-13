document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formId').addEventListener('submit', (e) => {
        e.preventDefault();

        let numMax = document.getElementById('numMax').value;
        numMax = parseInt(numMax);

        let numRandom = Math.random() * numMax;
        numRandom = Math.floor(numRandom + 1);

        if (numRandom) {
            document.getElementById('result').innerText = "Número é: " + numRandom;
        }

    })
})