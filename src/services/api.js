const BASE_URL = import.meta.env.VITE_API_URL;

// Simple memory cache
const cache = new Map();

export const apiClient = async (endpoint, { method = 'GET', body, ...customConfig } = {}) => {
    const headers = { 'Content-Type': 'application/json' };

    const config = {
        method,
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    // Cache Logic for GET requests
    if (method === 'GET' && cache.has(endpoint)) {
        return cache.get(endpoint);
    }

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, config);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Store in cache if GET
        if (method === 'GET') {
            cache.set(endpoint, data);
        }

        return data;
    } catch (error) {
        console.error('API Call Failed:', error);
        throw error;
    }
};
