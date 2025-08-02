
import Button from "../Button/Button"


export default function ProjectsCard (props) {
  function handleButton () {
    alert("2")
  }
  return (
    <section className="">
    <ul className="">
        <li className="">
        <img
            className=""
            src={props.image}
            alt={props.title}
            loading="lazy"
        />
        <h3 className="">{props.title} — {props.squar} м² — {props.year}</h3>
        <Button 
        text="Подробнее"
        onClick={handleButton}
        />
        </li>
    </ul>
    </section>

  )
}