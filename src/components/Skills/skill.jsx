import  { useState } from 'react'
import styles from "./skill.module.css" 
import { getImageUrl } from '../../utils'

const skill = () => {
    const [highlightedSkill, setHighlightedSkill] = useState(null);
        const skillMessages = {
            HTML: 'HTML, que significa HyperText Markup Language, é como o esqueleto da web. Imagine-o como a estrutura de uma casa. Com suas tags, o HTML marca e organiza os elementos, definindo quem é o quê numa página. Ele é fundamental para criar a base sobre a qual as informações são exibidas, tornando a web funcional e estruturada.',
            CSS: 'CSS, ou Cascading Style Sheets, é o estilista digital. Quando o HTML fornece a estrutura, o CSS entra em cena para dar estilo à página. Cores, fontes, layouts - tudo está sob seu comando. É a maquiagem que transforma a web em algo visualmente atraente e coeso.',
            Javascript: 'JavaScript é como o artista que dá vida ao palco web. Esta linguagem de programação dinâmica permite que elementos interajam e se movam na página. Responsável por tornar as páginas web mais do que apenas estáticas, o JavaScript adiciona dinamismo, tornando a experiência do usuário mais envolvente.',
            Bootstrap: 'Bootstrap é como um arquiteto que já desenhou o esboço da casa. É um framework front-end que oferece uma variedade de componentes pré-construídos e um sistema de grid flexível. Com Bootstrap, desenvolvedores podem construir interfaces responsivas e elegantes de forma rápida, economizando tempo e esforço.',
            Gulp: 'Gulp é como um assistente pessoal eficiente para desenvolvedores web. Esta ferramenta de automação de tarefas simplifica processos, como minificação de arquivos e recarregamento automático de páginas. Com Gulp, o desenvolvedor economiza tempo e energia, concentrando-se no que realmente importa.',
            Less: 'Less é como o primo mais esperto do CSS. Esta linguagem de estilo dinâmica estende as capacidades do CSS, introduzindo variáveis, funções e aninhamento. Com Less, a escrita e manutenção de estilos se tornam mais intuitivas, proporcionando uma estilização mais eficiente.',
            Sass: 'SASS, ou Syntactically Awesome Stylesheets, é como o estilista inovador do mundo web. Estendendo as funcionalidades do CSS, SASS traz recursos poderosos como variáveis, aninhamento e mixins. Ele oferece uma abordagem modular para a estilização, tornando o desenvolvimento de estilos mais flexível e avançado.',
            Grunt: 'Grunt é como o operário incansável da automação. Esta ferramenta de automação de tarefas simplifica processos repetitivos, como minificação de arquivos e execução de testes. Grunt é o aliado que mantém o ritmo constante do desenvolvimento, garantindo eficiência e consistência.',
            React: 'React é como o mestre da construção de interfaces modernas. Esta biblioteca JavaScript revoluciona a criação de aplicações web ao utilizar componentes reutilizáveis. Com React, desenvolvedores podem construir interfaces interativas e responsivas de maneira eficaz e eficiente',
            Styled: 'Styled-components é como ter um estilista integrado ao código. Esta biblioteca para React permite que estilos sejam definidos diretamente nos componentes, garantindo uma abordagem modular e coesa. Com styled-components, a estilização dos elementos se torna mais intuitiva e organizada.',
            Vue: 'Vue.js é como a sinfonia do desenvolvedor web. Este framework progressivo oferece simplicidade e flexibilidade na construção de interfaces de usuário. Vue.js facilita o desenvolvimento de aplicações web escaláveis e eficientes, proporcionando uma experiência de desenvolvimento harmoniosa.',
            Typescript: 'TypeScript é como o guardião do código. Adicionando recursos de tipagem estática ao JavaScript, TypeScript ajuda a evitar erros durante o desenvolvimento. É como ter um escudo protetor para o código, garantindo maior confiabilidade e manutenção em projetos web.'
        };

  return (
    <section className={styles.skill}>
        <div className={styles.container}>

            <h2 className={styles.title}>Conhecimentos</h2>
            <div className={styles.content}>
                <p className={styles.text}>{highlightedSkill
                ? skillMessages[highlightedSkill]
                : '*Passe o cursor do mouse no card para visualizar o conteúdo'}</p>
                <div className={styles.skillContainer}>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("HTML")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/html.svg")} 
                            alt="HTML logo" />
                    </article>

                    <article 
                    className={styles.skillCard}
                    onMouseEnter={() => setHighlightedSkill("CSS")}
                    onMouseLeave={() => setHighlightedSkill(null)}>
                        <img className={styles.skillCardImage} 
                        src={getImageUrl("skills/css.svg")}
                        alt="CSS logo" />
                    </article>
                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Javascript")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/javascript.svg")} 
                            alt="JavaScript logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Bootstrap")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/bootstrap.svg")} 
                            alt="Bootstrap logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Gulp")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/gulp.svg")} 
                            alt="Gulp logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Less")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/less.svg")} 
                            alt="Less logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Sass")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/sass.svg")} 
                            alt="SASS logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Grunt")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/grunt.svg")} 
                            alt="Grunt logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("React")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/react.svg")} 
                            alt="React logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Styled")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/styled-components.svg")} 
                            alt="styled-components logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Vue")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/vuejs.svg")} 
                            alt="VueJs logo" />
                    </article>

                    <article 
                        className={styles.skillCard}
                        onMouseEnter={() => setHighlightedSkill("Typescript")}
                        onMouseLeave={() => setHighlightedSkill(null)}>
                            <img className={styles.skillCardImage} 
                            src={getImageUrl("skills/typescript.svg")} 
                            alt="TypeScript logo" />
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skill
