import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function Shops() {
    return (
        <>
            <Header headline='Shops' />
            <main>
                <Button column={1} row={1}><a href="http://www.delyed.com" target="blank" alt="Shop #1" >Shop #1</a></Button>
                <Button column={2} row={1}><a href="http://www.delyed.com" target="blank" alt="Shop #2" >Shop #2</a></Button>
                <Button column={3} row={1}><a href="http://www.delyed.com" target="blank" alt="Shop #3" >Shop #3</a></Button>

                <Button column={1} row={2}><a href="http://www.delyed.com" target="blank" alt="Shop #4" >Shop #4</a></Button>
                <Button column={2} row={2}><a href="http://www.delyed.com" target="blank" alt="Shop #5" >Shop #5</a></Button>
                <Button column={3} row={2}><a href="http://www.delyed.com" target="blank" alt="Shop #6" >Shop #6</a></Button>

                <Button column={1} row={3}><a href="http://www.delyed.com" target="blank" alt="Shop #7" >Shop #7</a></Button>
                <Button column={2} row={3}><a href="http://www.delyed.com" target="blank" alt="Shop #8" >Shop #8</a></Button>
                <Button column={3} row={3}><a href="http://www.delyed.com" target="blank" alt="Shop #9" >Shop #9</a></Button>
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
