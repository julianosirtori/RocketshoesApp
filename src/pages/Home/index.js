import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import {
  Container,
  ProductsList,
  ProductsItem,
  ImageProduto,
  TextDescrition,
  TextPrice,
  ContainerBtnAddCart,
  CartSize,
  BtnAddCart,
  BtnAddCartText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductsList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ProductsItem>
              <ImageProduto source={{ uri: item.image }} />
              <TextDescrition>{item.title}</TextDescrition>
              <TextPrice>R$ {item.price}</TextPrice>
              <TouchableHighlight>
                <ContainerBtnAddCart>
                  <CartSize />
                  <BtnAddCart>
                    <BtnAddCartText>ADICIONAR</BtnAddCartText>
                  </BtnAddCart>
                </ContainerBtnAddCart>
              </TouchableHighlight>
            </ProductsItem>
          )}
        />
      </Container>
    );
  }
}
