import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
   <><div className='bg-transparent rounded-xl m-4 bg-black text-white p-7'>
   <div className='md:grid  gap-20 md:grid-cols-2 '> 
       <img className=' rounded-full p-auto mr-0 mt-auto mb-auto ml-auto  m-auto grid grid-rows-2 shadow-black   '
        src="./img/photo.png" alt="prof picture" width={300} />
        <div className='mr-auto mt-auto mb-auto ml-0 '>
        <h1 className='text-8xl  text-left text-stone-200 font-semibold font-mono mb-4'> Sakshi Kolekar</h1>
         </div>
   </div>
   <div className='max-w-4xl mx-auto p-4 '>
       <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
       I am a results-driven software developer with a passion for building robust, scalable, and user-centric applications. Proficient in Java, JavaScript, React, Angular, and Spring Boot, I specialize in developing full-stack solutions that seamlessly integrate front-end and back-end technologies. </p>
        <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
        With a strong foundation in RESTful API development, database management (MySQL, PostgreSQL, MongoDB), and modern frameworks, I thrive in dynamic environments where problem-solving and innovation are key. My hands-on experience includes building education management systems, online product exchange platforms, and various real-world projects, demonstrating my ability to deliver efficient and impactful solutions. </p>
          <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'>
          Currently pursuing my Master's in Computer Science (MCS) from Savitribai Phule Pune University, I have honed my skills through industrial training in Java Full Stack Development at Kiran Academy. Beyond coding, I enjoy collaborating with teams, exploring new technologies, and continuously improving my expertise.</p> 
           
            <p className=' text-lg mb-4 leading-relaxed text-gray-800 font-mono  dark:text-slate-300'> If you are looking for a dedicated and skilled developer eager to take on new challenges, 
            Let’s connect and build something amazing together! 
             <Link to="/contact" className="text-blue-600 hover:text-blue-800">↗️</Link> </p>
       <p />
 
   </div>
</div>
   </>
  );
}

/*/ // 1. React component to display a list of items
const ItemList = ({ items }) => {
  return (
    <ul className="list-disc p-4">
      {items.map((item, index) => (
        <li key={index} className="p-2">{item}</li>
      ))}
    </ul>
  );
};

// 2. React component to handle user input
const InputHandler = () => {
  const [value, setValue] = React.useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border p-2"
      placeholder="Type something..."
    />
  );
};

// 3. React component to fetch data from an API
const FetchData = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

// 4. React component to implement routing
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const RoutingExample = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </Router>
);

// 5. React component using Redux state management
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </div>
  );
};

// 6. Common UI element: Button
const CustomButton = ({ onClick, children }) => (
  <button className="bg-blue-500 text-white p-2" onClick={onClick}>
    {children}
  </button>
);

// 7. Complex UI element: Table
const DataTable = ({ data }) => (
  <table className="table-auto border-collapse border border-gray-400">
    <thead>
      <tr>
        <th className="border border-gray-300">Name</th>
        <th className="border border-gray-300">Age</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border border-gray-300">{row.name}</td>
          <td className="border border-gray-300">{row.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// 8. Performance Optimization: Memoization
import { memo } from "react";
const MemoizedComponent = memo(({ value }) => <p>{value}</p>);

// 9. Accessibility feature: Keyboard navigation
const AccessibleInput = () => {
  return (
    <input
      type="text"
      aria-label="Accessible Input"
      className="border p-2"
    />
  );
};

// 10. React Native UI element: Button
import { Button } from "react-native";
const NativeButton = () => <Button title="Click Me" onPress={() => alert("Clicked!")} />;

// 11. React Native Complex UI: Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
const NativeTabs = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Text>Home Screen</Text>} />
      <Tab.Screen name="Settings" component={() => <Text>Settings</Text>} />
    </Tab.Navigator>
  </NavigationContainer>
);

// 12. React Native performance optimization: Lazy Loading
import { lazy, Suspense } from "react";
const LazyComponent = lazy(() => import("./LazyLoadedComponent"));
const LazyLoadExample = () => (
  <Suspense fallback={<Text>Loading...</Text>}>
    <LazyComponent />
  </Suspense>
);
/*/ 