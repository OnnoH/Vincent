import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function Nav() {

    const { keycloak, initialized } = useKeycloak();

    return (
        <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
                Home
            </Link>
            <Link to="/remote" style={{ padding: 5 }}>
                Remote Control
            </Link>
            <Link to="/pictures" style={{ padding: 5 }}>
                Picture Library
            </Link>
            <Link to="/about" style={{ padding: 5 }}>
                About
            </Link>
            <div>
                <div>
                    {!keycloak.authenticated && (
                        <button type="button" onClick={() => keycloak.login()}>Login</button>
                    )}
                </div>
                <div>
                    {!!keycloak.authenticated && (
                        <button type="button" onClick={() => keycloak.logout()}>Logout</button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav;