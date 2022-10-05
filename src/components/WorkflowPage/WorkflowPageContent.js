import classes from "./WorkflowPageContent.module.css";

const WrokflowPageContent = () => {
  return (
    <>
      <div className={classes.sectionKnowhow}>
        <div className={classes.Card}>
          <h2>你應該先思考/You need to know</h2>
          <ul>
            <li>包含的內容及頁面</li>
            <li>目標客群</li>
            <li>風格及色系</li>
            <li>是否有提供照片及素材</li>
            <li>是否有自備商業圖</li>
            <li>文案的準備</li>
          </ul>
        </div>
        <hr />
        <div className={classes.Card}>
          <h2>我們能提供的服務/What we can serve</h2>
          <ul>
            <li>RWD響應式網站規劃</li>
            <li>使用者友善的網站規劃</li>
            <li>SEO網頁優化</li>
            <li>分潤管理系統</li>
            <li>簡易後台管理系統</li>
          </ul>
        </div>
      </div>
      <div className={classes.sectionPrice}>
        <div className={classes.priceCard}>
          <h2>一頁式網站</h2>
          <p>製作時間短 ，適合做廣告頁面</p>
          <div className={classes.olGrid}>
            <div className={classes.olTitle}>
              內容
            </div>
            <ol>
              <li>設計規劃</li>
              <li>網域名稱申請</li>
              <li>架設伺服器</li>
              <li>SEO網站優化</li>
            </ol>
          </div>
          <hr />
          <p>時間</p>
          <p>---工作天</p>
          <hr />
          <p>金額</p>
          <p>$------元起</p>
        </div>
        <div className={classes.priceCard}>
          <h2>形象網站</h2>
          <p>企業或品牌官網，形象為主的網站</p>
          <div className={classes.olGrid}>
            <div className={classes.olTitle}>
              內容
            </div>
            <ol>
              <li>設計規劃</li>
              <li>網域名稱申請</li>
              <li>架設伺服器</li>
              <li>SEO網站優化</li>
              <li>網站維護</li>
              <li>後臺操作教學</li>
            </ol>
          </div>
          <hr />
          <p>時間</p>
          <p>---工作天</p>
          <hr />
          <p>金額</p>
          <p>$------元起</p>
        </div>
        <div className={classes.priceCard}>
          <h2>購物網站</h2>
          <p>具有購物車功能，及金流串接服務</p>
          <div className={classes.olGrid}>
            <div className={classes.olTitle}>
              內容
            </div>
            <ol>
              <li>設計規劃</li>
              <li>網域名稱申請</li>
              <li>架設伺服器</li>
              <li>SEO網站優化</li>
              <li>網站維護</li>
              <li>後臺操作教學</li>
              <li>導購分潤</li>
            </ol>
          </div>
          <hr />
          <p>時間</p>
          <p>---工作天</p>
          <hr />
          <p>金額</p>
          <p>$------元起</p>
        </div>
      </div>
    </>
  );
};

export default WrokflowPageContent;
