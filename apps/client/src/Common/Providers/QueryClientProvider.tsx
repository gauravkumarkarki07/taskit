import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';

const queryClient = new QueryClient();

interface ReactQueryClientProvider {
    children: React.ReactNode
}
function ReactQueryClientProvider({ children }: ReactQueryClientProvider) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryClientProvider