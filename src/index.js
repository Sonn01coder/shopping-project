import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StoreProvider >
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </StoreProvider>
);
