import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/hooks/theme-provider';
import './i18n';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider defaultTheme="dark">
            <App />
        </ThemeProvider>
    </Suspense>
);
