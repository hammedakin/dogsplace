import React from 'react';
import '../Components/DogPlace/DogPlace.css'
import AllCategories from '../Components/DogPlace/AllCategories';
import DogPlaceShowcase from '../Components/DogPlace/DogPlaceShowcase'
import AllDogs from '../Components/DogPlace/AllDogs';

const DogPlace = () => {
    return ( 
        <>
       <DogPlaceShowcase/>
        <AllCategories/>
        <AllDogs/>
        </>
     );
}
 
export default DogPlace;