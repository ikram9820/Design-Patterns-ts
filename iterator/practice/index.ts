import Cart from "./Cart";
import CartItem from "./CartItem";

let cart = new Cart();
cart.addItem(new CartItem(1, "macbook air", 1000, 2));
cart.addItem(new CartItem(1, "macbook pro", 1200, 3));
cart.addItem(new CartItem(1, "iphone 14", 1000, 1));

let cartIterator = cart.createIterator();
while (cartIterator.hasNext()) {
  console.log(cartIterator.current().toString());
  cartIterator.next();
}
cart.showCartDetails();
// Total item in cart is 6
// Total price cart's items is $6600
