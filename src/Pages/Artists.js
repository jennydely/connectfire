import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function Artists() {
    return (
        <>
            <Header headline='Artists' />
            <main>
                <Subline row={1}>Einzel - & Teamkünstler</Subline>
                <Button column={1} row={2}><ButtonDiv>Küstler</ButtonDiv></Button>
                <Button column={2} row={2}><ButtonDiv><span>Künstler</span> <span>&</span> <span>Künstler</span></ButtonDiv></Button>
                <Button column={3} row={2}><ButtonDiv>Küstler</ButtonDiv></Button>

                <Button column={1} row={3}><ButtonDiv>Küstler</ButtonDiv></Button>
                <Button column={2} row={3}><ButtonDiv>Küstler</ButtonDiv></Button>
                <Button column={3} row={3}><ButtonDiv><span>Künstler</span> <span>&</span> <span>Künstler</span></ButtonDiv></Button>

                <Subline row={4}>Gruppenkünstler</Subline>
                <Button column={1} row={5}><ButtonDiv>Team</ButtonDiv></Button>
                <Button column={2} row={5}><ButtonDiv>Team</ButtonDiv></Button>
                <Button column={3} row={5}><ButtonDiv>Team</ButtonDiv></Button>
            </main >
            <Footer />
        </>
    )

}

const Subline = styled.h3`
grid-column: 1/span 3;
grid-row:${(props) => props.column};
margin: 0;
`

const ButtonDiv = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const Button = styled.button`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 1;`
