import styles from './skills.module.css'
import Image from 'next/image'
import { BiRadioCircle } from "react-icons/bi";
function Skills() {
  return (
    <>

      {/* Bottom sec */}
      <div className="col-12 m-0 p-0 d-flex py-2 row">

        <div className={` ${styles[""]} py-3 p-1  d-flex row m-0 p-0 align-items-center cusBox`}>

          <div className="  ">
            <p className={` ${styles[""]}  p-2 cusBox`}>  <BiRadioCircle /> BEST SKILL ON   </p>
          </div>
          <div className="row col-12 m-0 p-0 d-flex justify-content-center ">
            <div className="d-flex justify-content-center  py-5 row">
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">

                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/css.png"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>


              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">

                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/html.png"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">
                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/python.png"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">

                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/javascript.png"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">
                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/bootstrap.png"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">
                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/nextjs.svg"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
              <div className="p-0 m-0 col d-flex justify-content-evenly pt-3 pt-lg-0">
                <div className={` ${styles["icons"]} `}>
                  <Image className={`${styles[""]} img-fluid col-12 `}
                    src="/img/skills/tailwindcss.svg"
                    width={200}
                    height={200}
                    alt="سما بابایی"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom sec */}
    </>

  )
}

export default Skills