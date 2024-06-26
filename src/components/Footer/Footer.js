import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <div className={classes.footerMain}>
        <button >關於我們</button>
        <button >
          <a href="mailto:sf39studio@icloud.com">意見回饋</a>
        </button>
        {/*  <button>合作夥伴</button> */}
      </div>
      <div className={classes.content}>
        <p>Copyright &copy; 2020 山石九平工作室</p>
      </div>
    </div>
  );
};

export default Footer;
