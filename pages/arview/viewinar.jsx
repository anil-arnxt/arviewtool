
import '../../src/app/globals.css'
import axios from "axios";
import Image from "next/image";

import Modelviewer from '../components/modelviewer';
import { fetchitem } from "../../services";
import Head from 'next/head';



// import { useEffect, useRef } from "react";
// import dynamic from 'next/dynamic';
// import { useParams, useSearchParams } from 'next/navigation';

export const  getServerSideProps = async (context)=> {

     const {id} = context.query

     const datavalue = await fetchitem(id) || [];
     return { props: { 

  datavalue
     } }

}

// const ComponentWithModelViewer = dynamic(
//     () => import('../components/modelviewer'),
//     {
//       ssr: false,
//     },
//   );

export default function Viewinar(props) {

    // useEffect(() => { import('@google/model-viewer').catch(console.error); }, []);





    // useEffect(()=>{

    //  setTimeout(() => {
    //      document.getElementById('loadingdiv').style.display = 'none'
       
    //  }, 3000);

    // },[])

     if(props.datavalue.length > 0){
      return (

        <>
    
           <div className="w-full">
    
    <Modelviewer props={props} />
     
    </div>
        </>
     
      )

     }else{
      return (
        <div className="w-full h-full flex items-center justify-center mt-8">
           <h1>Sorry no data available</h1>
        </div>
      )
     }
   

}

