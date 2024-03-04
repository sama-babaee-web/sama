import styles from './portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Portfolio() {
  return (
    <>
      <div className="row m-0 col-12 d-flex justify-content-center">

        <div className="col-12 col-md-6 col-lg-4  ">
          <div className={` ${""} mx-3 my-3 row p-0 m-0 cusBox p-4`}>
            <div className="row p-0 m-0">
              <Link href={"/"}>
                <Image className={` ${styles.imgCard} img-fluid p-0 m-0 `}
                  src="/img/portfolio/download.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="row p-0 m-0 pt-3 col-12 d-flex align-items-center">
              <div className="col-8 p-0 m-0">
                <h6>Trick Animation</h6>
                <h4 className="py-2">CUBE </h4></div>
              <div className="col-4 p-0 m-0 d-flex  justify-content-end">
                <Link href=''>
                  <lord-icon
                    src="https://cdn.lordicon.com/txdkysmw.json"
                    trigger="hover"
                    style={{
                      width: '60px',
                      height: '60px'
                    }}
                  >
                  </lord-icon>
                </Link>

                {/* <lord-icon
                  src="https://cdn.lordicon.com/tltikfri.json"
                  trigger="loop"
                  state="hover-rotate-up-to-down"
                  style={{
                    width: '40px',
                    height: '40px'
                  }}
                  >
                </lord-icon> */}
              </div>

            </div>

          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4  ">
          <div className={` ${""} mx-3 my-3 row p-0 m-0 cusBox p-4`}>
            <div className="row p-0 m-0">
              <Link href={"/"}>
                <Image className={` ${styles.imgCard} img-fluid p-0 m-0 `}
                  src="/img/portfolio/download.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="row p-0 m-0 pt-3 col-12 d-flex align-items-center">
              <div className="col-8 p-0 m-0">
                <h6>Trick Animation</h6>
                <h4 className="py-2">CUBE </h4></div>
              <div className="col-4 p-0 m-0 d-flex  justify-content-end">
                <Link href=''>
                  <lord-icon
                    src="https://cdn.lordicon.com/txdkysmw.json"
                    trigger="hover"
                    style={{
                      width: '60px',
                      height: '60px'
                    }}
                  >
                  </lord-icon>
                </Link>

              </div>

            </div>

          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4  ">
          <div className={` ${""} mx-3 my-3 row p-0 m-0 cusBox p-4`}>
            <div className="row p-0 m-0">
              <Link href={"/"}>
                <Image className={` ${styles.imgCard} img-fluid p-0 m-0 `}
                  src="/img/portfolio/download.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="row p-0 m-0 pt-3 col-12 d-flex align-items-center">
              <div className="col-8 p-0 m-0">
                <h6>Trick Animation</h6>
                <h4 className="py-2">CUBE </h4></div>
              <div className="col-4 p-0 m-0 d-flex  justify-content-end">
                <Link href=''>
                  <lord-icon
                    src="https://cdn.lordicon.com/txdkysmw.json"
                    trigger="hover"
                    style={{
                      width: '60px',
                      height: '60px'
                    }}
                  >
                  </lord-icon>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio
// rgb(142, 100, 255)