import { useState, useEffect } from "react";

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API
    setTimeout(() => {
      setHorarios([
        { ruta: "Línea 1", llegada: "12:30 PM" },
        { ruta: "Línea 2", llegada: "12:45 PM" },
        { ruta: "Línea 3", llegada: "1:00 PM" },
      ]);
    }, 2000); // Simula un retraso de 2 segundos como si cargara datos de una API
  }, []);

  return (
    <div>
     <h2 className="text-blue-500 text-3xl font-bold text-center">
  Horarios en tiempo real </h2>


      {horarios.length === 0 ? (
        <p>Cargando horarios...</p>
      ) : (
        <ul>
          {horarios.map((h, index) => (
            <li key={index}>
              {h.ruta} - Próxima llegada: {h.llegada}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Horarios;
