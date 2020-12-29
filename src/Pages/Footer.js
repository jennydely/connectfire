import styled from 'styled-components/macro'
import back from '../img/back.svg'

export default function Footer() {
    return (
        <footer>
            <BackButton > <img src={back} alt="back button" /></BackButton>
        </footer>
    )

}

const BackButton = styled.button`
height: 50px;
width: 50px;
border: none;
background: none;
`