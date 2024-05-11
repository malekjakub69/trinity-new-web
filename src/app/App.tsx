import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages';

const basenamePrefix = import.meta.env.VITE_FE_BASENAME_PREFIX;

export const appRouter = createBrowserRouter(
    [
        { path: '/', Component: HomePage },
        { path: '/tabor', Component: HomePage },
        { path: '/setkani', Component: HomePage }
    ],
    { basename: basenamePrefix }
);

const App: FC = () => (
    <div>
        <RouterProvider router={appRouter} />
    </div>
);

export default App;
