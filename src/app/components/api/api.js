export async function fetchProducts() {
  const response = await fetch(
    'https://www.course-api.com/react-store-products'
  )
  const data = await response.json()
  return data
}
