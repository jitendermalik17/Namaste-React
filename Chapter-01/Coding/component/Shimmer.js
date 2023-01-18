const Shimmer = () =>{
return (
    <>
        <div className="shimmer">
           {Array(15).fill("").map((e,index) =>(
            <div className="shimmer__card" key={index}>
                <div className="shimmer__img"></div>
                <div className="shimmer-one"></div>
                <div className="shimmer-two"></div>
                <div className="shimmer-one"></div>
                <div className="shimmer-two"></div>
                <div className="shimmer-one"></div>
                <div className="shimmer-two"></div>
            </div>
           ))} 
        </div>
        </>
)

}
export default Shimmer;