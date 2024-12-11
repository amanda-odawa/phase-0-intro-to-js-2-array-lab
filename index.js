// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Ralph") {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name = "Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    const newCats = cats.slice();
    newCats.push(name = "Broom");
    return newCats;
}

function prependCat(name = "Arnold") {
    const newCats = [...cats];
    newCats.unshift(`${name}`);
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}