const valuesResult = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] //2 4 5 6 8, 2_1 4_1 5_1 6_1 8_1 

function clearImgClass(numberRune) {
    numberRune.classList.remove('imgHegil', 'imgYar', 'imgGifu', 'imgTir', 'imgRad', 'imgIo', 'imgTorn', 'imgUr', 'imgFeo',)
}
//buttonPredictTheResult
const buttonPredictTheResult = document.querySelectorAll('.buttonTap')[1]
buttonPredictTheResult.onclick = () => {
    resultPictures = document.querySelectorAll('td.resultRune')
    tablesResult = document.querySelectorAll('table.nonDisplay')
    const resultMassive = [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]
    let variationsPicture = 1
    for (let i = 0; i < valuesResult[0].length; i += 1) {
        if (valuesResult[0][i] > valuesResult[1][i]) {
            if (valuesResult[0][i] * 0.8 > valuesResult[1][i]) {
                resultMassive[0][i] = valuesResult[0][i]
            } else {
                resultMassive[0][i] = valuesResult[0][i]
                resultMassive[1][i] = valuesResult[1][i]
                variationsPicture *= 2
            }
        } else if (valuesResult[0][i] === valuesResult[1][i]) {
            resultMassive[0][i] = valuesResult[0][i]
            resultMassive[1][i] = valuesResult[1][i]
            variationsPicture *= 2
        } else if (valuesResult[0][i] < valuesResult[1][i]) {
            if (valuesResult[0][i] < valuesResult[1][i] * 0.8) {
                resultMassive[1][i] = valuesResult[1][i]
            } else {
                resultMassive[0][i] = valuesResult[0][i]
                resultMassive[1][i] = valuesResult[1][i]
                variationsPicture *= 2
            }
        }
    }
    const ResultTable = document.querySelectorAll('table.nonDisplay')
    if (resultMassive != [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) {
        document.querySelector('h1').classList.remove('nonDisplay')
        for (let i = 0; i < variationsPicture; i += 1) {
            ResultTable[i].classList.remove('nonDisplay')
        }
    }



  document.querySelector('h1').classList.remove('.nonDisplay')

    

 /*//for (let i = 0; i < resultMassive[1].length; i += 1){
  //      resultMassive[1][i]
 //   }
    if (variationsPicture === 1){ 
        resultTables = resultMassive

    } else { 
    for (let i = 0; i < variationsPicture; i += 1) {
        for (let k = 0; k < resultMassive[0].length; k += 1) {
            if ((resultMassive[0][i] === 0) + (resultMassive[1][i] === 0.1)) {
                if(resultMassive[0][i] === 0) {
                    resultTables[i][k] = resultMassive[1][i]
                }else {
                    resultTables[i][k] = resultMassive[0][i]
                }
            } else {
                
            }
        } 
    }
}*/
console.log(resultMassive)
const firstRunes = document.getElementById('1rune')
const thirdRunes = document.getElementById('3rune')
const seventhRunes = document.getElementById('7rune')
const ninthRunes = document.getElementById('9rune')
const secondRunes = document.getElementById('2rune')
const second_1Runes = document.getElementById('2_1rune')
const fourthRunes = document.getElementById('4rune')
const fourth_1Runes = document.getElementById('4_1rune')
const fivthRunes = document.getElementById('5rune')
const fivth_1Runes = document.getElementById('5_1rune')
const sixthRunes = document.getElementById('6rune')
const sixth_1Runes = document.getElementById('6_1rune')
const eighthRunes = document.getElementById('8rune')
const eighth_1Runes = document.getElementById('8_1rune')

const firstPosition = 0
const secondPosition = 1
const thirdPosition = 2
const fourthPosition = 3
const fifthPosition = 4

const numberOfCells = 9

const firstCell = 0
const secondCell = 1
const thirdCell = 2
const fourthCell = 3
const fifthCell = 4
const sixthCell = 5
const seventhCell = 6
const eighthCell = 7
const ninthCell = 8

for (let i = firstCell; i < resultPictures.length; i += numberOfCells){
    resultPictures[i].classList.add(`img${firstRunes.value}`)
}
for (let i = thirdCell; i < resultPictures.length; i += numberOfCells){        
        resultPictures[i].classList.add(`img${thirdRunes.value}`)
}
for (let i = seventhCell; i < resultPictures.length; i += numberOfCells){
    resultPictures[i].classList.add(`img${seventhRunes.value}`)
}
for (let i = ninthCell; i < resultPictures.length; i += numberOfCells){
    resultPictures[i].classList.add(`img${ninthRunes.value}`)
}     
        

const testMassiv = []
for (let i = 0; i < resultMassive[0].length; i+=1){
    testMassiv[i] = Math.abs(resultMassive[0][i] - resultMassive[1][i])
}
console.log('testMassiv '+ testMassiv)
//ищем максимальный элемент массива, узнаем его порядковый номер, 
//такую руну рисуем вручную по двоичной табличке руками
//присваиваем значение (-1) что бы не спутать и не повториться
function getMaxOfArray (array) {
    return Math.max.apply(null, array)
}
let courentPoint = 0  
let courentPosition = 0

courentPoint = getMaxOfArray(testMassiv)
courentPosition = testMassiv.indexOf(courentPoint)
//первый проход первое место
if (courentPosition === firstPosition){
    if (resultMassive[0][firstPosition] > resultMassive[1][firstPosition]){
        for (let i = secondCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
    } else if ((resultMassive[0][firstPosition] < resultMassive[1][firstPosition])){
        for (let i = secondCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
    } else if ((resultMassive[0][firstPosition] === resultMassive[1][firstPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}
//первый проход второе место
if (courentPosition === secondPosition){
    if (resultMassive[0][secondPosition] > resultMassive[1][secondPosition]){
        for (let i = fourthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
    } else if ((resultMassive[0][secondPosition] < resultMassive[1][secondPosition])){
        for (let i = fourthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
    } else if ((resultMassive[0][secondPosition] === resultMassive[1][secondPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}  
//первый проход третье место
if (courentPosition === thirdPosition){
    if (resultMassive[0][thirdPosition] > resultMassive[1][thirdPosition]){
        for (let i = fifthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
    } else if ((resultMassive[0][thirdPosition] < resultMassive[1][thirdPosition])){
        for (let i = fifthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
    } else if ((resultMassive[0][thirdPosition] === resultMassive[1][thirdPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}
//первый проход четвертое место
if (courentPosition === fourthPosition){
    if (resultMassive[0][fourthPosition] > resultMassive[1][fourthPosition]){
        for (let i = sixthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] < resultMassive[1][fourthPosition])){
        for (let i = sixthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] === resultMassive[1][fourthPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}
//первый проход пятое место
if (courentPosition === fifthPosition){
    if (resultMassive[0][fifthPosition] > resultMassive[1][fifthPosition]){
        for (let i = eighthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] < resultMassive[1][fifthPosition])){
        for (let i = eighthCell; i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] === resultMassive[1][fifthPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}
testMassiv[courentPosition] = -1


courentPoint = getMaxOfArray(testMassiv)
courentPosition = testMassiv.indexOf(courentPoint)
//второй проход первое место
if (courentPosition === firstPosition){
    if (resultMassive[0][firstPosition] > resultMassive[1][firstPosition]){
        for (let i = secondCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + secondCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + secondCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
    } else if ((resultMassive[0][firstPosition] < resultMassive[1][firstPosition])){
        for (let i = secondCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + secondCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + secondCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
    } else if ((resultMassive[0][firstPosition] === resultMassive[1][firstPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}

//второй проход второе место
if (courentPosition === secondPosition){
    if (resultMassive[0][secondPosition] > resultMassive[1][secondPosition]){
        for (let i = fourthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fourthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fourthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
    } else if ((resultMassive[0][secondPosition] < resultMassive[1][secondPosition])){
        for (let i = fourthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fourthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fourthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
    } else if ((resultMassive[0][secondPosition] === resultMassive[1][secondPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}

//второй проход третье место
if (courentPosition === thirdPosition){
    if (resultMassive[0][thirdPosition] > resultMassive[1][thirdPosition]){
        for (let i = fifthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fifthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fifthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
    } else if ((resultMassive[0][thirdPosition] < resultMassive[1][thirdPosition])){
        for (let i = fifthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fifthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fifthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
    } else if ((resultMassive[0][thirdPosition] === resultMassive[1][thirdPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}

//второй проход четвертое место
if (courentPosition === fourthPosition){
    if (resultMassive[0][fourthPosition] > resultMassive[1][fourthPosition]){
        for (let i = sixthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + sixthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + sixthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] < resultMassive[1][fourthPosition])){
        for (let i = sixthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + sixthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + sixthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] === resultMassive[1][fourthPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}

//второй проход пятое место
if (courentPosition === fifthPosition){
    if (resultMassive[0][fifthPosition] > resultMassive[1][fifthPosition]){
        for (let i = eighthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + eighthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + eighthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] < resultMassive[1][fifthPosition])){
        for (let i = eighthCell; i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < (resultPictures.length * 3 / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + eighthCell); i < (resultPictures.length / 2); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + eighthCell); i < resultPictures.length; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] === resultMassive[1][fifthPosition])) {
        alert('Какой-то бред, нужно больше данных')
    }
}
testMassiv[courentPosition] = -1


courentPoint = getMaxOfArray(testMassiv)
courentPosition = testMassiv.indexOf(courentPoint)
//третий проход первое место
if (courentPosition === firstPosition){
    if (resultMassive[0][firstPosition] >= resultMassive[1][firstPosition]){
        for (let i = secondCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + secondCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + secondCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + secondCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + secondCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + secondCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + secondCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }

    } else if ((resultMassive[0][firstPosition] < resultMassive[1][firstPosition])){
        for (let i = secondCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + secondCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + secondCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + secondCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + secondCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + secondCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + secondCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + secondCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
}
}
//третий проход второе место    
if (courentPosition === secondPosition){
    if (resultMassive[0][secondPosition] >= resultMassive[1][secondPosition]){
        for (let i = fourthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fourthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fourthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + fourthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + fourthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + fourthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + fourthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }

    
    } else if ((resultMassive[0][secondPosition] < resultMassive[1][secondPosition])){
        for (let i = fourthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fourthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fourthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fourthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + fourthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + fourthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + fourthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + fourthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }}
    }
//третий проход третье место
if (courentPosition === thirdPosition){
    if (resultMassive[0][thirdPosition] >= resultMassive[1][thirdPosition]){
        for (let i = fifthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fifthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fifthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + fifthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + fifthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + fifthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + fifthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }

    } else if ((resultMassive[0][thirdPosition] < resultMassive[1][thirdPosition])){
        for (let i = fifthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + fifthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + fifthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + fifthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + fifthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + fifthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + fifthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + fifthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
    }
}

//третий проход четвертое место    
if (courentPosition === fourthPosition){
    if (resultMassive[0][fourthPosition] >= resultMassive[1][fourthPosition]){
        for (let i = sixthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + sixthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + sixthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + sixthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + sixthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + sixthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + sixthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] < resultMassive[1][fourthPosition])){
        for (let i = sixthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + sixthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + sixthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + sixthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + sixthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + sixthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + sixthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + sixthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
    }
}

//третий проход пятое место  
if (courentPosition === fifthPosition){
    if (resultMassive[0][fifthPosition] >= resultMassive[1][fifthPosition]){
        for (let i = eighthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + eighthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + eighthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + eighthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + eighthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + eighthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + eighthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] < resultMassive[1][fifthPosition])){
        for (let i = eighthCell; i < (resultPictures.length / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) + eighthCell); i < (resultPictures.length * 3 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 2) + eighthCell); i < (resultPictures.length * 5 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = ((resultPictures.length / 4) * 3 + eighthCell); i < (resultPictures.length * 7 / 8); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }


        for (let i = ((resultPictures.length / 8) + eighthCell); i < (resultPictures.length / 4); i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 3 + eighthCell); i < (resultPictures.length / 2) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 5 + eighthCell); i < ((resultPictures.length / 4) * 3) ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = ((resultPictures.length / 8) * 7 + eighthCell); i < resultPictures.length ; i += numberOfCells){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
    }
}
testMassiv[courentPosition] = -1

courentPoint = getMaxOfArray(testMassiv)
courentPosition = testMassiv.indexOf(courentPoint)
//четвертый проход первое место
if (courentPosition === firstPosition){
    if (resultMassive[0][firstPosition] >= resultMassive[1][firstPosition]){
        for (let i = secondCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = (secondCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = (secondCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = (secondCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }

    } else if ((resultMassive[0][firstPosition] < resultMassive[1][firstPosition])){
        for (let i = secondCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = (secondCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = (secondCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = (secondCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
}
}
//четвертый проход второе место
if (courentPosition === secondPosition){
    if (resultMassive[0][secondPosition] >= resultMassive[1][secondPosition]){
        for (let i = fourthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = (fourthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = (fourthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = (fourthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }

    
    } else if ((resultMassive[0][secondPosition] < resultMassive[1][secondPosition])){
        for (let i = fourthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = (fourthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = (fourthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = (fourthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
    }
    }
//четвертый проход третье место 
if (courentPosition === thirdPosition){
    if (resultMassive[0][thirdPosition] >= resultMassive[1][thirdPosition]){
        for (let i = fifthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = (fifthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = (fifthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = (fifthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }

    } else if ((resultMassive[0][thirdPosition] < resultMassive[1][thirdPosition])){
        for (let i = fifthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = (fifthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = (fifthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = (fifthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
    }
}

//четвертый проход четвертое место      
if (courentPosition === fourthPosition){
    if (resultMassive[0][fourthPosition] >= resultMassive[1][fourthPosition]){
        for (let i = sixthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = (sixthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = (sixthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = (sixthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] < resultMassive[1][fourthPosition])){
        for (let i = sixthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = (sixthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = (sixthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = (sixthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
    }
}

//четвертый проход пятое место     
if (courentPosition === fifthPosition){
    if (resultMassive[0][fifthPosition] >= resultMassive[1][fifthPosition]){
        for (let i = eighthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = (eighthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = (eighthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = (eighthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] < resultMassive[1][fifthPosition])){
        for (let i = eighthCell; i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = (eighthCell + numberOfCells); i < (resultPictures.length); i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = (eighthCell + (numberOfCells * 2)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = (eighthCell + (numberOfCells * 3)); i < resultPictures.length; i += (4 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
    }
}
testMassiv[courentPosition] = -1

courentPoint = getMaxOfArray(testMassiv)
courentPosition = testMassiv.indexOf(courentPoint)



//пятый проход первое место
if (courentPosition === firstPosition){
    if (resultMassive[0][firstPosition] >= resultMassive[1][firstPosition]){
        for (let i = secondCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
        for (let i = (secondCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
    } else if ((resultMassive[0][firstPosition] < resultMassive[1][firstPosition])){
        for (let i = secondCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${second_1Runes.value}`)
        }
        for (let i = (secondCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${secondRunes.value}`)
        }
    } 
}
//пятый проход второе место   
if (courentPosition === secondPosition){
    if (resultMassive[0][secondPosition] >= resultMassive[1][secondPosition]){
        for (let i = fourthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
        for (let i = (fourthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
    } else if ((resultMassive[0][secondPosition] < resultMassive[1][secondPosition])){
        for (let i = fourthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourth_1Runes.value}`)
        }
        for (let i = (fourthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fourthRunes.value}`)
        }
    } 
}  
//пятый проход третье место  
if (courentPosition === thirdPosition){
    if (resultMassive[0][thirdPosition] >= resultMassive[1][thirdPosition]){
        for (let i = fifthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
        for (let i = (fifthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
    } else if ((resultMassive[0][thirdPosition] < resultMassive[1][thirdPosition])){
        for (let i = fifthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivth_1Runes.value}`)
        }
        for (let i = (fifthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${fivthRunes.value}`)
        }
    } 
} 
//пятый проход четвертое место  
if (courentPosition === fourthPosition){
    if (resultMassive[0][fourthPosition] >= resultMassive[1][fourthPosition]){
        for (let i = sixthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
        for (let i = (sixthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fourthPosition] < resultMassive[1][fourthPosition])){
        for (let i = sixthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixth_1Runes.value}`)
        }
        for (let i = (sixthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${sixthRunes.value}`)
        }
    } 
}
//пятый проход пятое место
if (courentPosition === fifthPosition){
    if (resultMassive[0][fifthPosition] >= resultMassive[1][fifthPosition]){
        for (let i = eighthCell; i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
        for (let i = (eighthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
    } else if ((resultMassive[0][fifthPosition] < resultMassive[1][fifthPosition])){
        for (let i = eighthCell; i < resultPictures.length; i += (2 *numberOfCells)){
            resultPictures[i].classList.add(`img${eighth_1Runes.value}`)
        }
        for (let i = (eighthCell + numberOfCells); i < resultPictures.length; i += (2 * numberOfCells)){
            resultPictures[i].classList.add(`img${eighthRunes.value}`)
        }
    } 
}















}

//buttonEditValues
const buttonEditValues = document.querySelector('.scrollButton')
buttonEditValues.onclick = () => {
    //valuesResult = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    for (let i = 0; i < valuesResult.length; i += 1) {
        for (let k = 0; k < valuesResult[i].length; k += 1) {
            valuesResult[i][k] = 0;
        }
    }


    const valuesCoincidences = document.querySelectorAll('input')

    //amount runes 2

    for (let i = 0; i < 16; i += 1) {
        if (valuesCoincidences[i].value.length > 0) {
            valuesResult[0][0] += parseInt(valuesCoincidences[i].value)
        }
    }

    // amount runes 2_1
    for (let i = 16; i < 32; i += 1) {
        if (valuesCoincidences[i].value.length > 0) {
            valuesResult[1][0] += parseInt(valuesCoincidences[i].value)
        }
    }

    // amount runes 4
    for (let i = 0; i < 32; i += 1) {
        if ((i === 8) + (i === 24)) { i += 7 }
        else if (valuesCoincidences[i].value.length > 0) {
            valuesResult[0][1] += parseInt(valuesCoincidences[i].value)
        }
    }

    // amount runes 4_1
    for (let i = 8; i < 32; i += 1) {
        if (i === 16) {
            i += 7
        } else if (valuesCoincidences[i].value.length > 0) {
            valuesResult[1][1] += parseInt(valuesCoincidences[i].value)
        }
    }

    // amount runes 5
    for (let i = 0; i < 32; i += 1) {
        if ((i === 4) + (i === 12) + (i === 20) + (i === 28)) { i += 3 }
        else {
            if (valuesCoincidences[i].value.length > 0) {
                valuesResult[0][2] += parseInt(valuesCoincidences[i].value)
            }
        }
    }

    // amount runes 5_1
    for (let i = 4; i < 32; i += 1) {

        if ((i === 8) + (i === 16) + (i === 24)) { i += 3 } else {
            if (valuesCoincidences[i].value.length > 0) {
                valuesResult[1][2] += parseInt(valuesCoincidences[i].value)
            }
        }
    }

    // amount runes 6
    for (let i = 0; i < 32; i += 1) {
        if ((i === 2) + (i === 6) + (i === 10) + (i === 14) + (i === 18) + (i === 22) + (i === 26) + (i === 30)) { i += 1 }
        else {
            if (valuesCoincidences[i].value.length > 0) {

                valuesResult[0][3] += parseInt(valuesCoincidences[i].value)
            }
        }
    }

    // amount runes 6_1
    for (let i = 2; i < 32; i += 1) {
        if ((i === 4) + (i === 8) + (i === 12) + (i === 16) + (i === 20) + (i === 24) + (i === 28)) {
            i += 1
        } else {
            if (valuesCoincidences[i].value.length > 0) {
                valuesResult[1][3] += parseInt(valuesCoincidences[i].value)
            }
        }
    }

    // amount runes 8
    for (let i = 0; i < 32; i += 2) {
        if (valuesCoincidences[i].value.length > 0) {
            valuesResult[0][4] += parseInt(valuesCoincidences[i].value)

        }
    }
    // amount runes 8_1
    for (let i = 1; i < 32; i += 2) {
        if (valuesCoincidences[i].value.length > 0) {
            valuesResult[1][4] += parseInt(valuesCoincidences[i].value)
        }
    }
    buttonPredictTheResult.classList.remove('nonDisplay')
    console.log(valuesResult)
}

//buttonVariationOfMaps
const buttonVariationOfMaps = document.querySelector('.VariationOfMaps')
buttonVariationOfMaps.onclick = () => {






    //first rune
    const allFirstRunes = document.querySelectorAll('.firstRune')
    const firstRuneValue = document.getElementById('1rune')
    for (const i in allFirstRunes) {
        if (i < allFirstRunes.length) {
            clearImgClass(allFirstRunes[i])
            allFirstRunes[i].classList.add(`img${firstRuneValue.value}`)
        }
    }




    //third rune
    const allThirdRunes = document.querySelectorAll('.thirdRune')
    const thirdRuneValue = document.getElementById('3rune')
    for (const i in allThirdRunes) {
        if (i < allThirdRunes.length) {
            clearImgClass(allThirdRunes[i])
            allThirdRunes[i].classList.add(`img${thirdRuneValue.value}`)
        }
    }

    //seventh rune
    const allSeventhRunes = document.querySelectorAll('.seventhRune')
    const seventhRuneValue = document.getElementById('7rune')
    for (const i in allSeventhRunes) {
        if (i < allSeventhRunes.length) {
            clearImgClass(allSeventhRunes[i])
            allSeventhRunes[i].classList.add(`img${seventhRuneValue.value}`)
        }
    }

    //ninth rune
    const allNinthRunes = document.querySelectorAll('.ninthRune')
    const ninthRuneValue = document.getElementById('9rune')
    for (const i in allNinthRunes) {
        if (i < allNinthRunes.length) {
            clearImgClass(allNinthRunes[i])
            allNinthRunes[i].classList.add(`img${ninthRuneValue.value}`)
        }
    }

    // second rune
    const allSecondRunes = document.querySelectorAll('.secondRune')
    const secondRuneValue = document.getElementById('2rune')
    for (const i in allSecondRunes) {
        if (i < allSecondRunes.length) {
            clearImgClass(allSecondRunes[i])
            allSecondRunes[i].classList.add(`img${secondRuneValue.value}`)
        }
    }

    // second_1 rune 
    const allSecond_1Runes = document.querySelectorAll('.second_1Rune')
    const second_1RuneValue = document.getElementById('2_1rune')
    for (const i in allSecond_1Runes) {
        if (i < allSecond_1Runes.length) {
            clearImgClass(allSecond_1Runes[i])
            allSecond_1Runes[i].classList.add(`img${second_1RuneValue.value}`)
        }
    }

    //fourth rune             
    const allFourthRunes = document.querySelectorAll('.fourthRune')
    const fourthRuneValue = document.getElementById('4rune')
    for (const i in allFourthRunes) {
        if (i < allFourthRunes.length) {
            clearImgClass(allFourthRunes[i])
            allFourthRunes[i].classList.add(`img${fourthRuneValue.value}`)
        }
    }

    //fourth_1 rune
    const allFourth_1Runes = document.querySelectorAll('.fourth_1Rune')
    const fourth_1RuneValue = document.getElementById('4_1rune')
    for (const i in allFourth_1Runes) {
        if (i < allFourth_1Runes.length) {
            clearImgClass(allFourth_1Runes[i])
            allFourth_1Runes[i].classList.add(`img${fourth_1RuneValue.value}`)
        }
    }

    //fivth rune
    const allFivthRunes = document.querySelectorAll('.fivthRune')
    const fivthRuneValue = document.getElementById('5rune')
    for (const i in allFivthRunes) {
        if (i < allFivthRunes.length) {
            clearImgClass(allFivthRunes[i])
            allFivthRunes[i].classList.add(`img${fivthRuneValue.value}`)
        }
    }

    //fivth_1 rune
    const allFivth_1Runes = document.querySelectorAll('.fivth_1Rune')
    const fivth_1RuneValue = document.getElementById('5_1rune')
    for (const i in allFivth_1Runes) {
        if (i < allFivth_1Runes.length) {
            clearImgClass(allFivth_1Runes[i])
            allFivth_1Runes[i].classList.add(`img${fivth_1RuneValue.value}`)
        }
    }

    //sixth rune      
    const allSixthRunes = document.querySelectorAll('.sixthRune')
    const sixthRuneValue = document.getElementById('6rune')
    for (const i in allSixthRunes) {
        if (i < allSixthRunes.length) {
            clearImgClass(allSixthRunes[i])
            allSixthRunes[i].classList.add(`img${sixthRuneValue.value}`)
        }
    }

    //sixth_1 rune  
    const allSixth_1Runes = document.querySelectorAll('.sixth_1Rune')
    const sixth_1RuneValue = document.getElementById('6_1rune')
    for (const i in allSixth_1Runes) {
        if (i < allSixth_1Runes.length) {
            clearImgClass(allSixth_1Runes[i])
            allSixth_1Runes[i].classList.add(`img${sixth_1RuneValue.value}`)
        }
    }

    //eighth rune
    const allEighthRunes = document.querySelectorAll('.eighthRune')
    const eighthRuneValue = document.getElementById('8rune')
    for (const i in allEighthRunes) {
        if (i < allEighthRunes.length) {
            clearImgClass(allEighthRunes[i])
            allEighthRunes[i].classList.add(`img${eighthRuneValue.value}`)
        }
    }


    //eighth_1 rune  
    const allEighth_1Runes = document.querySelectorAll('.eighth_1Rune')
    const eighth_1RuneValue = document.getElementById('8_1rune')
    for (const i in allEighth_1Runes) {
        if (i < allEighth_1Runes.length) {
            clearImgClass(allEighth_1Runes[i])
            allEighth_1Runes[i].classList.add(`img${eighth_1RuneValue.value}`)
        }
    }

    //visibility content    tableRune2 tableRune4 tableRune5 tableRune6 tableRune8  tableRune2_1 tableRune4_1 tableRune5_1 tableRune6_1 tableRune8_1
    let visibility = false;
    if ((eighth_1RuneValue.value.length > 1) + (eighthRuneValue.value.length > 1)) {
        if ((sixth_1RuneValue.value.length > 1) + (sixthRuneValue.value.length > 1)) {
            if ((fivth_1RuneValue.value.length > 1) + (fivthRuneValue.value.length > 1)) {
                if ((fourth_1RuneValue.value.length > 1) + (fourthRuneValue.value.length > 1)) {
                    if ((secondRuneValue.value.length > 1) + (second_1RuneValue.value.length > 1)) {
                        visibility = true
                    }
                }
            }
        }
    }

    if (visibility) {
        document.querySelector('h2').classList.remove('nonDisplay')
        buttonEditValues.classList.remove('nonDisplay')

        for (let i = 0; i < document.querySelectorAll('.coincidencesMap').length; i += 1) {
            let currentTableVisibility = document.querySelectorAll('.coincidencesMap')[i]
            currentTableVisibility.classList.remove('nonDisplay')
        }

        for (let i = 0; i < document.querySelectorAll('.img').length; i += 1) {
            document.querySelectorAll('.img')[i].parentElement.parentElement.parentElement.parentElement.classList.add('nonDisplay')
        }

    }

}
