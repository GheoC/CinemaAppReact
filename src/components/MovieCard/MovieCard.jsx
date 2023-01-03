import {Card, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {useNavigate} from "react-router-dom";

function MovieCard({id, name, duration, trailer, director, type}) {
    const navigate = useNavigate();
    return <Card title={<a style={{fontSize: "18px"}} onClick={()=>navigate(`/movies/${id}`)}>{name}</a>} size={"medium"} style={{width: "465px", margin:"25px"}}>
        <Typography.Paragraph>Director: {director}</Typography.Paragraph>
        <iframe width="420" height="315"
                src={trailer} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
        <Meta description={type} style={{textAlign: "right"}}></Meta>
        <Meta description={`${duration} minutes`} style={{textAlign: "right"}}></Meta>
    </Card>

}

export default MovieCard;