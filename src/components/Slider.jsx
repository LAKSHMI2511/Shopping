import styled from 'styled-components';
import React from 'react';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const Container = styled.div`
height:100vw;
width:100%;
`;

const ArrowContainer = styled.div`
 height:50px;
 width:50px;
`;

const Arrow = styled.div`
 top:0;
 bottom:0;
 margin:auto;
 display:flex;
 align-items:center;
 justify-content:center;
 border-radius: 50%;
 background-color: #ff7f7;
 left: ${(props) => props.direction === 'left' && '10px'};
 right: ${(props) => props.direction === 'right' && '10px'};
 cursor: pointer;
 opacity: 0.5;
 position: absolute;
`;

const Wrapper = styled.div`
display:flex;
align-items:center;
 justify-content:center;
`;

const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
height:200px;
width:600px;
`;

const InfoContainer = styled.div`
flex:1;
`;

const Title = styled.p`

`;

const Desc = styled.p`

`;

const Button = styled.button`

`;

const Slider = () => {
  return (
    <Container>
      <ArrowContainer>
        <Arrow direction="left">
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc> HURRY UP </Desc>
              <Button>SHOW MORE</Button>
            </InfoContainer>
          </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlinedIcon />
        </Arrow>
      </ArrowContainer>
    </Container>
  );
};

export default Slider;
