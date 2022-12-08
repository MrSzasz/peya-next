import styles from './GoToTop.module.scss'

const GoToTop = () => {
  return (
    <a href='#nav' className={styles.goToTop}>
        <img src="/icons/footer/Arrow.svg" alt="Ir arriba" />
    </a>
  )
}

export default GoToTop