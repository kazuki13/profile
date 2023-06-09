import { useIntersectionObserver } from './hooks/use-intersection-observer'
import { FC, useRef } from 'react'
import styles from '../css/Component.module.scss'
import souseki from './image/souseki.png'
import Wannyannet from './image/Wannyannet.png'
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

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <h2 className={styles.heading_title} ref={ref1}>
        その他の作品
      </h2>
      <div className={styles.heading_text1} ref={ref2}>
        <figure className={styles.image}><img src={souseki} alt=""/></figure>
        <div className={styles.text}>
          <h2>漱石</h2>
          <p>
            猫のご飯を置いておくさいに、別の猫に盗まれないようにするロボっト
          </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref3}>
        <div className={styles.text}>
          <h2>Wannyannet</h2>
          <p>
              猫や犬が通う病院が変わった際などに、スムーズな診断ができるよう簡単にカルテのデータを共有できるサイト
          </p>
        </div>
        <figure className={styles.image2}><img src={Wannyannet} alt=""/></figure>
      </div>
    </>
  )
}

export default Component