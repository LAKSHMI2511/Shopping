import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: "50px";
background-color:#34ebeb;
`;

const OfferText = styled.p`
display:flex;
align-items:center;
justify-content:center;
`;

const Announcement = () => {
  return <Container>
    <OfferText>
    Super sale ! Get upto 50% off
    </OfferText>
    </Container>;
};

export default Announcement;
