import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.container}>
            <h2 className={styles.title}>Entre em contato</h2>
            <ul className={styles.contactList}>
                <li className={styles.contactItems}>
                    <a href="mailto:glacerdaar@gmail.com">
                        <img className='styles.contactImage' 
                            src={getImageUrl("contact/gmail.svg")} 
                            alt="Gmail icon" />
                    </a>
                    <p className={styles.description}>GMAIL</p>
                </li>
                <li className={styles.contactItems}>
                    <a href="https://linkedin.com/in/gabriel-lacerda-webdev">
                        <img className={styles.contactImage} 
                        src={getImageUrl("contact/linkedin.svg")}
                        alt="Linkedin icon" />
                    </a>
                    <p className={styles.description}>Linkedin</p>
                </li>
                <li className={styles.contactItems}>
                    <a href="https://wa.me/5521969480726">
                        <img className={styles.contactImage} 
                        src={getImageUrl("contact/whatsapp.svg")} 
                        alt="Whatsapp icon" />
                    </a>
                    <p className={styles.description}>Whatsapp</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact
