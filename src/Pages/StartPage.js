import { useHistory } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'
import feuer from '../img/feuer.svg'
import videos from '../img/videos.svg'
import dokumente from '../img/dokumente.svg'
import tipps from '../img/tipps.svg'
import shops from '../img/shops.svg'
import artists from '../img/artists.svg'
import kontakt from '../img/kontakt.svg'




export default function StartPage() {
    const history = useHistory()

    function handleAboutClick() {
        history.push('/about')
    }
    function handleVideosClick() {
        history.push('/videos')
    }
    function handleDokumenteClick() {
        history.push('/dokumente')
    }
    function handleTippsClick() {
        history.push('/tipps')
    }
    function handleShopsClick() {
        history.push('/shops')
    }
    function handleArtistsClick() {
        history.push('/artists')
    }
    function handleKontaktClick() {
        history.push('/kontakt')
    }
    return (
        <>
            <Header headline='Connect fire' />
            <main>
                <Text>WILLKOMMEN,<br></br>
                hier findet ihr alles rund ums Feuerspielen, falls ihr ein Thema vermisst, kontaktiert mich gern.
           <br /><br />
                    <img src={feuer} alt="feuer" />
                </Text>
                <BigButton onCLick={handleAboutClick}>Übers Feuerspielen</BigButton>

                <Button column={1} row={3} onClick={handleVideosClick}><img src={videos} alt="videos" />Videos</Button>
                <Button column={2} row={3} onClick={handleDokumenteClick}><img src={dokumente} alt="dokumente button" />Dokumente</Button>
                <Button column={3} row={3} onClick={handleTippsClick}><img src={tipps} alt="tipps button" /><br />Tipps</Button>

                <Button column={1} row={4} onClick={handleShopsClick}><img src={shops} alt="shops button" /><ButtonDiv>Shops</ButtonDiv></Button>
                <Button column={2} row={4} onClick={handleArtistsClick}><img src={artists} alt="artists button" /><br />Artists</Button>
                <Button column={3} row={4} onClick={handleKontaktClick}><img src={kontakt} alt="kontakt button" />Kontakt</Button>
            </main>
            <Footer />
        </>
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

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

