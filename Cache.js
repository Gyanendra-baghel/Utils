const cache = new Map();

function fetchData(key) {
    if (cache.has(key)) return cache.get(key);

    // Fetch Data From Server
    const data = fetchFromServer(key);

    // Store data in cache
    cache.set(key, data);
    return data;
}