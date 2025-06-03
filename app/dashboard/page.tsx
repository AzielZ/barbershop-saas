'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Barbershop</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => router.push('/profile')}
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Perfil
              </button>
              <button
                onClick={() => router.push('/')}
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card para Novo Agendamento */}
            <div
              onClick={() => router.push('/new-appointment')}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Novo Agendamento</h3>
                <p className="mt-1 text-sm text-gray-500">Agende um novo horário</p>
              </div>
            </div>

            {/* Card para Meus Agendamentos */}
            <div
              onClick={() => router.push('/appointments')}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Meus Agendamentos</h3>
                <p className="mt-1 text-sm text-gray-500">Visualize seus horários marcados</p>
              </div>
            </div>

            {/* Card para Histórico */}
            <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Histórico</h3>
                <p className="mt-1 text-sm text-gray-500">Veja seu histórico de atendimentos</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}