import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox () {
    return (
    < Spinner animation="boder" role="status">
    <span className="visually-hidden">LoadingBox...</span>
    </Spinner>
    );
}