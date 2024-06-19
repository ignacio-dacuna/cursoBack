import { cartModel } from "./models/cart.model.js";
import { productModel } from "./models/product.model.js";

const getAll = async () => {
    const carts = await cartModel.find();
    return carts;
};

const getById = async (id) => {
    const cart = await cartModel.findById(id)
    return cart;
};

const create = async (data) => {
    const cart = await cartModel.create(data);
    return cart;
};


const update = async (id, data) => {
    const cartUpdate = await cartModel.findByIdAndUpdate(id, data, { new: true });
    return cartUpdate;
};

const deleteOne = async (id) => {
    const cart = await cartModel.deleteOne({_id: id});
    return cart;
};

const addProductToCart = async (cid, pid) => {
    const cart = await cartModel.findById(cid);
    
    const productInCart = cart.products.find((element) => element.product == pid);
    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.products.push({ product: pid, quantity: 1 });
    }
    await cart.save(); 
    return cart;
};

export default {
    getAll,
    getById,
    create,
    update,
    deleteOne,
    addProductToCart
}