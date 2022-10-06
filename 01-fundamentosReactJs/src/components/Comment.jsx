import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/JLramosSoares.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Lucas S. Ramos</strong>
                            <time title="5 de Outubro ás 10:12h" dateTime="2022-05-10 10:12:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Adorei seu novo portifa Devon!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    );
}