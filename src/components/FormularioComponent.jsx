import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {

    const initialForm= { 
            username:'',
            email:'',
            password:''
    
    }

    const {formState,onInputChange} =useForm(initialForm)

    const {username,email,password}=formState

    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={onInputChange}
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                    >
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                    >
                </input>
            </div>
            <button
                type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
