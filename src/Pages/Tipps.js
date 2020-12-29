import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function Tipps() {
    return (
        <>
            <Header headline='Tipps' />
            <main>
                <Button column={1} row={1}>Definitionen</Button>
                <Button column={2} row={1}><ButtonDiv>Sicherheits Hinweise</ButtonDiv></Button>
                <Button column={3} row={1}>Verträge</Button>

                <Button column={1} row={2}><ButtonDiv>Einstiegs Checkliste</ButtonDiv></Button>
                <Button column={2} row={2}><ButtonDiv>Sicherheits Checkliste</ButtonDiv></Button>
                <Button column={3} row={2}><ButtonDiv>Show Checkliste</ButtonDiv></Button>

                <Button column={1} row={3}></Button>
                <Button column={2} row={3}><ButtonDiv>Konzept Vorlagen</ButtonDiv></Button>
                <Button column={3} row={3}></Button>
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
