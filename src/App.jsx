import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from './components'

import styles from './styles.js'

export default function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </section>

      <section className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </section>
    </main>
  )
}
