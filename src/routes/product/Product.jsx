import React from 'react'
import { useGetProductsQuery } from '../../redux/api/productApi'
import Container from '../../container/Container';

const Product = () => {
    const {data} = useGetProductsQuery();
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