import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'


/*Anotação de valores que variam na aplicação.*/ 
//author:{avatarUrl: "", name:"", role:""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:"https://pbs.twimg.com/profile_images/1709369203151536129/ID8NqC4a_400x400.jpg",
      name: "Cleiton Barros",
      role: "Software Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'} ,         
    ],
    publishedAt: new Date('2024-04-28 11:26:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/51779470?v=4",
      name: "Elen Cristina",
      role: "Software Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'} ,         
    ],
    publishedAt: new Date('2024-04-24 11:26:00'),
  },
]

//Iteração
export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
             {posts.map(
              (post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
             }
             )}
          </main>
      </div>
    </div>
  )
}

