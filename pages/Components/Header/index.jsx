import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
function Header() {
    return (
        <>
            <header className={`${styles["bg-head"]} col-12 container-fluid`}>
                <nav className="navbar">
                    <div className="container-fluid ">
                        <Link href='/' className="navbar-brand">
                            <Image
                                src="/img/logo.png"
                                width={80}
                                height={80}
                                alt="سما بابایی"
                            />
                        </Link>
                        <nav className="navbar navbar-expand-lg ">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className={` ${styles["cus-box"]} nav-item m-2  p-1 py-2 rounded-3 `}>
                                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                <li className={` ${styles["cus-box"]} nav-item m-2  py-2 rounded-3 `}>
                                                    <a className="nav-link" href="#">Features</a>
                                                </li>
                                                <li className={` ${styles["cus-box"]} nav-item m-2  py-2 rounded-3 `}>
                                                    <a className="nav-link" href="#">Pricing</a>
                                                </li>
                                                <li className={` ${styles["cus-box"]} nav-item m-2  py-2 rounded-3 `}>
                                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                    </div>
                    
                </nav>
                <div className={styles["line-bottom"]}></div>

                <div className={styles["hero-background-top"]}></div>
            </header>
        </>
    )
}

export default Header