import { useFetch } from "../hooks/useFetch"

export const UsuariosComponent = () => {
  const {data,isLoading,errors} = useFetch('https://jsonplaceholder.typicode.com/users')
  
  return (
    <>
    <h1>Lista de usuarios</h1>
    {isLoading ? <h4>Cargando...</h4>
    : errors ? <p>Ha aocurrido un error: {errors} </p>
    : <table className="table table-dark">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">WEBISTE</th>
      </tr>
    </thead>
    <tbody>

    {data.map(user =>{
      return(<tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>)
    })}
      
    </tbody>
  </table>
    }
    </>
  )
}
