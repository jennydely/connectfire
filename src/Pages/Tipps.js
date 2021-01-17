import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function Tipps() {
    return (
        <>
            <Header headline='Tipps' />
            <main>
                {/*  <Button column={1} row={1}><ButtonDiv>Welche Kleidung?</ButtonDiv></Button>
                <Button column={2} row={1}><ButtonDiv>xxx</ButtonDiv></Button>
                <Button column={3} row={1}>Verträge</Button> */}

                <Button column={1} row={2}><ButtonDiv>Welche Kleidung?</ButtonDiv></Button>
                <Button column={2} row={2}><ButtonDiv>Welches Equipement?</ButtonDiv></Button>
                <Button column={3} row={2}><ButtonDiv>Welche Musik?</ButtonDiv></Button>

                <Button column={1} row={3}><ButtonDiv>Wie kann ich Figuren verbinden?</ButtonDiv></Button>
                <Button column={2} row={3}><ButtonDiv>Was ist beim Eigenbau zu beachten?</ButtonDiv></Button>
                <Button column={3} row={3}><ButtonDiv>Welcher und wie groß soll der Ort sein?</ButtonDiv></Button>
            </main >
            <Footer />
        </>
    )

}

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 1;`
