import { products } from '../data/products'
import ProductSearch from '../components/ProductSearch'

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <ProductSearch products={products} />
    </div>
  )
}

