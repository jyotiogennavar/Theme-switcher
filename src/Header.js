import React, {useContext} from 'react'
import ThemeToggleButton from './ThemeToggleButton'

import { ThemeContext } from './ThemeContext'

import FontSelector from './FontSelector'
import styled from 'styled-components'

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <WrapperHeader>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      <FontSelector/>
    </WrapperHeader>
  )
}

const WrapperHeader = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`
export default Header; 
