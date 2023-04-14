const textContainer = document.getElementById("textContainer"),
noMessage = document.getElementById("noMessage"),
message = document.getElementById("message"),
encrypt = document.getElementById("encrypt"),
decrypt = document.getElementById("decrypt"),
decryptedMessage = document.getElementById("decryptedMessage")
copy = document.getElementById("copy");

let encryptionValue = "";

document.addEventListener("input", e => {
  if(e.target === textContainer)
  {
    let l = e.target.value.length
    if(l){
      noMessage.style.display = "none";
      message.style.display = "flex";    
      encryptionValue = e.target.value;
    }else
    {
      noMessage.style.display = "flex";
      message.style.display = "none";     
      decryptedMessage.value = "";    
    }
  }
})

document.addEventListener("click", e => {
  if(e.target === encrypt) encrypting();
  if(e.target === decrypt) decrypting();
  if(e.target === copy) copyText();
})


const encryptionKeys = (letter)=> {  
  switch (letter.charCodeAt(0)) {
    case 97:
      return "ai"
    case 101:
      return "enter"
    case 105:
      return "imes"
    case 111:
      return "ober"
    case 117:
      return "ufat"     
    default:
      return letter
  }
}

const encrypting = () => {
  encryptionValue = encryptionValue.toLocaleLowerCase();

  const response = encryptionValue
    .split("")
    .map(letter => encryptionKeys(letter))
    .join("");    
    decryptedMessage.value = response;
}

const decrypting = () => {
  const l = encryptionValue.length;
  let response = "";

  for (let i = 0; i < l; i++) {
    switch (encryptionValue[i]) {
      case "a":
        response += encryptionValue[i];
        i += 1;
        break;
      case "e":
        response += encryptionValue[i];
        i += 4;
        break;
      case "i":
        response += encryptionValue[i];
        i += 3;
        break;
      case "o":
        response += encryptionValue[i];
        i += 3;
        break;
      case "u":
        response += encryptionValue[i];
        i += 3;
        break;
      default:
        response += encryptionValue[i];
        break;
    }
  }
  decryptedMessage.value = response;
};

const copyText = ()=> {
  decryptedMessage.select();
  document.execCommand('copy');
}




/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/


