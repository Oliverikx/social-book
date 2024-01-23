import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserBox(props) {
    return (
    <Row><Col><Link to={"/users/" + props.user.id}><Button>Detail</Button></Link></Col><Col>{props.user.id}</Col><Col>{props.user.name}</Col></Row>)
}