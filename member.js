const members = [
    {
        name: "Prakhar Dubey",
        role: "President",
        class: "Class 11-C",
        description: "Leading the Science Society with innovative ideas and passionate dedication to scientific exploration.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    },
    {
        name: "Somya Gupta",
        role: "President",
        class: "Class 11-D",
        description: "Leading the Science Society with innovative ideas and passionate dedication to scientific exploration.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    },
    {
        name: "Aarav Parashar",
        role: "Vice President",
        class: "Class 10-A",
        description: "Supporting society initiatives and coordinating between different teams to achieve our goals.",
        linkedin: "#",
        email: "#",
        image: "image copy.png",
    },
    {
        name: "Naman Goel",
        role: "Vice President",
        class: "Class 11-D",
        description: "VP, aka- kulfi man",
        linkedin: "#",
        email: "#",
        image: "naman.mp4",
    },
    {
        name: "Palak",
        role: "Ideator",
        class: "Class 11-B",
        description: "Bringing creative ideas and innovative solutions to our scientific projects and events.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    },
    {
        name: "Atharva Keswani",
        role: "Ideator",
        class: "Class 11-B",
        description: "Bringing creative ideas and innovative solutions to our scientific projects and events.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    },

    {
        name: "Sakshi Jain",
        role: "IT Head",
        class: "Class 11-D",
        description: "Bringing creative ideas and innovative solutions to our scientific projects and events.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    },
    {
        name: "Vibhav",
        role: "IT Team",
        class: "Class 11-B",
        description: "Bringing creative ideas and innovative solutions to our scientific projects and events.",
        linkedin: "#",
        email: "#",
        image: "image.png",
    }
        
];

// Function to create a member card
function createMemberCard(member) {
    return `
        <div class="member-card">
            <div class="member-card-inner">
                <div class="member-card-front">
                    <div class="member-avatar">
                        <img class="member-avatar" src="${member.image}">
                    </div>
                    <h3 class="member-name">${member.name}</h3>
                    <div class="member-role">${member.role}</div>
                    <div class="role-badge">${member.class}</div>
                </div>
                <div class="member-card-back">
                    <h3 class="member-name">${member.name}</h3>
                    <div class="member-role">${member.role}</div>
                    <p class="member-details">${member.description}</p>
                    <div class="member-social">
                        <a href="${member.linkedin}"><i class="fab fa-linkedin"></i></a>
                        <a href="${member.email}"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render all members
function renderMembers() {
    const membersGrid = document.getElementById('members-grid');
    membersGrid.innerHTML = members.map(createMemberCard).join('');
}

// Call renderMembers on page load
renderMembers();

// Card flip functionality
document.addEventListener('click', function (e) {
    if (e.target.closest('.member-card')) {
        e.target.closest('.member-card').classList.toggle('flipped');
    }
});