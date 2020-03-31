let myString
myString = 'HochkommaString'
let stringMitHTML = '<b>bold text</b>'

/* AUSDRUCK vs ANWEISUNG */
/* en: expression vs statement */

console.log('text');

/* document.getElementById('par_iT').innerText = myString // HochkommaString
document.getElementById('par_iH').innerHTML = myString // HochkommaString
document.getElementById('out_v').value = myString // HochkommaString
document.getElementById('out_iT').innerText = myString // HochkommaString */



 document.getElementById('par_iT').innerText = stringMitHTML // <b>bold text</b>
document.getElementById('par_iH').innerHTML = stringMitHTML // bold text
document.getElementById('out_v').value = stringMitHTML // <b>bold text</b> 
document.getElementById('out_iT').value = stringMitHTML // <b>bold text</b> 

let par = document.getElementById('par_iT')
console.log('par :', par);
 console.log('object :', par); // ; ist optional

// clo und slg snipopets
console.log(par);

console.error(par);

console.info('info')