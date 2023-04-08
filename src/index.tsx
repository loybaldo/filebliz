import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './auth/auth-provider';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// WARNING: Logs from dependencies are not blocked. Only the logs from our code are blocked.
if (process.env.NODE_ENV !== "development") {
	console.log = () => {}
	console.error = () => {}
	console.warn = () => {}
	console.debug = () => {}
}

root.render(
	<React.StrictMode>
		<AuthProvider>
			<App/>
		</AuthProvider>
	</React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
