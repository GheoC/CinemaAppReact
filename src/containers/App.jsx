import Root from "./Root";
import Login from "./Login";

function App() {
    const isAuthenticated = true;
    const isLoading = false;

    if (isLoading) {
        return 'Loading...'
    }

    if (isAuthenticated) {
        return <Root/>
    }

    return <>
        <Login/>
    </>
}

export default App;