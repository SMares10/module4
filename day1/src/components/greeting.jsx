import { useState } from "react"


export default function Greeting({ name }) {

    const [isHello, setIsHello] = useState(true)
    const [test, setTest] = useState("This is a test")

  return (
      <>
      
        {isHello ? `Hello ${name}` : `Goodbye ${name}`}
        <button onClick = {() => setIsHello(!isHello)}>Update Hello</button>
      
      </>

  )
}