const ratesTable = document.querySelector('.table.rates__table')
const trendingUp = 'https://i.imgur.com/fylrdkf.png'
const trendingDown = 'https://i.imgur.com/L6Zmxm5.png'

const coins = [
  { name: 'Bitcoin', price: 48738, priceChange: -0.162 },
  { name: 'Ethereum', price: 3746.5, priceChange: -1.155 },
  { name: 'Cardano', price: 2.92, priceChange: 2.586 },
  { name: 'Dogecoin', price: 0.29, priceChange: -4.213 },
]

coins.forEach((coin) => {
  const name = ratesTable.appendChild(document.createElement('span'))
  name.className = 'table__cell table__name'
  name.textContent = coin.name

  const price = ratesTable.appendChild(document.createElement('span'))
  price.className = 'table__cell table__price'

  const textPrice = price.appendChild(document.createElement('span'))
  textPrice.className = 'table__textPrice'
  textPrice.textContent = `$ ${coin.price.toLocaleString()}`

  const priceChange = price.appendChild(new Image())
  priceChange.className = 'table__trendingIcon'
  priceChange.src = coin.priceChange > 0 ? trendingUp : trendingDown
  priceChange.alt = `${coin.name} is trending ${coin.priceChange > 0 ? 'up' : 'down'}`
  priceChange.height = '12'
})

const comisionsTable = document.querySelector('.table.commissions__table')

const comisions = [
  { name: 'Bitrade', price: 12.96 },
  { name: 'Bitpreco', price: 13.07 },
  { name: 'Novadax', price: 13.15 },
  { name: 'Coinext', price: 14.96 },
]

comisions.forEach((comision) => {
  const name = comisionsTable.appendChild(document.createElement('span'))
  name.className = 'table__cell table__name'
  name.textContent = comision.name

  const price = comisionsTable.appendChild(document.createElement('span'))
  price.className = 'table__cell table__price'
  price.textContent = `$ ${comision.price.toLocaleString()}`
})
