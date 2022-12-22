import {createRoot} from "react-dom/client";
import App from "./containers/App";
import 'antd/dist/reset.css';
import {ConfigProvider} from "antd";
import {BrowserRouter} from "react-router-dom";


const root = document.getElementById("root")
const main = createRoot(root);

main.render(<h2>
    <BrowserRouter>
        <ConfigProvider theme={{token: {colorPrimary: 'red'}}}>
            <App/>
        </ConfigProvider>
    </BrowserRouter>

</h2>)