namespace RandomPoem {
  //Arrays
  let subjekt: string[] = ["Ron ", "Sebi ", "Lora ", "Bertram ", "Eunike "];
  let prädikat: string[] = [
    "gut ",
    "woher ",
    "sauber ",
    "gesättigt ",
    "lecker ",
  ];
  let objekt: string[] = [
    "Hammer ",
    "Tastatur ",
    "Melkstand ",
    "Sonnenbrille ",
    "Eier ",
  ];

  for (let index: number = 5; index >= 1; index--) {
    let satz: string = getVerse(subjekt, prädikat, objekt);
    console.log(satz);
  }
}

//Funktion
function getVerse(
  _subjekt: string[],
  _prädikat: string[],
  _objekt: string[]
): string {
  let subjekt1: number = Math.floor(Math.random() * _subjekt.length);
  let objekt1: number = Math.floor(Math.random() * _objekt.length);
  let prädikat1: number = Math.floor(Math.random() * _prädikat.length);

  let value: string =
    _subjekt[subjekt1] + "" + _prädikat[prädikat1] + "" + _objekt[objekt1];
  _objekt.splice(objekt1, 1);
  _subjekt.splice(subjekt1, 1);
  _prädikat.splice(prädikat1, 1);
  return value;
}
