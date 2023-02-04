import React from 'react'
import "./style.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pizza from './Pizza'
import Burger from './Burger'
import Pasta from './Pasta';
import pizzaimg from './Images/pizza1.jpg'
import burgerimg from './Images/burger.jpg'
import pastaimg from './Images/pasta.jpg'



function FoodCard() {
    const [pizzamodalShow, setPizzaModalShow] = React.useState(false);
    const [burgermodalShow, setBurgerModalShow] = React.useState(false);
    const [pastamodalShow, setPastaModalShow] = React.useState(false);


    return (
        <div className="food-card-container">
            <div className="pizza-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={pizzaimg} className="menuimg"/>
                    <Card.Body>
                        <Card.Title>Pizza</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setPizzaModalShow(true)}>
                            Pizza Menu
                        </Button>

                        <Pizza
                            show={pizzamodalShow}
                            onHide={() => setPizzaModalShow(false)}
                        />
                    </Card.Body>
                </Card>
            </div>
            <div className="burger-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={burgerimg} className="menuimg"/>
                    <Card.Body>
                        <Card.Title>Burger</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setBurgerModalShow(true)}>
                            Burger Menu
                        </Button>

                        <Burger
                            show={burgermodalShow}
                            onHide={() => setBurgerModalShow(false)}
                        />
                    </Card.Body>
                </Card>
            </div>
            <div className="pasta-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={pastaimg} className="menuimg"/>
                    <Card.Body>
                        <Card.Title>Pasta</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setPastaModalShow(true)}>
                            Pasta Menu
                        </Button>

                        <Pasta
                            show={pastamodalShow}
                            onHide={() => setPastaModalShow(false)}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

export default FoodCard;