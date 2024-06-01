import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
   <><div className='bg-transparent rounded-xl m-4 bg-black text-white p-7'>
   <div className=' '>
       <img className=' rounded-full p-auto w-au m-auto grid grid-rows-2  border-cyan-600 border-2' src="./me.jpg" alt="prof picture" width={300} />
   </div>
   <div className='max-w-4xl mx-auto p-4 '>
   <h1 className="text-4xl   text-gray-950 text-center font-bold font-mono mb-4"> Kolekar.S.P</h1>
       <p className=' text-lg leading-relaxed text-gray-700 font-oswald dark:text-slate-950'>
        Hello! I am a dedicated software developer with a strong focus on Java and React, currently pursuing a Master of Computer Science (MCS) degree.
         My journey in software development has equipped me with a solid foundation in both back-end and front-end technologies, including HTML, CSS, JavaScript, and SQL. 
         I have tackled various projects, creating efficient, scalable server-side solutions with Java and dynamic, user-friendly interfaces with React.
          During my college projects, I excelled in teamwork and often took on leadership roles, guiding my peers to successfully complete our projects.
           Recognized as an excellent student with a strong academic record, I have demonstrated a deep understanding of computer science concepts and practical applications.
            I stay updated with industry trends and best practices, constantly seeking opportunities to learn and grow. 
            I am excited to contribute to innovative projects and make a meaningful impact in the tech industry.
             If you are looking for a dedicated and skilled developer eager to take on new challenges, 
             let's connect! Feel free to explore my projects and reach out to me through the 
             <Link to="/contact" className="text-blue-600 hover:text-blue-800"> Contact</Link> page.</p>
       <br />
 
   </div>
</div>
   </>
  );
}