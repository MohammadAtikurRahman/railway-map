import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Component to render train routes and stations
const RailwayMap = ({ country, stationIcon, apiKey }) => {
    const [trainRoutes, setTrainRoutes] = useState([]);
    const [stations, setStations] = useState([]);

    useEffect(() => {
        // Fetch train routes and station data from OpenRailway or Overpass
        const fetchData = async () => {
            try {
                const routesResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];relation["route"="train"]["network"~"${country}"];out;`);
                const routesData = await routesResponse.json();
                setTrainRoutes(routesData.elements);

                const stationsResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node["railway"="station"]["country"~"${country}"];out;`);
                const stationsData = await stationsResponse.json();
                setStations(stationsData.elements);
            } catch (error) {
                console.error('Error fetching railway data:', error);
            }
        };

        fetchData();
    }, [country]);

    return (
        <div>
            <h1>{country} Railway Map</h1>
            <svg width="800" height="600" style={{ border: '1px solid black' }}>
                {/* Render train routes */}
                {trainRoutes.map((route, index) => (
                    <polyline
                        key={index}
                        points={route.geometry.map((point) => `${point.lon},${point.lat}`).join(' ')}
                        stroke="blue"
                        strokeWidth="2"
                        fill="none"
                    />
                ))}

                {/* Render stations */}
                {stations.map((station) => (
                    <circle
                        key={station.id}
                        cx={station.lon}
                        cy={station.lat}
                        r="5"
                        fill="red"
                        data-tooltip={station.tags.name || 'Unknown Station'}
                    />
                ))}
            </svg>

            {/* Custom Station Icon */}
            {stationIcon && (
                <div>
                    <h2>Custom Station Icon</h2>
                    <img src={stationIcon} alt="Station Icon" width="50" />
                </div>
            )}
        </div>
    );
};

// Prop Types for validation
RailwayMap.propTypes = {
    country: PropTypes.string.isRequired, // Country to display railway routes
    stationIcon: PropTypes.string,        // Custom station icon
    apiKey: PropTypes.string,             // API key for Overpass or OpenRailway (if required)
};

RailwayMap.defaultProps = {
    stationIcon: null,
    apiKey: '',
};

export default RailwayMap;
