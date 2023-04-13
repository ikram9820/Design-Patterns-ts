import Cart from "./Cart";
import CartItem from "./CartItem";

let cart = new Cart();
cart.addCartItem(new CartItem(1, "T-shirt", 20));
cart.addCartItem(new CartItem(2, "Watch", 200));
cart.addCartItem(new CartItem(3, "Shoes", 50));

let cartIterator = cart.createIterator();
while (cartIterator.hasNext()) {
  console.log(cartIterator.current().getDetails());
  cartIterator.next();
}
//output
// id:1, name:T-shirt, price:20
// id:2, name:Watch, price:200
// id:3, name:Shoes, price:50