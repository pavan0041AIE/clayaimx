async function submitFeedback(data) {
    const response = await fetch(
        `${API_BASE_URL}/feedback`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to submit feedback"
        );
    }

    return await response.json();
}
