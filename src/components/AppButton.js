import styled from 'styled-components';

const AppButton = styled.button.attrs(props => ({
  background: props.background || '#f77622',
  textColor: props.textColor || 'white',
}))`
  cursor: pointer;
  border: 1px solid ${props => props.background};
  border-radius: 4px;
  background: ${props => props.background};
  color: ${props => props.textColor};
  font-weight: 700;
  padding: 0.5rem;

  &:hover {
    filter: brighness(0.6);
  }
`;

export default AppButton;