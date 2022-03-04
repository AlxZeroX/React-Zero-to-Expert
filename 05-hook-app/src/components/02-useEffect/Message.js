import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    
    console.log ('Componente Montado')
  
    return () => {
      console.log ('Componente Desmontado')
    }
  }, [])
  


  return (
    <div>

    <h3>Eres lo MAXIMO!</h3> 

    </div>
  )
}
