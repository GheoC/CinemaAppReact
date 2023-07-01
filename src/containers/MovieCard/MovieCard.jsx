import {Card, Image} from "antd";
import {useNavigate} from "react-router-dom";
import {getPictureForMovie} from "../../api/pictureApi";
import {useEffect, useState} from "react";

function MovieCard({id, name, img}) {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    useEffect(() => {
        getPictureForMovie(img)
            .then((data) => {
                setImage(data);
            });
    }, []);

    return <Card title={<a style={{fontSize: "18px"}} onClick={() => navigate(`/movies/${id}`)}>{name}</a>}
                 size={"medium"} style={{width: "520px", margin: "15px"}}>
        {image === undefined ? <Image src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'></Image> :
            <Image src={`data:image/jpeg;base64,${image}`}></Image>}
    </Card>
}

export default MovieCard;