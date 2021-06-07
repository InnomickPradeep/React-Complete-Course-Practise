import React, { useState } from 'react'
import swal from 'sweetalert'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button,Nav,Form,FormControl,NavDropdown,Alert,InputGroup,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import ScrollText from 'react-scroll-text'

export default function Navbar() {

    const[text,setText] = useState('')
    const[image,setImage] = useState(' : ♙♞♝♜♛♚')
    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    function searchText() {
        swal(`HI ${text}`,`🖤🖤🖤 THANKS FOR ENTERING YOUR NAME 🖤🖤🖤`,'success');
    }

    return (
        <div>

        <ScrollText>
            <h1> 🖤🖤 VVIT 🖤🖤 GRANDMASTER 🖤🖤 MEMORIES 🖤🖤🖤 VVIT 🖤🖤🖤 GRANDMASTER 🖤🖤🖤 MEMORIES 🖤🖤🖤</h1>
        </ScrollText>
                    

            <div class='row justify-content-center'>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/VVIT/Raheman 1.jpg'
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
                    src="/VVIT/Abhi 3.jpg"
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
                    src="/VVIT/e1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e2.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e4.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e5.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e6.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e7.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e8.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/VVIT/e9.jpg"
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
            </div>

           


        </div>
    )
}
