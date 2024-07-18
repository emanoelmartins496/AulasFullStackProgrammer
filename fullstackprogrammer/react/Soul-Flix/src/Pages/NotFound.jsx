import { Link } from "react-router-dom";
import { } from "react-bootstrap";

function NotFound() {
    return (
        <main>
            <Link className="d-flex justify-content-center" to="/login">
              <img src="/images/error404.png" width="700"/>
            </Link>
        </main>
    )
}

export default NotFound;