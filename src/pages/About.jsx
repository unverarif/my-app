import React from 'react'
import sertifika from '../assets/sertifika.png'
import aboutus from '../aboutus.json'
import Navbar from '../components/Navbar'
import { Footerv2 } from '../components/Footerv2'

export const About = () => {
  return (
    <div className='bg-gray-100 h-screen w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='max-h-[1240px] container mx-auto text-center m-8 text-black font-base flex-grow'>
            <h1 className='text-4xl font-bold m-8 tracking-wide'>Hakkımızda</h1>
            <h2 className='m-8 text-3xl tracking-wide'>Firma Profili</h2>
            <p className='text-left opacity-85'>
                ERAYSOFT Bilişim Teknolojileri ve Hizmetleri Tic. Ltd. Şti. , 2006 yılının başında Bankalar ve Kurumsal firmalar başta olmak üzere pasaport okuyucu, kimlik okuyucu, çek okuyucu konularında tüm sektörlere çeşitli bilişim çözümleri sunmak üzere kurulmuştur.
                ERAYSOFT, müşterilerine en yeni teknolojileri ve en uygun çözümleri sunarak, müşterilerinin verimini, rekabet gücünü arttırarak; koşulsuz müşteri memnuniyeti sağlamayı, kaliteli ve eksiksiz hizmetler sunmayı kendine ilke edinmiştir.
                ERAYSOFT, ilkeleri doğrultusunda sunduğu yenilikçi ve kalıcı çözümlerle sektördeki yerini almıştır.
                Yazılım, donanım ve servis büro uygulamaları konularında uzmanlaşmış kadromuz deneyimlerini ERAYSOFT bünyesinde sizlerle paylaşmaktadır.
                Pasaport Okuyucu, Kimlik Okuyucu konularında sektöründe ilk ve en yaygın firmadır.
                Çek okuyucu konusunda ise müşteri memnuniyeti ve yaygınlığı en yüksek firmadır.
            </p>

            <h2 className='m-8 text-3xl tracking-wide'>Bilgi Güvenliği</h2>
            <p className='text-left opacity-85'>
                ERAYSOFT ve çalışanları olarak, iş sürekliliğimize ve bilgi varlıklarımıza yönelik her türlü riski yönetmek amacıyla;
                Bilgi güvenliği yönetim sistemimizin ISO 27001:2013 standardının gereklerini yerine getirecek şekilde dokümante edilmesi, belgelendirilmesi ve sürekli iyileştirilmesi,
                Bilgi güvenliği ile ilgili tüm yasal mevzuat ve sözleşmelere uyulması,
                Bilgi varlıklarına yönelik risklerin sistematik olarak yönetilmesi,
                Bilgi güvenliği farkındalığını artırmak amacıyla teknik ve davranışsal yetkinlikleri geliştirecek eğitimlerin gerçekleştirilmesi yönünde faaliyetlerimizi, uyguladığımız diğer yönetim sistemleri ile birlikte bütünleşik bir şekilde yöneterek,
                bilişim sektöründe bilgi güvenliği açısından öncülüğümüzle örnek bir kuruluş olmak için tüm gücümüzle çalışırız.
            </p>
            <img src={sertifika} alt=""  className='h-[128px] flex mx-auto my-8'/>
        </div>

      <div className='bg-gray-100'>
      <h1 className='mx-auto text-center font-black text-4xl text-black m-8'>İş Ortaklarımız</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 mx-auto bg-gray-100 container'>
        {aboutus.map((item,i) => (
          <div className='m-4 mx-auto flex flex-col justify-center items-center border-2 h-[300px] w-[300px] rounded shadow-xl bg-gray-200 hover:bg-gray-300'>
            <img src={item.url} alt="" className='w-[200px] mb-4'/>
            <h3 className='text-black text-xl text-center font-bold italic'>{item.name}</h3>
            <h5 className='text-gray-700 italic mt-2 text-base'>{item.job}</h5>
          </div>
        ))}
      </div>
      </div>


        

     <Footerv2 />
  </div>
  )
}
