console.log("Exercise:5 Array, Order and elimination");

let people = ["María", "Dani", "Luis", "Juan", "Camila"];

// Print out all of the people in the list
console.log(`Las personas de la lista son: ${people}`);

// Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);
console.log(`Se ha eliminado a Dani y quedan: ${people}`);

// Remove "Juan" from the array
people.splice(people.indexOf("Juan"), 1);
console.log(`Juan ha sido eliminado y quedan: ${people}`);

// Move "Luis" to the front of the array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log(`Luis se ha movido al frente y el orden es: ${people}`);
// Add your name to the end of the array
people.push("Maricela");
console.log(`se ha agregado a Maricela y en la lista están: ${people}`);
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop
console.log(`Se recorre esta matriz y se imprime Maria`);
for (let person of people) {
    console.log(person);
    if (person === "María") {
        break;
    }
}

// Write the command that gives the indexOf where "Maria" is located
let indexOfMaria = people.indexOf("María");
console.log(`María se encuentra en: ${indexOfMaria}`);
console.log(`personas en el arreglo.`);

console.log(`Los sobrevivientes son: ${people}`);