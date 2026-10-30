function EmpHome(){
     let currentuser=JSON.parse(localStorage.getItem("currentuser"));
    return(<div>
        <h1>Welcom {currentuser.name}</h1>
    </div>)
}
export default EmpHome