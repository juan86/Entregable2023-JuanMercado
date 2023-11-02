import React, { useState } from "react";
import { Card } from './Card'
import '../styles/formStyles.css'

export const FormComponent = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNameChange = (event) => setName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrorName("");
        setErrorLastName("");
        setErrorEmail("");

        if (name.length < 3 || name.trim() !== name) {
            setErrorName("El nombre be tener al menos 3 caracteres y no debe contener espacios en blanco al inicio.");
        }

        if (lastName.length < 6) {
          setErrorLastName("El apellido campo debe tener al menos 6 caracteres.");
        }
        if (!validateEmail(email)) {
          setErrorEmail("El correo electrónico no es válido.");
        }

        if (!errorName && !errorLastName && !errorEmail) {
            setIsSubmitted(true);
          }
    };

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <input 
                        type="text" 
                        value={ name } 
                        onChange={handleNameChange} 
                        placeholder="Nombre"
                    />
                    {errorName && <p className="error-message">{ errorName }</p>}
                </div>
                <div>
                    <input 
                        type="text" 
                        value={ lastName } 
                        onChange={handleLastNameChange} 
                        placeholder="Apellido"
                    />
                    {errorLastName && <p className="error-message">{ errorLastName }</p>}
                </div>
                <div>
                    <input 
                        type="text" 
                        value={ email } 
                        onChange={handleEmailChange} 
                        placeholder="Correo Electrónico"
                    />
                    {errorEmail && <p className="error-message">{ errorEmail }</p>}
                </div>
              <button type="submit">Enviar</button>
            </form>
            {isSubmitted && !errorName && !errorLastName && !errorEmail && (
                <div className="card">
                    <Card data={{ name, lastName, email }} />
                </div>
            )}
        </div>
    );
}