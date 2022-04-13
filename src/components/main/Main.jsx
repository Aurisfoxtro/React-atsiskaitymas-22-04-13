import React, {useState} from "react";
import {Row} from "react-bootstrap"
import Search from "../search/Search";
import "./Main.css"
import Meal from "../meal/Meal";

const Main = ()=>{
    const [meals, setMeals] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    
    const handleSubmit = ()=>{
        if(searchTerm.length > 2){
        try{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then(response=>response.json())
                .then(data=>setMeals(data))
            }catch(msg){
                console.log('Error: ', msg);
                alert(msg);
            }
        }else{
            alert('Fill the search bar with a meal name.')
        }
        if(meals.meals === null){ alert('Nothing found.')}
    }

     console.log('meals', meals);
    
    const handleInputChange = (e)=>{
        setSearchTerm(e.target.value)
    }
    console.log('Paieškos eilutė: ', searchTerm)
    
    return(
        <>
            <div className="search-container">
                <div className="search-box">
                    <Search onSearch={handleInputChange} onSubmit={handleSubmit} val={searchTerm}/>
                </div>
            </div>
                {console.log('Atrinkti patiekalai: ', meals)}
                
                
             <Row>     
                {((meals.meals != null) && (searchTerm.length > 2)) && meals.meals.map(meal =>
                <Meal
                    key={meal.idMeal}
                    id={meal.idMeal}
                    name={meal.strMeal}
                    image={meal.strMealThumb}
                    ingredient1={meal.strIngredient1}
                    measure1={meal.strMeasure1}
                    ingredient2={meal.strIngredient2}
                    measure2={meal.strMeasure2}
                    ingredient3={meal.strIngredient3}
                    measure3={meal.strMeasure3}
                    ingredient4={meal.strIngredient4}
                    measure4={meal.strMeasure4}
                    ingredient5={meal.strIngredient5}
                    measure5={meal.strMeasure5}
                    ingredient6={meal.strIngredient6}
                    measure6={meal.strMeasure6}
                    ingredient7={meal.strIngredient7}
                    measure7={meal.strMeasure7}
                    ingredient8={meal.strIngredient8}
                    measure8={meal.strMeasure8}
                    ingredient9={meal.strIngredient9}
                    measure9={meal.strMeasure9}
                    ingredient10={meal.strIngredient10}
                    measure10={meal.strMeasure10}
                    ingredient11={meal.strIngredient11}
                    measure11={meal.strMeasure11}
                    ingredient12={meal.strIngredient12}
                    measure12={meal.strMeasure12}
                    ingredient13={meal.strIngredient13}
                    measure13={meal.strMeasure13}
                    ingredient14={meal.strIngredient14}
                    measure14={meal.strMeasure14}
                    ingredient15={meal.strIngredient15}
                    measure15={meal.strMeasure15}
                    ingredient16={meal.strIngredient16}
                    measure16={meal.strMeasure16}
                    ingredient17={meal.strIngredient17}
                    measure17={meal.strMeasure17}
                    ingredient18={meal.strIngredient18}
                    measure18={meal.strMeasure18}
                    ingredient19={meal.strIngredient19}
                    measure19={meal.strMeasure19}
                    ingredient20={meal.strIngredient20}
                    measure20={meal.strMeasure20}

                />)
                }
                </Row>
        </>
    )
}

export default Main