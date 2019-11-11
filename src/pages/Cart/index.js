import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$ 176,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value="0" />
            <ProductControlButton>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductSubtotal>R$ 539,70</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$ 1619,10</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}
