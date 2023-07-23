const Carcard=({data,carid})=>{
    return(
        <div>
            {data[carid].map((data)=>(
                <div>
                    <div>
                        <img src={data.img} alt=""></img>
                    </div>
                    <div>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Carcard