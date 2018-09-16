import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
class Header extends Component{
   
    render(){
      let istrue = false;
     
        return(
          <div>
            <h1>react 小书{istrue?1+2: (function(){return 'true'})()}</h1>
          </div>
        )
    }
}
ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
