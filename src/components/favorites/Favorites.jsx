import { useEffect, useState } from "react"
import Meal from "../meal/Meal"
import {Row} from "react-bootstrap"

const Favorites = ()=>{

const [meals, setMeals] = useState([])

useEffect(()=>{
if(localStorage.length){
    setMeals(JSON.parse(localStorage.getItem('favoritesMeals')))
}},[])

console.log('Favorite Meals: ', meals);

return(
            <Row>       
                {(meals != null) && meals.map(meal =>
                <Meal
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    image={meal.image}
                    ingredient1={meal.ingredient1}
                    measure1={meal.measure1}
                    ingredient2={meal.ingredient2}
                    measure2={meal.measure2}
                    ingredient3={meal.ingredient3}
                    measure3={meal.measure3}
                    ingredient4={meal.ingredient4}
                    measure4={meal.measure4}
                    ingredient5={meal.ingredient5}
                    measure5={meal.measure5}
                    ingredient6={meal.ingredient6}
                    measure6={meal.measure6}
                    ingredient7={meal.ingredient7}
                    measure7={meal.measure7}
                    ingredient8={meal.ingredient8}
                    measure8={meal.measure8}
                    ingredient9={meal.ingredient9}
                    measure9={meal.measure9}
                    ingredient10={meal.ingredient10}
                    measure10={meal.measure10}
                    ingredient11={meal.ingredient11}
                    measure11={meal.measure11}
                    ingredient12={meal.ingredient12}
                    measure12={meal.measure12}
                    ingredient13={meal.ingredient13}
                    measure13={meal.measure13}
                    ingredient14={meal.ingredient14}
                    measure14={meal.measure14}
                    ingredient15={meal.ingredient15}
                    measure15={meal.measure15}
                    ingredient16={meal.ingredient16}
                    measure16={meal.measure16}
                    ingredient17={meal.ingredient17}
                    measure17={meal.measure17}
                    ingredient18={meal.ingredient18}
                    measure18={meal.measure18}
                    ingredient19={meal.ingredient19}
                    measure19={meal.measure19}
                    ingredient20={meal.ingredient20}
                    measure20={meal.measure20}

                />)
                }
                </Row>
)
}

export default Favorites