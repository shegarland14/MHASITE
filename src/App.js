import './App.css';
import Navbar from './nav';
import main from './images/mh.png';
import Form from './form';
function App() {
  return (
    <div>
      <Navbar />
      <img className='image1' src={main} alt='mobile home' />
      
        <div className='container'> 
          <div className='column1'> 
            <h3> We have helped many families across The Carolinas <br/>
              And we would be more than happy to help you as well.
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


      

      </div>
    
  );
}

export default App;
