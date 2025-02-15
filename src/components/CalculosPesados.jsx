import { useMemo, useState } from "react"





export const CalculosPesados = () => {

    const [listanumeros, setListanumeros] = useState([1, 2, 3, 4, 5])
    const [show, setShow] = useState(true)

    const getCalculo = (listanumeros) => useMemo(()=>{
        console.log('Calculando')
        return listanumeros.reduce((a,b)=> a*b,1)
    },[listanumeros])

    const agregarNumero = ()=>{
        setListanumeros([...listanumeros,listanumeros[listanumeros.length-1]+1])
        console.log(listanumeros)
    }

    return (
        <>
            <h2>Calculo: </h2>
            <p>{getCalculo(listanumeros)}</p>

            <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'Show': 'Hide'}</button>
            <button className="btn btn-primary" onClick={()=> agregarNumero()}>Agregar numero</button>
        </>

    )
}
