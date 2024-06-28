import styled from "styled-components";

export const PlayerDeck = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})

export const PlayerCardStyle = styled('div')({
  height: '10em',
  aspectRatio: '0.7',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '5px'
})