import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><App2/></div>, document.getElementById('root'));
registerServiceWorker();
