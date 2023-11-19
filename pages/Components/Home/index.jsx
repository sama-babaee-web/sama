import styles from './home.module.css'
import Image from 'next/image'
import { BiRadioCircle } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";


function HomeWrapper() {
    return (
        <>
            <section className="my-5">
                <div className="row m-0 col-12">

                    {/* Left side section Home */}
                    <div className="col-12 col-lg-4 p-0 m-0" >

                        <div className='pe-lg-4'>
                            <Image className={`${styles.ss} ${styles.cusBox} img-fluid col-12 p-0 m-0 w-100 `}
                                src="/img/sama.webp"
                                width={500}
                                height={500}
                                alt="سما بابایی"
                            />
                        </div>


                    </div>
                    {/* Left side section Home */}




                    {/* Right side section Home */}
                    <div className="col-12 col-lg-8 m-0 p-0">

                        {/* Top sec */}
                        <div className="col-12 m-0 p-0 d-flex py-2 row ">


                            <div className="col-12 col-lg-7 m-0 p-0 my-2 my-lg-0">
                                <div className={` ${styles["cusBox"]} py-3 p-1 h-100 d-flex row m-0 p-0 align-items-center `}>
                                    <div className="">
                                        <p className={` ${styles["cusBox"]} w-50 p-2`}>  <BiRadioCircle /> WELCOME TO MY WORLD  </p>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="row m-0">
                                            <h1 className='py-2'>Hi, I’m Sama Babaee</h1>
                                            <p className='py-2'>im currently 21 years old. I live in Tehran And love programming. I started my web design training in Parnian institution by Mr. Parsa Ghorbanian .</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-lg-5 ps-lg-3  m-0 p-0 my-2 my-lg-0">
                                <div className={` ${styles["cusBox"]} py-3 p-1 h-100 d-flex row m-0 p-0 align-items-center  `}>
                                    <div className="">
                                        <p className={` ${styles["cusBox"]} w-50 p-2`}>  <BiRadioCircle /> CONTACT   </p>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="row m-0 p-0">
                                            <div className="col mx-2 p-2 my-2">
                                                <BiRadioCircle /> Birthday : 2002.7.2
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="col mx-2 p-2 my-2">
                                                <BiRadioCircle />  Location : Iran.Tehran
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="col mx-2 p-2 my-2">
                                                <BiRadioCircle />  Gmail : samababaee8866@gmail.com
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Top sec */}




                        {/* Bottom sec */}
                        <div className="col-12 m-0 p-0 d-flex py-2 row">

                            <div className={` ${styles["cusBox"]} py-3 p-1  d-flex row m-0 p-0 align-items-center `}>

                                <div className="  ">
                                    <p className={` ${styles["cusBox"]} w-50 p-2`}>  <BiRadioCircle /> BEST SKILL ON   </p>
                                </div>
                                <div className="row col-12 m-0 p-0 d-flex justify-content-center ">
                                    <div className="d-flex justify-content-center col-6 py-5 ">
                                        <div className="p-0 m-0 col d-flex justify-content-center">

                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/css.png"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>


                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">

                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/html.png"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">
                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/python.png"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">

                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/javascript.png"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">
                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/bootstrap.png"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">
                                            <div className={` ${styles["icons"]} `}>
                                                <Image className={`${styles[""]} img-fluid col-12 `}
                                                    src="/img/skills/nextjs.svg"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-0 m-0 col d-flex justify-content-center">
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


                    </div>

                    {/* Right side section Home */}
                </div>
            </section>
        </>
    )
}

export default HomeWrapper