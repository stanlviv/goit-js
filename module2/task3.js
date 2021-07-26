let text3 = `Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.`

function task3(){
    const findLongestWord = function (string) {
        let stringToNums = string.split(" ").map(function(item) { return item.length});
        let highestIndex = stringToNums.indexOf(Math.max(...stringToNums));
        return string.split(" ")[highestIndex];
    };
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

    console.log(findLongestWord('Google do a roll')); // 'Google'

    console.log(findLongestWord('May the force be with you')); // 'force'
}