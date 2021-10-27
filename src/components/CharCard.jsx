import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import BkgImg from './../images/portal-license.png'


const CharacterCard = styled.div`


    font-family: 'Viga', sans-serif;
    text-transform: uppercase;
    background-image: url(${BkgImg});
    background-size: contain;
    background-color: #f5f5f5;
    border-radius: 40px;
    height: 408px;
    width: 767px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    #top {
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 130px;
        left: 0;
        width: 90%;
        font-size: 20px;
    }
    #middle {
        position: relative;
        top: 140px;
        left: 0px;
        display: grid;
        grid-template-columns: 0.5fr 3fr;
        align-items: center;
        text-align: center;

        img {
        height: 180px;
        border: 2px solid #307174;
        margin-left: 20px;      
        }

        h2 {
        font-size: 60px;
        color: #307174;
        }
    }

    #bottom {
        position: relative;
        top: 150px;
        left: 80px;
        font-size: 16px;
        display: flex;
        justify-content: space-evenly;

    }

    button {
        position: relative;
        top: 20px;
        left: calc(100% - 60px);
        color: white;
        font-size: 36px;
    }
`;

const CharCard = (props) => {


    const [hide, setHide] = useState(props.isHidden)

    useEffect(() => {
        setHide(props.isHidden)
    }, [props.isHidden])


    const handleClick = (e) => {
        console.log(e.target)
        setHide(!props.isHidden)
    }

    return (
        <CharacterCard id="character-card" hidden={hide} >
            <button onClick={handleClick}>X</button>
            <div id="top">
                <p>ID Number:<strong>{props.value.id}</strong> </p>
                <p>Gender: <strong>{props.value.gender}</strong></p>
                <p>Species: <strong>{props.value.species}</strong></p>
                <p>Status: <strong>{props.value.status}</strong></p>
            </div>
            <div id="middle">
                <img src={props.value.image}/>
                <div>
                    <h2 className="rnm-font">{props.value.name}</h2>
                    <p id="location">Location: <strong>{props.value.location.name}</strong></p>
                </div>
            </div>
            <div id="bottom">
                <p>DOB: <strong>{props.value.created.slice(0, 10)}</strong></p>
                <p>LOC: <strong>{props.value.origin.name}</strong></p>
            </div>
        </CharacterCard>
    )
}

export default CharCard