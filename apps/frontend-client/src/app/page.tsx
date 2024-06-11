
import logger, { loggerBeautifulObject } from '@utils/logger';
import Link from 'next/link';


export default function Home() {
  logger('hello')
  loggerBeautifulObject({
    foo: 'bar',
    'arr': [1, 2, 3],
    nested: {
      hello: "world"
    }
  })
  return (
    <div className="bg-background-image bg-cover w-full bg-center h-screen">
       <div className=' w-full h-full flex flex-col justify-between py-5'>
         <div className=' flex flex-col gap-3 items-center '>
            <h1 className=' text-3xl font-bold text-silabColor'>The best time <br /> <span className=' text-purpleColor'>to start is now!</span></h1>
            <p className='text-silabColor text-center px-5'>Journey through life with a sense of wonder. Discover hidden gems and make every moment a cherished memory.</p>
         </div>
         <div className=' text-center mb-10'>
           <Link href="pages/question1" className=' bg-purpleColor text-white font-medium px-6 py-4 rounded-full'>Do it now!</Link>
         </div>
       </div>
    </div>
  );
}
