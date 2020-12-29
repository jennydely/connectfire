import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'

export default function StartPage() {
    return (
        <>
            <Header headline='Settings' />
            <main>

                <GridLabel column={1} row={1}>Name:</GridLabel>
                <GridInput column={2} row={1}></GridInput>
                <GridLabel column={1} row={2}>E-Mail:</GridLabel>
                <GridInput column={2} row={2}></GridInput>
                <GridLabel column={1} row={3}>Password:</GridLabel>
                <GridInput column={2} row={3}></GridInput>
                <GridLabel column={1} row={4}>Design:</GridLabel>
                <GridSelect column={2} row={4}></GridSelect>

            </main>
            <Footer />
        </>
    )

}

const GridLabel = styled.label`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 1;`

const GridInput = styled.input`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 2;
background: #900000;
color:white;
border-width:0px;
border:none;`

const GridSelect = styled.select`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} ;
background: #900000;
color:white
border-width:0px;
border:none;`