let allFeedbacks = [];
function renderFeedbackTable(
    feedbacks
) {

    const tableBody =
        document.getElementById(
            "feedbackTableBody"
        );

    tableBody.innerHTML = "";

    feedbacks.forEach(
        (feedback) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${feedback.name || "-"}
                    </td>

                    <td>
                        ${feedback.rating}
                    </td>

                    <td>
                        ${feedback.liked_about}
                    </td>

                    <td>
                        ${feedback.created_at}
                    </td>
                    <td>

                        <button
                            onclick="
                                deleteFeedback(
                                    ${feedback.id}
                                )
                            "
                        >

                            Delete

                        </button>

                    </td>

                </tr>

            `;
        }
    );
}

async function loadStats() {

    const response =
        await fetch(
            `${API_BASE_URL}/feedback/stats`
        );

    const data =
        await response.json();

    document.getElementById(
        "totalFeedbacks"
    ).textContent =
        data.total_feedbacks;

    document.getElementById(
        "averageRating"
    ).textContent =
        data.average_rating;

    document.getElementById(
        "fiveStar"
    ).textContent =
        data.five_star_percentage;

    document.getElementById(
        "fourStar"
    ).textContent =
        data.four_star_percentage;

    document.getElementById(
        "threeStar"
    ).textContent =
        data.three_star_percentage;

    document.getElementById(
        "twoStar"
    ).textContent =
        data.two_star_percentage;

    document.getElementById(
        "oneStar"
    ).textContent =
        data.one_star_percentage;

    document.getElementById(
        "fiveStarBar"
    ).value =
        data.five_star_percentage;

    document.getElementById(
        "fourStarBar"
    ).value =
        data.four_star_percentage;

    document.getElementById(
        "threeStarBar"
    ).value =
        data.three_star_percentage;

    document.getElementById(
        "twoStarBar"
    ).value =
        data.two_star_percentage;

    document.getElementById(
        "oneStarBar"
    ).value =
        data.one_star_percentage;
}


async function loadFeedbacks() {

    const response =
        await fetch(
            `${API_BASE_URL}/feedback`
        );

    allFeedbacks =
        await response.json();
    const tableBody =
        document.getElementById(
            "feedbackTableBody"
        );

    tableBody.innerHTML = "";

renderFeedbackTable(
    allFeedbacks
);
}

loadStats();
loadFeedbacks();
document.getElementById(
    "searchFeedback"
).addEventListener(
    "input",
    (e) => {

        const searchText =
            e.target.value
                .toLowerCase();

        const tableBody =
            document.getElementById(
                "feedbackTableBody"
            );

        tableBody.innerHTML = "";

        const filtered =
            allFeedbacks.filter(
                (feedback) =>

                    (
                        feedback.name || ""
                    )
                        .toLowerCase()
                        .includes(
                            searchText
                        )
            );

        filtered.forEach(
            (feedback) => {

                tableBody.innerHTML += `

                    <tr>

                        <td>
                            ${feedback.name || "-"}
                        </td>

                        <td>
                            ${feedback.rating}
                        </td>

                        <td>
                            ${feedback.liked_about}
                        </td>

                        <td>
                            ${feedback.created_at}
                        </td>

                    </tr>

                `;
            }
        );
    }
);

document.getElementById(
    "sortFeedback"
).addEventListener(
    "change",
    (e) => {

        const value =
            e.target.value;

        let sorted =
            [...allFeedbacks];

        if (
            value === "highest"
        ) {

            sorted.sort(
                (a, b) =>
                    b.rating -
                    a.rating
            );
        }

        else if (
            value === "lowest"
        ) {

            sorted.sort(
                (a, b) =>
                    a.rating -
                    b.rating
            );
        }

        else if (
            value === "newest"
        ) {

            sorted.sort(
                (a, b) =>
                    new Date(
                        b.created_at
                    ) -
                    new Date(
                        a.created_at
                    )
            );
        }

        else if (
            value === "oldest"
        ) {

            sorted.sort(
                (a, b) =>
                    new Date(
                        a.created_at
                    ) -
                    new Date(
                        b.created_at
                    )
            );
        }

        renderFeedbackTable(
            sorted
        );
    }
);

async function deleteFeedback(
    feedbackId
) {

    const confirmDelete =
        confirm(
            "Delete this feedback?"
        );

    if (
        !confirmDelete
    ) {
        return;
    }

    await fetch(

        `${API_BASE_URL}/feedback/${feedbackId}`,

        {
            method: "DELETE"
        }
    );

    loadFeedbacks();

    loadStats();
}

document.getElementById(
    "exportCSV"
).addEventListener(
    "click",
    () => {

        window.open(

            `${API_BASE_URL}/feedback/export`,

            "_blank"
        );
    }
);
