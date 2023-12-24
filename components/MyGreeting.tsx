import * as React from "react"
import MyAlert from "./MyAlert";

interface MyGreetingProps {
  name: string
}

const MyGreeting = ({name}: MyGreetingProps) => {
  return (
    <div>
      <div>Hello, {name}</div>
      <MyAlert />
    </div>
  )
}

export default MyGreeting;
