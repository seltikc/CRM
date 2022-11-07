'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;  //Возвращаем общую стоимость товаров.
},

  add(nameItem, priceItem, countItem = 1) {  //Добовляем товар - записываем имена без ключей в объект.
    const item = {
      nameItem,
      priceItem,
      countItem,
    };

    cart.items.push(item); //Добавляем в объект cart свойтво items [].
    this.calculateItemPrice(priceItem, countItem); //Общую стоймость товара.
    this.increaseCount(countItem);  //Количество товара.
  },

  increaseCount(newCount) {
    this.count += newCount;  // Увеличиваем количество товаров.
  },

  calculateItemPrice(price, count) {
    this.totalPrice += price * count;  //Считаем общую стоимость товаров и записывает значение в totalPrice.
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

cart.print(); //Вывод информации в консоль.





