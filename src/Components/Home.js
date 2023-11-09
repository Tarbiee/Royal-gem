import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Card, Container,Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='home'>
    <Carousel data-bs-theme="dark" style={{maxWidth:"100%",overflow:'hidden' }}>
      <Carousel.Item>
        <img style={{ height: '55vh', width: '99%', margin: 'auto',maxWidth:"100%" }}
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0083/2497/2599/products/montgomery-rose-gold-crystal-teardrop-pendant-necklace-and-montgomery-rose-gold-crystal-teardrop-earrings-by-ivory-and-co-at-liberty-in-love---00015.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Ruby products</h5>
          <p>Explore our stunning collection of Ruby products, each crafted with precision and elegance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "55vh", width: '99%', margin: 'auto'}}
          className="d-block w-100"
          src="https://i.pinimg.com/originals/a3/fc/32/a3fc328618ee6299f0a941ed174bc8bd.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Gold Products</h5>
          <p>Discover the richness of our Gold collection, designed to add glamour to your style.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: "55vh", width: '99%', margin: 'auto'}}
          className="d-block w-100"
          src="https://img.ltwebstatic.com/images3_spmp/2023/06/26/1687759229e8d70b28e986329d20702ac0c22cad83_thumbnail_720x.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Pearl Products</h5>
          <p>Indulge in the timeless beauty of our Pearl collection, crafted to perfection for every occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
        <br></br>
        <h2>Categories</h2>
      <Row xs={2} md={4} className="g-4">
        <Col>
          <Card className="image-card" style={{ width: '15rem' }}>
            <Card.Img
              style={{minHeight:'15rem'}}
              className="card-image"
              variant="top"
              src="https://sc01.alicdn.com/kf/HTB1lZMCb4SYBuNjSspjq6x73VXaJ/225200064/HTB1lZMCb4SYBuNjSspjq6x73VXaJ.jpg"
            />
            <div className="overlay">
              <p>Necklaces</p>
            </div>

          </Card>
        </Col>
        <Col>
          <Card className="image-card" style={{ width: '15rem' }}>
            <Card.Img 
            style={{minHeight:'15rem'}}
            className="card-image"
            variant="top" src="https://blingvine.com/cdn/shop/products/dakota-golden-earrings-blingvine-279530_750x.jpg?v=1654169970" />
          <div className="overlay">
              <p>Earrings</p>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="image-card" style={{ width: '15rem' }}>
            <Card.Img className="card-image" style={{minHeight:'15rem'}}variant="top" src="data:image/jpeg;base64,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" />
          <div className="overlay">
              <p>Rings</p>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="image-card" style={{ width: '15rem' }}>
            <Card.Img variant="top" 
            style={{minHeight:'15rem'}}
            className="card-image"
            src="https://blingvine.com/cdn/shop/products/eva-bracelet-bracelets-blingvine-675632_1000x.jpg?v=1636532907" />
          <div className="overlay">
              <p>Bracelets</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

    </div>
    
  );
}

export default Home;
