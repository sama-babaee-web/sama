import styles from './social.module.css'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
function SocialMedia() {
  return (
    <>
      <div className="position-fixed top-50 end-0 d-flex">
        <div className={` ${styles["socials"]}`}>
          <a href="" className={` ${styles["social-item"]} `}>
            <BiLogoLinkedinSquare className={` ${styles["linkedin"]} h3 `}/>
          </a>
          <a href="" className={` ${styles["social-item"]} `}>
            <BiLogoTelegram className={` ${styles["telegram"]} h3 `}/>
          </a>
          <a href="" className={` ${styles["social-item"]} `}>
            <BiLogoInstagram className={` ${styles["instagram"]} h3 `}/>
          </a>
          <a href="" className={` ${styles["social-item"]}`}>
            <BiLogoGithub className={` ${styles["github"]} h3 `}/>
          </a>
        </div>
      </div>
    </>

  )
}

export default SocialMedia