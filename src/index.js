import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

// const container = document.getElementById('root');

// const root = ReactDOM.createRoot(container);
// root.render(<App name="Immigration Connect" />);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
