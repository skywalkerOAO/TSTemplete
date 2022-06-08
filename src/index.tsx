import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootComponent from './root.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RootComponent/>
)

