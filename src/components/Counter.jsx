import { useState } from 'preact/hooks';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div class="flex items-center justify-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      <span class="text-yellow-300 text-3xl font-bold">{counter}</span>
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  );
}
