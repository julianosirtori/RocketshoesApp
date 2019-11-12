import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';

import * as CartActins from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Products>
        {cart.map(item => (
          <Product key={item.id}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductDetails>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductDetails>
              <ProductDelete onPress={() => removeFromCart(item.id)}>
                <Icon name="delete-forever" size={24} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(item)}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(item.amount)} />
              <ProductControlButton onPress={() => increment(item)}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductSubtotal>{item.subtotal}</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>{total}</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActins, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
