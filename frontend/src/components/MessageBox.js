import Alert from "react-bootstrap/Alert";

export default function MessageBoxBox (props) {
    return (
        <Alert variamt={props.variamt || 'info'}>{props.children}</Alert>
    );
}