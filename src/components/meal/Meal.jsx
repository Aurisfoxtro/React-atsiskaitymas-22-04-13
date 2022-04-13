import {Card} from "react-bootstrap"
import "./Meal.css"

let favoritesList = [];

const Meal = (props)=>{

    const handleAddFavorites = () =>{
    let obj = {}
    obj["id"] = props.id;
    obj["name"] = props.name;
    obj["image"] = props.image;
    obj["ingredient1"] = props.ingredient1;                
    obj["measure1"] = props.measure1;
    obj["ingredient2"] = props.ingredient2;                
    obj["measure2"] = props.measure2;
    obj["ingredient3"] = props.ingredient3;                
    obj["measure3"] = props.measure3;
    obj["ingredient4"] = props.ingredient4;                
    obj["measure4"] = props.measure4;
    obj["ingredient5"] = props.ingredient5;                
    obj["measure5"] = props.measure5;
    obj["ingredient6"] = props.ingredient6;                
    obj["measure6"] = props.measure6;
    obj["ingredient7"] = props.ingredient7;                
    obj["measure7"] = props.measure7;
    obj["ingredient8"] = props.ingredient8;                
    obj["measure8"] = props.measure8;
    obj["ingredient9"] = props.ingredient9;                
    obj["measure9"] = props.measure9;
    obj["ingredient10"] = props.ingredient10;                
    obj["measure10"] = props.measure10;
    obj["ingredient11"] = props.ingredient11;                
    obj["measure11"] = props.measure11;
    obj["ingredient12"] = props.ingredient12;                
    obj["measure12"] = props.measure12;
    obj["ingredient13"] = props.ingredient13;                
    obj["measure13"] = props.measure13;
    obj["ingredient14"] = props.ingredient14;                
    obj["measure14"] = props.measure14;
    obj["ingredient15"] = props.ingredient15;                
    obj["measure15"] = props.measure15;
    obj["ingredient16"] = props.ingredient16;                
    obj["measure16"] = props.measure16;
    obj["ingredient17"] = props.ingredient17;                
    obj["measure17"] = props.measure17;
    obj["ingredient18"] = props.ingredient18;                
    obj["measure18"] = props.measure18;
    obj["ingredient19"] = props.ingredient19;                
    obj["measure19"] = props.measure19;
    obj["ingredient20"] = props.ingredient20;                
    obj["measure20"] = props.measure20;
    favoritesList.push(obj);
    localStorage.setItem('favoritesMeals', JSON.stringify(favoritesList))
                    
    }

    return(
        
        <Card className="me-2" style={{width:'30rem'}}>
            <h2>{props.name}</h2>
            <button onClick={handleAddFavorites} className="btn btn-info">Like</button>
            <Card.Body>
                <div className="container">
                <Card.Text>
                    <img className="img-fluid" src={(props.image)?props.image:null} alt=""/>
                    <Card.Title>Ingredients:</Card.Title>
                    <Card.Text>
                        <table>
                            <tr>
                                <td>{props.ingredient1}</td>
                                <td>{props.measure1}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient2}</td>
                                <td>{props.measure2}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient3}</td>
                                <td>{props.measure3}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient4}</td>
                                <td>{props.measure4}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient5}</td>
                                <td>{props.measure5}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient6}</td>
                                <td>{props.measure6}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient7}</td>
                                <td>{props.measure7}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient8}</td>
                                <td>{props.measure8}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient9}</td>
                                <td>{props.measure9}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient10}</td>
                                <td>{props.measure10}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient11}</td>
                                <td>{props.measure11}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient12}</td>
                                <td>{props.measure12}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient13}</td>
                                <td>{props.measure13}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient14}</td>
                                <td>{props.measure14}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient15}</td>
                                <td>{props.measure15}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient16}</td>
                                <td>{props.measure16}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient17}</td>
                                <td>{props.measure17}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient18}</td>
                                <td>{props.measure18}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient19}</td>
                                <td>{props.measure19}</td>
                            </tr>
                            <tr>
                                <td>{props.ingredient20}</td>
                                <td>{props.measure20}</td>
                            </tr>
                        </table>
                    </Card.Text>
                </Card.Text>
                </div>
            </Card.Body>
        </Card>

    )
}

export default Meal