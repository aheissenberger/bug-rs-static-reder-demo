import { products } from '../../data/products'
import { Link } from "@lazarv/react-server/navigation";

export default function ProductPage({ id }: { id: string } ) {
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div><h1>Not found!</h1></div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
        <Link to="/" className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
          Back to Products
        </Link>
      </div>
    </div>
  )
}

