"use client"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Progress = () => {
  return (
         <ProgressBar 
            height="4px"
            color="#22C55E"
            options={{showSpinner: false}}
         />
  )
}

export default Progress