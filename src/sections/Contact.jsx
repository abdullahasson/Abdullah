// react
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
// email js
import {send , init} from '@emailjs/browser';
// components
import Title from '../components/Title';
import { Toaster, toast } from 'sonner'


function Contact() {

    const { t } = useTranslation()

    useEffect(() => {
        init('Fp-bsNyp7ZHevdX6W');
    } , [])

    const { register , handleSubmit , reset } = useForm()

    const onSubmit = (data) => {
        send('service_wkvbbdn', 'template_csp0owc', data)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          reset(); // Reset the form after successful submission
        })
        .catch((err) => {
          console.error('FAILED...', err);
        });
    }

    return (
        <section className="contact flex flex-col justify-center items-center pt-16" id="contact">
            <Title 
                text={t('contactTitle')}
            />

            <div className='flex flex-col justify-between items-center gap-10 px-6 mt-2 rounded-xl'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-[400px] text-center'
                    data-aos='zoom-in'
                >
                    <div className="flex-col flex">
                        <input className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md' type="text" id='from_name' {...register('from_name', { required: true })} placeholder={t("inputName")} />
                        <input className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md' type="email" id='from_email' {...register('from_email', {required: true})} placeholder={t("inputEmail")} />
                    </div>

                    <textarea className='bg-c4 w-full text-[1.6rem] text-c2 resize-none mx-0 my-[0.7rem] p-6 rounded-md' id='message' {...register('message' , {required: true})} cols={30} rows={10} placeholder={t("inputMessage")} defaultValue={""} />
                    <input type="submit" value={t("send")} className="w-full p-4 rounded-md bg-c2 font-extrabold text-3xl cursor-pointer" />
                </form>

                <div>
                    <a data-aos='fade-up' data-aos-delay='100' className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://t.me/abdullahasson"><i className="bx bxl-telegram" /></a>
                    <a data-aos='fade-up' data-aos-delay='200' className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://wa.me/963932680992"><i className="bx bxl-whatsapp" /></a>
                    <a data-aos='fade-up' data-aos-delay='300' className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://github.com/abdullahasson"><i className='bx bxl-github' ></i></a>
                </div>
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