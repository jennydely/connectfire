import styled from 'styled-components/macro'
import login from '../img/login.svg'

export default function Header() {
    return (
        <header>
            <LoginButton ><img src={login} alt="login button" /></LoginButton>
        </header>
    )

}

const LoginButton = styled.button`
height: 50px;
width: 50px;
background: none;
border: none;
`