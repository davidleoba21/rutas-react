import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URL = 'http://127.0.0.1:5500/api/clientes/'

export const CompClienteMostrar = () => {
    const [clientes, setCliente] = useState([])
    useEffect(() => {
        getClientes()
    },[])

    //FUNCION MOSTRAR CLIENTES
    const getClientes = async () => {
        const datos = await axios.get(URL)
        setCliente(datos.data)

    } 

    //FUNCION ELIMINAR CLIENTES
    const eliminarCliente = async (id) =>{
        await axios.delete(`${URL}${id}`)
        getClientes()
        // eslint-disable-next-line
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2 className='mt-4 mb-4'>Clientes</h2>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Editar</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td><Link to={`/clientes/actualizar/${cliente._id}`} className='btn btn-success mt-2 mb-2'><i className="fa-solid fa-user-pen"></i></Link></td>
                                    <td><button onClick={() => eliminarCliente(cliente._id)} className='btn btn-danger mt-2 mb-2'><i className="fa-solid fa-trash"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to = '/clientes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                </div>
            </div>
        </div>
    )
}