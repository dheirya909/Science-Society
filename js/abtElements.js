// Unified local database for events, including timeline
const eventData = {
    "Science Exhibition": {
        "name": "Science Exhibition",
        "description": "An annual exhibition where students showcase their science projects.",
        "date": "2024-11-15",
        "location": "BBPS Auditorium",
        "folder": "ScienceExhibition24",
        "images": ["image1.png", "image2.png", "image3.png"],
        "brochure": "SE_brochure.pdf",
        "result": "SE_result.pdf",
        "coverImage": "image-main.png",
        "timeline": [
            {"title": "Project Setup", "description": "Participants set up their science projects.", "date": "2024-11-14"},
            {"title": "Exhibition Day", "description": "Public and judges will review the projects.", "date": "2024-11-15"},
            {"title": "Award Ceremony", "description": "Winners will be announced and prizes awarded.", "date": "2024-11-16"}
        ]
    },
    "Astronomy Night": {
        "name": "Astronomy Night",
        "description": "A stargazing event to explore the wonders of the night sky.",
        "date": "2024-12-05",
        "location": "School Playground",
        "folder": "AstronomyNight24",
        "images": [],
        "timeline": [
            {"title": "Introduction to Stargazing", "description": "Learn the basics of astronomy.", "date": "2024-12-04"},
            {"title": "Observation Night", "description": "Explore the night sky with telescopes.", "date": "2024-12-05"}
        ]
    }
};

// Get event name from URL
const eventName = new URLSearchParams(window.location.search).get('eventName');
const event = eventData[eventName];

const sectionTitle = document.getElementById('section-title');
const eventDetails = document.getElementById('event-details');
const gallery = document.getElementById('gallery');
const noImagesMsg = document.getElementById('no-images-msg');
const downloads = document.getElementById('download-links');
const noDownloadsMsg = document.getElementById('no-downloads-msg');

if (event) {
    sectionTitle.textContent = event.name;
    eventDetails.innerHTML = `
        <img src="/assets/${event.folder}/${event.coverImage}" alt="">
        <p><strong>Description:</strong> ${event.description}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
    `;

    if (event.images.length > 0) {
        event.images.forEach((imageName) => {
            const imgElement = document.createElement('img'); //g
            imgElement.src = `/assets/${event.folder}/${imageName}`;
            imgElement.alt = event.name;
            imgElement.classList.add('gallery-img');
            gallery.appendChild(imgElement);

            imgElement.addEventListener('click', () => {
                document.getElementById('lightbox-img').src = imgElement.src;
                document.getElementById('lightbox').classList.add('active');
            });
        });
    } else {
        noImagesMsg.style.display = 'block';
    }

    if (event.brochure || event.result) {
        if (event.brochure) {
            const brochureLink = document.createElement('a');
            brochureLink.href = `/assets/${event.folder}/${event.brochure}`;
            brochureLink.textContent = "Download Brochure";
            brochureLink.classList.add('download-link');
            brochureLink.download = true;
            downloads.appendChild(brochureLink);
        }

        if (event.result) {
            const resultLink = document.createElement('a');
            resultLink.href = `/assets/${event.folder}/${event.result}`;
            resultLink.textContent = "Download Results";
            resultLink.classList.add('download-link');
            resultLink.download = true;
            downloads.appendChild(resultLink);
        }
    } else {
        noDownloadsMsg.style.display = 'block';
    }

    const timeline = document.getElementById('timeline');
    event.timeline.forEach((timelineEvent) => {
        const timelineDiv = document.createElement('div');
        timelineDiv.classList.add('timeline-event');

        // Set innerHTML with the specified structure
        timelineDiv.innerHTML = `
            <div class="timeline-content">
                <h3>${timelineEvent.title}</h3>
                <p>${timelineEvent.description}</p>
                <small>${timelineEvent.date}</small>
            </div>
        `;

        // Append the complete timeline event to the timeline section
        timeline.appendChild(timelineDiv);
    });
} else {
    eventDetails.innerHTML = `<p>Event not found. Please check the event name in the URL.</p>`;
}

document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
});


const timelineEvents = document.querySelectorAll('.timeline-event');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

timelineEvents.forEach(event => {
    observer.observe(event);
});