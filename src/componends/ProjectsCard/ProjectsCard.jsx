
import Button from "../Button/Button"


export default function ProjectsCard (props) {
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
        <Button />
        </li>
    </ul>
    </section>

  )
}