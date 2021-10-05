import Top from './components/top/Top.jsx';
import Middle from './components/middle/Middle.jsx';
import Bottom from './components/bottom/Bottom.jsx';
import './App.css'
import Feedback from './components/feedback/Feedback.jsx';
import Footer from './components/footer/Footer.jsx';

function App(){
    return(
        <div className='app'>
           <Top/>
           <Middle/>
           <Bottom/>
           <Footer/>
           <Feedback/>   
        </div>
    )
}
export default App;