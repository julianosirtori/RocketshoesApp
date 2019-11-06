import styled from 'styled-components/native';

export const Container = styled.View`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #141419;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SizeCart = styled.View`
  background: #7159c1;
  border-radius: 20px;
  height: 16px;
  width: 16;
`;

export const SizeCartText = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
