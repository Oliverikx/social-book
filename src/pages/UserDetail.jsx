import React from "react";
import { useParams } from "react-router-dom";
import UserService from "../core/UserService";
import AlbumService from "../core/AlbumService";
import AlbumBox from "../components/AlbumBox";

export default function UserDetail() {
    const { userId } = useParams();

    const [userData, setUserData] = React.useState([])
    const [userAlbums, setUserAlbums] = React.useState([])

    React.useEffect(() => {
        UserService.getUser(userId, (response) => {
            setUserData(response.data)
        })
        AlbumService.getUserAlbums(userId, (response) => {
            setUserAlbums(response.data)
        })
    }, [userId]);



    return (<React.Fragment><h1>{userData.name}</h1>{userAlbums.map(album => <AlbumBox id={album.id}/>)}</React.Fragment>)
}