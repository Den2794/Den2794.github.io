//buttonPredictTheResult
const buttonPredictTheResult = document.querySelectorAll('.buttonTap')[1]
buttonPredictTheResult.onclick = () => {

}

//buttonEditValues
const buttonEditValues = document.querySelector('.scrollButton')
buttonEditValues.onclick = () => {

}

//buttonVariationOfMaps
const buttonVariationOfMaps = document.querySelector('.VariationOfMaps')
buttonVariationOfMaps.onclick = () => {

    function clearImgClass(numberRune) {
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
        const hedingMaps = document.querySelector('h2')
        hedingMaps.classList.remove('nonDisplay')
        buttonEditValues.classList.remove('nonDisplay')

//8_1 test visibility on
const tableRune8_1Visibility = document.querySelectorAll('.tableRune8_1')
        if (eighth_1RuneValue.value.length > 1) {
            
            for (const i in tableRune8_1Visibility) {
                if (i < tableRune8_1Visibility.length) {
                    tableRune8_1Visibility[i].classList.remove(`nonDisplay}`)
                }
            }
        } else {
            for (const i in tableRune8_1Visibility) {
                if (i < tableRune8_1Visibility.length) {
                    tableRune8_1Visibility[i].classList.add(`nonDisplay}`)
                }
            }
        }

    }
}
