import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider';
import { Provider } from 'react-redux'
import './styles/index.scss'
import { store } from './store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App />
             </Provider>
        </ThemeProvider>
    </React.StrictMode>
);