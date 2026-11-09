const button = document.querySelector('.srt-btn')

function getValues() {



    const min = Math.ceil(document.querySelector('.input1').value)
    const max = Math.floor(document.querySelector('.input2').value)

    // + 1 para o número máximo também poder ser sorteado
    const result = Math.floor(Math.random() * (max - min + 1) + min)



    alert(result)


}

button.addEventListener('click', getValues)