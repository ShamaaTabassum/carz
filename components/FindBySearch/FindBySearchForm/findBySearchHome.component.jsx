import React from 'react'
import {Container} from "reactstrap";
import FindBySearchText from '../findBySearchText.component';
import FindBySearchFrom1 from './findBySearchForm1.component';

export const styles = {
        heading: {
            row: 'justify-content-md-center justify-content-center mt-xl-4',
            col: 'col-md-auto col-auto'
        },
    container: {
        padding: '0px 30px',
        zIndex:"0",
    }
}

const FindBySearchHome = () => {
    return <Container fluid style={styles.container}>
        <FindBySearchText />
        <FindBySearchFrom1 />
        </Container>
}

export default FindBySearchHome
