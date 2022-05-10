declare module '@ioc:Services/ProductService' {
  import UserDTO from 'App/Models/DTOs/ProductDTO'
  export interface ProductInterface {}
  const ProductService: ProductInterface
  export default ProductService
}
