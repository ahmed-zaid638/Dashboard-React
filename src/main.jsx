import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/layout';
import { Provider } from 'react-redux';
import mystore from './Redux';
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGauge, faUserGroup } from "@fortawesome/free-solid-svg-icons";
library.add(faGauge, faUserGroup);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystore}>
      <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>


);

