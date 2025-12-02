# KEMET - Egyptian Tourism Website

A modern, interactive React application showcasing the beauty, history, and culture of Egypt. Built with a focus on sustainable tourism and user experience.

## Features

- 🌍 **Multi-language Support**: Full English and Arabic support with RTL layout.
- 🎨 **Theme Switching**: Beautiful Light and Dark modes inspired by Egyptian heritage.
- 🤖 **AI Tourist Assistant**: Smart chatbot providing travel suggestions and information.
- 🗺️ **Interactive Maps**: Google Maps integration for locating hotels and landmarks.
- ⏳ **Historical Timeline**: Interactive journey through Egypt's history.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- 🏨 **Hotel Finder**: Browse and locate top-rated hotels.

## Tech Stack

- **React 18**: UI Library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Router**: Navigation
- **Lucide React**: Icons
- **Google Maps API**: Map integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project folder:
   ```bash
   cd project-kemet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Configuration

### Google Maps API

To enable the interactive map features, you need to provide a Google Maps API key:

1. Open `src/components/features/GoogleMapSection.jsx`
2. Locate the `LoadScript` component
3. Replace `"YOUR_API_KEY"` with your actual Google Maps API key

```jsx
<LoadScript googleMapsApiKey="YOUR_ACTUAL_API_KEY">
```

### AI Assistant

The AI Assistant is currently running in "Smart Mock" mode, providing instant, pre-defined responses for demonstration purposes. To connect it to a real backend (like Gemini API), edit `src/components/features/AIAssistant.jsx`.

## Project Structure

```
src/
├── components/
│   ├── features/    # Complex features (AI, Maps, Timeline)
│   ├── layout/      # Header, Footer
│   └── shared/      # Reusable UI components
├── contexts/        # Global state (Language, Theme)
├── data/            # Mock data and translations
├── pages/           # Route components
└── styles/          # Global styles
```

## Credits

Designed and developed by WE School Students.
