import styled from 'styled-components'

const Label = styled.span`
  color: ${props => props.theme.text.common};
  font-weight: bold;
`

const Description = styled.span`
  color: ${props => props.theme.text.common};
`

const MenuText = styled.span`
  color: ${props => props.theme.text.menu};
  font-weight: bold;
`

export { Label, Description, MenuText }
