export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between p-3 z-50">
      <a className="bg-green-500 text-white px-4 py-2 rounded-lg w-full text-center mr-2">
        Book Visit
      </a>

      <a className="bg-black text-white px-4 py-2 rounded-lg w-full text-center">
        WhatsApp
      </a>
    </div>
  );
}
