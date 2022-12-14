import styled from 'styled-components';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;

const Language = styled.span`
 font-size:14px;
 cursor: pointer;
`;

const SearchContainer = styled.div`
 border : 0.5px solid lightgray;
 display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
 border: none;
`;

const Center = styled.div`
  flex:1;
  text-align: center;
`;

const Logo = styled.div`
font-weight:bold;
`;

const Right = styled.div`
  display:flex;
  justify-content: flex-end;
  flex:1;
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon
              style={{ color: 'gray', fontSize: '16px' }}
            ></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
