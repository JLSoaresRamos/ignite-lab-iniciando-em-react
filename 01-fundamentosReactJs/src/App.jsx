import { useState } from 'react'
import { Post } from "./components/Post"
import { Header } from './components/Header';

import "./global.css"
import styles from "./App.module.css";
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author = "João Lucas"
            content = "Olha que legal meu novo post"
          />
          <Post
            author = "Giovana Oliveira"
            content = "Sou uma pessoa imagináriaaaaa"
          />
        </main>
      </div>
    </div>
  );
}


