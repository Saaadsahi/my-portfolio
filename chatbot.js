document.addEventListener("click", function (e) {
    const btn = document.getElementById("chatbot-button");
    const box = document.getElementById("chatbot-window");
    if (e.target === btn || btn.contains(e.target)) {
      box.classList.toggle("hidden");
      return;
    }
    if (!box.contains(e.target) && e.target !== btn) {
      box.classList.add("hidden");
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("chatbot-close");
    const chatWindow = document.getElementById("chatbot-window");
    closeBtn.addEventListener("click", function () {
      chatWindow.classList.add("hidden");
    });
  
    const sendBtn = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-question");
    const chatArea = document.getElementById("chatbot-messages");
  
    const answers = {
        "who are you": "I'm Saad, a computer science student focusing on cyber-physical systems and network security auditing.",
        "what do you study": "I study Computer Science at MacEwan University with a minor in Economics.",
        "when will you graduate": "I'm expected to graduate in June 2025.",
        "what is your future plan": "I'm aiming for roles in network security auditing and advanced cyber-physical systems research.",
        "where do you work": "I'm currently working as an Event Assistant with Vibe Parking at EPCOR Tower.",
        "what skills do you have": "I'm skilled in Python, SQL, C, C#, HTML, CSS, Tableau, Kotlin, Wireshark, and Snort.",
        "what projects have you worked on": "I've built an ETS interactive map, a car rental database, and data visualizations with Tableau.",
        "tell me about your open source contributions": "I contributed to an open-source car rental website using C# and SQL in June 2023.",
        "where have you volunteered": "I have volunteered at MacEwan University's Open House, showcasing projects.",
        "what is your job experience": "I worked as a Security Officer at Pure Casino and now as an Event Assistant at Vibe Parking.",
        "what are your hobbies": "I enjoy exploring new tech, lifting weights, and meeting new people.",
        "what is your instagram handle": "My Instagram handle is @saaadsahi.",
        "what programming languages do you know": "I have experience with Python, SQL, C, C#, Kotlin, and HTML/CSS.",
        "what tools do you use": "I use Tableau, Figma, Adobe XD, Visual Studio, Git, and GitHub.",
        "what operating systems do you know": "I'm proficient with Windows, macOS, and Linux.",
        "what is your role in macs": "I serve as Vice President External for MaCS at MacEwan University.",
        "what random fact can you share": "I love making cybersecurity approachable for everyone.",
        "what is your email": "You can email me at saadullahsahi@gmail.com.",
        "how can i contact you": "Email me at saadullahsahi@gmail.com or find me on Instagram @saaadsahi.",
        "what is your phone number": "You can contact me at +1 587-987-0039.",
        "what data visualization tools do you know": "I use Tableau for interactive data visualizations.",
        "what database management systems do you know": "I have expertise in SQL and data warehousing.",
        "what ui ux tools do you know": "I use Figma and Adobe XD for UI/UX design.",
        "tell me about your vice president role": "As Vice President External for MaCS, I represent students and connect them with professionals.",
        "tell me about your projects": "I have worked on data visualization, relational databases, and Python-based apps.",
        "what languages do you speak": "I speak English fluently and know some Urdu and Punjabi.",
        "what security tools do you use": "I use Wireshark and Snort for network security audits.",
        "tell me about your future plans": "I want to specialize in network security and cyber-physical systems.",
        "what events have you organized": "As VP External, I helped organize events with tech professionals.",
        "do you have leadership experience": "Yes, I lead initiatives as VP External for MaCS.",
        "what car rental project did you do": "I built a car rental database using SQL and C#.",
        "tell me about vibe parking": "I assist with parking logistics at EPCOR Tower for events.",
        "tell me about your security officer role": "I monitored surveillance systems and enforced protocols at Pure Casino.",
        "what do you do at macs": "I organize events, connect with tech experts, and create growth opportunities.",
        "what is your favorite project": "I love the ETS interactive map project built in Python.",
        "what tools do you use for data visualization": "Tableau is my main data visualization tool.",
        "to know more": "You can email me at saadullahsahi@gmail.com or follow me on Instagram @saaadsahi.",
      
        "what is your biggest strength": "I adapt quickly and stay curious about emerging technologies.",
        "why do you like python": "Python is versatile, easy to read, and great for data-focused projects.",
        "do you prefer front end or back end": "I enjoy back-end work, but front-end can be fun too.",
        "how do you handle deadlines": "I prioritize tasks, break them down, and manage my time carefully.",
        "what is your favorite database": "I like working with SQL due to its power and clarity for queries.",
        "how do you keep learning": "I read documentation, take online courses, and experiment with side projects.",
        "what do you do for fun": "I enjoy going to the gym and discovering new tech gadgets.",
        "how do you solve coding problems": "I break them into smaller parts, then test and refine solutions.",
        "how do you manage version control": "I use Git and GitHub for commits, branching, and pull requests.",
        "what is your approach to security": "Prevention first, with continuous monitoring and frequent audits.",
        "what do you like about android development": "I enjoy Kotlin’s clean syntax and the flexibility of Android Studio.",
        "how do you handle stress": "I take short breaks, exercise, or chat with friends to clear my mind.",
        "what is your favorite programming paradigm": "I enjoy the clarity of object-oriented programming.",
        "how do you stay organized": "I rely on task management apps and set regular goals.",
        "what is your biggest challenge": "Balancing multiple projects while maintaining high quality.",
        "what do you think about open source": "Open source fosters collaboration and rapid innovation.",
        "how do you prepare for exams": "I create summaries, solve practice problems, and study with friends.",
        "what is your dream job": "A role that combines network security, research, and hands-on development.",
        "how do you approach teamwork": "I communicate openly, share responsibilities, and support teammates.",
        "what is your favorite code editor": "I use Visual Studio Code for its plugins and simplicity.",
        "why did you choose compsci": "I love problem-solving and the endless possibilities in technology.",
        "what do you like about macewan": "It has a supportive environment and accessible professors.",
        "how do you handle feedback": "I value constructive criticism and use it to improve my work.",
        "what is your preferred work style": "A mix of independent coding and team collaboration.",
        "how do you stay motivated": "I set clear goals and track my progress toward them.",
        "do you prefer windows or linux": "Linux for development flexibility, but I use Windows for everyday tasks.",
        "what do you think about data science": "It's exciting because data drives informed decisions.",
        "how do you keep your code clean": "I follow best practices, use consistent naming, and refactor often.",
        "what is your next big goal": "To gain hands-on experience in advanced network security projects.",
        "what is your favorite coding language": "I enjoy Python for its readability and large ecosystem.",
        "how do you choose your projects": "I look for meaningful impact and opportunities to learn new skills.",
        "do you like working with teams": "Yes, collaboration often sparks creativity and better solutions.",
        "how do you debug code": "I isolate problem areas, use print statements or a debugger, and test iteratively.",
        "what is your biggest achievement": "Developing a robust car rental database that streamlined operations.",
        "why do you like network security": "It combines analytical thinking with the challenge of preventing breaches.",
        "how do you manage your time": "I create schedules, set milestones, and review progress regularly.",
        "what do you think about internship programs": "They offer hands-on experience and help students grow professionally.",
        "what is your preferred approach to design": "User-centric, ensuring the product is intuitive and functional.",
        "do you have experience in c sharp": "Yes, I've used C# for projects like the car rental database.",
        "how do you stay updated with tech": "I follow news sites, read blogs, and watch conference talks.",
        "why do you like figma": "It's user-friendly for designing and prototyping interfaces.",
        "what is your proudest moment": "Presenting my Python-based ETS map project to classmates and faculty.",
        "do you prefer agile or waterfall": "I prefer agile for iterative feedback and flexibility.",
        "how do you handle conflicts": "I communicate openly, listen actively, and seek a win-win solution.",
        "why do you enjoy teaching others": "Sharing knowledge helps both the teacher and the learner grow.",
        "how do you handle large datasets": "I use efficient data structures and relevant libraries.",
        "which do you prefer, python or kotlin": "They serve different purposes, but Python is my go-to for quick tasks.",
        "how do you approach database design": "I analyze requirements, normalize data, and ensure constraints are clear.",
        "how do you test your code": "Unit tests, manual testing, and sometimes integration tests.",
        "how do you stay healthy": "I work out regularly and maintain a balanced schedule.",
        "why do you like event assistant work": "It helps me practice organization and communication in a live setting.",
        "what is your approach to presentations": "I plan key points, use visuals, and engage the audience.",
        "do you like public speaking": "It's challenging but rewarding, and it improves my communication skills.",
        "how do you set goals": "I use SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.",
        "do you use cloud services": "Yes, I've experimented with AWS and Google Cloud for projects.",
        "what is your opinion on machine learning": "It's fascinating and opens many possibilities, though I'm still exploring it.",
        "how do you learn new frameworks": "I read the official docs, try tutorials, and build small examples.",
        "what do you see yourself doing in five years": "Working in a leading role in network security or advanced system design.",
        "do you attend tech meetups": "Yes, I find them useful for networking and learning new trends.",
        "how do you plan your career": "I set short-term milestones and a long-term vision for growth.",
        "what is your coding environment": "Usually VS Code or Android Studio, depending on the language.",
        "how do you handle rejection": "I reflect on feedback, learn from it, and try again with improvements.",
        "why do you enjoy compsci": "It’s dynamic, creative, and there’s always more to learn.",
        "how do you handle stressful deadlines": "I prioritize tasks, stay organized, and focus on one thing at a time.",
        "what is your next certification goal": "I may pursue a security-related certification like CompTIA Security+.",
        "how do you manage group projects": "Define roles, communicate often, and track progress collectively.",
        "what do you think about 3d printing": "It’s interesting, though my focus is mainly on software security.",
        "why do you like wifi sniffing tools": "They provide valuable insight into network traffic for security analysis.",
        "how do you improve your coding speed": "Practice consistently and learn shortcuts in my IDE.",
        "do you do code reviews": "Yes, it's crucial for quality control and shared learning.",
        "how do you handle large merges in git": "I merge small, frequent commits, and communicate with the team.",
        "why do you like kotlin": "Kotlin is concise and interoperates well with Java for Android apps.",
        "how do you secure a database": "Use strong authentication, encryption, and restrict user privileges.",
        "do you enjoy front end design": "It's fun, though I'm more focused on back end and security.",
        "what is your greatest motivation": "Knowing my work can improve people's experiences.",
        "how do you approach problem solving": "I break the problem down, consider edge cases, and test systematically.",
        "why did you choose python": "It’s straightforward, powerful, and has a great community.",
        "how do you handle multiple tasks": "I keep a to-do list, prioritize items, and tackle them step by step.",
        "what do you think about internships": "They are a great way to gain industry insight and practical skills.",
        "why do you enjoy database work": "I like organizing data so it’s both efficient and accessible.",
        "how do you approach learning new tech": "I read, watch tutorials, then build small proofs-of-concept.",
        "what is your biggest coding pet peeve": "Spaghetti code with no structure can be very frustrating.",
        "do you prefer working remotely or in person": "I adapt well to both, but in-person can enhance collaboration.",
        "what do you think of robotics": "It’s a fascinating field that merges hardware and software.",
        "how do you handle user feedback": "I value feedback and incorporate it into the next iteration.",
        "do you like code challenges": "Yes, they help sharpen problem-solving skills and creativity.",
        "why do you use wireshark": "It helps me analyze network packets to diagnose or secure traffic.",
        "how do you manage personal projects": "I create a roadmap, track issues, and set deadlines for myself.",
        "what do you think of code optimization": "Optimizing code improves performance and user experience.",
        "how do you approach user interface design": "Simplicity first, ensuring it’s easy to navigate and visually clean.",
        "how do you measure success": "By achieving goals, learning new skills, and delivering value.",
        "why do you enjoy using snort": "It’s an effective intrusion detection system for network security tasks.",
        "do you like linear algebra": "Yes, it’s fundamental for many areas including graphics and ML.",
        "how do you keep code secure": "Apply best practices, handle inputs carefully, and do regular audits.",
        "what do you think about slack for communication": "It’s useful for quick team collaboration.",
        "do you read research papers": "I skim through security and software engineering papers occasionally.",
        "how do you handle big data": "I use efficient storage and distributed processing if necessary.",
        "why do you prefer easy english": "It helps everyone understand the information more quickly.",
        "how do you stay creative": "I try new technologies, brainstorm with friends, and keep learning.",
        "do you keep a portfolio site": "Yes, it showcases my projects, skills, and experiences.",
        "what is your favorite part of web development": "Building interactive features that solve real user needs.",
        "how do you handle missing features": "I plan them for future iterations and keep track in a backlog.",
        "do you like network protocols": "Yes, I find protocols fascinating for how they enable communication.",
        "how do you do load testing": "I use tools like JMeter or locust to simulate heavy usage.",
        "what is your best career advice": "Keep learning, stay curious, and build meaningful connections.",
        "how do you handle mistakes": "I own up to them, fix the issue, and learn for the future.",
        "what do you like about kotlin coroutines": "They simplify asynchronous code and enhance readability.",
        "do you use docker": "I have dabbled in containerization for easier deployment.",
        "how do you design apis": "Focus on clear endpoints, consistent naming, and proper documentation.",
        "why do you enjoy teaching coding": "Sharing knowledge helps reinforce my own understanding.",
        "how do you approach big projects": "I break them down, plan milestones, and tackle them iteratively.",
        "do you like command line interfaces": "Yes, they can be more efficient once you learn the commands.",
        "why is version control important": "It tracks changes, helps collaboration, and prevents data loss.",
        "how do you handle burnout": "I take breaks, exercise, and remind myself why I love coding.",
        "what do you think of frameworks like react": "They are powerful for building user interfaces quickly.",
        "do you like making tutorials": "Yes, it’s fun to guide others and share what I’ve learned.",
        "how do you plan your day": "I list tasks and tackle the most urgent or important first.",
        "why do you value user testing": "Real feedback helps ensure the product meets actual needs.",
        "do you prefer sprints or kanban": "Both have merits, but sprints help me focus on short-term goals.",
        "what do you think about ai chatbots": "They are great for quick info, but can sometimes lack depth.",
        "how do you handle scope creep": "I clarify requirements and negotiate changes with stakeholders.",
        "why do you enjoy analyzing network traffic": "It gives deep insights into system interactions and security.",
        "do you believe in test driven development": "It can improve code quality, though it adds initial overhead.",
        "how do you approach code refactoring": "I do it in small steps, ensuring I keep everything functional.",
        "what is your biggest productivity tip": "Keep distractions low and break tasks into smaller chunks.",
        "why do you love solving problems": "It’s satisfying to see a challenge turn into a working solution.",
        "how do you learn a new programming language": "I explore syntax, try small programs, and build something real.",
        "what do you think about remote collaboration": "With proper communication tools, it’s efficient and flexible.",
        "why do you like easy english": "It helps me communicate with a wider audience effectively.",
        "how do you manage large code bases": "I divide them into modules, keep consistent naming, and document thoroughly.",
        "do you do pair programming": "Sometimes, it’s helpful for brainstorming and catching errors early.",
        "why do you want to pursue security auditing": "I want to safeguard systems and help prevent cyber threats.",
        "what do you think about concurrency": "It’s complex but essential for modern, high-performance apps.",
        "how do you write secure code": "By validating inputs, using best encryption methods, and following secure patterns.",
        "why do you appreciate feedback": "It reveals blind spots and helps me improve quickly.",
        "how do you collaborate with designers": "I share ideas, discuss feasibility, and refine the design together.",
        "what do you like about cs clubs": "They provide networking, peer support, and project collaborations.",
        "do you prefer stable or cutting edge tech": "I enjoy stability for production but test cutting edge for fun.",
        "how do you build confidence in coding": "Practice regularly, learn from failures, and celebrate small wins.",
        "what do you do if you get stuck": "I research, ask for help, or step back to rethink the approach.",
        "why do you value code readability": "It makes maintenance easier and helps others understand my work.",
        "how do you approach data visualization": "I focus on clarity and ensure the visuals answer key questions.",
        "do you read code from others": "Yes, it’s a great way to learn different styles and best practices.",
        "what is your biggest fear in coding": "Introducing a critical bug that affects many users.",
        "why do you like concurrency in kotlin": "It simplifies parallel tasks with coroutines and reduces boilerplate.",
        "how do you store secrets in code": "I avoid hardcoding them, using environment variables or secure vaults.",
        "do you do code katas": "Yes, occasionally, to keep my skills sharp and try new techniques.",
        "what do you think about multi platform development": "It’s useful for sharing code across different systems efficiently.",
        "why do you care about user experience": "A good UX makes tech accessible and enjoyable for everyone.",
        "how do you set up a new project": "I initialize version control, define structure, and gather requirements.",
        "do you find compsci challenging": "Yes, but that’s what makes it exciting and rewarding.",
        "how do you handle dynamic requirements": "I maintain flexibility and adapt the plan as changes arise.",
        "why do you love coding competitions": "They push me to think quickly and creatively under pressure.",
        "how do you create wireframes": "I often use tools like Figma or hand-drawn sketches first.",
        "do you like agile ceremonies": "Yes, they keep the team aligned and maintain frequent feedback loops.",
        "how do you stay up to date with cs trends": "I follow tech news, read articles, and watch conference videos.",
        "why do you love user research": "It reveals real pain points and shapes better product decisions.",
        "how do you handle code styling": "I use linters or formatters to keep everything consistent.",
        "do you believe in continuous integration": "Yes, it helps catch issues early and maintain high code quality.",
        "what is your approach to error handling": "I handle errors gracefully, log them, and offer helpful feedback to users.",
        "why do you use python for data tasks": "It has rich libraries like pandas, numpy, and matplotlib.",
        "how do you measure code performance": "I profile the code, analyze time complexity, and check memory usage.",
        "what do you think about minimal design": "Simplicity can enhance clarity and user adoption.",
        "how do you approach front end frameworks": "I learn their core concepts, then build small prototypes to grasp them.",
        "do you like sql stored procedures": "Yes, if they are well-structured and documented, they can be powerful.",
        "why do you use c sharp": "It's great for enterprise-level applications and has strong tooling.",
        "how do you keep your portfolio fresh": "I update projects as I learn new skills or finish new tasks.",
        "why do you enjoy logic puzzles": "They sharpen problem-solving skills and keep the mind active.",
        "how do you approach code security in c": "I pay close attention to memory management and buffer limits.",
        "do you like writing documentation": "Yes, good documentation saves time and helps others understand your work.",
        "why do you find user needs important": "Software must solve real problems or it won’t be used effectively.",
        "how do you keep your code flexible": "I write modular functions, avoid duplication, and plan for changes.",
        "what is your biggest pet peeve in code reviews": "Unclear naming that makes the code hard to follow.",
        "how do you handle global variables": "I minimize them, preferring local scope for safer code.",
        "why do you enjoy teaching others to code": "Teaching reinforces my own understanding and helps others grow.",
        "do you practice pair debugging": "Sometimes, it helps uncover issues faster and share knowledge.",
        "how do you approach cryptography": "I rely on well-tested libraries and avoid writing my own crypto algorithms.",
        "why do you love exploring new gadgets": "It’s fun to see innovation and think about possible applications.",
        "how do you manage cross platform code": "I abstract platform-specific logic and maintain a shared codebase.",
        "what is your favorite open source tool": "I like VS Code for its extensions and community support.",
        "do you use continuous delivery": "Yes, automating deployment helps push updates more reliably.",
        "why do you value communication skills": "Clear communication helps prevent misunderstandings and fosters collaboration.",
        "how do you keep your development environment tidy": "I organize folders, name them properly, and clean up old branches.",
        "what do you think about data mining": "It’s interesting to discover hidden patterns, but privacy is important.",
        "how do you ensure maintainable code": "I keep it DRY, document it well, and update tests regularly.",
        "do you like integrating apis": "Yes, it’s a great way to leverage existing services and add functionality.",
        "why do you care about code ethics": "Software impacts people, so we must be responsible developers.",
        "how do you start a new coding task": "I clarify requirements, plan my approach, then write the solution step by step.",
        "what do you think about concurrency bugs": "They can be tricky and require careful locking or concurrency control.",
        "how do you manage project timelines": "I set realistic estimates, track progress, and adjust when needed.",
        "do you like object oriented design": "Yes, it helps structure code around real-world concepts.",
        "why do you appreciate simple solutions": "Simplicity reduces bugs and is easier to maintain.",
        "how do you handle code regressions": "I rely on version control to revert or fix them quickly.",
        "what do you think about functional programming": "It’s powerful for certain tasks, though it may feel unfamiliar at first.",
        "how do you create a restful api": "I design clear endpoints, use HTTP methods properly, and return JSON.",
        "why do you enjoy learning kotlin": "It’s modern, concise, and integrates well with Java libraries.",
        "how do you keep your system secure": "I apply patches, use firewalls, and practice the principle of least privilege.",
        "do you test on different browsers": "Yes, cross-browser testing ensures a consistent user experience.",
        "what do you think about docker containers": "They simplify deployment and environment consistency.",
        "how do you handle memory leaks in c": "I use valgrind or similar tools to find and fix unfreed memory.",
        "why do you love to code": "It's creative, logical, and rewarding to solve problems that help people.",
        "how do you handle parallel processing": "I use threads, coroutines, or message passing, depending on the language.",
        "do you like remote databases": "Yes, as long as latency is manageable and the connection is secure.",
        "how do you ensure data integrity": "I use constraints, transactions, and consistent backups.",
        "what do you think about tech conferences": "They’re great for networking, inspiration, and learning new trends.",
        "how do you handle extremely large images": "I compress or resize them, and use caching or CDNs if needed.",
        "why do you enjoy easy english": "It lowers barriers so more people can understand your work.",
        "how do you handle user authentication": "I use secure protocols, salted hashing, and proper session management.",
        "what do you think about encryption": "It’s vital for protecting sensitive data both at rest and in transit.",
        "do you like static typing or dynamic typing": "Static typing can catch errors early, but dynamic is flexible for quick tasks.",
        "how do you approach planning a big feature": "I break it into smaller milestones and confirm details with stakeholders.",
        "why do you love expanding your knowledge": "Continuous learning keeps me relevant and brings new possibilities.",
        "how do you debug front end code": "I use browser dev tools to inspect elements, watch console logs, and test changes live.",
        "do you think soft skills are important": "Yes, they help in teamwork, leadership, and clearer communication.",
        "what is your view on big data analytics": "It offers insights but also demands responsibility in handling data.",
        "how do you manage browser compatibility": "I use polyfills or fallback approaches for older browsers.",
        "why do you prefer small iterative changes": "They reduce risk and let me fix issues before they accumulate.",
        "what do you do for personal growth": "I read, try new tech, and look for challenging projects.",
        "how do you handle tough client requests": "I clarify scope, set expectations, and find workable compromises.",
        "do you like code refactoring": "Yes, cleaning up code improves stability and maintainability.",
        "why do you prefer a minimalistic ui": "It helps users focus on key tasks without clutter or confusion.",
        "how do you incorporate user feedback": "I prioritize it based on impact and feasibility, then implement it iteratively.",
        "what do you think about devops": "DevOps bridges dev and operations, speeding up delivery and reliability.",
        "how do you handle unpredictable bugs": "I try to replicate them, add logs, and systematically narrow down the cause.",
        "do you practice code splitting": "Yes, it improves performance by loading only what’s needed.",
        "why do you enjoy working with c": "It’s low-level and efficient, great for system-level programming.",
        "how do you handle external libraries": "I pick well-maintained ones, read their docs, and test thoroughly.",
        "what is your approach to concurrency in c": "Use threads carefully or concurrency libraries to avoid race conditions.",
        "why do you like writing test cases": "They give confidence in code changes and catch regressions early.",
        "how do you handle production issues": "I remain calm, check logs, replicate the problem, then apply fixes swiftly.",
        "what do you think about security patches": "They should be applied promptly to reduce vulnerabilities.",
        "do you enjoy solving puzzles outside coding": "Yes, it helps keep my mind flexible and creative.",
        "how do you handle complex logic": "I break it into smaller functions and verify each piece individually.",
        "why do you like brainstorming sessions": "They spur creative ideas and foster collaborative solutions.",
        "what is your greatest lesson from coding": "Persistence and continuous learning are key to growth.",
        "how do you manage client deadlines": "I keep communication clear, track progress, and adjust scope if necessary.",
        "do you prefer working alone or in a team": "A mix of both is ideal, as each setting has its advantages.",
        "what do you think of password managers": "They’re helpful for securely managing many credentials.",
        "how do you approach code complexity": "I refactor to reduce complexity, ensuring everything is maintainable.",
        "why do you like short code commits": "They are easier to review, test, and revert if needed.",
        "how do you handle user privacy": "I collect minimal data, secure it, and respect user consent.",
        "what is your biggest motivation in cs": "Making a positive impact on society through technology.",
        "why do you enjoy technology events": "They allow me to learn, network, and find potential collaborations.",
        "how do you store api keys": "I keep them out of code, often in environment variables.",
        "what do you think about iot": "It’s exciting but security is a major concern for connected devices.",
        "how do you make sure your app scales": "Design with modular services, use caching, and optimize database queries.",
        "why do you appreciate team diversity": "It brings unique perspectives and creative problem-solving approaches.",
        "do you believe in code simplicity": "Yes, simpler code is usually more robust and easier to expand.",
        "how do you handle large amounts of feedback": "I categorize it by themes, prioritize the biggest impacts, and plan changes.",
        "what do you think about functional languages": "They encourage immutable data and can simplify parallel computations.",
        "how do you keep up with cs research": "I read summaries, follow researchers on social media, and skim papers.",
        "do you prefer a dark or light theme": "I usually prefer dark theme as it’s easier on my eyes.",
        "why do you focus on user needs": "Because useful solutions address real problems and create value.",
        "how do you manage many tasks": "I schedule them carefully and avoid context switching too often.",
        "what is your perspective on dev communities": "They offer support, learning, and inspiration to developers everywhere.",
        "how do you handle negative feedback": "I stay open-minded, thank them, and see if it reveals an improvement area.",
        "why do you embrace open source": "It fosters collaboration and rapid innovation across the globe.",
        "how do you debug network issues": "I use Wireshark or similar tools to inspect packet flows.",
        "what do you think about hackathons": "They’re intense but fun events to quickly prototype and learn new things.",
        "why do you love big challenges": "They push me to grow, refine my skills, and learn new approaches.",
        "how do you write accessible web pages": "I use semantic HTML, proper labels, and test with screen readers.",
        "what is your approach to error pages": "I give clear messages and helpful actions for users to recover.",
        "why do you like local testing environments": "They let me develop safely without risking production data.",
        "how do you handle a new codebase": "I read the structure, test small changes, and review the docs or wiki.",
        "do you use command line often": "Yes, it’s efficient for many development and debugging tasks.",
        "why do you believe in minimal dependencies": "They reduce complexity and lower maintenance overhead.",
        "how do you handle late requirements": "I discuss feasibility, potential trade-offs, and update the plan.",
        "what do you think about software patents": "They can foster innovation or create barriers, depending on usage.",
        "how do you handle memory management": "In higher-level languages, it’s automatic, but in C I’m extra careful.",
        "why do you focus on problem solving": "It’s the core of computer science and applies to all tech fields.",
        "what is your biggest personal project": "An in-depth security auditing framework I’ve been building over time.",
        "how do you approach interdisciplinary teams": "I communicate clearly, respect different expertise, and find common goals.",
        "do you like cross compiling": "It’s useful when building for different platforms from one environment.",
        "why do you enjoy logic based tasks": "They test my reasoning and help me refine my approach systematically.",
        "how do you handle streaming data": "I process it in real time if possible, or batch it if resources are limited.",
        "what do you think about infinite scroll": "It can be user-friendly or overwhelming, depending on the context.",
        "why do you enjoy code challenges": "They make me think fast and creatively under constraints.",
        "how do you keep your user interface consistent": "I rely on design systems, reusable components, and style guides.",
        "do you find data entry tasks boring": "They can be, but sometimes they’re necessary for completeness.",
        "what is your approach to rewriting code": "I start small, preserve functionality, and gradually replace outdated parts.",
        "why do you appreciate a well documented api": "It lets me integrate features faster without guesswork.",
        "how do you handle concurrency in databases": "I rely on transactions, locks, or optimistic concurrency, depending on the DB.",
        "do you like using docker compose": "Yes, it orchestrates multiple containers easily for local development.",
        "why do you keep test coverage high": "High coverage reduces the chance of hidden bugs and regressions.",
        "how do you approach nodejs for back end": "I use frameworks like Express, keep code modular, and add robust error handling.",
        "what do you do if a user is confused": "I gather feedback, clarify instructions, and improve the user flow.",
        "why do you love technology in general": "It transforms the world and solves problems in creative ways.",
        "how do you handle conflicting tasks": "I prioritize based on deadlines or impact, and renegotiate if needed.",
        "what is your approach to scheduling tasks": "I assign realistic deadlines and buffer for unexpected issues.",
        "do you like brainstorming with a whiteboard": "Yes, it’s a visual way to map out ideas quickly.",
        "why do you enjoy learning new languages": "Each language has unique features and broadens my mindset.",
        "how do you keep your dev environment stable": "I version everything, track changes, and test updates in a sandbox.",
        "what do you think about offline first apps": "They’re user-friendly when internet is unreliable, improving user experience.",
        "do you prefer lightweight or heavy frameworks": "Lightweight frameworks can be more flexible, but heavier ones might offer ready-made solutions.",
        "why do you use c csharp and kotlin": "Each language serves a different context: C for low-level, C# for enterprise, Kotlin for Android.",
        "how do you configure build pipelines": "I define steps for install, build, test, and deploy in CI/CD tools.",
        "what do you think about code generation": "It can boost productivity but sometimes hides underlying details.",
        "why do you care about user acceptance testing": "It ensures the final product meets real user needs and expectations.",
        "how do you handle big merges in version control": "I prefer small, frequent merges to avoid complicated conflicts.",
        "do you like designing logos": "I dabble, but it’s not my main focus. I usually collaborate with designers.",
        "why do you prefer thorough logging": "It helps track down issues faster and understand system behavior.",
        "how do you create wireframes quickly": "I use simple shapes, placeholders, and focus on layout before details.",
        "do you do performance testing": "Yes, to ensure the app meets speed and efficiency requirements under load.",
        "why do you set code style guidelines": "Consistency reduces confusion and speeds up collaboration.",
        "how do you approach multi threading": "I split tasks logically, use concurrency tools, and watch for race conditions.",
        "what do you do after finishing a project": "I review what I learned, document the process, and celebrate the achievement.",
        "why do you enjoy scaffolding new ideas": "It’s a creative step that sets the foundation for bigger projects.",
        "how do you handle partial solutions": "I incrementally refine them, ensuring each step adds value.",
        "do you enjoy writing unit tests": "Yes, they confirm my logic and protect against regressions.",
        "why do you appreciate offline docs": "They’re accessible even without an internet connection, saving time.",
        "how do you handle multi language support": "I plan for i18n from the start, using resource files or translation libraries.",
        "what is your approach to code disclaimers": "I clarify usage limits and disclaim any liability for production usage if needed.",
        "why do you like small modular functions": "They’re reusable, easier to test, and simpler to reason about.",
        "how do you keep your knowledge from expiring": "I keep learning, follow tech news, and practice new techniques.",
        "what do you think about user stories": "They capture requirements from a user's point of view, guiding development.",
        "how do you handle multiple input sources": "I unify them into a single interface, ensuring consistent validation.",
        "why do you enjoy terminal based tools": "They’re fast, scriptable, and consume fewer resources than GUIs.",
        "how do you reduce technical debt": "I schedule refactoring sprints and address issues early.",
        "what do you think about multi cloud setups": "They provide redundancy but can be complex to manage.",
        "why do you keep open communication channels": "It prevents misunderstandings and fosters a trusting environment.",
        "how do you handle urgent bug fixes": "I fix them as a priority, then ensure relevant tests are updated.",
        "do you like semantic versioning": "Yes, it makes it clear when breaking changes are introduced.",
        "why do you enjoy database tuning": "Optimizing queries and indexes makes apps run smoothly.",
        "how do you measure user satisfaction": "I use feedback forms, analytics, or direct communication to gauge sentiment.",
        "what is your approach to user onboarding": "I provide clear instructions, minimal friction, and a guided first-time experience.",
        "to know more": "You can email me at saadullahsahi@gmail.com or follow me on Instagram @saaadsahi."
      };
      
      
      
  
    function appendMessage(text, cls) {
      const div = document.createElement("div");
      div.className = "chatbot-message " + cls;
      div.innerHTML = text;
      chatArea.appendChild(div);
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  
    function botReply(msg) {
      const typing = document.createElement("div");
      typing.className = "chatbot-message bot typing-indicator";
      typing.innerText = "Saad is typing...";
      chatArea.appendChild(typing);
      chatArea.scrollTop = chatArea.scrollHeight;
      setTimeout(function () {
        typing.remove();
        appendMessage(msg, "bot");
      }, 1500);
    }
  
    appendMessage(
      "Hello! I can answer questions about my work and study. I'm still under development but ask away!",
      "bot"
    );
  
    sendBtn.addEventListener("click", function () {
      const q = input.value.trim().toLowerCase();
      if (!q) return;
      appendMessage(q, "user");
      input.value = "";
      let found = false;
      for (const key in answers) {
        if (q.includes(key)) {
          found = true;
          botReply(answers[key]);
          break;
        }
      }
      if (!found) {
        botReply("To know more email me at saadullahsahi@gmail.com");
      }
      sendBtn.addEventListener("click", handleUserInput);

      // Trigger when the Enter/Return key is pressed
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          handleUserInput();
        }
      });
    
      // Initial greeting message
      appendMessage(
        "Hello! Ask me about my work, study, hobbies, or anything about me. I'm still learning, so let's see how I do!",
        "bot"
      );
    
      // Close chatbot window on X button click
      closeBtn.addEventListener("click", function () {
        chatWindow.classList.add("hidden");})});
  });
  
