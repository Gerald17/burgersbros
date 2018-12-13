import 'bulma/css/bulma.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './style/style.css';
import './style/reset.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
