import styles from '../styles.js'
import { arrowUp } from '../assets'

export default function GetStarted() {
  return (
    <a
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      href="#"
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full hover:opacity-95`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2">
            Get
          </p>
          <img src={arrowUp} alt="Arrow" className="w-6 h-6 object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">Started</p>
      </div>
    </a>
  )
}
