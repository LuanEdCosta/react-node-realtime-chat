import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.snow};

  display: grid;
  place-items: center;

  padding: 4.8rem 2.4rem;

  height: 100%;

  @media only screen and (max-width: 568px) {
    padding: 1.6rem;
  }
`
