import React from 'react'
import {Container} from "reactstrap";
import {styles} from "../FindBySearch/FindBySearchForm/findBySearchHome.component";
import FindBySearchText from '../FindBySearch/findBySearchText.component';
import YourInfo from '../YourInfo/yourInfo.component';
import FindBySearchVehicleForm from './findBySearchVehicleForm.component';

const FindBySearchVehicle = () => {
    return <Container fluid style={{padding: styles.container.padding}}>
        <FindBySearchText />
        <FindBySearchVehicleForm />
        <YourInfo />
        </Container>
}

export default FindBySearchVehicle
