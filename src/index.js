import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
	<Provider store = {store}>
		<Router>
    		<Route path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);