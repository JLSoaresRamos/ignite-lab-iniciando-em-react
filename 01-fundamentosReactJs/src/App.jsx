import { useState } from 'react'
import { Post } from "./components/Post"
import { Header } from './components/Header';

import "./global.css"
import styles from "./App.module.css";
import { Sidebar } from './components/Sidebar';
import { ProjectorScreen } from 'phosphor-react';


const posts = [
  {
    id:1,
    author: {
      avatarUrl:"https://github.com/JLramosSoares.png",
      name:"João Lucas S. Ramos",
      role: "WebDeveloper"
    },
    content: [
        {type:'paragraph', content:'Fala galeraa 👋'},
        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'},      
        {type:'link', content:'#novoprojeto'},      
        {type:'link', content:'#nlw'},      
        {type:'link', content:'#rocketseat'},      
    ],
    publishAt: new Date('2022-10-07 14:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl:"https://github.com/maykbrito.png",
      name:"Mayk Brito",
      role: "Professor"
    },
    content: [
        {type:'paragraph', content:'Fala galeraa 👋'},
        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'},      
        {type:'link', content:'#novoprojeto'},      
        {type:'link', content:'#nlw'},      
        {type:'link', content:'#rocketseat'},      
    ],
    publishAt: new Date('2022-10-07 12:30:00')
  }
]

export function App(props) {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}


