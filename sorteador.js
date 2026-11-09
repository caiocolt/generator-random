const button = document.querySelector('.srt-btn')

function getValues() {



    const min = Math.ceil(document.querySelector('.input1').value)
    const max = Math.floor(document.querySelector('.input2').value)
    const numeroSorteado = Math.floor(Math.random() * 30) + 1;

    const result = Math.floor(Math.random() * (max - min) + min)



    alert(result)


}

button.addEventListener('click', getValues)