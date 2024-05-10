import { motion } from "framer-motion"
import cashpot from "../assets/GameLogos-01.png"
import superLoto from "../assets/GameLogos-02.png"
import lotto from "../assets/GameLogos-03.png"
import pickthree from "../assets/GameLogos-05.png"
import picktwo from "../assets/GameLogos-06.png"
import topdraw from "../assets/GameLogos-07.png"
import luckyfive from "../assets/GameLogos-09.png"
import pickfour from "../assets/GameLogos-10.png"
import hotpick from "../assets/GameLogos-11.png"

const allImages = [
    {game : cashpot, title: "Cashpot", description: "Generates 1 number between 1-36", url: "https://supremeventures.com/game-results/?action=cashpot&mode=how"},
    {game : superLoto, title: "superLoto", description: "Generates 5 number between 1-35 and 1 from 1-10", url : "https://supremeventures.com/game-results/?action=superlotto&mode=how"},
    {game : lotto, title: "lotto", description: "Generates 6 number between 1-36", url : "https://supremeventures.com/game-results/?action=lotto&mode=how"},
    {game : pickthree, title: "pickthree", description: "Generates 3 number between 0-9", url : "https://supremeventures.com/game-results/?action=pick3&mode=how"},
    {game : picktwo, title: "picktwo", description: "Generates 2 number between 1-36", url : "https://supremeventures.com/game-results/?action=pick2&mode=how"},
    {game : topdraw, title: "topdraw", description: "Generates 5 number between 1-22", url : "https://supremeventures.com/game-results/?action=topdraw&mode=how"},
    {game : luckyfive, title: "luckyfive", description: "Generates 5 number between 1-26", url : "https://supremeventures.com/game-results/?action=lucky5&mode=how"},
    {game : pickfour, title: "pickfour", description: "Generates 4 number between 0-9", url : "https://supremeventures.com/game-results/?action=pick4&mode=how"},
    {game : hotpick, title: "hotpick", description: "Generates 1 number between 1-15", url : "https://supremeventures.com/game-results/?action=hotpick"},

]

export default function Card(){

    return (
        <>
            <ul>
                
                {allImages.map((img, index) => (
                    <li key={index}>
                        <motion.div
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 1.05}}
                            className="border rounded-lg p-5 mt-10 flex items-center flex-col border-gray-400">
                            <img className="w-40" src={img.game} alt={img.title}/>
                            <div className="flex p-5 flex-col items-center text-center font-bold ">
                                {img.description}
                            </div>

                            <div className="flex items-center justify-evenly w-full gap-5 p-5 text-center">
                                <motion.a whileHover={{scale : 1.1}} whileTap={{scale : 1.1}} className="border bg-[#165259] transition-all ease-in-out duration-700 border-[#165259] hover:bg-[#1ea7ae] font-bold rounded-md w-full p-2" >
                                    How to play
                                </motion.a>
                            </div>

                            <div className=" w-full p-5">
                                <input
                                    className={"shadow-[#0e7177] shadow-md p-2 w-full rounded-sm text-[#ccfbf7] text-center"}
                                    disabled={true} type="text" placeholder="Tap to generate number"/>
                            </div>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </>
    )
}