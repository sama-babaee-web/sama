import styles from './home.module.css'
import Image from 'next/image'
import { BiRadioCircle } from "react-icons/bi";
function HomeWrapper() {
    return (
        <>
            <section className={`${styles["wrap"]} container my-5 `} >
                <div className={`${styles[""]} row m-0 col-12 h-auto`}>

                    <div className="col-12 col-lg-4  my-2" >

                        <div className={styles["cus-box"]}>
                            <Image className={`${styles["cus-bdrs", 'ss']} img-fluid col-12 p-0 m-0 w-100`}
                                src="/img/sama.png"
                                width={500}
                                height={500}
                                alt="سما بابایی"
                            />
                        </div>

                    </div>




                    <div className="col-12 col-lg-8 m-0 ">


                        <div className="col-12 m-0 p-0 d-flex py-2 row ">


                            <div className={` ${styles["cus-box--"]} col-12 col-lg-7  `}>
                                <div className={` ${styles["cus-box"]} py-3`}>
                                    <div className="ps-4 ">
                                        <p className={` ${styles["cus-box"]} w-50 p-2`}>  <BiRadioCircle /> Sama Babaee  </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row m-0">
                                            <div className="row m-0">
                                                <h6>WELCOME TO MY WORLD</h6>
                                                <h1>Hi, I’m Sama Babaee</h1>
                                                <p>im currently 21 years old. I live in Tehran And love programming. I started my web design training in Parnian institution by Mr. Parsa Ghorbanian .</p>
                                            </div>

                                            {/* <div className="p-0 m-0 d-flex justify-content-center col-12">
                                                <Image className={` ${styles["img-website"]} img-fluid `}
                                                    src="/img/website.jpg"
                                                    width={200}
                                                    height={200}
                                                    alt="سما بابایی"
                                                />
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={` ${styles["cus-box--"]} col-12 col-lg-5 ps-lg-4 py-4 py-lg-0 `}>
                                <div className={` ${styles["cus-box"]} py-3 `}>
                                    <div className=" ps-4 ">
                                        <p className={` ${styles["cus-box"]} w-50 p-2`}>  <BiRadioCircle /> CONTACT   </p>
                                    </div>
                                    <div className="col-12 py-2">
                                        <div className="row m-0">
                                            <div className=" col mx-2  p-2 rounded-5 my-2">
                                                <BiRadioCircle /> Birthday : 2002.7.2
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className=" col mx-2  p-2 rounded-5 my-2">
                                                <BiRadioCircle />  Location : Iran.Tehran
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className=" col mx-2  p-2 rounded-5 my-2">
                                                <BiRadioCircle />  Gmail : samababaee8866@gmail.com
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 m-0 p-0 d-flex justify-content-end pb-5 mb-2">

                            <div className={` ${styles["cus-box"]} col-auto  py-3 my-2 col-12`}>

                                <div className=" ps-4 ">
                                    <p className={` ${styles["cus-box"]} w-50 p-2`}>  <BiRadioCircle /> Sochial Media   </p>
                                </div>
                                <div className="row m-0">
                                    <div className="p-0 m-0 d-flex justify-content-center col-12">
                                        <Image className={` ${styles["img-website"]} img-fluid `}
                                            src="/img/website.jpg"
                                            width={200}
                                            height={200}
                                            alt="سما بابایی"
                                        />
                                        <Image className={` ${styles["img-website"]} img-fluid `}
                                            src="/img/website.jpg"
                                            width={200}
                                            height={200}
                                            alt="سما بابایی"
                                        />
                                        <Image className={` ${styles["img-website"]} img-fluid `}
                                            src="/img/website.jpg"
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
            </section>
        </>
    )
}

export default HomeWrapper