import React from 'react';
import {Form} from "reactstrap";
import FindBySearchInput from './../findBySearchInput.component';
import FindBySearchInputRange from './../findBySearchInputRange.component';
import FindBySearchBtn from '../findBySearchBtn.component';

const FindBySearchFrom1 = () => {
    return (
                <Form>
                    <FindBySearchInput/>
                    <FindBySearchInputRange />
                    <FindBySearchBtn />
                </Form>
    )
}

export default FindBySearchFrom1
