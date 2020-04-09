import { css } from 'styled-components'

export const ScrollStyle01 = css`
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.scrollbar};
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarThumb};
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-resizer {
    display: none;
  }
`
