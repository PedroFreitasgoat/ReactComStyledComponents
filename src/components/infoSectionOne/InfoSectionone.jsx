import React from 'react'
import styled from 'styled-components'
import section0oneImage from '../../img/section1.png'

const Container = styled.div`
    padding: 10px 20px;;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row; 
    margin: 0px 140px 0px 140px;
`

const Header = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
`

const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    margin-bottom: 10px;
`

const Description = styled.p`
    color: ${(props) => props.theme.colors.textDark};
`

const Right = styled.div`
    width: 30%;
`

const Image = styled.img`
    width: 100%;
`
const Left = styled.div`
    width: 70%;
`

const List = styled.div`
    list-style: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const ListItem = styled.div`
    color: ${(props) => props.theme.colors.primary};
`

const InfoSectionone = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Title>Subtitle</Title>
            <Header>header</Header>
            <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ipsam. Cumque sit accusantium, velit libero explicabo a nihil voluptate animi.
            </Description>
            </Left>
        <Right>
            <Image src={section0oneImage} />
        </Right>
        </Wrapper>
    </Container>
  ) 
}

export default InfoSectionone
