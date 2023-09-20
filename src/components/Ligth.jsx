import React, { useEffect, useState } from "react";

//Estado Inicial del semáforo (Apagado) ==> setColor (funcion que cambia el estado a on_Color) llama al estilo CSS correspondiente
function Light() {
  const [colorRed, setColorRed] = useState("off_Red");
  const [colorYellow, setColorYellow] = useState("off_Yellow");
  const [colorGreen, setColorGreen] = useState("off_Green");
  const [colorPurple, setColorPurple] = useState('off_Purple');
  const [newColor, setNewColor] = useState(false);
  const [alert, setAlert] = useState(false);

  // Funciones que modifica el estado de los colores, al presionarlos cambian de OFF ha ON, y posterior se condiciona el presionado de otro boton para cambiar el estado del que esta encencido ha apagado
  const handleClick_Red = () => {
    if (colorRed === "on_Red") {
      setColorRed("off_Red");
    } else {
      setColorRed("on_Red");
      setColorYellow("off_Yellow");
      setColorGreen("off_Green");
      setNewColor(false);
    }
  };

  const handleClick_Yellow = () => {
    if (colorYellow === "on_Yellow") {
      setColorYellow("off_Yellow");
    } else {
      setColorYellow("on_Yellow");
      setColorRed("off_Red");
      setColorGreen("off_Green");
      setNewColor(false);
    }
  };

  const handleClick_Green = () => {
    if (colorGreen === "on_Green") {
      setColorGreen("off_Green");
    } else {
      setColorGreen("on_Green");
      setColorRed("off_Red");
      setColorYellow("off_Yellow");
      setNewColor(false);
    }
  };

  const handleClick_Purple = () => {
      if (colorPurple === "on_Purple") {
        setColorPurple("off_Purple");
      } else {
        setColorPurple("on_Purple");
      }
  };

  const handleClick = () => {
    setAlert(true);
    setNewColor(true);
    setColorRed("off_Red");
    setColorYellow("off_Yellow");
    setColorGreen("off_Green");
    setColorPurple("off_Purple");
  };

  //Con la funcion useEffect, volvemos despues de 3 segundos a renderizar el componente alert, para que pase de true a False, solo se va activara cuando el Componente setAlert cambie.
  useEffect(() => {
    const interval = setInterval(() => {
      setAlert(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [setAlert]);//Se llama a los estados que se van a utilizar en el useEffect

  return (
    <>
      <div className="traficc">
        <h1>Traffic Light</h1>
        <div className="Container">
          <div className={colorRed} onClick={handleClick_Red}></div>
          <div className={colorYellow} onClick={handleClick_Yellow}></div>
          <div className={colorGreen} onClick={handleClick_Green}></div>
          {newColor ? (
            <div className={colorPurple} onClick={handleClick_Purple}></div>
          ) : null}
        </div>
        <button className="button" onClick={handleClick}>
          Cambiar Color
        </button>
        {/*Se llama a la alerta que se activa al presionar el botón, se utiliza un operador ternario, para comprobar el estado*/}
        {alert ? (
          <div className="text">Tu semáforo ahora tiene un nuevo color</div>
        ) : null}
      </div>
    </>
  );
}

export default Light;


