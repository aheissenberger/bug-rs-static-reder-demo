//export default [{ path: "/product/1" }, { path: "/product/2" }, { path: "/product/3" }];
import { products } from '../../data/products'
export default [{ id: 1 }, { id: 2 }, { id: 3 }];
//export default  async () => products.map(p => ({ id: p.id}))

//export default  () => products.map(p => ({ path: `/product/${p.id}` }));