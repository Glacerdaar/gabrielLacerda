import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.Hero}>
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.description}>Olá, eu sou o</p>
                <h1 className={styles.title}>Gabriel <span>Lacerda</span></h1>
                <p className={styles.description}>um desenvolvedor Front-end </p>
                <a className={styles.contactBtn} href="mailto:glacerdaar@gmail.com">Entre em contato</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/ilustracao.png")} alt="Illustration image" />
        </div>
            
    </section>
  )
}

export default Hero
