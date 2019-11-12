export const formatPrice = value => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
};

// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
