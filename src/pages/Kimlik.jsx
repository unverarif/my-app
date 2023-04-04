import React from 'react'

import magic from '../assets/magic.png'
import CallUs from '../components/CallUs'
import idscanner from '../assets/idscanner.png'
import ayarlar from '../assets/settings.png'
import speed from '../assets/performance.png'
import uyumlu from '../assets/puzzle.png'
import kvkk from '../assets/secure.png'
import kbs from '../assets/favorite.png'
import Navbar from '../components/Navbar'
import { Footerv2 } from '../components/Footerv2'




const Kimlik = () => {

  return (
    <div className='bg-gray-100'>
        <Navbar />
        <div className='container mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={idscanner} alt="" className='w-[500px] max-h-[500px] mx-auto'/>
                    {/* <iframe class="w-full aspect-video loop" src={paninimp4}></iframe> */}
                </div>
                <div className='flex flex-col justify-start px-4'>
                    <p className='text-black text-4xl font-black py-8'>Plustek TR550 Pasaport&Kimlik Okuyucu</p>
                    <p className='text-black text-left text-lg'>
                    Gelen misafirlerin Kimlik/Ehliyet veya Pasaportları PLUSTEK TR550 kimlik okuyucu cihazından taratılır.
                    Plustek TR550 Kimlik,Ehliyet, Pasaportun renkli olarak resmini bilgisayara kaydeder. Kimlik , Pasaportun üzerindeki Ad,Soyad,Tc Kimlik no, Pasaport no.. vs. tüm bilgileri okuyarak otelcilik uygulamasına otomatik olarak kaydeder ve tüm bu işlemler sadece 2-3 sn sürmektedir.
                    Fidelio’nun tüm versiyonları, Sedna, Asyasoft, Akınsoft, ModHotel, Sentez, Elektra, Odeon, OnQ, EuroProtel vs. gibi tüm otelcilik programları ile entegre çalışır.
                    Pasaport okuyucu konusunda sektördeki en eski ve yaygın üründür.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={speed} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Tarama Hızı</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Yeni nesil TR550 Plus Pasaport ve Kimlik Tarayıcıda yüksek çözünürlük ve renkli taramada hız sadece 1 sn. Teknolojide gelinen son nokta!</p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={uyumlu} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Uyumluluk</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">
                    SmartScan Pro Pasaport ve Kimlik Arşiv Sistemi Türkiye’deki otel ve firmalardan kullanılan yerel veya yabancı tüm otelcilik veya diğer yazılımları ile tam uyumlu çalışır.
                    </p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={magic} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Okuma Başarısı</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Plustek TR550 Plus pasaport ve kimlik tarayıcı/okuyucu sistemi MRZ satırı olan yerli yabancı tüm pasaport ve ID kartlar ile birlikte, Eski ve yeni TC nüfus cüzdanlarını, yeni ehliyetleri başarılı bir şekilde okuyabilmektedir.</p>
                </div>


                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={ayarlar} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                            Teksik Servis Hızı</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Eraysoft Bilişim sahip olduğu deneyimli teknik personeli ve yedek parça stoklarıyla Merkez servis ofisine gelen cihazları genelde aynı gün, maksimum 2 gün içerisinde müşterisine geri  gönderir.</p>
                </div>
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={kvkk} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                        KVKK Uyumlu</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Yeni versiyon SmartScanPro Pasaport ve Kimlik Tarama / Okuma yazılımı Kişisel verileri koruma kanunu kapsamında güncellenmiştir.</p>
                </div>
                <div className="block max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                    <div className='flex items-center justify-start gap-x-8 pb-4'>
                        <img src={kbs} alt="" className='h-16 w-16'/>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">	
                            	KBS Uyumlu</h5>
                    </div>
                    <p className="font-normal text-gray-900 ">Yeni KBS ile tam uyumlu, tek tuşla tüm kimlik bilgileri kimlik bildirim sistemine anlık olarak gönderilir.</p>
                </div>
            </div>
        </div>

        <CallUs />


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
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/1280px-Radisson_Blu_logo.svg.png"
                            alt="image"
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src="https://1000logos.net/wp-content/uploads/2020/02/Sheraton-Logo-1937.png"
                            alt="image"
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src="https://issegroup.com/wp-content/uploads/2018/04/Cornelia-Diamond-Golf-Resort.jpg"
                            alt="image"
                            class=" hover:ring outline-1 rounded duration-200 object-cover"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src="https://logolook.net/wp-content/uploads/2022/08/Four-Seasons-Logo.png"
                            alt="image"
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src="https://www.filmon.com.tr/wp-content/uploads/2022/01/divan-logo.png"
                            alt="image"
                            class=" hover:ring outline-1 rounded duration-200"
                            />
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                        >
                            <img
                            src="https://1000logos.net/wp-content/uploads/2021/04/InterContinental-logo.png"
                            alt="image"
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
                                Hangi dokümanları otomatik okuyabilir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Üzerinde MRZ kodu bulunan tüm Dünya pasaportları ve ID Kartları, Türkiye Cumhuriyeti yeni ve eski kimlik kartları ve yeni ehliyetleri otomatik olarak okuyabilmektedir.</p>
                        </div>
                        <div class="mb-10">                        
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Hangi sektörler ihtiyaç duyar?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Oteller <br/>
                                Döviz büroları : Yeni bir yasa ile tüm döviz bürolarına alım-satım işlemlerinde pasaport resmini alma ve arşivleme zorunluluğu getirilmiştir. Bir çok döviz bürosu bu işlemler için Eraysoft ürünlerini tercih etmiştir. <br/>
                                Güvenlik Girişi olan tüm Binalar Üniversiteler, Acenteler, Hastaneler</p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                OCR Lisans sınırı var mıdır?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">
                            Eraysoft  tarafından satışı gerçekleştirilen Pasaport ve kimlik tarama sisteminde aylık ve yıllık gibi lisans veya tarama adeti sınırlaması yoktur. Süre ve tarama sınırı olmayan “Sınırsız OCR Lisansı” verilmektedir.</p>
                            
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Hangi Otelcilik(PMS) sistemleri ile entegre çalışır?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Plustek TR550 Plus Pasaport ve Kimlik tarayıcı ve Eraysoft SmartScan Pro Yazılımı tüm PMS sistemleri ile entegre çalışır. Örnek olarak, Fidelio , Opera, Athena, Asyasoft, Sispar, Akınsoft,  ModHotel, Sentez, Elektra, Odeon, OnQ, EuroProtel , Amonra, Sedna vb. Bunlar dışında bir PMS sistemi kullanıyorsanız yazılım uzmanlarımız dakikalar içerisinde tanımlamaları yaparak sisteminize entegrasyonu sağlar.</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Sistemin kurulumu ve entegrasyon ne kadar sürmektedir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Cihaz ve yazılım kurulumu ile PMS sistemine entegrasyonun tamamlanması maksimum 30 dk. dır. Kurulum uzak bağlantı ile rahatlıkla yapılabileceği gibi gereği durumunda yerinde de yapılabilmektedir.</p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Garanti süresi ve servis hızı ?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Plustek TR550 Plus serisi cihazların ve SmartScan Pro yazılımının garanti süresi 2 yıldır. Bu süre içerisinde cihazlarda meydana gelen ve kullanıcı hatası (sıvı teması , düşürme vs) dışındaki tüm arızalar herhangi bir ücret talep edilmeden Eraysoft Merkez Servis ofisinde tamir edilmektedir. Cihazın serviste bekleme süresi ortalama 1 gün maksimum 3 gündür. Eraysoft Bilişim Teknolojileri 12 yıldır Plustek Pasaport Kimlik Tarayıcı sistemlerinin Türkiye Distribütörü olup bu konuda yeterli sayıda eğitimli servis elemanı bulunmakta aynı zamanda da ihtiyaç duyulan tüm yedek parçaları her daim stoklarında tutmaktadır.</p>
                            
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Cihaz ve yazılım fiyatları neledir?
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">Oteliniz veya kurumunuz için en ekonomik ve uygun sistemi belirleyip fiyat teklifi almak için lütfen (212) 278 01 56-57 no’lu telefonlarımızdan veya info@eraysoft.com.tr mail adresimizden bize ulaşabilirsiniz. Konu ile ilgili satış temsilcilerimiz sizlere yardımcı olmaktan mutluluk duyacaktır.</p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>


        <Footerv2 />
    </div>
  )
}

export default Kimlik