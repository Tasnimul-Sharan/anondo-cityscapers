// "use client";

// import { FaRegListAlt } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
// import { FaHardHat } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";

// export default function StatsSection() {
// const stats = [
//   {
//     icon: <FaRegListAlt size={45} />,
//     value: "2024",
//     label: "Year Established",
//   },
//   {
//     icon: <FaUserFriends size={45} />,
//     value: "1300+",
//     label: "Active Members",
//   },
//   {
//     icon: <FaHardHat size={45} />,
//     value: "200+",
//     label: "Plots Delivered",
//   },
//   {
//     icon: <FaChartLine size={45} />,
//     value: "150+",
//     label: "Team Members",
//   },
// ];
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center justify-items-center">
//           {stats.map((item, index) => (
//             <div key={index}>
//               {/* Yellow Circle */}
//               <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-white">
//                 {item.icon}
//               </div>

//               {/* Number */}
//               <h3 className="text-3xl font-bold text-[#0064A7]">
//                 {item.value}
//               </h3>

//               {/* Label */}
//               <p className="text-lg text-black font-semibold mt-1">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaRegListAlt,
  FaUserFriends,
  FaHardHat,
  FaChartLine,
} from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaRegListAlt size={28} />,
      value: "2024",
      label: "Year Established",
    },
    {
      icon: <FaUserFriends size={28} />,
      value: "1300+",
      label: "Active Members",
    },
    {
      icon: <FaHardHat size={28} />,
      value: "200+",
      label: "Plots Delivered",
    },
    {
      icon: <FaChartLine size={28} />,
      value: "150+",
      label: "Team Members",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary to-amber-500 text-white flex items-center justify-center">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>

              {/* Label */}
              <p className="text-sm text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
