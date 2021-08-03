let text3 = `Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".`

function task3(){
    const findBestEmployee = function (employees) {
        let maxValue = Math.max(...Object.values(employees));
        return Object.keys(employees).find(key => employees[key] === maxValue);
      };
      
      /*
       * Викличи функції для перевірки працездатності твоєї реалізації.
       */
      console.log(
        findBestEmployee({
          ann: 29,
          david: 35,
          helen: 1,
          lorence: 99,
        }),
      ); // lorence
      
      console.log(
        findBestEmployee({
          poly: 12,
          mango: 17,
          ajax: 4,
        }),
      ); // mango
      
      console.log(
        findBestEmployee({
          lux: 147,
          david: 21,
          kiwi: 19,
          chelsy: 38,
        }),
      ); // lux
}