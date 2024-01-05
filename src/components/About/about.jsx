// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"


const about = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre mim</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/meGabriel.jpg")} alt="Me sitting with a computer" />
                <p className={styles.text}>
                Sou um apaixonado desenvolvedor Front-end de 24 anos, baseado no vibrante cenário tecnológico do Brasil. Com um olhar focado no futuro, estou em busca constante de aprimorar minhas habilidades e criar experiências digitais incríveis. A cada linha de código, busco não apenas construir interfaces visualmente atraentes, mas também proporcionar uma navegação intuitiva e envolvente para os usuários. Estou comprometido em acompanhar as últimas tendências do desenvolvimento web, garantindo que meus projetos estejam sempre alinhados com as melhores práticas da indústria. Com uma mente curiosa e inovadora, estou ansioso para contribuir para o crescimento da tecnologia no Brasil e além, sempre empenhado em transformar ideias em realidade por meio do poder do código.
                </p>
        </div>

      </div>
    </section>
  )
}

export default about
