const Base_URL = `${import.meta.env.VITE_BACKEND_URL}/job-offer`;

const index = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${Base_URL}/`, { headers: { Authorization: `Bearer ${token}` } });
        if (!response.ok) throw new Error('Failed to fetch offers');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const getOffer = async (jobOfferId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${Base_URL}/${jobOfferId}`, { headers: { Authorization: `Bearer ${token}` } });
        if (!response.ok) throw new Error('Failed to fetch offer');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const createOffer = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${Base_URL}/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to create offer');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const updateOffer = async (data, jobOfferId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${Base_URL}/${jobOfferId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update offer');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const deleteOffer = async (jobOfferId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${Base_URL}/${jobOfferId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to delete offer');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    index,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer
}