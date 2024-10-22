// import { FC } from "react";
// import { useGetProductsQuery } from "./features/apiSlice";

// const App: FC = () => {
//   const { data: products } = useGetProductsQuery();

//   return (
//     <div className="p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products?.map((item) => (
//           <div key={item._id} className="bg-white rounded-lg shadow-lg p-5">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-40 w-full object-cover mb-4 rounded-t-lg"
//             />
//             <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
//             <p className="text-gray-700 mb-4">{item.description}</p>
//             <div className="flex items-center justify-between">
//               <span className="text-xl font-semibold">${item.price}</span>
//               <span className="text-sm text-gray-500">{item.category}</span>
//               <span className="text-sm text-gray-500">
//                 {item.stock} in stock
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
