import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const ProductsList = styled.FlatList``;

export const ProductsItem = styled.View`
  background: white;
  border-radius: 4px;
  margin-right: 15px;
  width: 220px;
  height: 358px;
`;

export const ImageProduto = styled.Image`
  height: 200px;
  width: 200px;
  margin: 10px;
`;

export const TextDescrition = styled.Text`
  font-size: 16px;
  line-height: 21px;
  padding: 0px 17px;
`;

export const TextPrice = styled.Text`
  padding: 0px 17px;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-top: 5px;
`;

export const ContainerBtnAddCart = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
  background: #7159c1;
  border-radius: 4px;
`;

export const CartSize = styled.View`
  background: #5a479a;
  width: 53px;
  height: 42px;
`;
export const BtnAddCart = styled.View`
  background: #7159c1;
  border-radius: 4px;
`;
export const BtnAddCartText = styled.Text`
  color: white;
  
`;
