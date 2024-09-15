import React from 'react'
import { useGetProductQuery } from '../../redux/api/productApi'
import Container from '../../container/Container';

const Product = () => {
    const {data} = useGetProductQuery();
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