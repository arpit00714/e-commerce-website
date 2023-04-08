import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Store from './components/Store';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Navigation />
   
    {/* <Container> */}

      {/* <h1 className='text-center'>Music</h1>
    </Container>
    <Container className='mx-auto mb-5 w-75'>
      <Row lg={2}>
        {

          productsArr.map(item => (
            <Col>

              <Album album={item} key={item.title} />
            </Col>
          ))

          // console.log(productsArr[0])
        }
      </Row>
      <div className='mx-auto'> 

      <Button variant="secondary">See the Cart</Button>
      </div>
    </Container> */}
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/store"  element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
  </div>
  )
  }

export default App;
