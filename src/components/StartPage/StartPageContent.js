import classes from "./StartPageContent.module.css";
import { ReactComponent as Check } from "../../assets/check.svg";
import seoImg from "../../assets/seo.png";
import logo39Img from "../../assets/39logo.png";
import wildDonkeyImg from "../../assets/wilddonkeyworks2020.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collectionHide } from "../../features/mainNav/mainNav-Slice";

const StartPageContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className={classes.startBody}>
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.subject}>
            <h1>
              山石久平
              <br />
              資訊整合服務專家
              <br />
            </h1>
            <div className={classes.cosH2}>
              SEO行銷、RWD網頁開發、切版、後台功能客製化
            </div>
          </div>
          {/*<Cat className={classes.logo} />*/}
          {/* <img src={logo39Img} className={classes.logo} alt={"山石九平工作室Logo"} /> */}
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.mainContent}>
          <div className={classes.mainTitle}>網頁設計服務</div>
          <div className={classes.ulGrid}>
            <div className={classes.liGrid}>
              <h2>網頁設計</h2>
              <ul>
                <li><Check className={classes.Check} />一頁式廣吿</li>
                <li><Check className={classes.Check} />形象網站</li>
              </ul>
              <p>提供響應式網頁服務,可相容於手機、平版、電腦之網頁,提供客製化服務及網頁動畫.</p>
            </div>
            <div className={classes.liGrid}>
              <h2>購物網站設計</h2>
              <ul>
                <li><Check className={classes.Check} />包含會員管理</li>
                <li><Check className={classes.Check} />購物車</li>
                <li><Check className={classes.Check} />後台功能</li>
              </ul>
              <p>提供具有導購功能之購物網站設計,會員功能、購物車、結帳流程,後台功能客製。</p>
            </div>
            <div className={classes.liGrid}>
              <h2>RWD網頁切版</h2>
              <ul>
                <li><Check className={classes.Check} />HTML / CSS</li>
                <li><Check className={classes.Check} />Tailwind</li>
                <li><Check className={classes.Check} />Bootstrap</li>
              </ul>
              <p>提供已有設計稿之顧客,協助您進行網頁切版。</p>
            </div>
            <div className={classes.liGrid}>
              <h2>後端開發</h2>
              <ul>
                <li><Check className={classes.Check} />ASP.NET</li>
                <li><Check className={classes.Check} />PHP Laravel</li>
              </ul>
              <p>提供現有系統功能修改,新增再開發等服務。</p>
            </div>
          </div>
          {/* 區域1結束 */}
          <div className={classes.mainTitle}>SEO 服務</div>
          <div className={classes.seoContainer}>
            <img src={seoImg} className={classes.seoImg} />
            <div className={classes.seoCard}>
              <h2>SEO行銷</h2>
              <ul>
                <li><Check className={classes.Check} />百度</li>
                <li><Check className={classes.Check} />Google</li>
              </ul>
              <p>提供SEO文案寫手，有效增加網站曝光率,提升搜尋引擎自然排序</p>
            </div>
          </div>
          {/* 區域2結束 */}
          <div className={classes.mainTitle}>報價諮詢</div>
          <div className={classes.ulCard}>
            <div className={classes.liCard} >
              <h2>RWD 網站切版</h2>
              <ul>
                <li>HTML + CSS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
              <div className={classes.growArea}>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={classes.button}
                  href={"https://www.facebook.com/PetBan.Studio"}
                >
                  馬上詢價
                </a>
              </div>
            </div>
            <div className={classes.liCard} >
              <h2>後端服務</h2>
              <ul>
                <li>ASP.NET</li>
                <li>PHP Laravel</li>
              </ul>
              <div className={classes.growArea}>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={classes.button}
                  href={"https://www.facebook.com/PetBan.Studio"}
                >
                  馬上詢價
                </a>
              </div>
            </div>
            <div className={classes.liCard} >
              <h2>後端介接</h2>
              <ul>
                <li>React</li>
                <li>ASP.NET </li>
                <li>Laravel</li>
              </ul>
              <div className={classes.growArea}>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={classes.button}
                  href={"https://www.facebook.com/PetBan.Studio"}
                >
                  馬上詢價
                </a>
              </div>
            </div>
            <div className={classes.liCard} >
              <h2>SEO行銷</h2>
              <ul>
                <li>百度 SEO</li>
                <li>Google SEO</li>
              </ul>
              <div className={classes.growArea}>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={classes.button}
                  href={"https://www.facebook.com/PetBan.Studio"}
                >
                  馬上詢價
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.partnerBody}>
        <div className={classes.partnerContent}>
          <h2>我們的合作夥伴</h2>
          <a
            href={"https://wilddonkeyworks.myportfolio.com/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={wildDonkeyImg} alt={"Wild Donkey Works"} />
          </a>
          <p>
            誠摯邀請您與我們合作
            <br />
            <a href="mailto:sf39studio@icloud.com">Email:sf39studio@icloud.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartPageContent;
