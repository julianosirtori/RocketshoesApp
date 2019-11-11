import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  ProductsList,
  ProductsItem,
  ImageProduto,
  TextDescrition,
  TextPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  renderItem = item => {
    return (
      <ProductsItem>
        <ImageProduto source={{ uri: item.image }} />
        <TextDescrition>{item.title}</TextDescrition>
        <TextPrice>R$ {item.price}</TextPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </ProductsItem>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductsList
          horizontal
          data={products}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </Container>
    );
  }
}
