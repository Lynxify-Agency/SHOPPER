import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()

  // ✅ Safe ID comparison (works for string & number)
  const product = all_product.find(
    (e) => String(e.id) === String(productId)
  )

  // ✅ Prevent crash if product not found
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product