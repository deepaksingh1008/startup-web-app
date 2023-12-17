import React from 'react'

const CardItem = ({ item, setPopUp }) => {

    return (
        <div className="popup" >
            <div className="popup-content">
                <h2>Startup Name-{item.StartupName}</h2>
                {/* Include other details from the startup object */}
                <h4>Date: {item.Date}</h4>
                <p>IndustryVertical: {item.IndustryVertical}</p>
                <p>SubVertical:{item.SubVertical}</p>
                <p>CityLocation:{item.CityLocation}</p>
                <p>InvestorsName:{item.InvestorsName}</p>
                <p>InvestmentType:{item.InvestmentType}</p>
                <p>AmountInUSD:${item.AmountInUSD ? item.AmountInUSD : '0'}</p>
                {/* Add more details as needed */}
                <button className='btn' onClick={() => setPopUp(false)}>Close</button>
            </div>
        </div>
    )
}

export default CardItem