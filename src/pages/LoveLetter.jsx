import React, { useEffect, useRef, useState } from 'react'

const LoveLetter = () => {
    const lettersData = [
        {
            id: 1,
            name: "Gaurav",
            msg: "Happy Birthday, Ashna! Wishing you the happiest and most wonderful day ever!",
            showQuestion: true,
            answered: false,
        },
        {
            id: 2,
            name: "Gaurav",
            msg: "Okay so first things first — Happy Birthday! 🎉 May this year bring you good vibes, good food, and zero bad days. You deserve it. (Also please eat cake. That's an order.)",
        },
        {
            id: 3,
            name: "Gaurav",
            msg: "Genuinely hoping life gets easier for you this year. You've worked hard, you've been patient, and you've kept going even when things were rough. That takes real strength. Here's to things finally going your way, Ashna! 🙌",
        },
        {
            id: 4,
            name: "Gaurav",
            msg: "You know, I was going to write you a poem but honestly my poetry is terrible and you deserve better. So instead I'll just say this: you're a genuinely good person and I hope the world treats you like one. Happy Birthday! 😄",
        },
        {
            id: 5,
            name: "Gaurav",
            msg: "Wishing you a future full of happiness, peace, and Wi-Fi that never disconnects. The important things in life, you know? But seriously — I hope everything you've been hoping for starts falling into place for you this year. 💫",
        },
        {
            id: 6,
            name: "Gaurav",
            msg: "May this birthday be the start of your best chapter yet. No stress, no drama, just good moments and good people. You've already handled enough hard stuff — it's your turn to just enjoy life for a bit. 🌟",
        },
        {
            id: 7,
            name: "Gaurav",
            msg: "Not everyone gets to have a friend like you. You're real, you're kind, and somehow you make things better just by being around. I'm genuinely glad I know you, Ashna. Have an amazing birthday! 🎂",
        },
        {
            id: 8,
            name: "Gaurav",
            msg: "Last one! Just wanted to say — take care of yourself, stay happy, and know that someone out here is actually rooting for you. Always. Happy Birthday, Ashna. Hope it's a great one! ✨",
        },
    ];
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [letters, setLetters] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState(10);
    const lettersContainerRef = useRef(null);

    const [noBtnPos, setNoBtnPos] = useState({ left: 'auto', top: 'auto', position: 'relative' });

    const moveNoButton = () => {
        // Generate random position within boundaries of the card (e.g. 10% to 70% width, 15% to 65% height)
        const randomX = Math.floor(Math.random() * 60) + 10;
        const randomY = Math.floor(Math.random() * 50) + 15;
        setNoBtnPos({
            position: 'absolute',
            left: `${randomX}%`,
            top: `${randomY}%`
        });
    };

    const handleAnswerYes = (id) => {
        setLetters((prev) =>
            prev.map((l) => (l.id === id ? { ...l, answered: true } : l))
        );
    };

    useEffect(() => {
        setLetters(lettersData);
    }, []);
    // Drag logic
    const handleMouseDown = (e) => {
        const isTouch = e.type === "touchstart";
        const startEvent = isTouch ? e.touches[0] : e;

        if (startEvent.target.tagName === "BUTTON") return;

        const letterEl = e.currentTarget;

        const rect = letterEl.getBoundingClientRect();

        const offsetX = startEvent.clientX - rect.left;
        const offsetY = startEvent.clientY - rect.top;

        const startLeft = rect.left + window.scrollX;
        const startTop = rect.top + window.scrollY;

        letterEl.style.transform = "none";
        letterEl.classList.remove("-translate-x-1/2");
        letterEl.classList.remove("-translate-y-1/2");

        letterEl.style.position = "absolute";
        letterEl.style.left = `${startLeft}px`;
        letterEl.style.top = `${startTop}px`;
        letterEl.style.margin = 0;
        letterEl.style.zIndex = zIndexCounter;

        const moveAt = (posX, posY) => {
            letterEl.style.left = `${posX - offsetX}px`;
            letterEl.style.top = `${posY - offsetY}px`;
        };

        const onMouseMove = (moveEvent) => {
            const ev = isTouch ? moveEvent.touches[0] : moveEvent;
            moveAt(ev.clientX, ev.clientY);
        };

        const onMouseUp = () => {
            if (isTouch) {
                document.removeEventListener("touchmove", onMouseMove);
                document.removeEventListener("touchend", onMouseUp);
            } else {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }
        };

        if (isTouch) {
            document.addEventListener("touchmove", onMouseMove);
            document.addEventListener("touchend", onMouseUp);
        } else {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }
    };


    const handleCloseLetter = (id) => {
        setLetters((prev) => prev.filter((l) => l.id !== id));
    };


    return (
        <main className='munna bg-[#8b0000] h-screen w-full overflow-hidden'>
            <section className="munna cssletter z-10">
                <div className={`envelope ${openEnvelope ? "active" : ""}`}>
                    <button
                        className="munna heart"
                        id="openEnvelope"
                        aria-label="Open Envelope"
                        onClick={() => setOpenEnvelope(true)}
                    >
                        <span className="munna heart-text">Open</span>
                    </button>
                    <div className="munna envelope-flap text-black relative">
                        <div className='munna absolute left-1/2 top-[20%] -translate-x-1/2 flex items-center justify-center flex-col md:gap-y-2'>
                            <span className='munna font-sriracha md:text-2xl text-lg'>Envelope Of Wishes</span>
                            <span className='munna font-dancingScript md:text-3xl text-xl'>Ashna</span>
                        </div>
                    </div>
                    <div className="munna envelope-folds">
                        <div className="munna envelope-left"></div>
                        <div className="munna envelope-right"></div>
                        <div className="munna envelope-bottom"></div>
                    </div>
                </div>

                <div className="munna letters" ref={lettersContainerRef}>
                    {letters.map((letter) => (
                        <blockquote
                            key={letter.id}
                            className="munna letter center -translate-x-1/2 -translate-y-1/2"
                            id={letter.id}
                            tabIndex={0}
                            style={{
                                position: 'absolute',
                                top: window.innerWidth < 768 ? '53%' : '50%',
                                left: window.innerWidth < 768 ? '50%' : '50%',
                                transform: 'none',
                            }}

                            onMouseDown={(e) => handleMouseDown(e, letter.id)}
                            onTouchStart={handleMouseDown}
                        >
                            {letter.showQuestion && !letter.answered ? (
                                <div className="flex flex-col items-center justify-center h-full w-full p-4 select-none relative">
                                    <p className="font-dancingScript font-bold text-center text-xl md:text-2xl mb-4 leading-snug">
                                        Promise to always be happy and have a good life? 😊
                                    </p>
                                    <div className="flex gap-6 items-center justify-center w-full min-h-[60px] relative">
                                        <button
                                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full cursor-pointer transition-colors duration-200"
                                            onClick={() => handleAnswerYes(letter.id)}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            style={noBtnPos}
                                            className="bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 select-none cursor-pointer"
                                            onMouseEnter={moveNoButton}
                                            onTouchStart={(e) => {
                                                e.preventDefault();
                                                moveNoButton();
                                            }}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <button
                                        className="munna closeLetter"
                                        title={`Close ${letter.name}'s letter`}
                                        onClick={() => handleCloseLetter(letter.id)}
                                    >
                                        Close {letter.name}'s letter
                                    </button>
                                    <p>{letter.msg}</p>
                                    <cite>{letter.name}</cite>
                                </>
                            )}
                        </blockquote>
                    ))}
                </div>
            </section>


            {/* Heart falling and beating removed for non-romantic theme */}
        </main>
    )
}

export default LoveLetter