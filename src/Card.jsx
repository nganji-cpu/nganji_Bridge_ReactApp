function Card() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm border border-pink-100">
      
      <h2 className="text-2xl font-bold text-pink-600">
        Nganji
      </h2>
      
      <p className="text-gray-600 mt-3">
        This exercise was interesting but a bit challenging, especially setting up Tailwind.
      </p>

      <span className="inline-block bg-pink-100 text-pink-600 text-sm px-3 py-1 rounded-full mt-4">
        Tailwind Setup
      </span>

      <p className="text-gray-400 text-sm mt-4">
        31 March 2026
      </p>

    </div>
  );
}

export default Card;