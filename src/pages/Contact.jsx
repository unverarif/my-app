import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import { Footerv2 } from '../components/Footerv2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0ei8bs3', 'template_oasxaay', form.current, 'LojQixuC5WFEnJy-t')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
        };
  return (
    <div className='text-black bg-gray-100'>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">İletişim</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='flex flex-col justify-center'>
                    <h2 className="text-xl font-semibold mb-4">İletişim Bilgileri</h2>

                    <ul className="list-disc list-inside mb-4">
                        <li>Merkez Mh. Kemerburgaz Cd. No:28 A/B Kağıthane/İstanbul</li>
                        <li>Telefon: +90 (212) 278 01 56</li>
                        <li>Telefon: +90 (212) 278 01 57</li>
                        <li>Fax: +90 (212) 278 08 05 </li>
                        <li>E-posta: info@eraysoft.com.tr</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-4">Çalışma Saatleri</h2>

                    <ul className="list-disc list-inside">
                        <li>Pazartesi - Cuma: 8:30 - 18:00</li>
                        <li>Cumartesi - Pazar: Kapalı</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Harita</h2>

                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                        title="ornek"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7152.834125697887!2d28.96985383061056!3d41.08218731400758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6c3bdc0b8e5%3A0xb3951dbc4c98788c!2sEraysoft!5e0!3m2!1str!2str!4v1528197207576"
                        className="w-full h-full"
                        allowFullScreen=""
                        loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <section class="bg-gray-100 " >
                <div class="py-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">İletişim Formu</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Teknik destek ya da herhangi bir konu için bize danışabilirsin.</p>
                    <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email Adresi</label>
                            <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Konu</label>
                            <input type="text" name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Mesajınız</label>
                            <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder=""></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-black" onClick="SendMail()" value="Send">Gönder</button>
                    </form>
                </div>
            </section>
        </div>
        <Footerv2 />
    </div>
  );
};

export default Contact