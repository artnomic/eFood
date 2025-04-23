export const formatCurrencies = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Food[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.preco) {
      return (acc += currentItem.preco)
    }

    return 0
  }, 0)
}
