import styles from './social.module.css'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import Link from 'next/link';
function SocialMedia() {
  return (
    <>
      <div className="position-fixed top-50 end-0 d-flex">
        <div className={` ${styles["socials"]}`}>
          <Link href="https://www.linkedin.com/in/sama-babaee-54135324b/" className={` ${styles["social-item"]} `}>
            <BiLogoLinkedinSquare className={` ${styles["linkedin"]} h3 `}/>
          </Link>

          <Link href="https://t.me/sama_b4" className={` ${styles["social-item"]} `}>
            <BiLogoTelegram className={` ${styles["telegram"]} h3 `}/>
          </Link>

          <Link href="https://instagram.com/sama.babaee_?igshid=MzNlNGNkZWQ4Mg==" className={` ${styles["social-item"]} `}>
            <BiLogoInstagram className={` ${styles["instagram"]} h3 `}/>
          </Link>
          <Link href="https://github.com/sama-babaee-web" className={` ${styles["social-item"]}`}>
            <BiLogoGithub className={` ${styles["github"]} h3 `}/>
          </Link>
        </div>
      </div>
    </>
    

  )
}

export default SocialMedia