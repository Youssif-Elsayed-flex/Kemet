import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const GoogleMapSection = ({ markers = [], center = { lat: 26.8206, lng: 30.8025 }, zoom = 6 }) => {
    const { theme } = useTheme();
    const { language } = useLanguage();

    // Create a map showing all markers or the center point
    const mapUrl = markers.length > 0
        ? `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center.lat},${center.lng}&zoom=${zoom}&language=${language}`
        : `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center.lat},${center.lng}&zoom=${zoom}&language=${language}`;

    return (
        <div className="w-full h-full relative">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
                title="Google Maps"
                className={`${theme === 'dark' ? 'opacity-90' : ''}`}
            />
        </div>
    );
};

export default GoogleMapSection;
