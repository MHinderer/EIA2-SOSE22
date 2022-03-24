"use strict";
var RandomPoem;
(function (RandomPoem) {
    //Arrays
    let subjekt = ["Ron ", "Sebi ", "Lora ", "Bertram ", "Eunike "];
    let prädikat = [
        "gut ",
        "woher ",
        "sauber ",
        "gesättigt ",
        "lecker ",
    ];
    let objekt = [
        "Hammer ",
        "Tastatur ",
        "Melkstand ",
        "Sonnenbrille ",
        "Eier ",
    ];
    for (let index = 5; index >= 1; index--) {
        let satz = getVerse(subjekt, prädikat, objekt);
        console.log(satz);
    }
})(RandomPoem || (RandomPoem = {}));
//Funktion
function getVerse(_subjekt, _prädikat, _objekt) {
    let subjekt1 = Math.floor(Math.random() * _subjekt.length);
    let objekt1 = Math.floor(Math.random() * _objekt.length);
    let prädikat1 = Math.floor(Math.random() * _prädikat.length);
    let value = _subjekt[subjekt1] + "" + _prädikat[prädikat1] + "" + _objekt[objekt1];
    _objekt.splice(objekt1, 1);
    _subjekt.splice(subjekt1, 1);
    _prädikat.splice(prädikat1, 1);
    return value;
}
//# sourceMappingURL=01_Poem.js.map