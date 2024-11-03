import React, { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { cn } from '@/lib/utils'
import { FiMinus } from 'react-icons/fi';
import { PRESET_ANSWERS, PRESET_MESSAGE, PRESET_QUESTIONS } from '..';
import { ScrollArea } from "@/components/ui/scroll-area"


const ChatSupport = () => {

    const[isOpen,setIsOpen] = useState(false);
    const [isDisplay,setDisplay] = useState(true)

  return (
    <div className='fixed bottom-14 right-5 z-20'>
        <motion.div 
        layout
        animate ={{borderRadius: isOpen ? 10 : 50}} 
        initial={{borderRadius:50}}
        
        className={cn('w-20 h-20  bg-gradient-to-r from-gray-500 to-cyan-900 shadow-2xl cursor-pointer flex items-center justify-center',
        {
            "w-80 h-[34rem] cursor-default" :isOpen,
        })}
        onClick={()=>{
            if(!isOpen){
            setIsOpen(!isOpen)
            setDisplay(false)
            }
        }}
        onAnimationComplete={()=>{
            if(!isOpen){
            setDisplay(true)
            }
        }}
        >
        {isDisplay && <h1 className='text-5xl'>👨‍💻</h1> }

        {isOpen && <ScrollArea className='w-full h-full'>
            <div className='p-5 border-b border-white  flex items-center justify-between'>
                <h1 className='text-2xl text-white'>👨‍💻 Lets Talk!</h1>

                <FiMinus className='w-8 h-8 cursor-pointer' onClick={()=>{
                    setIsOpen(false)
                }}/>
                
            </div>
            <div className='p-5'>
                <Chat/>
            </div>
            <div id='bottom-chat'></div>
        </ScrollArea>}

        </motion.div>    
    </div>
  )
}
const Chat =()=>{

    const [messages,setMessages] = useState(PRESET_MESSAGE);
    useEffect(()=>{

    document.getElementById('bottom-chat')?.scrollIntoView({behavior:"smooth"});
    }, [messages.length]);

    const handlePresetQuestion = (index)=>{
      
       
        const quetion = messages[index];

         setMessages((current)=>[
             ...current,
             {
                 isBot: false,
                 message: quetion.message,
                 isPresetQuestion: false,
                 answeId:"",
                 isUSer: true,
             },
             {
                isBot: true,
                message: PRESET_ANSWERS[
                    quetion.answeId
                ].message,
                isPresetQuestion: false,
                answeId:"",
                isUSer: false,
             },

             ...PRESET_QUESTIONS
     ])
    }

    return(
        <>
        {messages.map((message,key)=>{
           if(message.isBot){

            return <Bot key={key} message={message.message}/>

           }else if(message.isPresetQuestion){

            return<PresetQuestions key={key} message={message.message} onClick = {()=>handlePresetQuestion(key)}/>

           }else if(message.isUSer){
            
            return <User key={key} message={message.message}/>
           }
        })}
        
        </>
    )

};
const Bot=({message})=>{

    return <motion.div>
            <div className='flex items-center gap-2'>
                <span className='bg-teal-600 rounded-full'>
                    <h1 className='text-2xl'>👨</h1>
                </span>
                <h1 className='text-black font-bold text-base font-serif//
                
                '>Ramesh</h1>
            </div>
            <h1 className='text-sm text-white font-semibold text-left mt-4'>
               {message}
             
            </h1>
    </motion.div>
}

const PresetQuestions =({message,onClick})=>{

    return(
        <motion.div className='cursor-pointer text-left mt-2 hover:tracking-wider transition-all' onClick={onClick}>
            <h1 className='bg-black inline-block p-2 rounded-md text-left text-sm text-white px-3'>
               {message}
            </h1>
        </motion.div> 
    )
}



const User=({message})=>{

    return <motion.div>
            <div className='flex items-center justify-end gap-2'>
            <h1 className='text-black font-bold text-base font-serif'>You</h1>
                <span className='bg-teal-600 rounded-full'>
                    <h1 className='text-2xl'>🫵</h1>
                </span>
                
            </div>
            <h1 className='text-sm text-white font-semibold mt-4 text-right'>
               {message}
              
            </h1>
    </motion.div>
}

export default ChatSupport