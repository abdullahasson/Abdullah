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
            <h2 className="heading" data-aos="fade-down">Contact <span>Me!</span></h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                data-aos="fade-up"
            >
                <div className="input-box">
                    <input required type="text" name="from_name" placeholder="Full Name" />
                    <input required type="email" name="from_email" placeholder="Email Address" />
                </div>

                <textarea required name="message" id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
                <input type="submit" value="Send" className="btn" />
            </form>
        </section>

    )
}

export default Contact