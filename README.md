# SkyTurf - Cricket Turf Booking App

A mobile application built with React Native and Expo for booking cricket turfs.

## Features

- Browse and search cricket turfs
- View detailed information about turfs
- Book slots with date and time selection
- Secure payment processing
- Booking history and management
- Real-time availability updates

## Tech Stack

- React Native
- Expo
- TypeScript
- Supabase (Backend & Database)
- Expo Router (Navigation)
- React Native Maps

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skyturf.git
cd skyturf
```

2. Install dependencies:
```bash
npm install
```

3. Configure Supabase:
- Create a Supabase project
- Copy your project URL and anon key
- Update `lib/supabase.ts` with your credentials

4. Start the development server:
```bash
npm start
```

5. Scan the QR code with Expo Go app to run on your device

## Project Structure

```
skyturf/
├── app/                    # App screens and navigation
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                  # Utilities and configurations
├── types/               # TypeScript type definitions
└── assets/             # Images and other static files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 