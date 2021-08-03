let text6 = `Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

Викличи функції для перевірки працездатності твоєї реалізації.`

function task6() {
    const products = [
        { name: 'Радар', price: 1300, quantity: 4 },
        { name: 'Сканер', price: 2700, quantity: 3 },
        { name: 'Дроїд', price: 400, quantity: 7 },
        { name: 'Захоплення', price: 1200, quantity: 2 },
      ];
      
      const calculateTotalPrice = function (allProdcuts, productName) {
        for (let i = 0; i < allProdcuts.length; i++) {
            if(allProdcuts[i].name === productName) {
                return allProdcuts[i].price * allProdcuts[i].quantity;
            }
        }
      };
      
      /*
       * Викличи функції для перевірки працездатності твоєї реалізації.
       */
      console.log(calculateTotalPrice(products, 'Радар')); // 5200
      
      console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
}