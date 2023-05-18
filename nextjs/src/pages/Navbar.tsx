import Link from "next/link"
import styles from '@/styles/Nav.module.css';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import { preProcessFile } from "typescript";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export default function () {

    const [progress, setProgress] = useState(0);
    // const notify = () => toast("Pleased clear you amount!");

    return (
        <>
          {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}
    <LoadingBar
        color='green'
        progress={progress}
        loaderSpeed = {1000}
        waitingTime = {300}
        // transitionTime = {1000}
        onLoaderFinished={() => setProgress(0)}
      />
       <div className={styles.nav}>
        <div className={styles.navs}>

     

               
            
            <div className={styles.searchbar}>
                <input type="input" className={`${styles.searchinput} `} placeholder="Search ideas..."/>
            </div>


            <div className={styles.allthenavs }>

                <div className={`${styles.smallnavdiv}`}>
                <Link href='/' onClick={() => setProgress(100)} className={` ${styles.contact} ${styles.navbar}`}>Home</Link>
                </div>

                <div className={`${styles.smallnavdiv}`}>
                <Link href='/contact' onClick={() => setProgress(100)} className={` ${styles.about} ${styles.navbar}`}>Contact us</Link>
                </div>
         

                <div className={`${styles.smallnavdiv}`}>
                <Link href='/about' onClick={() => setProgress(100)} className={` ${styles.about} ${styles.navbar}`}>About us</Link>
                </div>


                <div className={`${styles.smallnavdiv} ${styles.login}`}>
                <Link href='/about' onClick={() => setProgress(100)} className={` ${styles.about} ${styles.navbar}`}>Login</Link>
                </div>


                <div className={`${styles.smallnavdiv} ${styles.Singup}`}>
                <Link href='/about' onClick={() => setProgress(100)} className={` ${styles.about} ${styles.navbar}`}>Create account</Link>
                </div>


      
            </div>


        </div>
       </div>
        </>
    )
}