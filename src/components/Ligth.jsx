import { useState } from "react"

function Light (){
    const [colorRed,setColorRed] = useState('off_Red')
    const [colorYellow,setColorYellow] = useState('off_Yellow')
    const [colorGreen,setColorGreen] = useState('off_Green')

    const handleClick_Red= () => {
        setColorRed('on_Red');      
      };

    const handleClick_Yellow= () => {
        setColorYellow('on_Yellow');
        };

    const handleClick_Green= () => {
        setColorGreen('on_Green');
        };

  return (
    <>
      <div className="Container">
        <div className={colorRed} onClick={handleClick_Red}></div>
        <div className={colorYellow} onClick={handleClick_Yellow}></div>
        <div className={colorGreen} onClick={handleClick_Green}></div>
      </div>
    </>
  )
}

export default Light
