import React from "react";
import {Link} from "react-router-dom"


const Productos = ({
  // handleSubmit,
  // handleChange,
  borrarElemento,
  editar,
  items,
}) => {
  return (
    <div>

<Link to="/crear-productos">
   <button>Crear Nuevos Productos</button>
</Link>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}

              <button onClick={() => borrarElemento(item.id)}>Borrar</button>
              <button onClick={() => editar(item.id)}>Actualizar</button>
            </li>
          );
        })}
      </ul>

     
    </div>
  );
};

export default Productos;
