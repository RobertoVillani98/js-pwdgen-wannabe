const myName = prompt("Inserisci il tuo nome");
//console.log(myName);

const lastName = prompt("Inserisci il tuo cognome");
//console.log(lastName);

const preferitColor = prompt("Inserisci il tuo colore preferito");
//console.log(preferitColor);

const password = myName + lastName + preferitColor + 58;
document.getElementById("password").innerHTML = password;
//console.log(password);
