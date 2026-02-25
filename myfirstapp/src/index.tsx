import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {LoggingComponentTemplate} from './Logging/LoggingComponent';
import './index.css';
import {Reactions} from './App';
import reportWebVitals from './reportWebVitals';
import { MainComponentTemplate } from './MainComponent';
import { Clock } from './HeaderComponent/Clock';
import './HeaderComponent/Clock.css';
import  'bootstrap/dist/css/bootstrap.css';
import { FooterComponentTemplate } from './FooterComponent/FooterComponent';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'font-awesome/fonts/fontawesome-webfont.svg'

// import 'font-awesome/'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const header = ReactDOM.createRoot(
  document.getElementById('header-section') as HTMLElement
);


const footer = ReactDOM.createRoot(
  document.getElementById('footer-section') as HTMLElement
);

root.render(
  <React.StrictMode>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
    <MainComponentTemplate />
    {/* <BrowserRouter>
      <Reactions title="My Reactions Component" showLikes={true} showDislikes={true} showLove={true} />
     <Reactions title="My facebook Component" showLikes={true} showDislikes={false} showLove={true} />
      <Reactions title="My you tube Component" showLikes={true} showDislikes={true} showLove={false} />
      <LoggingComponentTemplate title="My Logging Component" />
    </BrowserRouter> */}
  </React.StrictMode>
);

header.render(
  <StrictMode >
    <div className='row'>
    <h1 className="header-inline m500 col" style={{ display: 'inline', marginRight: 500 }} >Harman Merchandise  </h1><Clock />
    </div>
  </StrictMode>
);

footer.render(
  <StrictMode>
    <FooterComponentTemplate/>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
