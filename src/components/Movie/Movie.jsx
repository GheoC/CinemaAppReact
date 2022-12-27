import {Card, Typography} from "antd";
import Meta from "antd/es/card/Meta";

function Movie({name, duration, trailer, director, type}) {
    return <Card title={<a style={{fontSize:"18px"}}>{name}</a>} size={"medium"} style={{width: "485px"}}>
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

export default Movie;