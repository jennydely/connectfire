import styled from 'styled-components/macro'
import back from '../img/back.svg'
import { useHistory } from 'react-router-dom'

export default function Footer() {

    const history = useHistory()

    function handleGoBack() {
        history.goBack()
    }

    return (
        <footer>
            <BackButton onClick={handleGoBack} > <img src={back} alt="back button" /></BackButton>
        </footer>
    )

}

const BackButton = styled.button`
height: 50px;
width: 50px;
border: none;
background: none;
`