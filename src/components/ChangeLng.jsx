import { useState , useEffect } from "react";
import i18n from "i18next";
import cookies from "js-cookie"
import Language from "../assets/language";

const ChangeLng = () => {

    const [change , setChange] = useState(false)

    const lng = cookies.get("i18next") || "en"

    useEffect(() => {
        window.document.dir = i18n.dir()
    } , [lng])
    

    return (
        <div onClick={() => {setChange(!change)}} className="cursor-pointer w-[44px] h-[44px] absolute right-16 mx-4 flex justify-center items-center">
            <Language />

            {
                change && (
                    <div className="lngs">
                        <button className="value" onClick={() => {i18n.changeLanguage("ar")}}>
                            عربي
                        </button>
                        <button className="value" onClick={() => {i18n.changeLanguage("en")}}>
                            English
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default ChangeLng;