import styles from"./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className = {styles.cover} 
                src="https://images.unsplash.com/photo-1530714457710-6bf1899c1d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" 
            />

            <div className={styles.profile}>
                <strong>João Lucas S. Ramos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size ={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}