"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function localEvent() {
    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetcher() {
            try {
                const response = await fetch(
                    "https://run.mocky.io/v3/a1d60ca7-6402-40d8-95ac-71c1759b851a"
                );
                const data = await response.json();
                setImage(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }

        fetcher();
    }, []);
    return (
        <>
            <div className='container mx-auto mb-10 mt-10'>
                <h3 className='text-[20px] md:text-[46px] text-[#3a3a3a] uppercase mb-4 md:mb-[30px] md:leading-[44px] block align-top relative text-center'>FEATURED OFFERS</h3>
                <a href="#" className="text-[#fff] leading-[40px] px-4 bg-[#000] text-sm md:text-[16px] border-0  mb-5 block mx-auto text-center mt-1 max-w-[145px] uppercase">Get A Quote</a>
                <div id="rotab-1" className="tab-content current">
                    {loading ? (
                        <div className='p-2.5 rounded-0 bg-white shadow-[0_0px_9px_0px_rgba(0,0,0,0.10)]'>
                            <Image
                                loading="lazy"
                                alt="block text-center"
                                className="card-Image-top Image-fluid"
                                src="https://hyperlocalpreview4.azureedge.net/-/media/images/feature/arena/site-specific-global-content/n/narayani-motors/e-puri/content-with-image/bharat-utsav_event-1.jpg?modified=20210414204113"
                                width="304"
                                height="215"
                            />
                            <div className="block text-center">
                                <p className='text-sm pr-[10px] text-left'>Lorem ipsum dolor sit amet, consectetadipiscing elit, sed do eiusmod tempor incididunt ut ldolore</p>
                            </div>
                        </div>
                    ) : (
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView={4}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                766: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1080: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {image.map((i, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='p-2.5 rounded-0 bg-white shadow-[0_0px_9px_0px_rgba(0,0,0,0.10)] max-sm:mx-8'>
                                            <Image
                                                loading="lazy"
                                                alt="block text-center"
                                                className="card-Image-top Image-fluid"
                                                src={i.image}
                                                width="304"
                                                height="215"
                                            />
                                            <div className="block text-center">
                                                <p className='text-sm pr-[10px] text-left'>{i.title}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    )}
                </div>
            </div >
        </>
    )
}
