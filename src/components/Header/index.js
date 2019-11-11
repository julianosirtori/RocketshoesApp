import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import LogoImage from '../../assets/images/Logo.png';

import { Container, Logo, Cart, SizeCart, SizeCartText } from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
