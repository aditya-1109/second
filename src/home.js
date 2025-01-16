import { useState } from "react"
import "./style/home.css"

const Home = () => {

    const cards = [{ logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" }, { logo: "./images/studdsLogo.JPG", name: "STUDDS", detail: "Auto Parts", price: "735.00" }, { logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" }, { logo: "./images/studdsLogo.JPG", name: "STUDDS", detail: "Auto Parts", price: "735.00" }, { logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" }, { logo: "./images/studdsLogo.JPG", name: "STUDDS", detail: "Auto Parts", price: "735.00" }, { logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" }, { logo: "./images/studdsLogo.JPG", name: "STUDDS", detail: "Auto Parts", price: "735.00" }, { logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" }, { logo: "./images/studdsLogo.JPG", name: "STUDDS", detail: "Auto Parts", price: "735.00" }]
    const [cardd, setCard]= useState({ logo: "./images/onixLogo.JPG", name: "Onix Renewable", detail: "Construction & Engineering", price: "26875.00" });


    const handlecard=(name)=>{
        cards.forEach((card)=>{
            if(card.name=== name){
                setCard(card);
            }
        })
    }
    
    return (
        <>
            <div className="home">

                <div className="advertisement">
                    <img src="" />
                    {cardd && (
                        <div className="poster-card-info">
                            <p className="poster-card-name">{cardd.name}</p>
                            <p className="poster-card-detail">{cardd.detail}</p>
                            <p className="poster-card-price-head">Price</p>
                            <p className="poster-card-price">{cardd.price}</p>
                            <button className="button">Buy Now</button>
                        </div>
                    )}
                </div>

                <div className="cardSection">
                    <div className="cardContainerHeading">
                        Cards
                    </div>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div key={index} onMouseEnter={()=>handlecard(card.name)} onTouchStart={()=>handlecard(card.name)} className="singlecard">
                                <img src={card.logo} alt="logo" />
                                <h3>{card.name}</h3>
                                <p className="card-detail">{card.detail}</p>
                                <div className="price conainer">
                                    <p>price</p>
                                    <h4>{card.price}</h4>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="cardContainerHeading">
                        Cards
                    </div>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div onMouseEnter={()=>handlecard(card.name)} onTouchStart={()=>handlecard(card.name)} className="singlecard">
                                <img src={card.logo} alt="logo" />
                                <h3>{card.name}</h3>
                                <p className="card-detail">{card.detail}</p>
                                <div className="price conainer">
                                    <p>price</p>
                                    <h4>{card.price}</h4>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;