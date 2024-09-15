import React from 'react'
import { useProductQuery } from '../../redux/api/productApi'
import Container from '../../container/Container';

const Product = () => {
    const {data} = useProductQuery();
  return (
    <div>
        <Container>
            { data &&
                data?.map(product => <div key={product._id}>{product.name}</div>)
            }
        </Container>
    </div>
  )
}

export default Product
