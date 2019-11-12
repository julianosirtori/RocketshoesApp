import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import LogoImage from '../../assets/images/Logo.png';

import { Container, Logo, Cart, SizeCart, SizeCartText } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Logo source={LogoImage} />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={26} color="#ffffff" />
        <SizeCart>
          <SizeCartText>{cartSize}</SizeCartText>
        </SizeCart>
      </Cart>
    </Container>
  );
}
