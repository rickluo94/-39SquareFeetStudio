import classes from "./HowToPageContent.module.css"
import questionimg from "../../assets/questionimg.png"

const HowToPageContent = () => {
  return (<>
    <div className={classes.bannerBox}>
      <h1 className={classes.bannerHeading}>想要架設網站</h1>
      <img src={questionimg} alt={"question image"} className={classes.bannerImg} />
      <h1 className={classes.bannerheading}>卻不知道怎麼詢價嗎</h1>
    </div>
    <section className={classes.sectionHow}>
      <div className={classes.howBox}>
        <div className={`${classes.listBox} ${classes.listBox1}`} >
          <h2 className={classes.secondaryHeading} >你應該先思考/You need to know</h2>
          <ul>
            <li>網站內容及頁面</li>
            <li>目標客群TA</li>
            <li>風格及色系</li>
            <li>是否自備照片及素材</li>
            <li>文案的準備</li>
          </ul>
        </div>
        <div className={`${classes.listBox} ${classes.listBox2}`}>
          <h2 className={classes.secondaryHeading}>我們能提供的服務/What we can serve</h2>
          <ul>
            <li>RWD網站規劃設計</li>
            <li>使用者導向優化</li>
            <li>SEO搜尋引擎最佳化</li>
            <li>簡易操作的後台</li>
          </ul>
        </div>
      </div>
    </section>
    <section className={classes.sectionPrice}>
      <div className={classes.cardBox}>
        <div className={classes.card}>
          <h3 className={classes.tertiaryHeading}>一頁式網站</h3>
          <p>製作時間短 ，適合做廣告頁面</p>
          <div className={classes.cardContextBox}>
            <div className={classes.cardContent}>
              <h4 className={classes.h4} >內容</h4>
              <ul>
                <li>設計規劃</li>
                <li>網域名稱申請</li>
                <li>架設伺服器</li>
                <li>SEO網站優化</li>
              </ul>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>時間</h4>
              <p>---個工作天</p>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>金額</h4>
              <p>---元起</p>
            </div>
            <div className={classes.btnBox}>
              <a href="#" className={`${classes.btn} ${classes.btnPrice}`}>馬上詢價</a>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <h3 className={classes.tertiaryHeading}>形象網站</h3>
          <p>企業或品牌官網，形象為主的網站</p>
          <div className={classes.cardContextBox}>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>內容</h4>
              <ul>
                <li>設計規劃</li>
                <li>網域名稱申請</li>
                <li>架設伺服器</li>
                <li>SEO網站優化</li>
                <li>網站維護</li>
                <li>後臺操作教學</li>
              </ul>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>時間</h4>
              <p>---個工作天</p>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>金額</h4>
              <p>---元起</p>
            </div>
            <div className={classes.btnBox}>
              <a href="#" className={`${classes.btn} ${classes.btnPrice}`}>馬上詢價</a>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <h3 className={classes.tertiaryHeading}>購物網站</h3>
          <p>具有購物車功能，及金流串接服務</p>
          <div className={classes.cardContextBox}>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>內容</h4>
              <ul>
                <li>設計規劃</li>
                <li>網域名稱申請</li>
                <li>架設伺服器</li>
                <li>SEO網站優化</li>
                <li>網站維護</li>
                <li>後臺操作教學</li>
                <li>優化導購功能</li>
              </ul>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>時間</h4>
              <p>---個工作天</p>
            </div>
            <div className={classes.cardContent}>
              <h4 className={classes.h4}>金額</h4>
              <p>---元起</p>
            </div>
            <div className={classes.btnBox}>
              <a href="#" className={`${classes.btn} ${classes.btnPrice}`}>馬上詢價</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
};

export default HowToPageContent;
