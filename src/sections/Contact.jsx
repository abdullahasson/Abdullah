import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'


function Contact() {

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
            .sendForm(`${secrit.VITE_service_name}`, `${secrit.VITE_template_name}`, form.current, {
                publicKey: `${secrit.VITE_publicKey}`,
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
        <section className="contact" id="contact">
            <h2 className="heading text-center text-[3.6rem] mb-0" data-aos="fade-down">Contact <span>Me!</span></h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                data-aos="fade-up"
                className='max-w-[70rem] text-center mb-12 mx-auto my-4'
            >
                <div className="flex justify-between flex-wrap">
                    <input ref={name} className='w-[49%] text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="text" name="from_name" placeholder="Full Name" />
                    <input ref={email} className='w-[49%] text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="email" name="from_email" placeholder="Email Address" />
                </div>

                <textarea ref={message} className='bg-[var(--second-bg-color)] w-full text-[1.6rem] text-[color:var(--text-color)] resize-none mx-0 my-[0.7rem] p-6 rounded-[0.8rem]' required name="message" id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
                <input type="submit" value="Send" className="btn cursor-pointer mt-8" />
            </form>

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