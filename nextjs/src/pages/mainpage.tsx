import { builtinModules } from 'module';
import styles from '../styles/Home.module.css'

// import { BsPersonCircle} from "react-icons/ai";
import {BsPersonCircle} from "react-icons/bs";
// import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function mainpage() {
    const notify = () => toast("Hello pratik");
    // let getTheInnerHTML = useRef<HTMLHeadingElement | null>(null);
    // const [count, setCount] = useState(0);
    // const [getChar, setChar] = useState('');
    // let index = 0;
    // useEffect(() => {

    //     let currentHtml =  getTheInnerHTML.current?.innerHTML;
    //     // console.log()
    //     if(currentHtml !== null &&  currentHtml !== undefined) {
    //         getTheInnerHTML.current!.innerHTML = '';
    //     }

    //     const intervalId = setInterval(() => {
    //             if (
    //               currentHtml !== null &&
    //               currentHtml !== undefined &&
    //               0<=count 
                  
             
    //             ) {
    //               const char = currentHtml.charAt(index);
    //               console.log(char)
    //               setChar((prevChar) => prevChar + char);
    //               setCount((counts) => counts + 1);
    //             //   console.log(index)
    //               index++;
             
    //             } 

    //         }, 200)

    //         return () => {
    //             clearInterval(intervalId);
    //           };

    
    // },[])


    function citizenBack() {
      // alert('Done')
      notify()
      const inputFile = document.createElement('input');
      inputFile.setAttribute('type', 'file');
      inputFile.click()
      if(inputFile.files != null){
      let a= inputFile.files[0]
      
   
      }


    }

    // const ref = useRef(null)

    
 
    return(
        <>
           <ToastContainer />
           {/* <LoadingBar color='#f11946' ref={ref} /> */}
        <div className={styles.headerdiv}>
     

            <div className={styles.whythiswebite}>
                {/* <h1>YOU IDEA YOU MONEY.</h1> */}
            </div>

            <div className={styles.whythiswebiteAGAIN}>
              <div className={styles.logo}></div>
                <h1>YOU IDEA YOU MONEY.</h1>
                <h2>Ok THE WORD WHERE YOU CAN KEEP SAFE TO YOUR IDEAS AND MAKE INVEST ON THEM AND ALSO YOU CAN INVEST ON OTHER IDEA WITH CERTAIN RULES AND REGULATIONS.</h2>
                <div className={styles.forbutton}>
                    <button>Why us</button>
                    <button>Explore many</button>
                </div>
            </div>

    
    

            <div className={styles.alltheimagediv}>
              <div className={styles.imageone}>
                <Image src='/images/e2.jpg' alt='image' width={1000} height={400}/>
              </div>

              <div className={styles.text}>You Word where You are the owner with One pee.
              <div className={styles.research}>
                    <button>Explore many</button>
                </div>
              </div>
              
            <div className={`${styles.div1}${styles.divone}`}>
                {/* <div className={styles.forimagesone}> </div>

                <div className={styles.forimagestwo}></div>


            



<div className={styles.forimagesthree}> */}

               
{/* </div> */}
                



         

            </div>
            {/* <div className={`${styles.div1} ${styles.divone}`}>1</div> */}
            {/* <div className={`${styles.div1} ${styles.divone}`}>1</div>
            <div className={`${styles.div1} ${styles.divone}`}>1</div>
            <div className={`${styles.div1} ${styles.divone}`}>1</div> */}
         
         
        
        </div>

        </div>




        <div className={styles.maindivhome}>
            <div className={styles.left}>
              <div className={styles.top} >
                <h1  className={styles.codeTopic}> YOUR IDEAS YOU MONEY y</h1>
              </div>
              <div className={styles.whichfile}>
                <div>Rules and regulations you have to learn</div>

              </div>

              <div className={styles.code}>
      
        
                
              




                {/* <pre> */}
    {/* <code>
      &lt;div class="position-absolute width-full color-bg-default" style="bottom: -4rem;"&gt;
        &lt;div class="container-xl p-responsive"&gt;
          &lt;div class="d-flex flex-justify-center flex-lg-justify-end color-bg-default"&gt;
            &lt;div class="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none"&gt;
              &lt;picture&gt;
                &lt;source srcset="astro-mona.webp" type="image/webp"&gt;
                &lt;img src="astro-mona.svg" width="960" height="967" class="home-astro-mona width-full position-absolute bottom-0 height-auto" alt="Mona looking at GitHub activity across the globe"&gt;
              &lt;/picture&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    </code>
  </pre> */}
             



   



              </div>
            </div>


            <div className={styles.middle}>
                <h1>Middle</h1>
               
            
            </div>


            <div className={styles.right}>
                <h1>Right</h1>

            </div>

      
        </div>



        <div className={styles.singinandlogindiv}>

          <div className={styles.images}>
            {/* <h1 className={styles.goideas}>What the ideas go be a part of us</h1> */}

            <Image src='/images/l.png' className={styles.singupimage} alt='image' height={200} width={200}></Image>
            <div className={styles.imagedown}>
              <h1>Please Singup by reading Only the terms and conditions</h1>
            </div>
          </div>

          <div className={styles.singup}>
            <div className={styles.ready}>
         <BsPersonCircle className={styles.personicon}/>
         <h1>Singup</h1>
            </div>


            <div className={styles.inputs}>
              <label htmlFor="firstname">FirstName</label>
            
              <input type="text" name='text' />
              <br />

              <label htmlFor="middlename">MiddleName</label>
              <input type="text" name='middlename' />

              <br />

              <label htmlFor="email">Email</label>
              <input type="email" name='email'/>
               
               <br />

               <label htmlFor="countryChoose">CountryChoose</label>
               <select name="country" id={styles.country}>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
               </select>

               <br />

              <label htmlFor="phonenumber">PhoneNumber</label>
              <input type="number" name='number'/>


              <br />

              <label htmlFor="cirizenfront">Citizenship Frontside</label>
              <button className={styles.Go} onClick={citizenBack}>Choose</button>
              <div className={styles.forfrontcitizen}>
                
              </div>

              <br />

<label htmlFor="cirizenback">Citizenship Backside</label>
<button className={styles.Go}>Choose</button>



            </div>

            <div className={styles.siginbutton}>
            <button className={styles.Go}>Register</button>
            </div>
    
          </div>

     

    


        </div>
        </>
    )

}