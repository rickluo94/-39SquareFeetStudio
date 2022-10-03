import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <div className={classes.footerMain}>
        <button >關於我們</button>
        <button >
          <a href="mailto:petban@petban.net">意見回饋</a>
        </button>
        {/*  <button>合作夥伴</button> */}
      </div>
      <div className={classes.content}>
        <p>Copyright &copy; 2021 山石久平工作室</p>
      </div>
    </div>
  );
};

export default Footer;
