import React from 'react'
import styled from 'styled-components'

const MainContent = () => {
  return (
    <Wrapper>
      <h2>Heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e</p>
      <p>in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.background};

  font-size: 1rem;
   
   h2 {
    font-size: 3rem;
   }
`

export default MainContent