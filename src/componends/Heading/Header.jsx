function Heading(props) {
  if (props.level === "h1") {
    return <h1>{props.text}</h1>
  }
  return <h2>{props.text}</h2>
}

export default Heading;