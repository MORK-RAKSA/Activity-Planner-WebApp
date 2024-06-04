
import logger, { loggerBeautifulObject } from '@utils/logger';


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
    <div className="bg-background-image bg-cover bg-center h-screen">
       <div>
         <div className=' flex flex-col gap-3 items-center '>
            <h1 className=' text-3xl font-bold text-silabColor'>The best time <br /> <span className=' text-purpleColor'>to start is now!</span></h1>
            <p className='text-silabColor text-center px-5'>Journey through life with a sense of wonder. Discover hidden gems and make every moment a cherished memory.</p>
         </div>
         <div>

         </div>
       </div>
    </div>
  );
}
