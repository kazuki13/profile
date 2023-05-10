import '../css/heder.css';
import '../css/HOME.css';
import murayama from './image/murayama.png';

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
          <p>フロントエンド</p>
        </div>

        <div class="skill_detail">
              <div class="text_title">
                  <p class="skill_name">技術</p><br/>   
                  <hr class="hr1"/>
                  <p class="skill_name">vue.js</p><br/>    
                  <p class="skill_name">React</p><br/>
                  <p class="skill_name">mecab</p><br/>
              </div>
              <div class="text_anser">
                  <p class="skill_time">学習期間</p><br/> 
                  <hr class="hr1"/>
                  <p class="skill_time">7ヶ月</p><br/>
                  <p class="skill_time">半年</p><br/>   
                  <p class="skill_time">半年</p><br/>     
              </div>
              <div class="text_anser">
                  <p class="skill_time">活用した作品</p><br/> 
                  <hr class="hr1"/>
                  <p class="skill_time">E-gate</p><br/>
                  <p class="skill_time">ポートフォリオ</p><br/>
                  <p class="skill_time">忘れん坊</p><br/>       
              </div>              
      </div>
      <div class="skill_title">
          <p>バックエンド</p>
      </div>
      <div class="skill_detail">
              <div class="text_title">
                  <p class="skill_name">技術</p><br/>   
                  <hr class="hr1"/>
                  <p class="skill_name">django</p><br/>    
                  <p class="skill_name">Flask</p><br/>
              </div>
              <div class="text_anser">
                  <p class="skill_time">学習期間</p><br/> 
                  <hr class="hr1"/>
                  <p class="skill_time">３ヶ月</p><br/>
                  <p class="skill_time">半年</p><br/>       
              </div>
              <div class="text_anser">
                  <p class="skill_time">活用した作品</p><br/> 
                  <hr class="hr1"/>
                  <p class="skill_time">顔認証</p><br/>
                  <p class="skill_time">顔認証</p><br/>       
              </div>              
      </div>
            
      </div>
    </main>
    
    <footer class="footer">
      <div>
        フッターエリア
      </div>
    </footer>
  </div>
  );
}

// document.puerySelector('input').addEventListener('change', (evt) =>{
//   console.log(evt.target.files[0]);
// });

export default App;