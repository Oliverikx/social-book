import UserBox from "../components/UserBox"
import React from 'react';
import UserService from '../core/UserService'
import { Container } from "react-bootstrap";
export default function UserList() {
    const [dataList, setDataList] = React.useState([])

    React.useEffect(() => {
        UserService.getList((response) => {
            setDataList(response.data)
        })
    }, []);

    return (<Container>{
        dataList.map(user => {
             return <UserBox user={user} key={user.id}/>
        })
    }</Container>)
}