function calculate() {
    // Pobieranie wartości wprowadzonych przez użytkownika z pól tekstowych
    var number1 = parseInt(document.getElementById('inputNumber1').value);
    var number2 = parseInt(document.getElementById('inputNumber2').value);

    // Wykonanie operacji dodawania
    var result = number1 + number2;

    // Wyświetlenie wyniku w divie
    document.getElementById('result').innerText = "Result: " + result;
}
