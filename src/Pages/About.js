import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function About() {
    return (
        <>
            <Header headline='Übers Feuerspielen' />
            <main>
                <Text> Lorem iTextsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
            </main >
            <Footer />
        </>
    )

}

const Text = styled.p`
grid-row: 1 ;
grid-column:1/span 3;
padding: 5px;
`