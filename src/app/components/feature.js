"use client";
import Link from "next/link";
import Image from "next/image";
import Modal from "./modal";

// Import Swiper React components
import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feature = () => {
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModel] = useState(false)
  const [showModalTitle, setShowModelTitle] = useState("Get A Quote")
  function renderModal(o, i) {
    setShowModel(o)
    setShowModelTitle(i)
  }

  useEffect(() => {
    async function fetcher() {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/fd876491-f7ab-4b91-8786-da646daf00c4"
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
      <div className="container mx-auto mb-10 px-4">
        <h3 className='text-[20px] md:text-[46px] text-[#3a3a3a] uppercase mb-[30px] leading-[44px] block align-top relative text-center'>FEATURED OFFERS</h3>

        <div className=' md:grid-cols-3 gap-[30px]'>
          <input id="ro_channel" type="hidden" value="Nexa" />
          <div className="featured_ro_padding">
          {loading ? (
            <div className='p-[30px] pt-0 border border-1 rounded-[4px]'>
                  <Image
                    className="card-img-top img-fluid"
                    src="https://hyperlocalcd1.azureedge.net/-/media/images/feature/nexa/channel-specific-global-content/car-brands/baleno/car-image/baleno-blue.ashx?modified=20220224074819"
                    alt="Card image"
                    width={540}
                    height={305}
                  />
                  <div className="block text-center">
                    <h4 className='text-base md:text-[24px] leading-tight'>Test</h4>
                    <h4 className='text-base md:text-[24px] leading-tight'>Ex-showroom Price</h4>
                    <h4 className='text-base md:text-[24px] leading-tight'><strong>₹&nbsp;0</strong></h4>
                    <h4 className='text-base md:text-[24px] leading-tight'>Save Up to</h4>
                    <h4>
                      <strong>₹&nbsp;N/A</strong>
                    </h4>
                    <a className="text-[#fff] leading-[40px] px-4 bg-[#888c8f] text-[16px] border-0 w-full mb-2 block max-w-[328px] mx-auto text-center mt-1" >Get A Quote</a>
                    <a className="text-[#fff] leading-[40px] px-4 bg-[#888c8f] text-[16px] border-0 w-full mb-2 block max-w-[328px] mx-auto text-center" >E-Book Now</a>
                  </div>
                </div>
          ) : (
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                766: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1080: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {image.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='p-[30px] pt-0 border border-1 rounded-[4px]'>
                  <Image
                    className="card-img-top img-fluid"
                    src={i.image}
                    alt="Card image"
                    width={540}
                    height={305}
                  />
                  <div className="block text-center">
                    <h4 className='text-base md:text-[24px] leading-tight'>{i.name}</h4>
                    <h4 className='text-base md:text-[24px] leading-tight'>{i.title}</h4>
                    <h4 className='text-base md:text-[24px] leading-tight'><strong>₹&nbsp;{i.price}</strong></h4>
                    <h4 className='text-base md:text-[24px] leading-tight'>{i.saving_title}</h4>
                    <h4>
                      <strong>₹&nbsp;{i.saving}</strong>
                    </h4>
                    <a className="text-[#fff] leading-[40px] px-4 bg-[#888c8f] text-[16px] border-0 w-full mb-2 block max-w-[328px] mx-auto text-center mt-1" onClick={() => renderModal(true, "Get A Quote")}>Get A Quote</a>
                    <a className="text-[#fff] leading-[40px] px-4 bg-[#888c8f] text-[16px] border-0 w-full mb-2 block max-w-[328px] mx-auto text-center" onClick={() => renderModal(true, "E-Book Now")}>E-Book Now</a>
                  </div>
                </div>
              </SwiperSlide>
               );
              })}
              <div className="custom-pagination"></div>
            </Swiper>
            )}
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModel(false)} dataTitle={showModalTitle} />
    </>
  );
};

export default Feature;
