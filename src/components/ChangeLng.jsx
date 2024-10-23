import { useState , useEffect } from "react";
import i18n from "i18next";
import Language from "../assets/SVG/language";

const ChangeLng = () => {

    const [change , setChange] = useState(false)


    return (
        <div onClick={() => {setChange(!change)}} className="cursor-pointer w-[44px] h-[44px] relative  mx-4 flex justify-center items-center">
            <Language />

            {
                change && (
                    <div className="lngs">
                        <button className="value" onClick={() => {
                            i18n.changeLanguage('ar') 
                            window.document.dir = 'rtl'
                        }}>
                            عربي
                        </button>
                        <button className="value" onClick={() => {
                            i18n.changeLanguage('en') 
                            window.document.dir = 'ltr'
                        }}>
                            English
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default ChangeLng;