import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderItem = item => {
    return (
      <ProductsItem>
        <ImageProduto source={{ uri: item.image }} />
        <TextDescrition>{item.title}</TextDescrition>
        <TextPrice>R$ {item.price}</TextPrice>
        <AddButton onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Home);
