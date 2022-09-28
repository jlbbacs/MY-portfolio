import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.18169-9/24710_1240267852209_191622_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=S6VtjK0DU60AX__POVn&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9OTju7sW2z80RysaWpj0_-gnUCtYqHNUKAgdKpL4vKYg&oe=63584E8D"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.18169-9/2791_1062072757443_2082157_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=R39z98_ZQZQAX9L5pcb&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8cEeBFFtLCNwu8eCrFSDTthY39RT5UUFiAP365XiH-cw&oe=635A5FEE"
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/308876947_10221996269601208_2828836279606300159_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=8BzhXroEWT0AX99RlkJ&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-tGuw47E3aWgFa8Z8cuXa8Ovgl6Kc8Xw-e9X2L3Tt5aQ&oe=63398D15"
        alt="Third slide"
      />

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default carousel
