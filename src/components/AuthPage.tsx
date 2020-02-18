import React, { Fragment } from 'react'
import { useAuthentication } from "./AuthenticationProvider";
import { withCookies, useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';

interface Props {
    
}

const AuthPage: React.FC<Props> = props => {
    const { user, login, logout } = useAuthentication();
    // const [cookies] = useCookies(['XSRF-TOKEN']);
    
    const message = user ? `Welcome on the home page of the application, you are authenticated!` : "Welcome on the FPL Tools Application! Please log in to use our features";

    const buttonMessage = user ? 'Logout' : 'Login';

    const onClickFunction = user ? logout : login;

    return (
        <Fragment>
            {message}
            <Button onClick={() => onClickFunction}>{buttonMessage}</Button>
        </Fragment>
    )
}

export default AuthPage
