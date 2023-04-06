import type { InjectionKey } from 'vue';
import { inject, provide, ref } from 'vue';
import type { CartItem, ShoppingCart, StoreItem } from '@/types';
import { forEach, groupBy } from 'lodash';

export class ShoppingCartStore {
  private cart = ref({} as ShoppingCart);

  public newShoppingCart() {
    this.cart.value = { content: [] };
    let oldCart = localStorage.getItem('shopping-cart');

    if (oldCart) {
      if (!(JSON.parse(oldCart).date < Date.now() - 1800000)) {
        this.cart.value = JSON.parse(oldCart).cart;
      } else {
        localStorage.setItem(
          'shopping-cart',
          JSON.stringify({ cart: this.cart.value, date: Date.now() })
        );
      }
    } else {
      localStorage.setItem(
        'shopping-cart',
        JSON.stringify({ cart: this.cart.value, date: Date.now() })
      );
    }
  }

  public addToCart(item?: StoreItem) {
    if (item) {
      this.cart.value.content.push(item);
    } else {
      throw new Error('Undefined Shopping item');
    }
    localStorage.setItem(
      'shopping-cart',
      JSON.stringify({ cart: this.cart.value, date: Date.now() })
    );
  }

  public removeFromCart(item?: StoreItem) {
    if (item) {
      this.cart.value.content.splice(
        this.cart.value.content.findIndex((a) => a.id === item.id),
        1
      );
    } else {
      throw new Error('Undefined Shopping item');
    }
    localStorage.setItem(
      'shopping-cart',
      JSON.stringify({ cart: this.cart.value, date: Date.now() })
    );
  }

  public getCart() {
    const groupedBy = groupBy(this.cart.value.content, 'id');
    let countedOccurrences: Array<CartItem> = [];

    forEach(groupedBy, (value) => {
      countedOccurrences.push({
        quantity: value.length,
        item: value[0]
      });
    });

    return countedOccurrences;
  }
}

const storeKey: InjectionKey<ShoppingCartStore> = Symbol('shopping-cart');

export function provideShoppingCartStore() {
  const store = new ShoppingCartStore();
  provide(storeKey, store);
  return store;
}

export function injectShoppingCartStore() {
  return inject(storeKey)!;
}
