// ;({
//   plugins: ['jsdom-quokka-plugin'],
// })

const table = document.querySelector('.table')
const trendingUp = 'https://i.postimg.cc/8z4fvW3N/trending-up.png'
const trendingDown = 'https://i.postimg.cc/zffbFvZW/trending-down.png'

const coins = [
  { name: 'Bitcoin', price: 48738, priceChange: -0.162 },
  { name: 'Ethereum', price: 3746.5, priceChange: -1.155 },
  { name: 'Cardano', price: 2.92, priceChange: 2.586 },
  { name: 'Dogecoin', price: 0.29, priceChange: -4.213 },
]

coins.forEach((coin) => {
  const name = table.appendChild(document.createElement('span'))
  name.className = 'table__cell table__name'
  name.textContent = coin.name

  const price = table.appendChild(document.createElement('span'))
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
