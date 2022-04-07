var myStr = "Paragon is the best!";

function useMethods(str) {
    var myReverse;
    var countCharacters;

    var besede = str.split("");

    besede = besede.reverse();

    countCharacters = besede.map((s) => s.lenght);
    
    besede = besede.map((r => r.split("").reverse().join("")));

    myReverse = besede.join("");
    return {myReverse, countCharacters};
}

console.log(useMethods(myStr));
module.exports = useMethods;