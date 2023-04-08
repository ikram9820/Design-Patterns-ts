import Product from "./Product";
import ProductCollection from "./ProductCollection";

let collection = new ProductCollection();

collection.add(new Product(1, "macbook"));
collection.add(new Product(2, "iphone 11"));
collection.add(new Product(3, "apple watch"));

let collectionIterator = collection.createIterator();

while (collectionIterator.hasNext()) {
  console.log(collectionIterator.current().toString());
  collectionIterator.next();
}
