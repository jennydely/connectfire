import styled from 'styled-components/macro'
import fire from '../img/fire.svg'
import videos from '../img/videos.svg'
import documents from '../img/documents.svg'
import tipps from '../img/tipps.svg'
import shops from '../img/shops.svg'
import artists from '../img/artists.svg'
import contact from '../img/contact.svg'




export default function StartPage() {
    return (
        <main>
            <Text>WELCOME,<br></br>
            you can find topics aboout fire play here, if you miss some topic, just contact me.<br /><br />
                <img src={fire} alt="fire" />
            </Text>
            <BigButton >About fire-play</BigButton>

            <Button column={1} row={3}><img src={videos} alt="videos" />Videos</Button>
            <Button column={2} row={3}><img src={documents} alt="documents button" />Documents</Button>
            <Button column={3} row={3}><img src={tipps} alt="tipps button" /><br />Tipps</Button>

            <Button column={1} row={4}><img src={shops} alt="shops button" />Shoplinks</Button>
            <Button column={2} row={4}><img src={artists} alt="artists button" /><br />Artists</Button>
            <Button column={3} row={4}><img src={contact} alt="contact button" />Contact</Button>
        </main>
    )

}

const Text = styled.p`
grid-row: 1;
grid-column:1/span 3;
padding: 5px;
`

const BigButton = styled.button`
grid-row: 2;
grid-column:1/span 3;
background: #900000;
width: 343px;
height: 50px;`

const Button = styled.button`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 1;`

