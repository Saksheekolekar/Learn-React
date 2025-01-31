import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
   <><div className='bg-transparent rounded-xl m-4 bg-black text-white p-7'>
   <div className='md:grid  gap-20 md:grid-cols-2 '> 
       <img className=' rounded-full p-auto mr-0 mt-auto mb-auto ml-auto  m-auto grid grid-rows-2 shadow-xl sha  shadow-white  border-white border-l'
        src="./img/face.jpg" alt="prof picture" width={300} />
        <div className='mr-auto mt-auto mb-auto ml-0 '>
        <h1 className='text-8xl  text-left text-stone-200 font-semibold font-mono mb-4'> Sakshi Kolekar</h1>
         </div>
   </div>
   <div className='max-w-4xl mx-auto p-4 '>
       <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
        Hello! I am a dedicated software developer with a strong focus on Java and React, currently pursuing a Master of Computer Science (MCS) degree.
        </p>
        <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
         My journey in software development has equipped me with a solid foundation in both back-end and front-end technologies, including HTML, CSS, JavaScript, and SQL. 
         I have tackled various projects, creating efficient, scalable server-side solutions with Java and dynamic, user-friendly interfaces with React.
          </p>
          <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
            During my college projects, I excelled in teamwork and often took on leadership roles, guiding my peers to successfully complete our projects.
           Recognized as an excellent student with a strong academic record, I have demonstrated a deep understanding of computer science concepts and practical applications.
           </p> 
           <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>I stay updated with industry trends and best practices, constantly seeking opportunities to learn and grow. 
            I am excited to contribute to innovative projects and make a meaningful impact in the tech industry.
            </p> 
            <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'> If you are looking for a dedicated and skilled developer eager to take on new challenges, 
             let's connect! Feel free to explore my projects and reach out to me through the 
             <Link to="/contact" className="text-blue-600 hover:text-blue-800"> Contact</Link> page.</p>
       <p />
 
   </div>
</div>
   </>
  );
}