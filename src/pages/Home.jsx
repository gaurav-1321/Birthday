import React, { useEffect, useState } from "react";
import png from '../assets/1.png'
import ballon1 from '../assets/balloon1.png'
import ballon2 from '../assets/balloon2.png'
import decorate from '../assets/decorate.png'
import decoFlowers from '../assets/decorate_flower.png'
import hat from '../assets/hat.png'
import smileIcon from '../assets/smiley_icon.png'
import { Link } from "react-router";
import BookCanvas from "../components/BookCanvas";
import SmallLetter from "../components/SmallLetter";
import ashnaImg from "../assets/ashna.png";

const Home = () => {
    // ------------------- Hooks 
    const [Active, SetActive] = useState(true)

    useEffect(() => {
        let datetxt = "22 July";
        let charArrDate = datetxt.split('');
        let currentIndex = 0;
        let date__of__birth = document.querySelector(".date__of__birth span");
        let typedText = "";

        setTimeout(function () {
            let timeDatetxt = setInterval(function () {
                if (currentIndex < charArrDate.length) {
                    typedText += charArrDate[currentIndex];
                    date__of__birth.textContent = typedText; // set fresh each time
                    currentIndex++;
                } else {
                    clearInterval(timeDatetxt);
                    if (!date__of__birth.classList.contains("svg-added")) {
                        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        svg.setAttribute("width", "24");
                        svg.setAttribute("height", "24");
                        svg.setAttribute("viewBox", "0 0 24 24");
                        svg.innerHTML = `<path fill="#a31414" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"/> <path fill="#a31414" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity="0.5"/>`;
                        let container = document.querySelector(".date__of__birth");
                        container.prepend(svg);
                        container.appendChild(svg.cloneNode(true));
                        date__of__birth.classList.add("svg-added");
                    }
                }
            }, 100);
        }, 12000);
    }, []);


    return (
        <>
            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span>
                                <span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span>
                                <span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span>
                                <span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span>
                                <span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span>
                                <span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span>
                                <span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="130" />
                            </div>
                        </div>

                        <div className="date__of__birth">
                            <span></span>
                        </div>

                        <div className="btn flex md:gap-2 md:flex-row flex-col">
                            <button onClick={() => SetActive(!Active)} id="btn__letter">
                                <div className="mail flex items-center justify-center gap-2 md:text-[1rem] text-sm">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
                                        <line x1="12" y1="8" x2="12" y2="20"></line>
                                        <line x1="3" y1="14" x2="21" y2="14"></line>
                                        <path d="M12 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"></path>
                                        <path d="M12 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path>
                                    </svg>
                                    Click Here Ashna
                                </div>
                            </button>
                            <div id="FromRexon">
                                <Link to={'/letter'} className="flex items-center gap-2 md:text-[1rem] text-sm">
                                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    From Gaurav
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={ashnaImg} alt="Ashna" />
                            </div>
                            <div className="name">
                                <span>Ashna</span>
                            </div>
                            <div className="balloon_one">
                                <img width="100px" src={ballon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="100px" src={ballon2} alt="" />
                            </div>
                        </div>

                        <div className="cricle">
                            <div className="text__cricle">
                                {["h", "a", "p", "p", "y", "-", "b", "i", "r", "t", "h", "d", "a", "y", "-"].map(
                                    (char, i) => (
                                        <span key={i} style={{ "--i": i + 1 }}>
                                            {char}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}

                <div className="decorate_flower--one" style={{ "--t": "15s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>

                <div className="smiley__icon">
                    <img src={smileIcon} alt="" width="100" />
                </div>






                {/* =========================== BoxMail Canvas =============================== */}
                <BookCanvas active={Active} setActive={SetActive} />

                {/* ========================== Small letter from rajib ========================= */}
                <section className="smallLetter absolute md:-bottom-26 -bottom-40 md:left-[45%] left-[50%] -translate-x-1/2" style={{ "--t": "15.6s" }}>
                    <SmallLetter />
                </section>
            </div>
        </>
    );
};

export default Home;
