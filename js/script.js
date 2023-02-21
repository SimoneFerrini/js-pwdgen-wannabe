/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina la concatenazione delle variabili + un numero a caso scelto da voi
(es: MarioRossiVerde21)

-chiedi nome
-chiedi cognome
-chiedi colore
-genera un numero casuale
-restituisci la psw generata

*/

let name = prompt("Inserisci il tuo nome");

let surname = prompt("Inserisci il tuo cognome");

let color = prompt("Inserisci il tuo colore preferito");

let rndNumber = Math.floor(Math.random() * 100);

document.writeln("La tua password è: " + name + surname + color + rndNumber);
