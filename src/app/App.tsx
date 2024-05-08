import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, lazy } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IcoLoader } from '../assets/icons';
import { ScoutNotificationCenter } from './components/ScoutNotificationCenter';
import useAuth from './hooks/auth/use-auth';
import { MeetsPage, SettingsPage } from './layouts';
import { MainPage } from './pages/MainPage';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const SubmitEmail = lazy(() => import('./pages/SubmitEmail'));

const basenamePrefix = import.meta.env.VITE_FE_BASENAME_PREFIX;

export const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

const PrivatePlantRoute: FC = () => {
    const { user, authError, authLoading } = useAuth();

    if (authError || (authLoading === false && user === null)) return <Navigate to="/login" />;
    if (authLoading) return <IcoLoader className={'m-auto animate-spin w-10 fill-blue-50'} />;

    return <MainPage />;
};

export const appRouter = createBrowserRouter(
    [
        { path: 'login', Component: LoginPage },
        { path: 'register', Component: RegisterPage },
        { path: 'submit-email', Component: SubmitEmail },
        { path: 'new_password', element: <></> },
        {
            path: '*',
            Component: PrivatePlantRoute,
            children: [
                { path: 'dashboard', element: <>DASHBOARD</> },
                { path: 'people', element: <>PEOPLE</> },
                { path: 'meets', Component: MeetsPage },
                { path: 'units', element: <>UNITS</> },
                { path: 'profile', element: <>PROFILE</> },
                {
                    path: 'settings',
                    Component: SettingsPage,
                    children: [
                        { path: 'permissions', element: <>PERMISSIONS</> },
                        { path: 'roles', element: <>ROLES</> }
                    ]
                },
                { path: '*', element: <Navigate to="/dashboard" /> }
            ]
        }
    ],
    { basename: basenamePrefix }
);

const App: FC = () => (
    <QueryClientProvider client={queryClient}>
        <div className="page-bg">
            <ScoutNotificationCenter />
            <RouterProvider router={appRouter} />
        </div>
        <ReactQueryDevtools />
    </QueryClientProvider>
);

export default App;
