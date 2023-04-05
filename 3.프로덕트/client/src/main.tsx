import React, {ReactNode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
            refetchOnWindowFocus: false,
        },
    },
})

const WrapperRouter = ({ children }: { children: ReactNode }) => {
    return <BrowserRouter>{children}</BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <WrapperRouter>
                <ToastContainer position="top-center" autoClose={2000} pauseOnFocusLoss={false} limit={3} />
                <App />
            </WrapperRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)