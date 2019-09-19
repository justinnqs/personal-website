import React from 'react';
import styled from 'styled-components';
import ContactTemplate from '../templates/ContactTemplate';
import { PageTitle } from '../atoms/Headers';


const Contact = () => {
    return(
        <ContactTemplate>
            <PageTitle>Contact</PageTitle>
        </ContactTemplate>
    );
}

export default Contact;