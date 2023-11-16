import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
function Header() {
    return (
        <>
            <header className="col-12 m-0 ">
                <nav className="navbar navbar-expand-lg headerNav__sama">
                    <div className="container-fluid">
                        <Link href='/' className="navbar-brand">
                            <Image
                                src="/img/logo.png"
                                width={180}
                                height={50}
                                alt="سما بابایی"
                                priority
                            />
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end align-items-center collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex align-items-center">
                                <ul className="navbar-nav text-center">
                                    <li className="nav-item px-3">
                                        <a className={` ${styles["button"]}  nav-link`} aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a className={` ${styles["button"]}  nav-link`} aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a className={` ${styles["button"]}  nav-link`} aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a className={` ${styles["button"]}  nav-link`} aria-current="page" href="#">Home</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>  
                <div className={styles["line-bottom-header"]}></div>
            </header>
        </>
    )
}

export default Header