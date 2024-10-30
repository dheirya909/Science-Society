const members = [
    {
        name: "Prakhar Dubey",
        role: "President",
        class: "Class 11-C",
        description: "An exceptional orator and an AI developer, he has done internships with renowned companies like Microsoft and IBM. He is truly a role model to all his peers.",
        linkedin: "https://www.linkedin.com/in/prakhar-dubey",
        image: "/images/members/Prakhar.png",
    },
    {
        name: "Somya Gupta",
        role: "President",
        class: "Class 11-D",
        description: "She is a creative, innovative and enthusiastic individual who aims to ignite a curiosity and inspire a love for science in everyone. ",
        linkedin: "https://www.linkedin.com/in/somya-gupta-5a89a8334/",
        image: "/images/logo.png",
    },
    {
        name: "Aarav Parashar",
        role: "Vice President",
        class: "Class 10-A",
        description: "A dedicated member of the science society, with a passion for science and a commitment to inspiring peers, Aarav looks forward to leading exciting projects and initiatives.",
        linkedin: "https://www.linkedin.com/in/aarav-parashar/",
        image: "/images/members/aarav.png",
    },
    {
        name: "Naman Goel",
        role: "Vice President",
        class: "Class 11-D",
        description: "Not Available This moment...",
        linkedin: "#",
        image: "/images/members/naman.png",
    },
    {
        name: "Palak",
        role: "Ideator",
        class: "Class 11-B",
        description: "she stands out as a passionate member of the science society. Her bright smile and eager attitude draw others in, making her a natural leader.",
        linkedin: "#",
        image: "/images/logo.png",
    },
    {
        name: "Atharva Keswani",
        role: "Ideator",
        class: "Class 11-B",
        description: "With a knack for problem-solving and a curiosity that knows no bounds, he dives into every project with energy and excitement. ",
        linkedin: "#",
        image: "/images/members/atharva.png",
    },

    {
        name: "Sakshi Jain",
        role: "IT Head",
        class: "Class 11-D",
        description: "Known for his enthusiasm and inventive spirit, he believes in the importance of inspiring the next generation of scientists and engineers.",
        linkedin: "#",
        image: "/images/logo.png",
    },
    {
        name: "Vibhav",
        role: "IT Team",
        class: "Class 11-B",
        description: "Driven by a passion towards science, he is always armed with a notebook full of ideas, often sparking engaging discussions and ideas.",
        linkedin: "#",
        image: "/images/logo.png",
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