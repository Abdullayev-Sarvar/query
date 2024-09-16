import React from 'react'
import { useProductQuery } from '../../redux/api/productApi'
import Container from '../../container/Container';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {data} = useProductQuery();
    const {id} = useParams();

    const product = data?.payload?.find((item) => item._id === id);

    if(!product){
      return <div className='w-full max-w-[1366px] h-screen flex justify-center items-center'>Product Not Found!</div>
    }
  return (
    <div>
        <Container>
            {data &&
                data?.payload?.map(product => <div key={product._id}>{product.name}</div>)
            }
        </Container>
    </div>
  )
}

export default Product
