let text4 = `Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає   укорочену версію.`

function task4() {
    const formatString = function (string) {
        if (string.length < 40) {
            return string;
        } else {
            return string.substring(0, 40) + "..."
        }
    };
    console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
    // повернеться оригінальний рядок
    console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    // повернеться форматований рядок
    console.log(formatString('Curabitur ligula sapien.'));
    // повернеться оригінальний рядок
    console.log(
      formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
      ),
    );
    // повернеться форматований рядок
}