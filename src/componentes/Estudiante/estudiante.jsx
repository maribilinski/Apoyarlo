
const Estudiante =(props) =>{
    return(
        <>
            <h2>Nombre: {props.firstname}</h2>
            <h2>Apellido: {props.lastname}</h2>
            <p>Edad: {props.age}</p>
            <p>Color de cabello: {props.hairColor}</p>
        </>
    )
}

export default Estudiante;