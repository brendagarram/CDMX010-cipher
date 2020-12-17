import cipher from './cipher.js';

//console.log(cipher);

const nextButton = document.getElementById('main-section--button');
const encodePagButton = document.getElementById('main-section-password--encode');
const encryptButton = document.getElementById('main-section--encodeButton');
const decryptButton = document.getElementById('main-section--decodeButton');
const decodePagButton = document.getElementById('main-section-password--decode');
nextButton.addEventListener('click', goInfoPassword, false);
encodePagButton.addEventListener('click', goPagEncode, false);
encryptButton.addEventListener('click', encode, false);
decryptButton.addEventListener('click', decode, false);
decodePagButton.addEventListener ('click', goPagDecode, false);


function goInfoPassword (){
    document.getElementById('main-section--gralinfo').style.display = "none";
    document.getElementById('main-section-gralInfo--img').style.display = "none";
    document.getElementById('main-section-password--info').style.display = "block";
    document.getElementById('main-section-password--img').style.display = "block";
}

function goPagEncode (){
    document.getElementById('main-section-password--info').style.display = "none";
    document.getElementById('main-section-password--img').style.display = "none";
    document.getElementById('main-section-encode--img').style.display = "block";
    document.getElementById('main-section-encode').style.display = "block";
}

function goPagDecode () {
  document.getElementById('main-section-password--info').style.display = "none";
  document.getElementById('main-section-password--img').style.display = "none";
  document.getElementById('main-section-decode').style.display = "block";
  document.getElementById('main-section-decode--img').style.display = "block";
}

function encode() {
  let sentence = document.getElementById('sentence').value;
  let scrollInfo = document.getElementById('scrollNumber').value;
  if (sentence =="") {
 // alert ('No has introducido tu enunciado')
    let newDivAlert = document.createElement('div');
    let alertNoSentenceInput = document.createTextNode('No has introducido tu enunciado');
    newDivAlert.appendChild(alertNoSentenceInput);
    document.getElementById("main-section-encode--sentenceInput").appendChild(newDivAlert);
    newDivAlert.style.margin = "10px 10px";
    newDivAlert.style.color = "red";
  }
  if (scrollInfo =="") {
    //alert ('No has introducido el número')
    let newDivAlert = document.createElement('div');
    let alertNoNumberInput = document.createTextNode('No has introducido tu número de encriptación');
    newDivAlert.appendChild(alertNoNumberInput);
    document.getElementById("main-section-encode--numberInput").appendChild(newDivAlert);
    newDivAlert.style.margin = "10px 10px";
    newDivAlert.style.color = "red";
  }
  let sentenceString = String(sentence);
  let sentenceUpper = sentenceString.toUpperCase();
  let scrollNumber = parseInt(scrollInfo);
  //console.log(typeof scrollNumber);
  //console.log(scrollNumber);
  let newPassword = cipher.encode(sentenceUpper, scrollNumber);
  let divContainer = document.getElementById("main-section-encode--passwordSection");
  let newDiv = document.createElement('div');
  let infoEachInput = ['Esta es tu contraseña: ' + newPassword, 'El enunciado usado fue: ' + sentence, 'El número de encriptación fue: ' + scrollNumber];
  function displayInfoInput() {
    for (let i = 0; i < infoEachInput.length; i++) {
      encryptButton.disabled=true;
      newDiv.appendChild(document.createTextNode(infoEachInput[i]));
      newDiv.appendChild(document.createElement("br"));
    }
  }

  divContainer.appendChild(newDiv);
  newDiv.style.width = "auto";
  newDiv.style.height = "auto";
  newDiv.style.margin = "10px 10px";
  newDiv.style.padding = "20px";
  newDiv.style.fontSize = "1.5rem";
  newDiv.style.background = "#699ff0";
  newDiv.style.color = "white";
  newDiv.style.textAlign = "center";

  let welcomeButton = document.createElement('button');
      welcomeButton.innerText= 'Inicio';
      welcomeButton.onclick = function(){
        document.getElementById('main-section--gralinfo').style.display = "block";
        document.getElementById('main-section-gralInfo--img').style.display = "block";
        document.getElementById('main-section-encode--img').style.display = "none";
        document.getElementById('main-section-encode').style.display = "none";
    }
  document.getElementById("main-section-encode--passwordSection").appendChild(welcomeButton);

  welcomeButton.style.width = "150px";
  welcomeButton.style.height = "50px";
  welcomeButton.style.margin = "10px 10px";
  welcomeButton.style.padding = "20px";
  welcomeButton.style.fontSize = "1.5rem";
  welcomeButton.style.background = "#699ff0";
  welcomeButton.style.borderRadius = "5px";
  welcomeButton.style.border = "none";
  welcomeButton.style.boxShadow = "5px 5px 10px #797272";
  welcomeButton.style.textAlign = "center";
  welcomeButton.style.fontFamily = "Nunito, sans-serif";
  welcomeButton.style.fontWeight = "bold";


  let passwordButton = document.createElement('button');
      passwordButton.innerText= 'Anterior';
      passwordButton.onclick = function(){
        document.getElementById('main-section-password--info').style.display = "block";
        document.getElementById('main-section-password--img').style.display = "block";
        document.getElementById('main-section-encode').style.display = "none";
        document.getElementById('main-section-encode--img').style.display = "none";
    }
  document.getElementById("main-section-encode--passwordSection").appendChild(passwordButton);

  passwordButton.style.width = "150px";
  passwordButton.style.height = "50px";
  passwordButton.style.margin = "10px 10px";
  passwordButton.style.padding = "20px";
  passwordButton.style.fontSize = "1.5rem";
  passwordButton.style.background = "#699ff0";
  passwordButton.style.borderRadius = "5px";
  passwordButton.style.border = "none";
  passwordButton.style.boxShadow = "5px 5px 10px #797272";
  passwordButton.style.textAlign = "center";
  passwordButton.style.fontFamily = "Nunito, sans-serif";
  passwordButton.style.fontWeight = "bold";


  displayInfoInput();
}

function decode () {
  let sentence = document.getElementById('password').value;
  let scrollInfo = document.getElementById('encodeNumber').value;
  if (sentence =="") {
 // alert ('No has introducido tu enunciado')
    let newDivAlert = document.createElement('div');
    let alertNoSentenceInput = document.createTextNode('No has introducido tu enunciado');
    newDivAlert.appendChild(alertNoSentenceInput);
    document.getElementById("main-section-decode--sentenceInput").appendChild(newDivAlert);
    newDivAlert.style.margin = "10px 10px";
    newDivAlert.style.color = "red";
  }
  if (scrollInfo =="") {
    //alert ('No has introducido el número')
    let newDivAlert = document.createElement('div');
    let alertNoNumberInput = document.createTextNode('No has introducido tu número de encriptación');
    newDivAlert.appendChild(alertNoNumberInput);
    document.getElementById("main-section-decode--numberInput").appendChild(newDivAlert);
    newDivAlert.style.margin = "10px 10px";
    newDivAlert.style.color = "red";
  }
  let sentenceString = String(sentence);
  let sentenceUpper = sentenceString.toUpperCase();
  let scrollNumber = parseInt(scrollInfo);
  //console.log(typeof scrollNumber);
  //console.log(scrollNumber);
  let newPassword = cipher.decode(sentenceUpper, scrollNumber);
  let divContainer = document.getElementById("main-section-decode--passwordSection");
  let newDiv = document.createElement('div');
  let infoEachInput = ['Esta es tu enunciado: ' + newPassword, 'La contraseña usada fue: ' + sentence, 'El número de encriptación fue: ' + scrollNumber];
  function displayInfoInput() {
    for (let i = 0; i < infoEachInput.length; i++) {
      encryptButton.disabled=true;
      newDiv.appendChild(document.createTextNode(infoEachInput[i]));
      newDiv.appendChild(document.createElement("br"));
    }
  }

  divContainer.appendChild(newDiv);
  newDiv.style.width = "auto";
  newDiv.style.height = "auto";
  newDiv.style.margin = "10px 10px";
  newDiv.style.padding = "20px";
  newDiv.style.fontSize = "1.5rem";
  newDiv.style.background = "#699ff0";
  newDiv.style.color = "white";
  newDiv.style.textAlign = "center";

  let welcomeButton = document.createElement('button');
      welcomeButton.innerText= 'Inicio';
      welcomeButton.onclick = function(){
        document.getElementById('main-section--gralinfo').style.display = "block";
        document.getElementById('main-section-gralInfo--img').style.display = "block";
        document.getElementById('main-section-decode--img').style.display = "none";
        document.getElementById('main-section-decode').style.display = "none";
    }
  document.getElementById("main-section-decode--passwordSection").appendChild(welcomeButton);

  welcomeButton.style.width = "150px";
  welcomeButton.style.height = "50px";
  welcomeButton.style.margin = "10px 10px";
  welcomeButton.style.padding = "20px";
  welcomeButton.style.fontSize = "1.5rem";
  welcomeButton.style.background = "#699ff0";
  welcomeButton.style.borderRadius = "5px";
  welcomeButton.style.border = "none";
  welcomeButton.style.boxShadow = "5px 5px 10px #797272";
  welcomeButton.style.textAlign = "center";
  welcomeButton.style.fontFamily = "Nunito, sans-serif";
  welcomeButton.style.fontWeight = "bold";


  let passwordButton = document.createElement('button');
      passwordButton.innerText= 'Anterior';
      passwordButton.onclick = function(){
        document.getElementById('main-section-password--info').style.display = "block";
        document.getElementById('main-section-password--img').style.display = "block";
        document.getElementById('main-section-decode').style.display = "none";
        document.getElementById('main-section-decode--img').style.display = "none";
    }
  document.getElementById("main-section-decode--passwordSection").appendChild(passwordButton);

  passwordButton.style.width = "150px";
  passwordButton.style.height = "50px";
  passwordButton.style.margin = "10px 10px";
  passwordButton.style.padding = "20px";
  passwordButton.style.fontSize = "1.5rem";
  passwordButton.style.background = "#699ff0";
  passwordButton.style.borderRadius = "5px";
  passwordButton.style.border = "none";
  passwordButton.style.boxShadow = "5px 5px 10px #797272";
  passwordButton.style.textAlign = "center";
  passwordButton.style.fontFamily = "Nunito, sans-serif";
  passwordButton.style.fontWeight = "bold";


  displayInfoInput();
}
