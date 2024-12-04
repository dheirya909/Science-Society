const members = [
    {
        name: "Prakhar Dubey",
        role: "President",
        class: "Class 11-C",
        description: "As founding science society president, he champions innovation with experience at Microsoft, IBM, and a passion for quantum computing.",
        linkedin: "https://www.linkedin.com/in/prakhar-dubey-5b3629276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        image: "/images/members/Prakhar.png",
    },
    {
        name: "Somya Gupta",
        role: "President",
        class: "Class 11-D",
        description: "She is a creative, innovative and enthusiastic individual who aims to ignite a curiosity and inspire a love for science in everyone. ",
        linkedin: "https://www.linkedin.com/in/somya-gupta-5a89a8334/",
        image: "/images/members/somya.png",
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
        description: "An avid thinker fueled by a love for technology, he's constantly seeking new challenges to solve and innovate at the edge of discovery.",
        linkedin: "https://www.linkedin.com/in/naman-goel-1979aa334/",
        image: "/images/members/naman.jpg",
    },
    {
        name: "Palak",
        role: "Ideator",
        class: "Class 11-B",
        description: "she stands out as a passionate member of the science society. Her bright smile and eager attitude draw others in, making her a natural leader.",
        image: "/images/members/palak.png",
    },
    {
        name: "Atharva Keswani",
        role: "Ideator",
        class: "Class 10-G",
        description: "With a knack for problem-solving and a curiosity that knows no bounds, he dives into every project with energy and excitement. ",
        image: "/images/members/atharva.png",
    },

    {
        name: "Saksham Jain",
        role: "IT Head",
        class: "Class 11-D",
        description: "Known for his enthusiasm and inventive spirit, he believes in the importance of inspiring the next generation of scientists and engineers.",
        linkedin: "https://www.linkedin.com/in/saksham-jain-a247a6211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        image: "/images/members/saksham.jpg",
    },
    {
        name: "Vibhav",
        role: "IT Team",
        class: "Class 11-B",
        description: "Driven by a passion towards science, he is always armed with a notebook full of ideas, often sparking engaging discussions and ideas.",
        image: "/images/logo.png",
    },
    {
        name: "Krityanidhi Chawla",
        role: "editorial",
        class: "Class 11-D",
        description: "She blends her love for learning with creativity in writing, art, and innovation, bringing fresh ideas and enthusiasm to projects with the goal of inspiring others and making a lasting impact.",
        image: "/images/members/krityanidhi.png",
    },
    {
        name: "Kanav goel",
        role: "Main Developer",
        class: "Class 11-D",
        description: "Driven by a passion towards science, he is always armed with a notebook full of ideas, often sparking engaging discussions and ideas. ",
        image: "/images/members/kanav.jpg",
    },
    {
        name: "Dheirya Kharbanda",
        role: "Main Developer",
        class: "Class 10-G",
        linkedin: "https://in.linkedin.com/in/dheirya-kharbanda-733b4732b",
        description: "Driven by a deep passion for web technologies such as HTML and CSS, he leads the development of this website with meticulous attention to detail and technical expertise.",
        image: "/images/members/dheirya.png",
    },
    {
        name: "Agamjot Bindra",
        role: "Developer",
        class: "Class 10-F",
        description: "Fueled by a love of web technologies like JavaScript and TypeScript, he is one of the main developers of this website",
        image: "/images/members/agam.jpg",
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
                        ${member.linkedin ? `<a href="${member.linkedin}"><i class="fab fa-linkedin"></i></a>` : '<br>'}
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