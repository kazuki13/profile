
import '../css/heder.css';
import '../css/Productions.scss';


function App() {
  return (
    <div>
      <div class = "root2">
        <header class="header">
          <h1 class="header-logo"><a href="/">村山一輝</a></h1>
          <nav class="header-nav">
            <ul class="header-list">
              <li class="header-item"><a href="/">HOME</a></li>
              <li class="header-item"><a href="/Productions">制作物</a></li>
            </ul>
          </nav>
        </header>
        <main class = "before_long">
          <div class="entries">
            <div class="entry">
              <div class="title_name"><a  href="/φωτίζω">φωτίζω</a></div>
              <div class="body">
                <p> 机の除菌をするロボット</p>
              </div>
            </div>
            <div class="entry">
              <div class="title_name big"><a  href="/E-gate">E-gate</a></div>
              <div class="body">
                <p> azureを活用した自動顔認証システム</p>
              </div>
            </div>
            <div class="entry">
              <div class="title_name"><a  href="/satoukibi">サトウキビプロジェクト</a></div>
              <div class="body">
                <p> サンゴ礁を守るために、海への赤土の流出を防ぐ... </p>
              </div>
            </div>
            <div class="entry">
              <div class="title_name big"><a  href="/Face">顔認証</a></div>
              <div class="body">
                <p> 顔認証で自動的に玄関のドアを開けるシステム </p>
              </div>
            </div>
            <div class="entry">
              <div class="title_name"><a href="/other">その他</a></div>
              <div class="body">
                <p>
                  ・顔認証<br/>
                  ・LI-FE<br/>
                  ・φωτίζω（ふぉてぃーぞ）
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
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
