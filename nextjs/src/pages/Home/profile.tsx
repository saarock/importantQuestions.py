import styles from "@/styles/profile.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

import { Si1Password } from "react-icons/si";

import { BiHomeCircle } from "react-icons/bi";

import { FcNightPortrait } from "react-icons/fc";

import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Profile() {

    const forChangingAccordingToUserClick = useRef<HTMLHeadingElement | null>(null);
    // const [getStyle, setStyle] = useState({
    //     'display': 'none'
    // })



    function showsPee() {
        alert('Do')
        // forChangingAccordingToUserClick.current?.classList.toggle('do')
        // alert('Done');
    //     setStyle({
    // // 'display':'block',
    // 'display': 'flex',
// })
    
    }
    
    return (
        <>
            {/* <NextScript /> */}
        <div className={styles.maindivforprofile} >

            
        
            <div className={styles.left}>
            <h1 className={styles.logo}></h1>
                {/* <h1>I am left</h1> */}
                <div className={styles.lookotherpee} onClick={showsPee}> <h1 className={styles.Home}>Home</h1><BiHomeCircle className={styles.homeicon}/></div>
                <div className={styles.lookotherpee} onClick={showsPee}> <h1 className={styles.Home}>Profile</h1><FcNightPortrait className={styles.homeicon}/></div>
                <div className={styles.mycredentia}> <h1 className={styles.Home}>Credentials</h1><Si1Password className={styles.homeicon}/></div>
                <div className={styles.colormode}> <h1 className={styles.Home}>Colormode</h1><BiHomeCircle className={styles.homeicon}/></div>
                <div className={styles.whoviews}> <h1 className={styles.Home}>Profileviewers</h1><BiHomeCircle className={styles.homeicon}/></div>
                <div className={styles.logout}> <h1 className={styles.Home}>setting</h1><BiHomeCircle className={styles.homeicon}/></div>
                <div className={styles.logout}> <h1 className={styles.Home}>help</h1><BiHomeCircle className={styles.homeicon}/></div>
            </div>

            <div className={styles.forprofile}>

                <div className={styles.profile}>
                <Image src='/images/e2.jpg' className={styles.myprofile} alt='image' width={200} height={200}/>
                </div>

                <div className={styles.changeprofile}>
                    <button>Change profile</button>
                </div>

                <div className={styles.details}>
                    <div className={styles.det}><h1 className={styles.key}>Name:</h1>  <h1 className={styles.name}>  Aayush basnet</h1></div>
                    <div className={styles.det}><h1 className={styles.key}>Email:</h1>  <h1 className={styles.name}> Saarock4646@gmail.com</h1></div>
                    <div className={styles.det}><h1 className={styles.key}>Phonenumber:</h1>  <h1 className={styles.name}> 9823464648</h1></div>
                    <div className={styles.det}><h1 className={styles.key}>Id:</h1>  <h1 className={styles.name}>  1232</h1></div>
                </div>

                <div className={styles.relatedpost}>
                    <div className={styles.yourpee}>
                   <button>post</button>
                    </div>
                    <div className={styles.favouritepeee}> <button>favourite</button></div>
                    <div className={styles.Pee}><button>pee</button></div>
                </div>


                </div>



             



                <div className={styles.right}>
               <div className={styles.yourfriend}><h3>yourfriend</h3></div>
               <div className={styles.yourfriend}><h3>yourfriend</h3></div>
               <div className={styles.yourfriend}><h3>yourfriend</h3></div>
            </div>
               

                    </div>

                    {/* <div className={styles.mypee}>
                    <h1>My peee</h1>
                </div>


                    <div className={styles.myFouritepee}>
                    <h1>My Favourite private pee
                        
                    </h1>
                    </div> */}

                        <div className={styles.postpee}>
                            <div className={styles.peeyouideas}>
               
                                {/* <div className={styles.posttitle}> */}
                                {/* <Image src='/images/p.jpg' className={styles.titleimage} alt='image' width={1000} height={400}/> */}
                                     {/* <h1> Pee What you think</h1> </div> */}
                                <div className={styles.formofpee}>

                                    <label htmlFor="YOURIDEAS">WriteIdea</label>
                                    <br />
                                    <textarea name="" id="" cols={90} rows={10}></textarea>

                                    <label htmlFor="showvideos">ShowVideos</label>
                                    <br />
                                    <button>UploadVideos</button>

                                    <label htmlFor="showvideos">Visual</label>
                                    <br />
                                    <button className={styles.button}>UploadVideos</button>
                                </div>
                            </div>
                        </div>
                {/* </div> */}
    











            {/* For peeLooks */}
         


        {/* </div> */}



        <div className={styles.peelooks}  ref ={forChangingAccordingToUserClick}>
            <div className={styles.smallsidesetting}>
                smallSideSetting
            </div>
            <div className={styles.allthepee}>

                <div className={styles.pees}>1</div>
                <div className={styles.pees}>1</div>
                <div className={styles.pees}>1</div>
                <div className={styles.pees}>1</div>
                <div className={styles.pees}>1</div>

            </div>
        </div>
      
        </>
    )
}