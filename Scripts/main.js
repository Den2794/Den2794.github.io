const valuesResult = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] //2 4 5 6 8, 2_1 4_1 5_1 6_1 8_1 

function clearImgClass(numberRune) {
    numberRune.classList.remove('imgHegil', 'imgYar', 'imgGifu', 'imgTir', 'imgRad', 'imgIo', 'imgTorn', 'imgUr', 'imgFeo',)
}
//buttonPredictTheResult
const buttonPredictTheResult = document.querySelectorAll('.buttonTap')[1]
buttonPredictTheResult.onclick = () => {
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
    for (let i = 0; i < variationsPicture; i += 1) {
        document.querySelectorAll('table.nonDisplay')[i].classList.remove('.nonDisplay')
    }
    console.log(resultMassive)

    for (let i = 0; i < resultMassive[1].length; i += 1){
        resultMassive[1][i]
    }
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




    /* 
 
     
     for (let i = 14; i < 50; i += 1) {
         document.querySelectorAll('td')[i].classList.remove(imgRunes)
     }
 
 let   currentRune = document.getElementById('1rune')
     for (let i = 14; i < 42; i += 9) {
         document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
     }
 
     currentRune = document.getElementById('3rune')
     for (let i = 16; i < 44; i += 9) {
         document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
     }
 
     currentRune = document.getElementById('7rune')
     for (let i = 20; i < 48; i += 9) {
         document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
     }
 
     currentRune = document.getElementById('9rune')
     for (let i = 22; i < 50; i += 9) {
         document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
     }
 
 
 
     if (valuesResult[0] > valuesResult[1]) {
          currentRune = document.getElementById('2rune')
         for (let i = 15; i < 43; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     } else if (valuesResult[0] < valuesResult[1]){
          currentRune = document.getElementById('2_1rune')
         for (let i = 15; i < 43; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     }
 
     if (valuesResult[2] > valuesResult[3]) {
          currentRune = document.getElementById('4rune')
         for (let i = 17; i < 45; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     } else if (valuesResult[2] < valuesResult[3]){
          currentRune = document.getElementById('4_1rune')
         for (let i = 17; i < 45; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     }
 
     if (valuesResult[4] > valuesResult[5]) {
          currentRune = document.getElementById('5rune')
         for (let i = 18; i < 46; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
 
     } else if (valuesResult[4] < valuesResult[5]){
          currentRune = document.getElementById('5_1rune')
         for (let i = 18; i < 46; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     }
 
 
 
     if (valuesResult[6] > valuesResult[7]) {
          currentRune = document.getElementById('6rune')
         for (let i = 19; i < 47; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     } else if (valuesResult[6] < valuesResult[7]){
          currentRune = document.getElementById('6_1rune')
         for (let i = 19; i < 47; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
 
     }
 
     if (valuesResult[8] > valuesResult[9]) {
          currentRune = document.getElementById('8rune')
         for (let i = 21; i < 49; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
     } else if (valuesResult[8] < valuesResult[9]){
          currentRune = document.getElementById('8_1rune')
         for (let i = 21; i < 49; i += 9) {
             document.querySelectorAll('td')[i].classList.add(`img${currentRune.value}`)
         }
 
     }*/
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
