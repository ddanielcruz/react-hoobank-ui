import styles, { layout } from '../styles.js'
import { card } from '../assets'
import Button from './Button.jsx'

export default function CardDeal() {
  return (
    <article className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam eveniet consectetur
          ipsa dignissimos commodi?
        </p>
        <Button styles="mt-10">Get Started</Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full object-contain" />
      </div>
    </article>
  )
}
