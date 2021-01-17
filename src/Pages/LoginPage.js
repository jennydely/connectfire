import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function StartPage() {
    const history = useHistory()

    function handleSignInClick() {
        history.push('/')
    }

    return (
        <>
            <Header headline='Login' />
            <main>
                <LoginForm>
                    <label>Name/E-Mail:</label>
                    <input></input>
                    <label>Passwort:</label>
                    <input></input>
                    <LoginButton type='submit' onClick={handleSignInClick}>Login</LoginButton>
                </LoginForm>
            </main>
            <Footer />
        </>
    )

}

const LoginForm = styled.form`
grid-column:2;
grid-row:1/span 5;
justify-self: center;
padding:4px;
`

const LoginButton = styled.button`
display:block;
background: #900000;
height: 50px;
width: 80px;
margin: 21px auto;
`