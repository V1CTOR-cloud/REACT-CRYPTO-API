import React from "react";



const CoinRow = ({moneda, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={moneda.image} alt="coin.name" style={{width: '4%'}} className="img-fluid me-4" />
                <span>
                {moneda.name} 
                </span>
                <span className="ms-3 text-muted text-uppercase">
                    {moneda.symbol}
                </span>
            </td>
            <td className={
                moneda.price_change_percentage_24h < 0 ? "text-success" : "text-danger"
                }>
                {moneda.current_price + "$"}
            </td>
            <td>
                {moneda.price_change_percentage_24h + "%"}
            </td>
            <td>
                {moneda.total_volume}
            </td>
            <td>
            <i class="far fa-heart"></i>
            </td>
        </tr>
    )
}

export default CoinRow;