import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductsWrapper } from "../styledComponents/layout/styled_productsWrapper";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <Title name="our" title="products" />
        <ProductsWrapper>
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </ProductsWrapper>
      </>
    );
  }
}
