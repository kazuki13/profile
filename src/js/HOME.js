import '../css/heder.css';
import '../css/HOME.css';
import murayama from './image/murayama.png';
import CPlus from './image/logo_c++.png';
import python from './image/logo_python.png';
import js from './image/logo_JavaScript.png';
import django from './image/logo_django.png';
import Flask from './image/logo_Flask.png';
import vue from './image/logo_vuejs.png';
import React from './image/logo_React.png';

function App() {
  return (

    <div class = "root">
      <header class="header">
        <h1 class="header-logo"><a href="/">村山一輝</a></h1>
        <nav class="header-nav">
          <ul class="header-list">
            <li class="header-item"><a href="/">HOME</a></li>
            <li class="header-item"><a href="/Productions">制作物</a></li>
          </ul>
        </nav>
      </header>

      <main class = "test">
        <div class = "background">
          <div class="profile">
            <figure class="image">
              <img src= {murayama} alt="test" />
            </figure>
            <div class="text">
              <p class="title">
                村山一輝<br/>
                出身地：東京<br/>
                趣味：チーム開発・ゲーム
              </p>
            </div>
          </div>
          <div class="skill_skill">
            <h1 class="skill">スキル</h1>
          </div>
          <div class="skill_title">
            <p>言語</p>
          </div>
          <div class="logo_language">
            <img class="logo_language" src= {python} alt="test" />
            <img class="logo_language" src= {js} alt="test" />
            <img class="logo_language" src= {CPlus} alt="test" />
          </div>
          <div class="skill_title">
            <p>フレームワーク</p>
          </div>
          <div class="logo_language">
            <img src= {React} alt="test" />
            <img src= {vue} alt="test" />
            <img src= {django} alt="test" />
            <img src= {Flask} alt="test" />
          </div>
        </div>
      </main>

      <footer class="footer">
        ポートフォリオ<br/>
        ver: 1.0.0<br/>
        （2023/05/14更新）
      </footer>
    </div>
  );
}

export default App;