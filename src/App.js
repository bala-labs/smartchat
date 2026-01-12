import Layout from './Layout/MainLayout';
import ErrorBoundary from './Utils/ErrorBoundary';

function App() {
    
    return (
        <ErrorBoundary>
            <Layout />
        </ErrorBoundary>
    );
}

export default App;
