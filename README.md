# Barbershop SaaS Application

A modern mobile application for barbershop appointment management built with React Native, Expo Router, and Prisma.

## Features

- 🔐 User Authentication (Login/Register)
- 📅 Appointment Scheduling
- 💇‍♂️ Service Management
- 👤 User Profile Management
- 📍 Address Management
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark Mode Support
- 🔔 Push Notifications

## Tech Stack

- React Native
- Expo Router
- Prisma (PostgreSQL)
- TailwindCSS (NativeWind)
- Lucide Icons
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- PostgreSQL
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/barbershop-saas.git
cd barbershop-saas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the database connection string and other variables

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm start
```

## Project Structure

```
├── app/                    # Expo Router app directory
│   ├── (auth)/            # Authentication routes
│   ├── (tabs)/            # Main app tabs
│   ├── appointments/      # Appointment management
│   └── services/          # Service details
├── components/            # Reusable components
├── context/               # React Context providers
├── lib/                   # Utility functions and Prisma client
└── prisma/                # Prisma schema and migrations
```

## Database Schema

- **User**: Stores user information and authentication details
- **Service**: Available barbershop services
- **Appointment**: Booking information and scheduling
- **Address**: User address information

## Features in Detail

### Authentication
- Secure login and registration
- JWT-based authentication
- Protected routes

### Appointment Management
- Book new appointments
- View upcoming and past appointments
- Cancel appointments
- Select preferred barber

### Service Management
- Browse available services
- View service details
- Check pricing and duration

### Profile Management
- Update personal information
- Manage address details
- Toggle notifications
- Switch between light/dark mode

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.