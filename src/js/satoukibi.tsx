import { useIntersectionObserver } from './hooks/use-intersection-observer'
import React,{ FC, useRef, useEffect } from 'react'
import styles from '../css/Component.module.scss'
import ano from './image/satoukibi_ano.png'
import Egate_vue from './image/E-gate_vue.png'
import satiukibi_head from './image/satoukibi_head.png'
import satoukibi_move from "./image/satoukibi_move.mp4"
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
  const ref6 = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
      videoRef.current?.play();
  }, []);

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3, ref4, ref5, ref6], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <h2 className={styles.heading_title} ref={ref1}>
        サトウキビプロジェクト<br/>
        〜除草剤を撒く量を減らす開発〜
      </h2>
      <h2 className={styles.heading_explanation_satoukibi} ref={ref2}>
        珊瑚礁の生存を守るために<br/>
        AIを活用して除草剤の撒く量を減らし<br/>
        赤土血の流出を防ぐプロジェクト
      </h2>
      <div className={styles.heading_explanation_satoukibi} ref={ref3}>
        <React.StrictMode>
          <video muted ref={videoRef} >
            <source src={satoukibi_move} type="video/mp4" />
          </video>
        </React.StrictMode>
        <p className={styles.video_coment}>実際に石垣島に行って撮影したものです（1月）</p>
      </div>
      <div className={styles.heading_text1} ref={ref4}>
        <figure className={styles.image}><img src={ano} alt=""/></figure>
        <div className={styles.text}>
          <h2>アノテーション</h2>
          <p>
          雑草とサトウキビを分別するために、アノテーションで分類分けをしました
          </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref5}>
        <div className={styles.text}>
          <h2>機械学習</h2>
          <p>
              などを試した結果、現在はYolov7を活用し機械学習をしています
          </p>
        </div>
        <figure className={styles.image2}><img src={Egate_vue} alt=""/></figure>
      </div>
      <div className={styles.heading_text1} ref={ref6}>
        <figure className={styles.image}><img src={satiukibi_head} alt=""/></figure>
        <div className={styles.text}>
          <h2>ハード</h2>
          <p>
            今回はjetsonを活用し、カメラの動作・AIでの分析・除草剤をまくためのノズルの調整を行っています。
          </p>
        </div>
      </div>
    </>
  )
}

export default Component