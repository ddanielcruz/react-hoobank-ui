import styles, { layout } from '../styles.js'
import { features } from '../constants'
import Button from './Button.jsx'

function FeatureCard({ icon, title, content, index }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card ${
        index !== features.length - 1 ? 'mb-6' : ''
      }`}
    >
      <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins text-dimWhite leading-[24px]">{content}</p>
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <article id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10">Get Started</Button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </article>
  )
}
