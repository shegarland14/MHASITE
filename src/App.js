import './App.css';
import Navbar from './nav';
import main from './images/mh.png';
import Form from './form';
import Sell from './sell';
import About from './about';
import Faq from './faq';
function App() {
  return (
    <div>
      <Navbar />
      <img className='image1' src={main} alt='mobile home' />
      
        <div className='container'> 
          <div className='column1'> 
            <h3> We have helped many families across 
              <br/> South Carolina, North Carolina, and Georgia<br/> 
               We would be more than happy to help you too!
              <br/>
            </h3>
            <p className='specialize'> We specialize in homes that are:</p>
            
            <ul className='list'>
             <li> Damaged</li>
              <li> Unwanted</li>
              <li> Tax Delinquent</li>
              <li> Estate Liquidations</li>
             </ul>
          </div>
          <div className="column2">
            <Form/>
          </div>
        </div>
      <Sell/>

      <About/>
      <Faq/>
    </div>
    
  );
}

export default App;
