const cart = {                            //корзина товаров
    items: [],
    getItems() {                           //получить корзину
        return this.items
    },
    add(product) {                         //добавить в корзину
        for (let key of this.items) {                //перебираем корзину
            if (key.name === product.name) {         //есть ли такой продукт
                key.quantity += 1                  //количество увеличиваем на 1
                return;                            //стоп (если без return тогда добавиться такой же продукт в корзину)
            }
        }
        const newProduct = {              //деструктуризация с новым параметром quantity(количество) 
            ...product,
            quantity: 1
        };
        this.items.push(newProduct)
    },
    remove(product) {                       //удалить объект из корзины
        const { items } = this              //деструктуризация, items вместо this.items 
        for (let i = 0; i < items.length; i++) {
            const { name } = items[i]
            if (name === product) {
                console.log("удалили продукт", product, "его индекс", i);
                items.splice(i, 1);
                i--
            }
        }

    },
    clear() {                              //очистить корзину
        this.items = []
    },
    countTotalPrice() {                    //посчитать стоимость всех продуктов
        const { items } = this             //деструктуризация, items вместо this.items
        let total = 0
        for (let key of items) {           //дуструктуризация, price вместо key.price
            if (key.quantity <= 1) {
                total += key.price         //если количество 1 тогда total += key.price
            } else {
                total += key.price * key.quantity         //если больше, тогда total += цена*количество
            }

        }

        return total
    }
}

cart.add({ name: '🍌', price: 50 })                      //добавить в корзину
cart.add({ name: '🍎', price: 60 })
cart.add({ name: '🍒', price: 50 })
cart.add({ name: '🍇', price: 30 })
cart.add({ name: '🍇', price: 30 })
cart.add({ name: '🍇', price: 30 })

console.table(cart.getItems());                            //получить корзину
console.log(cart.countTotalPrice());                       //посчитать стоимость всех продуктов

cart.remove("🍇")                                          //удалить объект из корзины

console.table(cart.getItems());                             //получить корзину

cart.clear()                                                //очистить корзину
console.log("очистили корзину", cart.getItems());           //получить корзину