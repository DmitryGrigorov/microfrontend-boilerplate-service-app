import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

render(<App history={history} />, document.getElementById('root'));

serviceWorker.unregister();
