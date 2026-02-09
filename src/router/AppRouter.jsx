import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '../components/layout/MainLayout';

// Lazy Load Pages
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import('../pages/Login'));
const Contact = lazy(() => import('../pages/Contact'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const JREH = lazy(() => import('../components/ui/program-detail/jreh'));
const SOCAnalyst = lazy(() => import('../components/ui/program-detail/SOCAnalyst'));
const CPENT = lazy(() => import('../components/ui/program-detail/CPENT'));
const CEH = lazy(() => import('../components/ui/program-detail/CEH'));
const NetworkDefense = lazy(() => import('../components/ui/program-detail/NetworkDefense'));
const Forensics = lazy(() => import('../components/ui/program-detail/Forensics'));
const CTF = lazy(() => import('../components/ui/program-detail/CTF'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: "/programs/jreh",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <JREH />
                    </Suspense>
                ),
            },
            {
                path: "/programs/soc",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SOCAnalyst />
                    </Suspense>
                ),
            },
            {
                path: "/programs/cpent",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CPENT />
                    </Suspense>
                ),
            },
            {
                path: "/programs/ceh",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CEH />
                    </Suspense>
                ),
            },
            {
                path: "/programs/network-defense",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <NetworkDefense />
                    </Suspense>
                ),
            },
            {
                path: "/programs/forensics",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Forensics />
                    </Suspense>
                ),
            },
            {
                path: "/programs/ctf",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CTF />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
