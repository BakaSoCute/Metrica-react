import heroImg1 from "../../assets/heroImg1.png"
import Heading from "../Heading/Header"
import "./HeroSection.css"
export default function HeroSection () {
  return (
    <section classname="">
      <div classname="">
          <Heading 
          text="Современные и стильные интерьеры для комфортной жизни"
          level="h1"
          classname="heading-h1"
          />
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