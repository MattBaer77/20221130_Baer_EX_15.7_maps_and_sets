//

// Quick Question 1

// It will return a set with no duplicates

// const neue = new Set([1,1,2,2,3,4])

// Quick Question 2

// a string that looks like this - 'ref'

// const ref =

// [...new Set("referee")].join("");

// Quick Questio 3

// {[1,2,3] => true, [1,2,3] => false}

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// remember that the array is not written over because both arrays have different 'addresses'!

// let m = new Map();
// m.set(1, true);
// m.set(1, false);

// hasDuplicate

// accepts an array

// returns true or false if it has a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// const hasDuplicate = (arr) => {
//     return [...new Set(arr)];
// }

// IDK what I was thinking here - maybe I will use this later though...

const hasDuplicate = (arr) => {
    return new Set(arr).size === arr.length ? false : true;
};

// vowelCount

// accepts a string

// returns a map where the keys are numbers (I am guessing he meant to type vowels based on the examples) and the values are the count of the vowels in the string

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = (string) => {

    const vowels = 'aeiou'

    let stringLc = string.toLowerCase();

    // console.log(stringLc);

    const isVowel = (letter) => {
        return vowels.includes(letter)
    }

    // console.log(isVowel('w'));

    // console.log(isVowel('a'));
        
    const stringMap = new Map()

    for (letter of stringLc) {

        // console.log(isVowel(letter));


        if (isVowel(letter) && stringMap.has(letter)) {stringMap.set(letter, stringMap.get(letter) + 1)}
        else if (isVowel(letter)) {stringMap.set(letter,1)}
        
        // stringMap.set(letter,1);
    }

    // console.log(stringMap);

    return stringMap
}

//