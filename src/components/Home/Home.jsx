import {Image} from "antd";
import minions from "../../pictures/minions-shh.gif"

function Home() {
    return <>
        <Image height={`84vh`}
               width={`95vw`}
               preview={false}
               src={minions}>
        </Image>
    </>
}

export default Home;