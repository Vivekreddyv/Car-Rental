const Carcard=({data,carid})=>{
    return(
        <div style={{display:'flex'}}>
            {data[carid].map((data)=>(
                <div>
                    <div style={{width:'50px'}}>
                        <img style={{width:'50px'}} src={data.img} alt=""></img>
                    </div>
                    <div>
      <table>
        <thead>
          <tr>
            <th>{data.price}/rent per day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Model</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>{data.mark}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{data.year}</td>
          </tr>
          <tr>
            <td>Doors</td>
            <td>{data.doors}</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>{data.air}</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>{data.transmission}</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td>{data.fuel}</td>
          </tr>
        </tbody>
      </table>
      <button>RESERVE NOW</button>
    </div>
                    </div>
            ))}
        </div>
    )
}
export default Carcard