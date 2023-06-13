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