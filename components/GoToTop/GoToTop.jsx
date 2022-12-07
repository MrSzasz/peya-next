import styles from './GoToTop.module.scss'

const GoToTop = () => {
  return (
    <button className={styles.goToTop}>
        <img src="/icons/footer/Arrow.svg" alt="Ir arriba" />
    </button>
  )
}

export default GoToTop