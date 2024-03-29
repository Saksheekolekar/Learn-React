import { useEffect, useState } from "react";

function useCurrencyConverter(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json[currency]); // Make sure this aligns with the JSON structure
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
                setData({}); // Reset data or set it to some error state
            }
        };

        fetchData();
    }, [currency]); // Dependency array, re-fetch if currency changes

    console.log(data);
    return data;
}

export default useCurrencyConverter;
