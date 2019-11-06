import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoImage from '../../assets/images/Logo.png';

import { Container, Logo, Cart, SizeCart, SizeCartText } from './styles';

export default function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Cart>
        <Icon name="shopping-basket" size={26} color="#ffffff" />
        <SizeCart>
          <SizeCartText>0</SizeCartText>
        </SizeCart>
      </Cart>
    </Container>
  );
}
