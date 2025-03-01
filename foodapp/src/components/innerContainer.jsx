import styles from './innercontain.module.css';

export default function InnerContainer({children}) {
    return <div className = {styles.innerContainer}>{children}</div>
} 