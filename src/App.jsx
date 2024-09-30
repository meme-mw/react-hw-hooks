import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Choice from './components/Choice'

function App() {
  
  let arr=[{
    title:"اجا وسلمى",
    content:"يُزعم ان اسم الجبلين كان لآخر رجل وزوجته من شعب العماليق وكان كلً منهما ينام على جبل لوحده لضخامة بدنيهما",
    img:"https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2020/07/14/images/159812.jpg"
 },
{
 title:"مقلع طمية",
 content:"تزعم خرافة جبل طمية ان الفوهة البركانية بالطائف كانت مكان جبل طمية الاصلي والتي انتزعت نفسها بعد ان عشقت جبل قطن ولكن ابن عمها جبل عكاش كسر رجلها واجبرهم من الزوج منه وتقع الجبال الثلاثة قرب منطقة القصيم ",
 img:"https://static.sayidaty.net/styles/900_scale/public/2022-06/128194.jpeg.webp"
},
{
  title:"قلعة مارد",
  content:"عندما غزت ملكة تدمر (زنوبيا) دومة الجندل وتيماء، ولم تستطع اقتحام القلعة، فقالت مقولتها المشهورة التي أصبحت مثلاً: (تمرد مارد وعز الأبلق)، دلالة على مدى تحصين هذه القلعة وصمودها",
  img:"https://www.annaharar.com/Library/Images/Uploaded%20Images/2021/02/19/Rim/MaridCastle.jpg"
},
{
  title:"جبل حرفة",
  content:"من الأقاويل السائدة عن الجبل روايات وقصص خرافية تناقلتها الأجيال، حيث ذكر البعض أن الجبل سمي قديما بجبل الجن لأنه مسكن للجن",
  img:"https://pbs.twimg.com/media/EjyxG94WoAA-wHI.jpg"
},
{
  title:"وادي الجن",
  content:"خرجت الكثير من الأخبار المثيرة للتساؤلات والتي تتحدث عن فقدان الجاذبية في أحد مناطق هذا الوادي، فإذا توقفت أي سيارة عند منحدرات هذه المنطقة، فإنها ترتفع إلى الأعلى، ولا تنزلق إلى الأمام، رغم تحرر المكابح، ويحدث ذلك مع المياه أيضًا عند سكبها للأعلى، وشبهها الباحثون بظاهرة السراب",
  img:"https://www.elbalad.news/UploadCache/libfiles/974/2/600x338o/338.jpeg"
}
];
const [obj, setObj] = useState(arr[0]);

let html=arr.map((el) =>    <Choice title={el.title} img={el.img} content={el.content} ob={el} fun={setObj}/>)

 


  return (
    <>
  <section  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${obj.img})`}} className='img'>
      <div style={{textAlign:"center"}}>
      <h1 style={{padding:"1rem",paddingTop:"4rem"}}>{obj.title}</h1>
      <p style={{width:"200px",margin:"auto"}}>{obj.content}</p>
      </div>
    <div className="flex">
  {html}
  </div>
  </section>
    </>
  )
}

export default App
