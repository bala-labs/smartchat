const ErrorScreen = ({ error }) => {

    return (
        <div className="error-container">
            <h1>Something Went Wrong..</h1>
            <div>
                {error.stack}
            </div>
        </div>
    );
}

export default ErrorScreen;