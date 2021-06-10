import styled from '@emotion/styled'

export const UspContainer = styled.div`
  background-color: hsl(170, 25%, 29%);
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 0 4rem 0;
`

export const HeaderContainer = styled.div`
  margin-bottom: 5rem;
`

export const Grid = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
`

export const GridCell = styled.div`
  display: flex;
  flex-flow: column;
  width: 330px;
  text-align: center;
  @media only screen and (max-width: 767px) {
    margin: 1rem 0;
  }
`

export const CellText = styled.div`
  display: flex;
  flex-flow: column;
`

export const CellImage = styled.figure`
  display: grid;
  place-self: center;
`
