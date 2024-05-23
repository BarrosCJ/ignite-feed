import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    
    
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1709369203151536129/ID8NqC4a_400x400.jpg" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cleiton Barros</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2024-04-22 13:50:38'>Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        
        </div>

    )
}