# Mental Health Frontend

This is the frontend application for the Mental Health platform, built with Next.js, TypeScript, and Tailwind CSS. The application provides a minimalist, user-friendly interface for accessing inspirational quotes and mental wellness resources.

## Why We Created This Project

Mental health is a critical aspect of overall well-being, yet it often goes overlooked in our fast-paced world. We created this project with the following goals:

1. **Accessibility**: Make mental health support easily accessible to everyone through a simple, digital platform
2. **Daily Inspiration**: Provide users with daily motivational quotes to boost their mental wellness journey
3. **Minimalist Approach**: Offer a clean, distraction-free environment for reflection and mindfulness
4. **Community Support**: Create a space where users can find solace in shared experiences and wisdom
5. **Integration with Wellness**: Combine inspirational content with calming elements like music to enhance mental well-being

This project serves as a gentle reminder that mental health matters, and sometimes, a few words of encouragement can make a significant difference in someone's day.

## Features

- **Minimalist Design**: Clean, distraction-free interface focused on content
- **Quote Display**: Beautiful presentation of inspirational quotes
- **Multiple Pages**: 
  - Home page with featured quotes
  - Minimalist quote view
  - Past quotes history
  - Copyright information
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Spotify Integration**: Embedded music player for enhanced relaxation
- **Real-time Updates**: Dynamic content loading with loading states
- **TypeScript**: Type-safe development for better code quality

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Components**: Modular, reusable components
- **Responsive Design**: Mobile-first approach

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   ├── copyright/
│   │   │   └── page.tsx    # Copyright page
│   │   ├── minimalist/
│   │   │   └── page.tsx    # Minimalist quote view
│   │   └── past-quotes/
│   │       └── page.tsx    # Past quotes history
│   └── components/
│       ├── AboutSection.tsx     # About section component
│       ├── CopyrightFooter.tsx   # Footer component
│       ├── DateTimeDisplay.tsx   # Date/time display
│       ├── Header.tsx            # Navigation header
│       ├── LoadingSpinner.tsx     # Loading indicator
│       ├── MinimalistQuote.tsx   # Minimalist quote display
│       ├── QuoteCard.tsx         # Quote card component
│       └── SpotifyPlayer.tsx      # Spotify integration
├── .env.local              # Environment variables (not tracked)
├── .gitignore             # Git ignore file
├── next-env.d.ts          # Next.js type definitions
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Pages

### Home Page (`/`)
- Features a curated selection of inspirational quotes
- Clean, welcoming design with navigation options
- Quick access to different quote views

### Minimalist View (`/minimalist`)
- Distraction-free quote display
- Large, readable typography
- Simple navigation for focused reading

### Past Quotes (`/past-quotes`)
- History of previously viewed quotes
- Search and filter capabilities
- Organized by date and category

### Copyright (`/copyright`)
- Information about quote sources and attributions
- Legal information and usage rights
- Contributor credits

## Components

### Header
- Navigation between different pages
- Responsive design with mobile menu
- Clean, minimalist styling

### QuoteCard
- Reusable component for displaying quotes
- Supports different quote styles
- Interactive elements for sharing

### MinimalistQuote
- Full-screen quote display
- Optimized for focused reading
- Customizable typography and colors

### SpotifyPlayer
- Embedded Spotify player integration
- Curated playlists for relaxation
- Seamless integration with quote content

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nimausername/mentalhealth-frontend.git
   cd mentalhealth-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Export static files (if needed):
   ```bash
   npm run export
   ```

3. Deploy to your preferred hosting platform

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Design Principles

- **Minimalism**: Less is more - focus on content over decoration
- **Accessibility**: Ensure the application is usable by everyone
- **Performance**: Fast loading and smooth interactions
- **Responsive**: Optimize for all screen sizes
- **User Experience**: Intuitive navigation and clear feedback

## Future Enhancements

- User authentication and personalization
- Quote bookmarking and favorites
- Social sharing capabilities
- Dark mode support
- Multi-language support
- Advanced filtering and search
- Community features and discussions

## License

This project is licensed under the MIT License.