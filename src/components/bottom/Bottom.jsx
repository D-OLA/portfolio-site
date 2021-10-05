import './bottom.css';
import'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Container, Col, Row, Card} from 'react-bootstrap';
import React from 'react';

export default function Bottom(){
    return(
        <div className = 'bottom'>
            <div className = 'cards'>
                <center>
                    <Container className='container'>
                        <Row className ="rows">
                            <Col md={4}>
                                <a href=''>
                                    <Card className='card'>
                                        <Card.Img src="https://www.fda.gov/files/covid19-1600x900.jpg"/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>Covid-19 page</Card.Text>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href='https://d-ola.github.io/Simple-Calculator/'>
                                    <Card className='card'>
                                        <Card.Img src="https://media.istockphoto.com/photos/woman-using-a-calculator-with-a-pen-in-her-hand-picture-id913332084?k=20&m=913332084&s=612x612&w=0&h=bHhJ_4hWfwgIDqfD1ukRJYUeQ1ENMZc7yp73swwandk="/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>Calculator</Card.Text>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href=''>
                                    <Card className='card'>
                                        <Card.Img src="https://www.newsanyway.com/wp-content/uploads/2021/03/pexels-photo-1396122.jpeg"/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>Job-App</Card.Text>
                                </Card></a>
                            </Col>
                        </Row>
                        <Row className ="rows">
                            <Col md={4}>
                                <a href='https://d-ola.github.io/Authors-books-List/'>
                                    <Card className='card'>
                                        <Card.Img src="https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg"/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>Authors and Books list</Card.Text>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href='https://d-ola.github.io/myTunes/'>
                                    <Card className='card'>
                                        <Card.Img src="https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?w=824&quality=70"/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>My Tunes</Card.Text>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href=''>
                                    <Card className='card'>
                                        <Card.Img src="https://qph.fs.quoracdn.net/main-qimg-07b0a4d234a3bd0a1e3378709e460713"/>
                                        <Card.Title></Card.Title>
                                        <Card.Text>Trav Pages</Card.Text>
                                    </Card>
                                </a>                               
                            </Col>
                        </Row>
                    </Container>

                </center>
            </div>
        </div>
    )
}