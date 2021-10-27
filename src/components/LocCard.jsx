import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import BkgImg from './../images/portal.png'

const LocationCard = styled.div`

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

    h1 {
        position: absolute;
        top: 25px;
        left: 20px;
        //transform: translateX(-50%);
        font-size: 50px;
    }
    #middle {
        position: absolute;
        top: 130px;
        left: 30px;
        font-size: 20px;

        p {
            padding: 5px;
        }
    }
    h2 {
        position: absolute;
        top: 250px;
        left: 50%;
        transform: translateX(-50%)
    }
    .residents-container{
        position: absolute;
        top: 290px;
        left: 50px;
        display: flex;
    }
    button {
        position: relative;
        top: 20px;
        left: calc(100% - 60px);
        color: black;
        font-size: 40px;
        font-weight: bolder;
    }
    .resident-image {
           // position: absolute;
           // top: 290;
           // left: 50px;
            border-radius: 100%;
            height: 100px;
            margin-right: 10px;
    }

`


function LocCard(props) {

    const [hide, setHide] = useState(props.isHidden)

    const handleClick = (e) => {
        console.log(e.target)
        setHide(!props.isHidden)
    }
  
    useEffect(() => {
        setHide(props.isHidden)
    }, [props.isHidden])



    return (
        <LocationCard hidden={hide}>
            <button className="rnm-font" onClick={handleClick}>X</button>
            <h1 className="rnm-font">{props.value.name}</h1>
            <div id="middle">
                <p>Type: {props.value.type}</p>
                <p>Dimension: {props.value.dimension}</p>
                <p>Created: {props.value.created.slice(0, 10)}</p>
            </div>
            <h2>First residents</h2>
            <div className="residents-container">
                {props.value.residents.slice(0, 6).map((resident)=>{
                        if (resident !== undefined) {

                            let resNumber = resident.slice(42, resident.length)
                            let Url = `https://rickandmortyapi.com/api/character/avatar/${resNumber}.jpeg`
                            console.log(Url)
                            return (<img className="resident-image" src={Url}/>)
                        }
                    })
                }
               
            </div>
        </LocationCard>
    )
}

export default LocCard
