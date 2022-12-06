//buttonVariationOfMaps
const buttonVariationOfMaps = document.querySelector('.VariationOfMaps')
buttonVariationOfMaps.onclick = () => {

function clearImgClass (numberRune)  {
    numberRune.classList.remove('imgHegil', 'imgYar', 'imgGifu', 'imgTir', 'imgRad', 'imgIo', 'imgTorn', 'imgUr', 'imgFeo')
}

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


}
//buttonPredictTheResult
const buttonPredictTheResult = document.querySelectorAll('.buttonTap')[1]
buttonPredictTheResult.onclick = () => {
    
}
//buttonEditValues
const buttonEditValues = document.querySelector('.scrollButton')
buttonEditValues.onclick = () => {
    
}