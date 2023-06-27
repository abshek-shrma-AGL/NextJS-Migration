"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";

export default function App() {
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetcher() {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/95b47aa8-33f0-4de3-830f-c186631aa693"
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
    <div className="pb-10">
      {loading ? (
        <>
          <Image
            src="/images/banner/fronx_desk.png"
            alt="Competent Automobiles Gazipur, New Delhi"
            className="desktopslide img-fluid "
            width="1600"
            height="570"
          />
          <Image
            src="/images/banner/fronx_m.png"
            alt="Competent Automobiles Gazipur, New Delhi"
            className="mobileslide img-fluid "
            width="360"
            height="283"
          />
        </>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
        >
          {image.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="item">
                  <Link href="#">
                    <Image
                      src={i.image}
                      alt="Competent Automobiles Gazipur, New Delhi"
                      className="desktopslide img-fluid "
                      width="1600"
                      height="570"
                    />
                    <Image
                      src={i.image_mobile}
                      alt="Competent Automobiles Gazipur, New Delhi"
                      className="mobileslide img-fluid "
                      width="360"
                      height="283"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination"></div>
        </Swiper>
      )}
    </div>
  );
}