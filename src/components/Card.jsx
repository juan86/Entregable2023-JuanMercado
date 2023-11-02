import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Información Ingresada:</h2>
      <p>Nombre: {data.name}</p>
      <p>Apellido: {data.lastName}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};