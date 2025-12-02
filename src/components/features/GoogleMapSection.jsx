import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTheme } from '../../contexts/ThemeContext';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultCenter = {
    lat: 26.8206,
    lng: 30.8025
};

const GoogleMapSection = ({ markers = [], center = defaultCenter, zoom = 6 }) => {
    const { theme } = useTheme();

    // Custom map styles for dark mode and Egyptian theme
    const mapStyles = theme === 'dark' ? [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ] : [];

    // Placeholder for when API key is missing
    const MapPlaceholder = () => (
        <div className="w-full h-full bg-sand/20 dark:bg-gray-800 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            </div>
            <h3 className="text-xl font-bold text-nile dark:text-gold mb-2">Map Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
                To enable the interactive map, please add your Google Maps API key to the configuration.
                <br />
                <span className="text-sm opacity-75 mt-2 block">
                    (Currently showing placeholder mode)
                </span>
            </p>
        </div>
    );

    // Check if API key is present (you would typically check env var)
    const hasApiKey = false; // Set to true when you add the key

    if (!hasApiKey) return <MapPlaceholder />;

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={{
                    styles: mapStyles,
                    disableDefaultUI: false,
                    zoomControl: true,
                }}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        title={marker.title}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapSection;
