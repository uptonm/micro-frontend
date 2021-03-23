import {mount as mountProducts} from "products/ProductsIndex";
import {mount as mountCart} from "cart/CartIndex";

mountProducts(document.querySelector("#products-wrapper"));
mountCart(document.querySelector("#cart-wrapper"));

console.log("container");
