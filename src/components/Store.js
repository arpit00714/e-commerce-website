import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Album from './Album';
import { CartContext } from './context/CartContext';

// const productsArr  = [
//   {
//       id : '1',
//       title: 'Colors',
//       price: 100,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       quantity: 2,
//   },
//   {
//       id : '2',
//       title: 'Black and white Colors',
//       price: 50,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       quantity: 3,
//   },
//   {
//       id : '3',
//       title: 'Yellow and Black Colors',
//       price: 70,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       quantity: 1,
//   }
// ]

import {productsArr} from '../assets/data'


function Store() {

  const { user } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (!user) navigate('/login')
  }, [user]);

  return (
    <>

    <div style={{ background: 'gray', height: '20vh' }} className='text-center mb-3'>
        <h1 className='text-white fs-1'>The Generics</h1>
      </div>
      <div className='mb-5 d-flex flex-column align-items-center justify-content-center'>
        <h1>Music</h1>
        {/* <Container>
          <Row md="2">
            {

              productsArr.map(item => (
                <Col key={item.title}>

                  <Album album={item}  />
                </Col>
              ))

            }
          </Row>
        </Container> */}
          <div className='d-flex flex-wrap gap-3'>
          {
            productsArr.map(item => (
                <Album album={item} key={item.title} />
              ))
            }
            </div>
        <Button variant="secondary">See the Cart</Button>

      </div>
    </>
  )
}

export default Store;