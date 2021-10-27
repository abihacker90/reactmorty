import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import LocCard from './LocCard';

const Card = styled.div `

    color: white;
    background: green;
    font-size: 2rem;
    min-width: fit-content;
    width: 30%;
    height: 120px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 25px;

`;

const LocListItem = (props) => {
    const [hide, setHide] = useState(true);

    function locationClick (e) {

        setHide(!hide) 


    }

    useEffect(() => {

    }, [hide])

    return (
        <>
            <Card onClick={locationClick}>
                <p>Name: {props.value.name}</p>   
                
                <p>Type: {props.value.type}</p>   
            </Card>
            <LocCard value={props.value} isHidden={hide}/>
        </>
    )
}

export default LocListItem
