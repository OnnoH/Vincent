import UserService from "../../services/UserService"
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function SecuredPage({ children }: Props) {

    return UserService.isLoggedIn() ? children : null
}

export default SecuredPage