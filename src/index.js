import { Flashlight } from "lucide-react";

export const  PRESET_QUESTIONS =[

    {
        isBot: false,
        message: "Tell me About You!",
        isPresetQuestion: true,
        answeId: "1",
        isUSer: false, 
    },
    {
        isBot: false,
        message: "What days/times are you available for a phone call?",
        isPresetQuestion: true,
        answeId: "2",
        isUSer: false, 
    },{
        isBot: false,
        message: "How can i contact you?",
        isPresetQuestion: true,
        answeId: "3",
        isUSer: false, 
    },

]

export const PRESET_MESSAGE =[
    {
        isBot: true,
        message:  "Hello there!😊, Welcome to My Portfolio Page. Happy To Have You Here.",
        isPresetQuestion: false,
        answeId:"",
        isUSer: false
    },
    ...PRESET_QUESTIONS,
]

export const PRESET_ANSWERS={
   "1": {

        message: 
        "I am a person who always try something new and grab the knowledge and move on. also i believe that everyone has the potential in their lives to acheive anything. i am a seeker in personal life. i hope these things will trigger you to get in touch with me :). "

    },

    "2": {

        message: "Week-days: between 9.00AM - 12.00PM, Week-ends: between 15.00PM- 18.00PM"

    },
    "3": {
        message: "Whatsapp - +94719713610, Mobile - +447459501559"
    }
}