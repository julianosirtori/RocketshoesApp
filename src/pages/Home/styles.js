import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 20px;
`;

export const ProductsList = styled.FlatList``;

export const ProductsItem = styled.View`
  background: white;
  border-radius: 4px;
  margin-right: 15px;
  width: 220px;
  padding: 10px;
  height: 358px;
`;

export const ImageProduto = styled.Image`
  height: 200px;
  width: 200px;
`;

export const TextDescrition = styled.Text`
  font-size: 16px;
  line-height: 21px;
  padding: 0px 7px;
  color: #333333;
  height: 42px;
`;

export const TextPrice = styled.Text`
  padding: 0px 7px;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-top: 5px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
