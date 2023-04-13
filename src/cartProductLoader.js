import { getShoppingCart } from "./utilities/fakedb";

const cartProductLoader = async() =>{
const loaderProducts = await fetch('products.json');
const products = await loaderProducts.json();
// if cart data is in database,you have to sync await
const storedCart = getShoppingCart();

const saveCart = [];

console.log(storedCart)
for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id ===id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
    }
}

// if you need to send two things-
// return [products,saveCart]
// another options 

return saveCart;
}
export default cartProductLoader;