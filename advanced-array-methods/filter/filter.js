const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively'
]; 

const longWords = words.filter(function(word){
    return word.length >= 20;
})

const shortWords = words.filter(function(word){
    if (word.length <= 5){
        return true;
    } 
    else {
        return false;
    }
});

const seeYouWords = words.filter(function(w){
    return w[0] === 'u' || w[0] === 'c';
});

const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
};

const containsVowel = function(word){
    for (let char of word){
        if (isVowel(char)) return true;
    }
    return false;
};

const noVowels = words.filter(function(word){
    return !containsVowel(word);
})

const yesVowels = words.filter(function(word){
    return containsVowel(word);
})

const isConsonant = function(char){
    return 'bcdfghjklmnpqrstvwxyz'.indexOf(char) !== -1;
};

const containsConsonants = function(word){
    for (let char of word){
        if(isConsonant(char)) return true;
    }
    return false;
}

const noConsonants = words.filter(function(word){
    return !containsConsonants(word);
})

const yesConsonants = words.filter(function(word){
    return containsConsonants(word);
}); // should return empty








function myFilter(arr, callback){
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};


const littleWords = myFilter(words, function(word){
    return word.length <= 10;
});

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0;
})