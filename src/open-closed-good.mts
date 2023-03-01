interface PricingStrategy {
  calculatePrice(item: Item): number;
}

class Order {
  private items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items;
  }

  public calculateTotal(strategy: PricingStrategy): number {
    let total: number = 0;
    for (const item of this.items) {
      total += strategy.calculatePrice(item);
    }
    return total;
  }
}

class Item {
  constructor(public name: string, public price: number) { }
}

class RegularPriceStrategy implements PricingStrategy {
  calculatePrice(item: Item): number {
    return item.price;
  }
}

class DiscountPriceStrategy implements PricingStrategy {
  calculatePrice(item: Item): number {
    return item.price * 0.9;
  }
}

const order = new Order([
  new Item('Laptop', 1000), new Item('Mouse', 50), new Item('keyboard', 100)
]);

console.log(`Order total (no discount): ${order.calculateTotal(new RegularPriceStrategy())}`);
console.log(`Order total (discount): ${order.calculateTotal(new DiscountPriceStrategy())}`);