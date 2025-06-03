'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Barbershop SaaS</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entrar
        </button>
        <button
          onClick={() => router.push('/register')}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cadastrar
        </button>
      </div>
    </main>
  );
}