import {createRoot} from "react-dom/client";
import App from "./containers/App";
import 'antd/dist/reset.css';
import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";


const root = document.getElementById("root")
const main = createRoot(root);

main.render(<h2>
    <ConfigProvider theme={{token: {colorPrimary: 'orange', colorText: "blue"}}}>
        <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </ConfigProvider>

</h2>)