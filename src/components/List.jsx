import React, {useState, useEffect} from 'react'
import { useCharacters, useLocations } from "../api/useData";
import CharListItem from './CharListItem';
import LocListItem from './LocListItem';
import styled from 'styled-components';
import NextImg from './../images/Next.png'

const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 150px;
    
`
const NextBtn = styled.button`
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Rick";
    padding: 60px;
    font-size: 40px;
    margin-bottom: 20px;
    background-image: url(${NextImg});
    
    background-size: contain;
    background-repeat: no-repeat;

`

function List(props) {

    const [charCount, setCharCount] = useState(1);
    const [locCount, setLocCount] = useState(1);

    const characters = useCharacters(charCount);
    const locations = useLocations(locCount);
   
    function incrementCount (e) {
        // console.log("Gomb klikk")
        // console.log(count)

        if (e.target.name === "char"){
            setCharCount(charCount + 1);
        } else if (e.target.name === "loc") {
            setLocCount(locCount +1)
        }
        //setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        window.scrollTo(0,0) //just to make it scroll back to top once the new list is rendered
    }, [charCount, locCount])

    if (props.type !== "description") {
        console.log(props.type)
        let listItems = [];

        if (props.type === "characters") {
           listItems = characters.results;
           return (
               <>
                <ListDiv>
                    { listItems.map((item) => <CharListItem value={item} key={item.id}></CharListItem>)} 
                </ListDiv>
                <NextBtn onClick={incrementCount} name="char">Next Page</NextBtn>
            </>
            )
        } else if (props.type === "locations") {
            listItems = locations.results;
            console.log(listItems);
            return (
                <>
                    <ListDiv>
                        { listItems.map((item) => <LocListItem value={item} key={item.id}></LocListItem>)} 
                    </ListDiv>
                    <NextBtn onClick={incrementCount} name="loc">Next Page</NextBtn>
                </>
            )
        }  
    } else {
        return <div id="description">
                <p>Welcome to the Rick and Morty page by No Ideas</p>
                <p>If Rick ever reaches the button, he can show you his friendlist, <br/>but if Morty reaches his first, he'll take you to all the places he's visited over the years. Who will you help reach their goal? </p>
                <p>Click on a friend or place to find out more information.</p>
                </div>
    }
}

export default List
