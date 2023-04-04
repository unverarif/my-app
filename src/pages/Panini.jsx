import React from 'react'
import panini from '../assets/cekscanner.png'

import compress from '../assets/compress.png'
import links from '../assets/links.png'
import sort from '../assets/sort.png'
import magic from '../assets/magic.png'
import check from '../assets/check.png'
import qr from '../assets/qr.png'
import CallUs from '../components/CallUs'


// REFERANSLAR
import volvo from '../assets/brands/volvo.png'
import citi from '../assets/brands/citi.png'
import nike from '../assets/brands/nike.png'
import roche from '../assets/brands/roche.png'
import isbank from '../assets/brands/isbank.png'
import ford from '../assets/brands/ford.png'
import Navbar from '../components/Navbar'
import { Footerv2 } from '../components/Footerv2'





const Panini = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar />
        <div className='container mx-auto '>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={panini} alt="" className='max-w-[500px] max-h-[500px] mx-auto'/>
                    {/* <iframe class="w-full aspect-video loop" src={paninimp4}></iframe> */}
                </div>
                <div className='flex flex-col justify-start px-4'>
                    <p className='text-black text-4xl font-black py-8 mx-auto'>Panini Çek Tarayıcı</p>
                    <p className='text-black text-left text-lg'>
                        Yeni nesil çek okuyucu… My Vision X. İleri teknoloji ve maksimum performansın size sunduğu en ideal çek scanner çözümü…
                        Sahte MICR basılan çeklerde uyarı vererek bu durumlarda kullanıcıyı uyarır.
                        1 Ocak 2017 den itibaren yaygınlaşan olan karekodlu çekleri okuyabilir ve karekod içindeki bilgileri sisteme atar.
                        45 cm’e kadar alonjlu çekleri problemsiz tarayıp okuma özelliği vardır.
                        Cihazın içinde bulunan özel manyetik mürekkepli sinyal okuyucu sayesinde sahte çek tespitinde yardımcı olur.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 py-8'>
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={links} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Dubleks Tarama</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Tek geçişte aynı anda çekin hem ön hemde arka görüntüsünü yüksek kalitede kaydeder.</p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={qr} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Karekod Okuma</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">
                        Yeni nesil Panini MyVisionX çek tarayıcı cihazları Eraysoft Çek Otomasyon yazılımı desteği ile çek üzerindeki karekod bilgilerini otomatik olarak okur.
                    </p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={sort} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">MICR Best</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Son teknoloji kullanılarak mükemmel MICR okuma başarısı.</p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={compress} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                            Alonjlu Çek Tarama</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">45 cm.’e kadar olan alonjlu çekleri problemsiz olarak tarayıp imajlarını yüksek kalitede kaydeder.</p>
                </div>
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={magic} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                        Upgrade Özelliği</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Eğer dakikada 50 çek tarama hızına sahip bir MyVisionX çek tarayıcınız var ise cihazı değiştirmeden 100 lük hıza upgrade edebilirsiniz.</p>
                </div>
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={check} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                            	ERP Uyumlu</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Türkiye’de kullanılan yerli yabancı tüm ERP sistemleri ile entegre olabilir.</p>
                </div>
            </div>
        </div>

        <CallUs />


        <iframe src="https://www.youtube.com/embed/OylUlocw9Aw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='mx-auto w-[1200px] h-[600px] my-8' title='video'></iframe>


            <section class="bg-gray-100 py-20 lg:py-[120px]">
                
                <div class="container mx-auto">
                <h3 className='text-black font-bold mx-auto flex justify-center text-4xl mb-4'>Bazı Referanslarımız <br/></h3>
                    <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="flex flex-wrap items-center justify-center h-full w-full">
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={ford}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={nike}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={citi}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200 object-cover"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={isbank}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={volvo}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src={roche}
                            alt=""
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        {/* FAQ */}

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Soru & Cevap</h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Cihazların tarama hızı nedir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Panini MyVisionX Serisi Çek Tarayıcı ve Çek Okuma cihazları dakika da 50 , 75 ve 100 çek tarama hızlarına göre 3 modelden oluşur.</p>
                        </div>
                        <div class="mb-10">                        
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Sahte çekleri tespit edebilir mi?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Eraysoft’un Türkiye için özel ürettirdiği ve sadece Eraysoft tarafından satışı ve desteği gerçekleştirilen VisionX Türkiye serisi cihazlar içerisinde özel MICR okuma ünitesiyle sahte MICR tespiti yapmakta ve böyle bir durumda kullanıcı uyarmaktadır.</p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Hangi Muhasebe (ERP) sistemleri ile entegre çalışır?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">
                                Panini çek tarayıcı ve Eraysoft Çek Otomasyon Yazılımı Türkiye’de yaygın kullanılan ve bilinen hemen hemen tüm ERP sistemleri entegre çalışır. Örnek olarak, LOGO , Link, Netsis, Oracle, SAP, ETA, AS400, Axapta, Navision, BIS , vb.
                                Bunlar dışında bir ERP sistemi kullanıyorsanız ve sistemiz herhangi bir yöntem (txt dosya , xml, web service, doğrudan veritabanı bağlantısı vs.)ile veri alışverişine uygunsa bu durumda da Eraysoft Çek Otomasyon Yazılımını bu sisteme göre bir gün içinde uyarlanabilir.</p>
                            
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Sistemin kurulumu ve entegrasyon ne kadar sürmektedir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Cihaz ve yazılım kurulumu ile ERP sistemine entegrasyonun tamamlanması maksimum 1-3 iş günü içerisinde tamamlanmaktadır. Kurulum uzaktan yapılabileceği gibi gereği durumunda yerinde de yapılabilmektedir.</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Garanti süresi ve servis hızı ?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Panini MyVisionX serisi cihazların garanti süresi 2 yıldır. Bu süre içerisinde cihazlarda meydana gelen ve kullanıcı hatası (sıvı teması , düşürme vs) dışındaki tüm arızalar herhangi bir ücret talep edilmeden Eraysoft Merkez Servis ofisinde tamir edilmektedir. Cihazın serviste bekleme süresi ortalama 1 gün maksimum 3 gündür. Eraysoft Bilişim Teknolojileri 12 yıldır Panini Çek Tarayıcı sistemlerinin Türkiye Distribütörü olup bu konuda yeterli sayıda eğitimli servis elemanı bulunmakta aynı zamanda da ihtiyaç duyulan tüm yedek parçaları her daim stoklarında tutmaktadır.</p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Yazılım standartmıdır? Firmaya özel geliştirme yapılabilir mi?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Eraysoft Çek Otomasyon Yazılımı , yaklaşık 17 senelik bu konuda tecrübeye sahip yazılım mühendisleri tarafından geliştirilmiş olup, Türkiye ‘ deki muhasebe ,Bankacılık ve firmaların iç çalışma prensipleri göz önünde bulundurularak sürekli geliştirilmektedir. Çek konusunda çıkan tüm yeni mevzuatlar hızlı bir şekilde yazılıma veya donanıma entegre edilmektedir. Bununla birlikte firmanın yazılım üzerinde istediği ve sistemin altyapısını köklü olarak değiştirmeyen tüm ilave çalışmalar ücretsiz olarak ve çok hızlı bir şekilde sağlanmaktadır.</p>
                            
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Cihaz ve yazılım fiyatları neledir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Firmanız için en ekonomik ve uygun sistemi belirleyip fiyat teklifi almak için lütfen (212) 278 01 56-57 no’lu telefonlarımızdan veya info@eraysoft.com.tr mail adresimizden bize ulaşabilirsiniz. Konu ile ilgili satış temsilcilerimiz sizlere yardımcı olmaktan mutluluk duyacaktır.</p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>

        <Footerv2 />
    </div>
  )
}

export default Panini