import './index.css'

document.querySelector('#app').innerHTML = `
  <main class="flex flex-col items-center justify-center min-h-screen text-center p-4">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Tailwind funcionando! 🚀</h1>
    <p class="text-lg text-gray-700">Agora você pode montar seu site usando só o main.js 😄</p>
  </main>
`;

setupCounter(document.querySelector('#counter'))
