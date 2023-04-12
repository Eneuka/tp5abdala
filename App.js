import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(() => {
    return Number(localStorage.getItem('contador')) || 0;
  });

  const aumentar = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
    localStorage.setItem('contador', nuevoContador);
  };

  const disminuir = () => {
    const nuevoContador = contador - 1;
    setContador(nuevoContador);
    localStorage.setItem('contador', nuevoContador);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
}

export default Contador;