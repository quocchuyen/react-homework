const selectCategory = document.getElementById('category')
selectCategory.addEventListener('change', () => {
  showProduct(selectCategory)
})

const showProduct = category => {
  const message = document.getElementById('showProduct')
  if(category.value === 'laptop') {
    message.innerHTML = 
    `<ul>
      <li>Macbook</li>
      <li>Dell</li>
      <li>Lenovo</li>
      <li>Asus</li>
    </ul>`
  }
  else if (category.value === 'mobile') {
    message.innerHTML = 
    `<ul>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Nokia</li>
    </ul>`
  }
  else if (category.value === 'tivi') {
    message.innerHTML = 
    `<ul>
      <li>LG</li>
      <li>Sony</li>
    </ul>`
  }
}
