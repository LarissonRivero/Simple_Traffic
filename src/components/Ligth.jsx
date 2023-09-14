import { useEffect, useState } from "react";//Importacion de los hooks useEffect y useState

function Light() {
    const [colorRed, setColorRed] = useState('off_Red'); //Estado Inicial del semáforo (Apagado) ==> colorRed (falso) llama al estilo CSS off_Red
    const [colorYellow, setColorYellow] = useState('off_Yellow');
    const [colorGreen, setColorGreen] = useState('off_Green');
    const [newColor, setNewColor] = useState(false);//Estado inicial del nuevo color, que se activa cuando se presiona el botón (newColor = false)
    const [colorPurple, setColorPurple] = useState('off_Purple');//Estado inicial del nuevo color, que se activa cuando se presiona el botón (colorPurple = false)
    const [alert, setAlert] = useState(false);// alerta que se activa cuando se presiona el botón (alert = false)

  const handleClick_Red = () => {// Funcion que se activa al momento de presionar el color respectivo y cambia el estado del semáforo a encendido, pasa el estado de colorRed de true a false y  setColorRed de false a true y llama al estilo CSS on_Red
    setColorRed('on_Red');
  };

  const handleClick_Yellow = () => {
    setColorYellow('on_Yellow');
  };

  const handleClick_Green = () => {
    setColorGreen('on_Green');
  };

  const handleClick_Purple = () => {
    setColorGreen('on_Purple');
  };

  const handleClick = () => {//Funcion del Boton, al presionarlo cambia los estados de setAlert y setNewColor de false a true, activando el nuevo color y la alerta.
    setAlert(true);
    setNewColor(true);
  };

  useEffect(() => {//Vuelve a colocar los valores de los estados en falso, apagando el semáforo y el nuevo color, y desactivando la alerta. se llama la funcion setInterval para que se ejecute pasado 3 segundos
    const interval = setInterval(() => {
      setColorRed('off_Red');
      setColorYellow('off_Yellow');
      setColorGreen('off_Green');
      setColorPurple('off_Purple');
      setNewColor(false);
      setAlert(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [setColorRed, setColorYellow, setColorGreen, setColorPurple, setAlert]);//Se llama a los estados que se van a utilizar en el useEffect

  return (
    <>
      <div className="traficc">
        <h1>Traffic Light</h1>
        <div className="Container">
          <div className={colorRed} onClick={handleClick_Red}></div> {/*Se llama a la funcion que se activa al presionar el color respectivo*/}
          <div className={colorYellow} onClick={handleClick_Yellow}></div>
          <div className={colorGreen} onClick={handleClick_Green}></div>
          {newColor ? <div className={colorPurple} onClick={handleClick_Purple}></div> : null}
        </div>
        <button className="button" onClick={handleClick}>Cambiar Color</button>
        {alert ? <div className="text">Tu semáforo ahora tiene un nuevo color</div> : null}{/*Se llama a la alerta que se activa al presionar el botón, se utiliza un operador ternario, para comprobar el estado*/}
      </div>
    </>
  );
}

export default Light;

