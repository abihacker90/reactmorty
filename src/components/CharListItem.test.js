import React from 'react';
import { render } from '@testing-library/react';
import CharListItem from './CharListItem';
//import { shallow, mount } from 'enzyme';


describe('betőte', () => {
    const { shallow } = require('enzyme');
    let list;
    beforeEach(() => {
    const data = {
      "id":1,
      "name":"Rick Sanchez",
      "status":"Alive",
      "species":"Human",
      "type":"",
      "gender":"Male",
      "origin":{
         "name":"Earth (C-137)",
         "url":"https://rickandmortyapi.com/api/location/1"
      },
      "location":{
         "name":"Earth (Replacement Dimension)",
         "url":"https://rickandmortyapi.com/api/location/20"
      },
      "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode":[
         "https://rickandmortyapi.com/api/episode/1",
      ],
      "url":"https://rickandmortyapi.com/api/character/1",
      "created":"2017-11-04T18:48:46.250Z"

   }
       list = shallow(<CharListItem value={data.image}/>)
  });

    const { getByRole, getByAltText, getAttribute } = render(<CharListItem />);
    const chCard = document.querySelector('.charlistcard');
    const popUpChCard = document.querySelector('#character-card')
    act(() => {
      chCard.dispatchEvent(new MouseEvent("click" ));
    });
    expect(popUpChCard.getAttribute("hide")).toEqual("false");


    /* expect(
      container.querySelector("[data-testid='email']").getAttribute("href")
    ).toEqual("mailto:test@example.com"); */
  });