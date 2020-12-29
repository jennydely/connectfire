import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function Header({ headline }) {

    const history = useHistory()

    function handleHomeClick() {
        history.push('/')
    }
    function handleSignInClick() {
        history.push('/login')
    }

    return (
        <header>
            <HeaderButton onClick={handleSignInClick} >Login</HeaderButton>
            <p>{headline}</p>
            <HeaderButton onClick={handleHomeClick}>Home</HeaderButton>
        </header>
    )

}

const HeaderButton = styled.button`
height: 50px;
width: 50px;
color: #900000;
background: none;
border:none;
`