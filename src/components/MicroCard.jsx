import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
  width: 130px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  @media only screen and (max-width: 480px){
    width: 50px;
  }
`

const Image = styled.img`
  width: 20px;
`

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px){
    font-size: 12px;
  }
`
const MicroCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>The ability to produce original and unusual ideas, or to make something new or imaginative our is our passion</Text>
    </Container>
  )
}

export default MicroCard