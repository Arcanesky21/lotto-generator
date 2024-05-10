import {motion} from "framer-motion"
import cashpot from "../assets/GameLogos-01.png"
import superLoto from "../assets/GameLogos-02.png"
import lotto from "../assets/GameLogos-03.png"
import pickthree from "../assets/GameLogos-05.png"
import picktwo from "../assets/GameLogos-06.png"
import topdraw from "../assets/GameLogos-07.png"
import luckyfive from "../assets/GameLogos-09.png"
import pickfour from "../assets/GameLogos-10.png"
import hotpick from "../assets/GameLogos-11.png"
import {useState} from "react";

const allImages = [
    {
        game: cashpot,
        title: "Cashpot",
        description: "Generates 1 number between 1-36",
        url: "https://supremeventures.com/game-results/?action=cashpot&mode=how"
    },
    {
        game: superLoto,
        title: "superLoto",
        description: "Generates 5 number between 1-35 and 1 from 1-10",
        url: "https://supremeventures.com/game-results/?action=superlotto&mode=how"
    },
    {
        game: lotto,
        title: "lotto",
        description: "Generates 6 number between 1-36",
        url: "https://supremeventures.com/game-results/?action=lotto&mode=how"
    },
    {
        game: pickthree,
        title: "pickthree",
        description: "Generates 3 number between 0-9",
        url: "https://supremeventures.com/game-results/?action=pick3&mode=how"
    },
    {
        game: picktwo,
        title: "picktwo",
        description: "Generates 2 number between 1-36",
        url: "https://supremeventures.com/game-results/?action=pick2&mode=how"
    },
    {
        game: topdraw,
        title: "topdraw",
        description: "Generates 5 number between 1-22",
        url: "https://supremeventures.com/game-results/?action=topdraw&mode=how"
    },
    {
        game: luckyfive,
        title: "luckyfive",
        description: "Generates 5 number between 1-26",
        url: "https://supremeventures.com/game-results/?action=lucky5&mode=how"
    },
    {
        game: pickfour,
        title: "pickfour",
        description: "Generates 4 number between 0-9",
        url: "https://supremeventures.com/game-results/?action=pick4&mode=how"
    },
    {
        game: hotpick,
        title: "hotpick",
        description: "Generates 1 number between 1-15",
        url: "https://supremeventures.com/game-results/?action=hotpick"
    },

]


export default function Card() {

    const [updatedInput, setUpdatedInput] = useState(99);
    const [result, setResults] = useState([''])

    function handleNumberGenerate(index: number) {

        const generatedNumbers = []

        switch (index) {
            case 0:
                generatedNumbers.push(Math.floor(1 + Math.random() * (37 - 1)).toString());
                setResults(generatedNumbers);
                break;
            case 1:
                for (let i = 0; i < 5; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (37 - 1)).toString());
                }

                for (let i = 0; i < 1; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (11 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 2:
                //lotto
                for (let i = 0; i < 6; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (39 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 3:
                //pick 3
                for (let i = 0; i < 3; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (10 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 4:
                //pick 2
                for (let i = 0; i < 2; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (37 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 5:
                //topdraw
                for (let i = 0; i < 5; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (23 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 6:
                //lucky 5
                for (let i = 0; i < 5; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (27 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;
            case 7:
                //pick 4
                for (let i = 0; i < 4; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (11 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;

            case 8:
                //hotpick
                for (let i = 0; i < 1; i++) {
                    generatedNumbers.push(Math.floor(1 + Math.random() * (16 - 1)).toString());
                }

                setResults(generatedNumbers);
                break;

        }

        setUpdatedInput(index);

    }

    return (
        <>
            <ul>

                {allImages.map((img, index) => (
                    <li key={index} onClick={() => handleNumberGenerate(index)}>
                        <motion.div
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 1.05}}
                            className="border rounded-lg p-5 mt-10 flex items-center flex-col border-gray-400">
                            <img className="w-40" src={img.game} alt={img.title}/>
                            <div className="flex p-5 flex-col items-center text-center font-bold ">
                                {img.description}
                            </div>

                            <div className="flex items-center justify-evenly w-full gap-5 p-5 text-center">
                                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 1.1}} href={img.url}
                                          className="border bg-[#165259] transition-all ease-in-out duration-700 border-[#165259] hover:bg-[#1ea7ae] font-bold rounded-md w-full p-2">
                                    How to play
                                </motion.a>
                            </div>

                            <div className=" w-full p-5">
                                <input
                                    className={" bg-[#165259] shadow-[#0e7177] tracking-widest shadow-md p-2 w-full rounded-sm text-[#ccfbf7] text-center"}
                                    readOnly={true} type="text"
                                    value={index === updatedInput ? result : "Tap to generate number"}
                                    placeholder="Tap to generate number"/>
                            </div>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </>
    )
}