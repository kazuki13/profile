import { useIntersectionObserver } from './hooks/use-intersection-observer'
import React,{ FC, useRef, useEffect } from 'react'
import styles from '../css/Component.module.scss'
import jetbot from './image/jetbot.png'
import jetbot_image from './image/jetbot2.png'
import jetbot_nano from './image/Jetbot_nano.mp4'
// カスタムフックに渡すコールバック関数
const showElements = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // IntersectionObserver で設定された条件を満たした時に実行する処理
      // 要素に active クラスを適用する
      entry.target.classList.add(styles.active)
    }
  })
}
export const ScrollToTop: React.FC = () => {
  return <div onClick={scroll} />;
};

const scroll = (): void => {
  typeof window !== 'undefined' &&
    window.scroll({
      top: 0, // 最上部へスクロール
      behavior: 'smooth',
    });
};
const Component: FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null)
  const ref2 = useRef<HTMLHeadingElement>(null)
  const ref3 = useRef<HTMLHeadingElement>(null)
  const ref4 = useRef<HTMLHeadingElement>(null)
  const ref5 = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
      videoRef.current?.play();
  }, []);

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3, ref4, ref5], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <div className={styles.heading_title} ref={ref1}>
        <h2 className={styles.heading_φωτίζω}>φωτίζω</h2>
        <p className={styles.heading_φωτίζω2}>（フォティーゾ）</p>
        <h2 className={styles.heading_φωτίζω}>〜デスク自動除菌ロボット〜</h2><br/>
      </div>
      <h2 className={styles.heading_explanation_φωτίζω} ref={ref2}>
        jetbotを活用し<br/>
        コロナ感染を予防する
      </h2>
      <div className={styles.heading_text1} ref={ref3}>
        <figure className={styles.image}><img src={jetbot_image} alt=""/></figure>
        <div className={styles.text}>
          <h2>動作</h2>
          <p>
            机からjetbotが落ちないように、走って大丈夫なところダメなところを機械学習させました。
            全体を掃除できるよう、曲がる角度を調整しました。
          </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref4}>
        <div className={styles.text}>
          <h2>設計</h2>
          <p>
            除菌シートの摩擦により動作しない場合があったので、角度や除菌シートの枚数を調整しました。
          </p>
        </div>
        <figure className={styles.image2}><img src={jetbot} alt=""/></figure>
      </div>
      <div className={styles.heading_explanation_satoukibi} ref={ref5}>
        <React.StrictMode>
          <video muted ref={videoRef} >
            <source src={jetbot_nano} type="video/mp4" />
          </video>
        </React.StrictMode>
        <p className={styles.video_coment}>作成中の動画になります。</p>
      </div>
    </>
  )
}

export default Component