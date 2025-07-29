import projectsImg1 from "../../assets/projectsImg1.png"
import Button from "../Button/Button"


export default function ProjectsCard () {
  return (
    <section className="">
    <ul className="">
        <li className="">
        <img
            className=""
            src={projectsImg1}
            alt="Изображение"
            loading="lazy"
        />
        <h3 className="">ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</h3>
        <Button />
        </li>
    </ul>
    </section>

  )
}