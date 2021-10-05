import { Container } from 'react-bootstrap'
import './feedback.css'

export default function Feedback(){
    return(
        <div className = 'feedback'>
            <Container>
                <center>
                    <div id='feedbackText'><h5>I want to hear what you think...............!!!</h5></div>
                    <div>
                        <input type="text" placeholder='Enter your feedback' id='feedbackInput'></input>
                        <input type='submit' id='feedbackSubmit'></input>
                    </div>
                </center>
            </Container>
        </div>
    )
}