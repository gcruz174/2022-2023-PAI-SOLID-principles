class Order {
  private items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items;
  }

  public calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}

class Item {
  constructor(public name: string, public price: number) { }
}

const order = new Order([
  new Item('Laptop', 1000), new Item('Mouse', 50), new Item('keyboard', 100)
]);

console.log(`Order total: ${order.calculateTotal()}`);
