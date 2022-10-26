import styled from 'styled-components';
import React from 'react';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';


const Container = styled.div`
height:100vw;
width:100%;
background-color: coral
`;

const Wrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
`;

const Arrow = styled.div`
 border-radius:50%;
 background-color: white;
 top:0;
 bottom:0;
 margin:auto;
 
 
`;
const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Arrow>
          <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Arrow>
          <ArrowRightOutlinedIcon/>
        </Arrow>
      </Wrapper>
    </Container>
  );
}

export default Slider;