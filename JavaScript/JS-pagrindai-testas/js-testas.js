/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
function eurToDollars() {
  let randomNumberInEur = Math.floor(Math.random() * 1000) + 1;
  let EurToDollarsKoeficient = 1.08;
  let converting = (randomNumberInEur * EurToDollarsKoeficient).toFixed(2);
  return `Coverting ${randomNumberInEur}Eur to dollars - ${converting}$`;
}
console.log(eurToDollars());

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
function dollarsToEur() {
  let randomNumberInDollars = Math.floor(Math.random() * 1000) + 1;
  let dollarsToEurKoeficient = 0.92;
  let converting = (randomNumberInDollars * dollarsToEurKoeficient).toFixed(2);
  return `Converting ${randomNumberInDollars}$ to Eur - ${converting} Eur`;
}
console.log(dollarsToEur());

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

//Padariau 2 variantus vienas paprastai, sekantis su funkcija.
let svoris = 80;
let ugis = 1.8;
let bmi = svoris / ugis ** 2;
if (bmi > 25) {
  console.log(`${bmi.toFixed(2)} indeksas virssvoris`);
} else if (18.25 <= bmi && bmi < 25) {
  console.log(`${bmi.toFixed(2)} indeksas normalus`);
} else {
  console.log(`${bmi.toFixed(2)} indeksas per mazas`);
}

//2 variantas su funkcija
function bmiCalculator(svoris, ugis) {
  let bmi = (svoris / ugis ** 2).toFixed(2);
  if (bmi > 25) {
    return "Virsvoris";
  } else if (18.25 <= bmi && bmi < 25) {
    return "normalus";
  } else {
    return "Per mazas";
  }
}
console.log(bmiCalculator(80, 1.8));

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let amzius = 20;
let year = 365;
let day = 24;
let hour = 60;
let min = 60;

let zmogausAmziusSekundemis = amzius * year * day * hour * min;
console.log(`Zmogaus amzius sekundemis - ${zmogausAmziusSekundemis} sec`);
let zmogausAmziusMinutemis = amzius * year * day * hour;
console.log(`Zmogaus amzius minutemis - ${zmogausAmziusMinutemis} min`);
let zmogausAmziusValandomis = amzius * year * day;
console.log(`Zmogaus amzius valandomis - ${zmogausAmziusValandomis} val`);
let zmogausAmziusDienomis = amzius * year;
console.log(`Zmogaus amzius dienomis - ${zmogausAmziusDienomis} d.`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
//Atlikau dviems budais naudojant funckijas ir uzrasant paprastai
let temp = 27;
let farenheit = 80.6;
let tempToFarenheit = temp * (9 / 5) + 32;
console.log(`${temp}℃ verciame i farneiheitus ${tempToFarenheit}F`);
let farenheitToTemp = ((farenheit - 32) * (5 / 9)).toFixed(2);
console.log(
  `Farenheitus ${farenheit}F vercia i temperatura ${farenheitToTemp}℃`
);

//2 variantas
function temperatureToFarenheit(temp) {
  let convertTemperatureToFarenheit = (temp * (9 / 5) + 32).toFixed(2);
  return `Paverciame temperatura ${temp}℃ i farenheitus - ${convertTemperatureToFarenheit}F`;
}
console.log(temperatureToFarenheit(27));

function farenheitToTemperature(farenheit) {
  let convertFarenheitToTemperature = ((farenheit - 32) * (5 / 9)).toFixed(2);
  return `Paverciame farenheitus ${farenheit}F i temperatura - ${convertFarenheitToTemperature}℃`;
}
console.log(farenheitToTemperature(80.6));

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let skaiciuEilute = "";
for (let i = 1; i < 11; i++) {
  skaiciuEilute += i + "-";
}
let nuimameGaleBruksni = skaiciuEilute.slice(0, -1);
console.log(nuimameGaleBruksni);
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let eilute = "";
for (let i = 0; i <= 5; i++) {
  eilute += "*".repeat(i) + "\n";
}
console.log(eilute);
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
let dateNow = new Date();
let christmasDate = new Date(2024, 11, 25);
let msPerDay = 24 * 60 * 60 * 1000;
let timeLeft = christmasDate - dateNow;
let daysleft = Math.floor(timeLeft / msPerDay);
console.log(`Iki kaledu liko ${daysleft}d.`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
const vardai = ["Tomas", "Dainius", "Paulius", "Jonas"];
let varduEilute = "";
let sekantiVarduEilute = "";
for (let vardas of vardai) {
  varduEilute += vardas + ",";
  sekantiVarduEilute += vardas + "+";
}
console.log(varduEilute.slice(0, -1));
console.log(sekantiVarduEilute.slice(0, -1));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

let numbers = "0123456789";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

let maxLength = 12;

let passowrd = [
  numbers.charAt(Math.random() * numbers.length),
  upperLetters.charAt(Math.random() * upperLetters.length),
  lowerLetters.charAt(Math.random() * lowerLetters.length),
  symbols.charAt(Math.random() * symbols.length),
];

let leftSymbols = maxLength - passowrd.length;

let sumLowerLetters = "";
for (let i = 1; i <= leftSymbols; i++) {
  let randomIndex = Math.floor(Math.random() * lowerLetters.length);
  let randomLetter = lowerLetters[randomIndex];
  sumLowerLetters += randomLetter;
}

let finishedPassowrd = passowrd.join("") + sumLowerLetters;
console.log(`Galutinis sugeneruotas password: ${finishedPassowrd}`);
