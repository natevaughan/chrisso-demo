import * as React from "react"

interface MyGreetingProps {
  name: string
}

const MyGreeting = ({name}) => {
  return (
    <div>Hello, {name}</div>
  )
}

export default MyGreeting;