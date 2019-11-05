import React from 'react';
import { Text } from 'react-native';
import LogoImage from '../../assets/images/Logo.png';

import { Container, Logo } from './styles';

export default function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Text>TESTE</Text>
    </Container>
  );
}
