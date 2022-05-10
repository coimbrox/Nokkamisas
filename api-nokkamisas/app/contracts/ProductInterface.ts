declare module '@ioc:Services/ProductService' {
  import ProductDTO from 'App/Models/DTOs/ProductDTO'
  export interface ProductInterface {}
  const ProductService: ProductInterface
  export default ProductService
}
