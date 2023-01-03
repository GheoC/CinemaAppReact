import {Card, Image} from "antd";
import {useNavigate} from "react-router-dom";

function MovieCard({id, name, img}) {
    const navigate = useNavigate();
    return <Card title={<a style={{fontSize: "18px"}} onClick={()=>navigate(`/movies/${id}`)}>{name}</a>} size={"medium"} style={{width: "520px", margin:"15px"}}>
        <Image src={require(`../../pictures/${img}`)}></Image>
    </Card>

}

export default MovieCard;