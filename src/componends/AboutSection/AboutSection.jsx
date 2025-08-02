import Button from "../Button/Button"
import Counter from "../Counter/Counter"
import Heading from "../Heading/Header"
import { useState } from "react"

export default function AboutSection () {
  const COUNTER_STATE = 0
  const CONTER_NUMBER = 1
  const COUNTER_MAX_NUMBER = 5
  const COUNTER_MIN_NUMBER = -5
const [counter, setCounter] = useState(COUNTER_STATE)

  function handleButton () {
    setCounter(counter - CONTER_NUMBER)
  }
  function handleButton2 () {
    setCounter(counter + CONTER_NUMBER)
  }
  function isDangerFun () {
    return counter <= COUNTER_MIN_NUMBER || counter >= COUNTER_MAX_NUMBER
  }
  function isPlusBtnDisabled () {
    return counter === 5
  }
  function isMinusBtnDisabled () {
    return counter === -5
  }




  return (
    <section className="">
    <div className="">
        <Heading 
        text="О НАС"
        level="h2"
        />
        <p className="about__p">
            Студия основана в 2011 году. Полностью отдаемся проектированию и
            реализации интерьеров. К нам обращаются за уютом, индивидуальными
            решениями и практичностью. Находим конструктивные решения для каждого
            интерьера, вплоть до каждой детали — нацелены на результат.
        </p>
        <Counter 
        value={counter}
        isDanger={isDangerFun()}
        />
        <Button 
        text="-"
        onClick={handleButton}
        isDisabled={isMinusBtnDisabled()}
        />
        <Button 
        text="+"
        onClick={handleButton2}
        isDisabled={isPlusBtnDisabled()}
        />
    </div>
    </section>

  )
}