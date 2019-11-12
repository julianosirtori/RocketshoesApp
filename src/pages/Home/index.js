import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function renderItem(item) {
    return (
      <ProductsItem key={item.id}>
        <ImageProduto source={{ uri: item.image }} />
        <TextDescrition>{item.title}</TextDescrition>
        <TextPrice>{item.priceFormatted}</TextPrice>
        <AddButton
          onPress={() => dispatch(CartActins.addToCartRequest(item.id))}
        >
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </ProductsItem>
    );
  }

  return (
    <Container>
      <ProductsList
        horizontal
        data={products}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  );
}
