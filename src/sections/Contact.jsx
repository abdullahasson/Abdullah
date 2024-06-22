import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
// import Copy from "../components/copy"


function Contact() {

    const { t } = useTranslation()

    const secrit = import.meta.env

    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();

    function ClearInputs(isSucces, whYfailed) {
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''

        isSucces ? toast.success('Sent') : toast.error(whYfailed)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(`service_wkvbbdn`, `template_csp0owc`, form.current, {
                publicKey: `Fp-bsNyp7ZHevdX6W`,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    ClearInputs(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    ClearInputs(false, error.text)
                },
            );
    };


    return (
        <section className="contact flex flex-col justify-center items-center" id="contact">
            <h2 className="heading text-center text-[3.6rem] mb-2" data-aos="fade-down">{t("contact")} <span>{t("Mi")}</span></h2>

            <div className='flex justify-between items-center w-[90%] px-6 mt-2 rounded-xl'>
                <div className="flex flex-col gap-y-11 w-[350px]">
                    <div data-aos="fade-right" data-aos-delay="100" className="relative flex items-center justify-between p-6 rounded-lg bg-[var(--second-bg-color)]">
                        <div className="title py-2 text-[22px]">
                            {t("WhatsApp")} :
                        </div>
                        

                        <div className="text-[18px] text-[var(--text-color)]">
                            +963 932 680 992
                        </div>

                        {/* <Copy text="+963 932 680 992" className="absolute -right-16 " /> */}
                    </div>

                    <div data-aos="fade-right" data-aos-delay="250" className="relative flex items-center justify-between p-6 rounded-lg bg-[var(--second-bg-color)]">
                        <div className="title py-2 text-[22px] ">
                            {t("Telegram")} :
                        </div>
                        
                        <div className="text-[18px] text-[var(--text-color)]">
                            @abdullahasson
                        </div>

                        {/* <Copy text="@abdullahasson" className="absolute -right-16 " /> */}
                    </div>

                    <div data-aos="fade-right" data-aos-delay="350" className="relative flex items-center justify-between p-6 rounded-lg bg-[var(--second-bg-color)]">
                        <div className="title py-2 text-[22px] ">
                            {t("Email")} :
                        </div>
                        
                        <div className="text-[18px] text-[var(--text-color)]">
                            bh532997@gmail.com
                        </div>

                        {/* <Copy text="bh532997@gmail.com" className="absolute -right-16 " /> */}
                    </div>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    data-aos="fade-left"
                    className='w-[400px] text-center'
                >
                    <div className="flex-col flex">
                        <input ref={name} className='w-full text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="text" name="from_name" placeholder={t("inputName")} />
                        <input ref={email} className='w-full text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="email" name="from_email" placeholder={t("inputEmail")} />
                    </div>

                    <textarea ref={message} className='bg-[var(--second-bg-color)] w-full text-[1.6rem] text-[color:var(--text-color)] resize-none mx-0 my-[0.7rem] p-6 rounded-[0.8rem]' required name="message" id cols={30} rows={10} placeholder={t("inputMessage")} defaultValue={""} />
                    <input type="submit" value={t("send")} className="btn cursor-pointer mt-2" />
                </form>
            </div>

            <Toaster
                toastOptions={{
                    // unstyled: true,
                    classNames: {
                        toast: `p-10 w-full `,
                        // title: 'text-white',
                        // description: 'text-red-400',
                        // actionButton: 'bg-zinc-400',
                        // cancelButton: 'bg-orange-400',
                        // closeButton: 'bg-lime-400',
                    },
                }}
            />
        </section>
    )
}

export default Contact