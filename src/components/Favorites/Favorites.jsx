import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";

export const Favorites = () => {

    const myFavorites = useSelector ((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        const order = event.target.value;
        dispatch(orderCards(order))
    }

    const handlerFilter = (event) => {
        const filter = event.target.value;
        dispatch(filterCards(filter))
    }

    return (
    <>        
        <div>
            <select name="" id=" " onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
        </div>

        <div>
            <select name="" id="" onChange={handlerFilter}>
                <option value="Todos">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        
            {myFavorites.map (({id, name, status, species, gender, origin, image}) => {
                return (
                <Card 
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                />
                )
            })
      }
    </>    
    )
}
