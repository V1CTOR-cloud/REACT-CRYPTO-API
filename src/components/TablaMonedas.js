import React from "react";
import CoinRow from "./CoinRow";

const titulos = ['#', 'Moneda', 'Precio', 'Precio cambio', '24h Volumen', ' ']

const TablaMonedas = ({monedas, buscar}) => {

    const monedasFiltradas = monedas.filter(
    (moneda) =>
     moneda.name.toLowerCase().includes(buscar.toLowerCase()) |
      moneda.symbol.toLowerCase().includes(buscar.toLowerCase())
    )
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {
                        titulos.map(titulo => (
                            <td>{titulo}</td>
                        )) 
                    }
                </tr>
            </thead>
            <tbody>
                {monedasFiltradas.map((moneda, index) =>(
                    <CoinRow moneda={moneda} key={index} index={index +1}/>
                ))}
            </tbody>
        </table>
    )
}

export default TablaMonedas;