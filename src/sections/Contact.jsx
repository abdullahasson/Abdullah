import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wkvbbdn', 'template_csp0owc', form.current, {
                publicKey: 'Fp-bsNyp7ZHevdX6W',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
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
                    <input className='w-[49%] text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="text" name="from_name" placeholder="Full Name" />
                    <input className='w-[49%] text-[1.6rem] text-[color:var(--text-color)] mx-0 my-[0.7rem] p-4 rounded-[0.8rem] bg-[var(--second-bg-color)]' required type="email" name="from_email" placeholder="Email Address" />
                </div>

                <textarea className='bg-[var(--second-bg-color)] w-full text-[1.6rem] text-[color:var(--text-color)] resize-none mx-0 my-[0.7rem] p-6 rounded-[0.8rem]' required name="message" id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
                <input type="submit" value="Send" className="btn cursor-pointer mt-8" />
            </form>
        </section>

    )
}

export default Contact