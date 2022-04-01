import pen from "./pen.svg"
const profile = () => {
  return (
   
    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width: "72%", height: "300px" }}>
    <h2>Personal details</h2>
    <div style={{borderBottom: "2px solid green", height: "30px", width: "80%", margin: "auto", display: "flex"}}>
        <div style={{width: "75%", marginLeft: "5%"}}>Name</div>
        <div className="name" style={{width: "10%", border: "1px", height: "auto"}}> vinit</div>
        <div style={{width: "5%", border: "1px", height: "auto"}}><img src={pen} style={{ height: "12px", width: "12px" }}></div>
    </div>
    <div style={{borderBottom: "2px solid green", height: "30px", width: "80%", margin: "auto", display: "flex"}}>
        <div style={{width: "75%", marginLeft: "5%"}}>Mobile No</div>
        <div className="name" style={{width: "10%", border: "1px", height: "auto"}}> vinit</div>
        <div style={{width: "5%", border: "1px", height: "auto"}}><img src={pen} style={{ height: "12px", width: "12px" }}></div>
    </div>
    <div style={{borderBottom: "2px solid green", height: "30px", width: "80%", margin: "auto", display: "flex"}}>
        <div style={{width: "75%", marginLeft: "5%"}}>Email</div>
        <div className="name" style={{width: "10%", border: "1px", height: "auto"}}> vinit</div>
        <div style={{width: "5%", border: "1px", height: "auto"}}><img src={pen} style={{ height: "12px", width: "12px" }}></div>
    </div>
    
    </div>
  )
}

export default profile;