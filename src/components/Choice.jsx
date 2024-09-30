

function Choice(props) {
    console.log(props.fun);
    return(
        <div  onClick={()=>props.fun(props.ob)} style={{width:"200px",height:"120px",backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${props.img})` ,justifyContent:"center",
        alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} className="img ch">
          <h3>{props.title}</h3>
       
        </div>
)
}

export default Choice