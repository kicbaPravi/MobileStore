import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const Context = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };

      tempProducts = [...tempProducts, singleItem];
    });

    this.setState({
      products: tempProducts
    });
  };

  getItem = id => this.state.products.find(product => product.id === id);

  handleChange = id => {
    const product = this.getItem(id);

    this.setState({
      detailProduct: product
    });
  };

  addToCart = id => {
    const tempProducts = this.state.products;
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      () => this.addTotals()
    );

    console.log(this.state);
  };

  openModal = id => {
    const product = this.getItem(id);

    this.setState({
      modalProduct: product,
      modalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      {
        cart: [...tempCart]
      },
      () => this.addTotals()
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        {
          cart: [...tempCart]
        },
        () => this.addTotals()
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: [...tempCart],
        products: [...tempProducts]
      },
      this.addTotals()
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState({
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const ProductConsumer = Context.Consumer;

export { ProductProvider, ProductConsumer };
