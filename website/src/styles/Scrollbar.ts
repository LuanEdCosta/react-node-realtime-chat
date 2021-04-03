import { css } from 'styled-components'

export const DefaultScrollBar = css`
  ::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2rem;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollBarThumb};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollBarTrack};
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-resizer {
    display: none;
  }
`

export const ShowOnHoverScrollBar = css`
  ${DefaultScrollBar}

  &:hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
