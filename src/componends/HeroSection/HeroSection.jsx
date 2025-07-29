import heroImg1 from "../../assets/heroImg1.png"
import Heading from "../Heading/Header"
export default function HeroSection () {
  return (
    <section classname="">
    <div classname="">
        <Heading />
        <div classname="">
            <img src={heroImg1} alt="img" />
            <p classname="">
                Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся
                разработкой и реализацией дизайн-проектов
            </p>
        </div>
    </div>
    </section>
  )
}