const Carcard = ({ data, carid }) => {
    return (
        <div style={{ display: 'flex' }}>
            {data[carid].map((data) => (
                <div className="carcard">
                    <div>
                        <img src={data.img} alt=""></img>
                    </div>
                    <div>
                        <table style={{ marginRight: '30px' }}>
                            <tr>
                                <th><span style={{ fontSize: '25px', fontWeight: '700', fontFamily: 'poppins' }}><i class="fa-solid fa-indian-rupee-sign"></i>{data.price}</span>&nbsp;&nbsp;/rent per day</th>
                            </tr>
                            <table>
                                <tr>
                                    <td className="firsttab">Model</td>
                                    <td className="secondtab">{data.model}</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">Mark</td>
                                    <td className="secondtab">{data.mark}</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">Year</td>
                                    <td className="secondtab">{data.year}</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">Doors</td>
                                    <td className="secondtab">4/5</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">AC</td>
                                    <td className="secondtab">Yes</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">Transmission</td>
                                    <td className="secondtab">{data.transmission}</td>
                                </tr>
                                <tr>
                                    <td className="firsttab">Fuel</td>
                                    <td className="secondtab">{data.fuel}</td>
                                </tr>
                            </table>
                            <button className='reservebtn'>RESERVE NOW</button>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Carcard