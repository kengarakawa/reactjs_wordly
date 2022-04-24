import wordList from '../data/5lw-simple.json'
export const validateWord = (guess) => {
    const found = wordList.find( i => i === guess )
    //console.warn(` me ${found} `)
    return !(found === undefined)        
}

export const randomWord = () => {
    let temp = wordList[Math.floor(Math.random() * wordList.length)]
    // console.warn(` randoming ... ${temp}`)
    return temp
}

export const noRepeatingCharacters = (theWord)  => {
    
    let existing = [] 
    theWord = theWord.toLowerCase().split('')
    // console.log(typeof theWord)
    // console.log(theWord)
    theWord.forEach(c => {
        if(existing.indexOf(c) === -1) {
            existing.push(c)
        }
    })
    
    return theWord.length === existing.length
}

