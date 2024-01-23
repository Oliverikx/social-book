import React from "react";
import AlbumService from "../core/AlbumService";

export default function AlbumBox(props) {
    const [photos, setPhotos] = React.useState([])

    React.useEffect(() => {
        AlbumService.getAlbumPhotos(props.id, (response) => {
            setPhotos(response.data)
        })
    }, [props.id]);

    return (photos.length > 0 ? <img src={photos[0].thumbnailUrl}/> : 'No photo')
}