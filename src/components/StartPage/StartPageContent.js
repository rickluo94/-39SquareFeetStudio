import classes from "./StartPageContent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Cat } from "../../assets/cat.svg";
import wildDonkeyImg from "../../assets/wilddonkeyworks2020.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collectionHide } from "../../features/mainNav/mainNav-Slice";

const StartPageContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginClickHandler = () => {
    navigate("auth");
    dispatch(collectionHide());
  };

  AOS.init({
    duration: 2000,
  });

  return (
    <section className={classes.startBody}>
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.subject}>
            <h1>
              Pet 伴
              <br />
              創意工作室
              <br />
            </h1>
            <div className={classes.cosH2}>
              SEO行銷、RWD網頁開發、切版、後端服務、後端介接
            </div>
          </div>
          <Cat className={classes.logo} />
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.mainContent}>
          <div className={classes.provide}>提供服務</div>
          <div className={classes.ulCard}>
            <div className={classes.liCard} data-aos="fade-up-left">
              <p>RWD 網站切版</p>
              <p>NT$ 800 </p>
              <p>起/頁</p>
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
            <div className={classes.liCard} data-aos="fade-up-right">
              <p>後端服務</p>
              <p>NT$ 1500</p>
              <p>起</p>
              <ul>
                <li>Restful API</li>
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
            <div className={classes.liCard} data-aos="fade-up-left">
              <p>後端介接</p>
              <p>NT$ 1500 </p>
              <p>起</p>
              <ul>
                <li>React</li>
                <li>ASP.NET 、 WPF</li>
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
            <div className={classes.liCard} data-aos="fade-up-right">
              <p>SEO行銷</p>
              <p>NT$ 100000</p>
              <p>起／月</p>
              <ul>
                <li>百度 SEO</li>
                <li>Google SEO</li>
                <li>百度黑帽 SEO</li>
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
            <a href="mailto:petban@petban.net">Email:petban@petban.net</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartPageContent;
