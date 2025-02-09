export const ContadorComponent = () => {
  return (
    <>
    <h1>Contador: 0</h1>
    <button className="btn btn-primary" onClick={()=> incrementar()}>-1</button>
    <button className="btn btn-danger" onClick={()=> resetear()}>Reset</button>
    <button className="btn btn-primary" onClick={()=> decrementar()}>+1</button>
    </>
)
}
