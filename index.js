// Initial Setup
console.log(document);
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

const theMessageButton = document.querySelector('.theMessageButton');
const theMessageButtonClear = document.querySelector('.theMessageButtonClear');
const inputBox = document.querySelector('.theInputValue');
const fruitInputBox = document.querySelector('.fruitInputValue');
const addFruitButton = document.querySelector('.addFruitButton');
const fruitList = document.querySelector('.fruits');
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

// Delayed Message Update
setTimeout(() => {
    myMessage.innerText = 'This is a message in the DOM!';
}, 3000);

// Button Event Handling
theMessageButton.addEventListener('click', () => {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    } else {
        myMessage.innerText = 'Button pressed';
    }
});

theMessageButtonClear.addEventListener('click', () => {
    myMessage.innerText = '';
    inputBox.value = '';
});

// Toggle Class on Click
myMessage.addEventListener('click', () => {
    myMessage.classList.toggle('darkmode');
});

// Create and Append List Items
fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
});

// Add Fruit to List
addFruitButton.addEventListener('click', () => {
    const newFruit = fruitInputBox.value.trim();
    if (newFruit.length > 0) {
        const li = document.createElement('li');
        li.innerText = newFruit;
        fruitList.appendChild(li);
        fruitInputBox.value = '';
    }
});
