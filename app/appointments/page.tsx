'use client';

import { useRouter } from 'next/navigation';

// Mock data for appointments
const appointments = [
  {
    id: 1,
    service: 'Corte de Cabelo',
    date: '2024-01-20',
    time: '14:30',
    status: 'confirmado',
    price: 'R$ 50',
  },
  {
    id: 2,
    service: 'Barba',
    date: '2024-01-22',
    time: '10:00',
    status: 'pendente',
    price: 'R$ 35',
  },
];

export default function Appointments() {
  const router = useRouter();

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmado':
        return 'bg-green-100 text-green-800';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Meus Agendamentos</h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Voltar
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {appointment.service}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span>{formatDate(appointment.date)} às {appointment.time}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}
                      >
                        {appointment.status}
                      </span>
                      <p className="mt-2 text-sm text-gray-900">{appointment.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        // TODO: Implement reschedule logic
                      }}
                    >
                      Remarcar
                    </button>
                    <button
                      className="text-sm text-red-600 hover:text-red-800"
                      onClick={() => {
                        // TODO: Implement cancellation logic
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}