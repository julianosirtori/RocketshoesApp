import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';

import * as CartActins from '../../store/modules/cart/actions';

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
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderItem = item => {
    const { amount } = this.props;
    return (
      <ProductsItem key={item.id}>
        <ImageProduto source={{ uri: item.image }} />
        <TextDescrition>{item.title}</TextDescrition>
        <TextPrice>{item.priceFormatted}</TextPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
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
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActins, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
