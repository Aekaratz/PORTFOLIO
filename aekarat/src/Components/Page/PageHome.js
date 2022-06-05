import React from 'react'
import {Card,Col,Container,Image, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const pic = "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/271898403_4820423508051862_7440758318396139451_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=174925&_nc_eui2=AeHc7WlDhA5zvLrnDNhmU01EOjNsY4pA2wg6M2xjikDbCFVcyit0o4zl2__StpRYREeruykcvQ0w09wH49tWrJLM&_nc_ohc=FA_UU6pzKQkAX-1i4ZA&tn=owm3u77Ergm11oS-&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_Etd5LuExCzXNZHzJJHLeZcEq36aA_j67w8S-uyfIDOw&oe=628253F8"
const bgpic = "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.6435-9/83734208_2759929630767937_2491309592659623936_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHAsyVwUIlJD_Hy49Neg5bkNN9n6hBQhv0032fqEFCG_cAUAAx-rwa1teT3o_YyHYCE4lZEIRawWvh_yenKxfkR&_nc_ohc=XCvuiZQ4MmEAX9NWD4D&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT9uwTTdao0ZM7n_QHdNRTO3pT0ASRmHxeQriCrTBTMJ7g&oe=6298264A"

export default function PageHome() {
  return (
  
    <div className='home-body mt-5'>
        <Container fluid ="md" sticky='top'>
          <Row className='z-index-1'>
            <Col className='z-index-1'>
            <Card className='p-5'>
              <Card.Body className='d-flex justify-content-center'  >
                <Image  src={bgpic} height={300}   />
              </Card.Body>

            </Card>
            </Col>
            
          </Row>

          <Row className='z-index-2'>
          <Col >
            <Card className='p-5'>
              <Card.Body className='d-flex justify-content-center'  >
                <Image  src={pic} height={300} roundedCircle />
              </Card.Body>

            </Card>
            </Col>
          </Row>
       
        </Container>
    </div>
  )
}
