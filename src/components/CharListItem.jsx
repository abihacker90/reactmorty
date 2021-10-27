import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CharCard from './CharCard'


const CharacterListCard = styled.div `
    color: white;
    background: green;
    font-size: 2rem;
    min-width: fit-content;
    width: 40%; 
    margin: 20px auto;
    display: flex;
    border-radius: 25px;
    

    img {
        grid-area:b;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        margin: 20px 20px;      
    }

    div {
        margin-top: 20px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
    }
    
    
`;
const CharListItem = (props) => {

    const [hide, setHide] = useState(true);
  //  const [character, setCharacter] = useState(null)

    function charClick (e) {
        console.log("ez a charClick fgv.")
        console.log(props.value)
        setHide(!hide) // if card is hidden, show it on click, if it's shown hide it

       // setCharacter(props.value)    
    }

    useEffect(() => {
            //console.log("rerender ")
    }, [hide])


    return (
        <>
        <CharacterListCard onClick={charClick}>
            <img src={props.value.image}/>
            <div>
                <p id="name">{props.value.name}</p>   
                <p id="species">{props.value.species}</p>   
            </div>
        </CharacterListCard>
        <CharCard value={props.value} isHidden={hide}/>
        </>
    )
}

export default CharListItem
