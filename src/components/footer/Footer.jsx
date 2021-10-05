import './footer.css'
import'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Container, Col, Row, Card} from 'react-bootstrap';

export default function Footer(){
    return(
        <center>
            <div className = 'footer'>
                <Row id = "row">
                    <Col id = "first" className = 'kolomiwe'></Col>
                    <Col id = "second" className = 'kolomiwe'></Col>
                    <Col id = "third" className = 'kolomiwe'></Col>
                </Row>
            </div>
        </center>
    )

        
       
}