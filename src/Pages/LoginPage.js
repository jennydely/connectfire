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
                <form>
                    <label>Name/E-Mail:</label>
                    <input></input>
                    <label>Passwort:</label>
                    <input></input>
                    <div><LoginButton type='submit' onClick={handleSignInClick}>Login</LoginButton>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )

}

const LoginButton = styled.button`
background: #900000;
width: 100px;
height: 50px;
`