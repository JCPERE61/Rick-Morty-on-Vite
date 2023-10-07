import { useSelector } from "react-redux";

export const Favorites = ({myFavorites}) => {

    const myFavorites = useSelector ((state) => state.myFavorites);

    return (
        <div>
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
    </div>
    )
}
