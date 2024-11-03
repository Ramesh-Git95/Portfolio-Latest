import React, { useState } from 'react'
import {delay, motion} from 'framer-motion'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';


  const testimonials =[
    {
        name: "Erandi Imalka",
        position: "@Perera",
        text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        avatar: "woman.png",
        media:""
    },
    {
        name: "Ramesh Kumar",
        position: "@R & Sports ",
        text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        avatar: "man.png",
        media:""
    },
    {
        name: "Suresh Kumar",
        position: "@Asbastos",
        text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        avatar: "man2.png",
        media:""
    },
    {
        name: "Randhika Perea",
        position: "@Universe",
        text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        avatar: "teacher.png",
        media:""
    }
]

const Testimonial = () => {
    const [current,setCurrent] = useState(0);
    const length  = testimonials.length;

    const previous =()=>{
        setCurrent(current === 0 ? length - 1 : current -1);
    }

    const next =()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

  return (
    
    // <section className=''>
    //     <h1 className='text-3xl text-left font-bold my-6 text-yellow-400 font-mono animate-pulse'>Testimonial</h1>
    //     <div className='bg-gradient-to-r from-teal-700 to-gray-400 text-left rounded-xl p-8 border-2 border-green-900'> 
            


    // //         {/* working code for testimonial  */}
            
    //           {testimonials.map((item,index)=> (index === current &&
                
    //             <div drag="x"
    //             key={index}>

              
    //             <div className='pb=[20px] flex items-start gap-4 mb-4 -mt-1'>
    //                 <img className='w-8 h-8' src="quote.svg" alt="" />
    //                 <h2 className='text-black text-2xl font-bold font-sans'>{item.text}</h2>
                    
    //             </div>
    //             <div className='flex justify-between items-end'>
    //             <div className='flex gap-4 items-center'>
    //             <div>
    //                 <img src={item.avatar} alt="" className='w-16 h-16 border-2 border-yellow-500 rounded-full' />

    //             </div>
    //             <div>
    //                 <h6 className='text-white'>{item.name}</h6>
    //                 <span className='text-white'>{item.position}</span>
    //             </div>
               
    //             </div>
    //             <div className='flex gap-1 -m-4'>
    //             <img className='w-7 h-7 p-1 rounded-lg cursor-pointer bg-white' src="previous.svg" alt="" onClick={previous}/>
    //             <img className='w-7 h-7 p-1 rounded-lg cursor-pointer bg-white' src="next.svg" alt="" onClick={next}/>
    //             </div>
    //             </div>
    //         </div>
            
        
    //     ))}  

       
            
    //     </div>


    // </section>
    

    <section className="">
        
        
        <div className='bg-gradient-to-r from-teal-700 to-gray-400 text-left rounded-xl p-6 border-2 border-green-900 mt-5'> 
            <h1 className='text-3xl text-left font-bold  text-yellow-400 font-mono animate-pulse mb-5'>Testimonial</h1>
            <div className='flex items-start justify-start'>
                <h1 className='mb-5 font-mono text-slate-950 font-bold text-2xl ml-10'>What my Clients Say about me!</h1>
            </div>
            <Swiper
                modules={[Navigation,Autoplay]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
               autoplay={{delay:6000, disableOnInteraction:false}}
            >
            {testimonials.map((item,index)=>(
               
                <SwiperSlide>
            <div class="relative flex justify-center w-72 bg-gradient-to-l from-gray-100 to-slate-400 rounded-3xl shadow-md shadow-[rgba(20,5,100,200)] mb-3 ml-9" key={item.name}>
                <div class="px-5 py-6">
                    <div class="flex items-start justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src={item.avatar} alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-bold text-black truncate">{item.name}</p>
                            <p class="text-sm text-gray-950 truncate">{item.position}</p>
                        </div>
                        <img src="facebook.png" className='size-9 saturate-200 contrast-125'/>
                        
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-black font-semibold italic">
                            {item.text}
                            
                        </p>
                        <div className="rating mt-2 flex justify-center items-center shadow-2xl shadow-yellow-400" >
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)] checked" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]"  />
                        </div>
                    </blockquote>
                </div>
            </div>
            </SwiperSlide>

           
            ))}
             </Swiper>
        {/* <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
           // autoplay={{delay:6000, disableOnInteraction:false}}
        >
            <SwiperSlide>
            <div class="relative flex justify-center w-72 bg-gradient-to-l from-gray-300 to-slate-400 rounded-3xl  shadow-lg shadow-slate-800 mb-3 ml-9">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Darrell Steward</p>
                            <p class="text-sm text-gray-700 truncate">@darrels</p>
                        </div>
                        <img src='man.png' className='size-9'/>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-black font-semibold italic">
                            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            
                        </p>
                        <div className="rating mt-2 flex justify-center items-center shadow-2xl shadow-yellow-400" >
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)] checked" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]"  />
                        </div>
                    </blockquote>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="relative flex justify-center w-72 bg-gradient-to-l from-gray-300 to-slate-400 rounded-md shadow-lg shadow-slate-800 mb-3 ml-9">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Darrell Steward</p>
                            <p class="text-sm text-gray-700 truncate">@darrels</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                        <svg id="instagram" fill="rgb(217, 50, 117)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='size-7' viewBox="0 0 169.063 169.063"
xml:space="preserve">
  <g>
    <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                          c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
    <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
    <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                          C135.661,29.421,132.821,28.251,129.921,28.251z" />
  </g>
</svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-black font-semibold italic">
                            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            
                        </p>
                        <div className="rating mt-2 flex justify-center items-center shadow-2xl shadow-yellow-400" >
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)] checked" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]"  />
                        </div>
                    </blockquote>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="relative flex justify-center w-72 bg-gradient-to-l from-gray-300 to-slate-400 rounded-md shadow-lg shadow-slate-800 mb-3 ml-9">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Darrell Steward</p>
                            <p class="text-sm text-gray-500 truncate">@darrels</p>
                        </div>
                        <a href="#" title="" class="inline-block text-sky-500">
                            <svg class="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-black font-semibold italic">
                            You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            
                        </p>
                        <div className="rating mt-2 flex justify-center items-center shadow-2xl shadow-yellow-400" >
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)] checked" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]" />
                            <input disabled type="radio" name="rating-1" className="mask mask-star bg-[rgb(255,255,1)]"  />
                        </div>
                    </blockquote>
                </div>
            </div>
            </SwiperSlide>
            
        </Swiper> */}
           
        </div>
    </section>
  
  )

  
}

export default Testimonial