import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bacahaytir from "../assets/bacahaytir2.png";
import games from '../assets/games.png';
export default function Slider() {

    const { t } = useTranslation();

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
    let slides = [
        "https://ovio.am/storage/uploads/special_offers//2kcacxfLLWnelU3kBUBifDVTFrsxYi0XSbA29vTz.png",
        bacahaytir,
        games,
    ];
    let texts = [
        t("JoinAnnualAllIn"),
        t("WelcomeToOvio"),
        t("FeelTheGame")
    ];

    return (
        <div className="overflow-hidden w-[1900px] h-[850px] top-[130px] absolute left-0 bg-purple max-xl:w-[80vw] max-xl:h-[60vh] max-xl:w-[1600px]">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div className="min-w-full flex" key={index}>
                        <div className="overflow-hidden ml-[600px] relative w-[1400px] h-[850px] max-xl:ml-0 max-xl:w-full max-xl:h-[60vh]">
                            <img
                                src={s}
                                alt=""
                                className="w-full h-full object-cover rounded-l-full rounded-tl-[1800px] rounded-bl-[1900px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                onClick={nextSlide}
            >
                &#10095;
            </button>
            <div className="absolute top-[300px] left-[100px] w-[500px] p-3 text-piruz font-light text-[3.714rem] tracking-[0px] leading-[4.571rem] max-xl:top-[150px] max-xl:left-[20px] max-xl:w-[300px] max-xl:text-[2rem] max-xl:leading-[2.5rem]">
                {texts[currentSlide]}
                <button className="mt-10 bg-piruz flex items-center justify-center text-[20px] w-[200px] h-[40px] text-white rounded">
                    {t("JoinNow")}
                </button>

            </div>
        </div>
    );
}
