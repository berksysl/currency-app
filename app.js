const amountEl = document.querySelector('#amount');
const fromCur = document.querySelector('#fcurrencies [selected]');
const changeBtn = document.querySelector('.changeBtn');
const result = document.querySelector('.result h2');
const toCur = document.querySelector('#tcurrencies [selected]');
const submit = document.querySelector('button');
const myHeaders = new Headers();
let to;
let from;
let amount;

myHeaders.append("apikey", "9204r66l1iDCiRngvM8poDJCb1erReQX");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function getInputs() {
    amount = amountEl.value;
    from = fromCur.value;
    to = toCur.value;
}


submit.addEventListener("click", function(){
    getInputs();
    console.log("amount: " + amount + " from: " + from + " to : " + to);
    fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.json())
  .then(resultObj => result.innerHTML = resultObj.result.toFixed(2) + " " + resultObj.query.to)
  .catch(error => console.log('error', error));

});
