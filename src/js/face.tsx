import { useIntersectionObserver } from './hooks/use-intersection-observer'
import { FC, useRef } from 'react'
import styles from '../css/Component.module.scss'
import face_login from './image/face_login.png'
import face_data from './image/face_data.png'
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

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3, ref4], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <div className={styles.heading_title} ref={ref1}>
        <h2 className={styles.heading_face}>顔認証</h2>
        <h2 className={styles.heading_face}>~自動ロック解除システム〜</h2>
      </div>
      <h2 className={styles.heading_explanation_face} ref={ref2}>
        授業の時間を無駄にしないよう<br/>
        自動的に顔認証して出席をとるシステム
      </h2>
      <div className={styles.heading_text1} ref={ref3}>
        <figure className={styles.image}><img src={face_data} alt=""/></figure>
        <div className={styles.text}>
          <h2>顔認証</h2>
          <p>
            googleのdocumentや下記のurlを活用して、サポートをしつつopenCVでの開発を進めました。<br/>
            （この開発は一年生のサポートとして参加しました）
          </p>
          <a href= "https://www.youtube.com/watch?v=6mqVSe9n6gk">参考にしたYouTube</a>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref4}>
        <div className={styles.text}>
          <h2>ログイン機能</h2>
          <p>
              Flask_loginを活用し、ログインしたユーザーの顔を認証しないように設定しました。ユーザーネームで顔認証を変更しています
          </p>
          <a href= "https://www.digitalocean.com/community/tutorials/how-to-add-authentication-to-your-app-with-flask-login-ja">参考にしたサイト</a>
          
        </div>
        <figure className={styles.image2}><img src={face_login} alt=""/></figure>
      </div>
    </>
  )
}

export default Component