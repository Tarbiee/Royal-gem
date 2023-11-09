import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className='home'>
    <Carousel data-bs-theme="dark" style={{maxWidth:"100%",overflow:'hidden' }}>
      <Carousel.Item>
        <img style={{ height: '60vh', width: '99%', margin: 'auto',maxWidth:"100%" }}
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
        <img style={{height: "60vh", width: '99%', margin: 'auto'}}
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
        <img style={{height: "60vh", width: '99%', margin: 'auto'}}
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
    </div>
    
  );
}

export default Home;
