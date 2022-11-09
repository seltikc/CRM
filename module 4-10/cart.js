'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  get TotalPrice() {
    return this.calculateItemPrice(this.items);  //Возвращаем общую стоимость товаров.
},

  add(nameItem, priceItem, countItem = 1) {  //Добовляем товар - записываем имена без ключей в объект.
    const item = {
      nameItem,
      priceItem,
      countItem,
    };

    cart.items.push(item); //Добавляем в объект cart свойтво items [].
    this.increaseCount(countItem);  //Количество товара.
  },

  increaseCount(newCount) {
    this.count += newCount;  // Увеличиваем количество товаров.
  },

  calculateItemPrice(items) {
    let sum = 0;
    for (const i of items) {
      sum + i.priceItem * i.countItem; // Считаем сумму
    }
    return sum;
  },

  clear() {  // Очищаем корзину.
    this.totalPrice = 0;
    this.count = 0;
    this.items = [];
  },

  print() {
    const cartString = JSON.stringify(cart); //Выводит в консоль JSON строку из массива items[].
    console.log(cartString);
  },

};

cart.add('Творог', 315, 1);
cart.add('Чай', 120, 2);
cart.add('Пряники', 95,);

console.log(cart.totalPrice);

cart.print(); //Вывод информации в консоль.





