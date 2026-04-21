// export default function StickyCTA() {
//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between p-3 z-50">
//       <a className="bg-green-500 text-white px-4 py-2 rounded-lg w-full text-center mr-2">
//         Book Visit
//       </a>

//       <a className="bg-black text-white px-4 py-2 rounded-lg w-full text-center">
//         WhatsApp
//       </a>
//     </div>
//   );
// }

export default function StickyCTA() {
  return (
    <a
      href="https://wa.me/880XXXXXXXXX"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition"
    >
      💬 WhatsApp Us
    </a>
  );
}