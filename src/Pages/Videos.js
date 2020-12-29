import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components/macro'
import tanzlichter from '../img/tanzlichter.svg'
import fächer from '../img/fächer.svg'
import hulahoop from '../img/hulahoop.svg'
import poi from '../img/poi.svg'
import seil from '../img/seil.svg'
import stab from '../img/stab.svg'
import allgemein from '../img/allgemein.svg'
import einsteiger from '../img/einsteiger.svg'
import shows from '../img/shows.svg'



export default function Videos() {
    return (
        <>
            <Header headline='Videos' />
            <main>

                <Button column={1} row={1}><img src={tanzlichter} alt="Tanzlichter button" />Tanzlichter</Button>
                <Button column={2} row={1}><img src={fächer} alt="Fächer button" />Fächer</Button>
                <Button column={3} row={1}><img src={hulahoop} alt="Hula Hoop button" /><ButtonDiv>Hula Hoop</ButtonDiv></Button>

                <Button column={1} row={2}><img src={poi} alt="poi button" /><ButtonDiv>Poi </ButtonDiv></Button>
                <Button column={2} row={2}><img src={seil} alt="seil button" /><ButtonDiv>Seil</ButtonDiv></Button>
                <Button column={3} row={2}><img src={stab} alt="stab button" /><ButtonDiv>Stab</ButtonDiv></Button>

                <Button column={1} row={3}><img src={allgemein} alt="allgemein button" />Allgemein</Button>
                <Button column={2} row={3}><img src={einsteiger} alt="einsteiger button" />Einsteiger</Button>
                <Button column={3} row={3}><img src={shows} alt="shows button" />Shows</Button>
            </main>
            <Footer />
        </>
    )

}

const ButtonDiv = styled.div`
display:block;
`

const Button = styled.button`
grid-row: ${(props) => props.row};
grid-column:${(props) => props.column} /span 1;`
