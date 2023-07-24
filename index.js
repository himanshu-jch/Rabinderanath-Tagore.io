// Simulating asynchronous data fetching (you can replace this with actual API calls)
setTimeout(() => {
    const tagoreIntro = {
        fullName: "Rabindranath Tagore",
        birthDate: "May 7, 1861",
        deathDate: "August 7, 1941",
        occupation: "Poet, Writer, Philosopher",
        awards: ["Nobel Prize in Literature (1913)"],
        notableWorks: ["Gitanjali", "Kabuliwala", "The Home and the World"],
    };

    // Updating the HTML with the fetched data
    const introDiv = document.getElementById("intro");
    introDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${tagoreIntro.fullName}</p>
        <p><strong>Date of Birth:</strong> ${tagoreIntro.birthDate}</p>
        <p><strong>Date of Death:</strong> ${tagoreIntro.deathDate}</p>
        <p><strong>Occupation:</strong> ${tagoreIntro.occupation}</p>
        <p><strong>Awards:</strong> ${tagoreIntro.awards.join(", ")}</p>
        <p><strong>Notable Works:</strong> ${tagoreIntro.notableWorks.join(", ")}</p>
    `;
}, 1500); // Simulating a 1.5-second delay for data fetching