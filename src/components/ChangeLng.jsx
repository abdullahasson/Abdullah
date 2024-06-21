import { useState , useEffect } from "react";
import i18n from "i18next";
import Language from "../assets/language";

const ChangeLng = () => {

    const [change , setChange] = useState(false)

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
                        <button className="value">
                            español
                        </button>
                        <button className="value">
                            Accessibility
                        </button>
                        <button className="value">
                            Notifications
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default ChangeLng;