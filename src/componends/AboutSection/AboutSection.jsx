import Button from "../Button/Button"
import Heading from "../Heading/Header"

export default function AboutSection () {
  return (
    <section className="">
    <div className="">
        <Heading />
        <p className="about__p">
            Студия основана в 2011 году. Полностью отдаемся проектированию и
            реализации интерьеров. К нам обращаются за уютом, индивидуальными
            решениями и практичностью. Находим конструктивные решения для каждого
            интерьера, вплоть до каждой детали — нацелены на результат.
        </p>
        <Button />
    </div>
    </section>

  )
}