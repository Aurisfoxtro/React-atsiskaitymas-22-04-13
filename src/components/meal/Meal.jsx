import {Card} from "react-bootstrap"
import "./Meal.css"

const Meal = (props)=>{
    return(
        
        <Card className="me-2" style={{width:'30rem'}}>
            <h2>{props.name}</h2>
            <Card.Body>
                <div className="container">
                <Card.Text>
                    <img className="img-fluid" src={(props.image)?props.image.url:null} alt=""/>
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