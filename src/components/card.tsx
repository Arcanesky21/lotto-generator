import { motion } from "framer-motion"
import cashpot from "../assets/GameLogos-01.png"
import superLoto from "../assets/GameLogos-02.png"
import lotto from "../assets/GameLogos-03.png"
import pickthree from "../assets/GameLogos-05.png"
import picktwo from "../assets/GameLogos-06.png"
import topdraw from "../assets/GameLogos-07.png"
import dollaze from "../assets/GameLogos-08.png"
import luckyfive from "../assets/GameLogos-09.png"
import pickfour from "../assets/GameLogos-10.png"
import hotpick from "../assets/GameLogos-11.png"

const allImages = [
    {game : cashpot, title: "Cashpot", description: "Generates 1 number between 1-36"},
    {game : superLoto, title: "superLoto", description: "Generates 1 number between 1-36"},
    {game : lotto, title: "lotto", description: "Generates 1 number between 1-36"},
    {game : pickthree, title: "pickthree", description: "Generates 1 number between 1-36"},
    {game : picktwo, title: "picktwo", description: "Generates 1 number between 1-36"},
    {game : topdraw, title: "topdraw", description: "Generates 1 number between 1-36"},
    {game : luckyfive, title: "luckyfive", description: "Generates 1 number between 1-36"},
    {game : dollaze, title: "dollaze", description: "Generates 1 number between 1-36"},
    {game : pickfour, title: "pickfour", description: "Generates 1 number between 1-36"},
    {game : hotpick, title: "hotpick", description: "Generates 1 number between 1-36"},

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
                            <div className="flex p-5 flex-col items-center font-bold ">
                                {img.description}
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