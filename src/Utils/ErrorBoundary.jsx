import React from 'react';
import ErrorScreen from '../Components/ErrorScreen';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error
        };
    }

    componentDidCatch(error, info) {
        console.error("Error logged: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorScreen error={this.state.error}/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;