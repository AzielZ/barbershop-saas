'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const services = [
  { id: 1, name: 'Corte de Cabelo', duration: '30min', price: 'R$ 50' },
  { id: 2, name: 'Barba', duration: '20min', price: 'R$ 35' },
  { id: 3, name: 'Corte + Barba', duration: '50min', price: 'R$ 75' },
  { id: 4, name: 'Pigmentação', duration: '40min', price: 'R$ 60' },
];

export default function NewAppointment() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement appointment creation logic
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Novo Agendamento</h2>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Serviço</label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 border rounded-lg cursor-pointer ${selectedService === service.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      >
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                        <p className="text-sm font-medium text-gray-900">{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Data</label>
                  <input
                    type="date"
                    className="px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-300 rounded-md"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Horário</label>
                  <input
                    type="time"
                    className="px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-300 rounded-md"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600"
                >
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}