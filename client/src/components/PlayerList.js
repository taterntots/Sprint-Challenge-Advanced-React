import React from 'react';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
`
const CardStyle = styled.div`
  border-radius: 7px;
  background-color: slategrey;
  text-align: center;
`
function PlayerList(props) {
    return (
        <GridStyle>
            {props.players.map(player => (
                <CardStyle key={player.id} className='player-list'>
                    <h1>{player.name}</h1>
                    <p>{player.country}</p>
                    <p># of Searches: {player.searches}</p>
                </CardStyle>
            ))}
        </GridStyle>
    )
}

export default PlayerList;