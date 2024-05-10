import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URL = 'http://127.0.0.1:5500/api/clientes/'

export const CompClienteMod = () => {
    const[nombres, setNombres] = useState('')
    const[apellidos, setApellidos] = useState('')
    const[documento, setDocumento] = useState('')
    const[correo, setCorreo] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    //Funcion Guardar Cliente
    const actualizarCliente = async (e) => {
        e.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombres:nombres,
            apellidos:apellidos,
            documento:documento,
            correo:correo,
            telefono:telefono,
            direccion:direccion
        })
        navigate('/clientes')
    }
    
    useEffect(() => {
        getClientesById()
        // eslint-disable-next-line
    },[])

    const getClientesById = async () =>{
        const res = await axios.get(`${URL}${id}`)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)
        setDireccion(res.data.direccion)
    }

    return(
        <div className='container'>
            <h2>Actualizar Cliente {nombres} {apellidos}</h2>
            <form onSubmit={actualizarCliente} className='border border-primary p-3'>
                <div className="input-group">
                    <span className="input-group-text">Nombres y apellidos</span>
                    <input type="text" value={nombres} onChange= {(e) => setNombres(e.target.value)} aria-label="First name" className="form-control" required/>
                    <input type="text" value={apellidos} onChange= {(e) => setApellidos(e.target.value)} aria-label="Last name" className="form-control" required/>
                </div>
                <div className='row'>
                    <div className='mt-2 mb-3 col-md text-start'>
                        <label className='form-label'>Documento:</label>
                        <input value={documento} onChange= {(e) => setDocumento(e.target.value)} type='text' className='form-control' required/>
                    </div>
                    <div className='mt-2 mb-3 col-md text-start'>
                        <label className='form-label'>Correo:</label>
                        <input value={correo} onChange= {(e) => setCorreo(e.target.value)} type='email' className='form-control' required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='mb-3 col-md text-start'>
                        <label className='form-label'>Telefono:</label>
                        <input value={telefono} onChange= {(e) => setTelefono(e.target.value)} type='number' className='form-control' required/>
                    </div>
                    <div className='mb-3 col-md text-start'>
                        <label className='form-label'>Direccion:</label>
                        <input value={direccion} onChange= {(e) => setDireccion(e.target.value)} type='text' className='form-control' required/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}