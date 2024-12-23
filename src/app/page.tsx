// import React from 'react';
// import Header from '../components/Header';
// import Link from 'next/link';

// const Page = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col">
//       <Header />
//       <div className="flex-grow flex items-center justify-center">
//         <div className="border border-blue-500 p-12">
//           <h1 className="text-4xl font-bold text-blue-500 mb-8 px-20">
//             Data-Fetching-Assignment
//           </h1>
//           <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
//             Data Fetching on Client and Server Side
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <Link 
//               href="/Client-Side"
//               className="transform transition-all duration-300 hover:scale-105 bg-green-600 hover:bg-green-800 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//             >
//               Client Side Data
//             </Link>
//             <Link 
//               href="/Server-Side"
//               className="transform transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Server Side Data
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;






import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="border border-blue-500 p-12">
          <h1 className="text-4xl font-bold text-blue-500 mb-8 px-20">
            Data-Fetching-Assignment
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
            Data Fetching on Client and Server Side
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/clientside"
              className="transform transition-all duration-300 hover:scale-105 bg-green-600 hover:bg-green-800 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Client Side Data
            </Link>
             {/* <Link 
               href="/server-side"
               className="transform transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
               Server Side Data
             </Link> */}
            <Link href="/serverside">
            <p className="transform transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
            Server Side Data
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
