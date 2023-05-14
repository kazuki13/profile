import { useIntersectionObserver } from './hooks/use-intersection-observer'
import React,{ FC, useRef, useEffect } from 'react'
import styles from '../css/Component.module.scss'
import move from './image/move.png'
import Egate_vue from './image/E-gate_vue.png'
import Egate_move from "./image/E-gate_move.mp4"
import Egate_deza from './image/E-gate_deza.jpeg'
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
  const ref7 = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
      videoRef.current?.play();
  }, []);

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3, ref4, ref5, ref6, ref7], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <div className={styles.heading_title} ref={ref1}>
        <h2 className={styles.heading_Egate}>E-gate</h2>
        <h2 className={styles.heading_Egate}>~自動出席システム〜</h2>
      </div>
      <h2 className={styles.heading_explanation_Egate} ref={ref2}>
        授業の時間を無駄にしないよう<br/>
        自動的に顔認証して出席をとるシステム
      </h2>
      <div className={styles.heading_explanation} ref={ref3}>
      <React.StrictMode>
          <video muted ref={videoRef} >
            <source src={Egate_move} type="video/mp4" />
          </video>
        </React.StrictMode>
      </div>
      <div className={styles.heading_text1} ref={ref4}>
        <figure className={styles.image}><img src={move} alt=""/></figure>
        <div className={styles.text}>
          <h2>動画制作</h2>
          <p>
            展示会に向け来校者に伝わりやすいように、FilmForthで動画の作成をしました。
            よりわかりやすい動画を制作するために、先生や友達に協力をいただきシュミレーション映像を組み込みました。
          </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref5}>
        <div className={styles.text}>
          <h2>フロントエンドでの制作</h2>
          <p>
              展示会後、フロントエンド側で顔の認識・写真の保存・azureへの送信をvue.jsを活用し開発を進めました
          </p>
        </div>
        <figure className={styles.image2}><img src={Egate_vue} alt=""/></figure>
      </div>
      <div className={styles.heading_text1} ref={ref6}>
      <figure className={styles.image}><img src={Egate_vue} alt=""/></figure>
        <div className={styles.text}>
            <h2>使用する言語などの変更</h2>
            <p>
              vue.jsからazure storageへの接続がうまくいかなかったため、pythonとReactに変更しました
            </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref7}>
        <div className={styles.text}>
          <h2>現在</h2>
          <p>
              ある程度の機能が完成したため、フロントエンドでのデザイン決めやDBからのデータの所得などの開発を進めています。
          </p>
        </div>
        <figure className={styles.image2}><img src={Egate_deza} alt=""/></figure>
      </div>
    </>
  )
}

export default Component