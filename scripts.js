document.querySelector('.slider').addEventListener('input', function () {
    // Format the value as a phone number
    const number = this.value;
    const formattedValue = formatPhoneNumber(number);
    document.getElementById('sliderValue').textContent = formattedValue;
});

function formatPhoneNumber(number) {
    const formattedNumber = number.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
    return formattedNumber;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterElement = document.getElementById('letter');
const selectButton = document.querySelector('.select-button');
const stopButton = document.querySelector('.stop-button');
const selectedLettersContainer = document.querySelector('.selected-letters');
const slotMachine = document.querySelector('.slot-machine');
let currentIndex = 0;
let intervalId;

function spinSlotMachine() {
    intervalId = setInterval(() => {
        letterElement.textContent = letters[currentIndex];
        currentIndex = (currentIndex + 1) % letters.length;
    }, 100);
}

function selectLetter() {
    const selectedLetter = letters[currentIndex];
    const selectedLetterElement = document.createElement('span');
    selectedLetterElement.textContent = selectedLetter;
    selectedLettersContainer.appendChild(selectedLetterElement);
}

function stopSlotMachine() {
    clearInterval(intervalId);
    slotMachine.style.display = 'none';
    stopButton.style.display = 'none';
    selectButton.style.display = 'none';

}

selectButton.addEventListener('click', selectLetter);
stopButton.addEventListener('click', stopSlotMachine);
spinSlotMachine();