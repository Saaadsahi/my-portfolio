document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("chatbot-button");
  const box = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close");
  const sendBtn = document.getElementById("chatbot-send");
  const input = document.getElementById("chatbot-question");
  const chatArea = document.getElementById("chatbot-messages");

  // Basic safety check
  if (!btn || !box || !closeBtn || !sendBtn || !input || !chatArea) return;

  /* ---------- FAQ DATA (focused & easy to maintain) ---------- */
  /* ---------- FAQ DATA (focused & easy to maintain) ---------- */
  const faq = [
    // --- IDENTITY & BASICS ---
    {
      keywords: ["who are you", "about you", "about yourself", "intro"],
      answer:
        "I’m Saad Sahi, a full-stack and security-minded developer based in Edmonton, AB. I recently finished my Computer Science degree (with an Econ minor) at MacEwan."
    },
    {
      keywords: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "yo", "sup", "what's up"],
      answer:
        "Hello! I'm here to answer questions about Saad's work, skills, and experience. What would you like to know?"
    },
    {
      keywords: ["how are you", "how are u", "how's it going", "how is it going", "how do you do"],
      answer:
        "I'm just a bot, but I'm functioning perfectly! Thanks for asking. How can I help you learn more about Saad?"
    },
    {
      keywords: ["resume", "cv", "download"],
      answer:
        "You can download my résumé by clicking the 'Download Résumé' button in the top right corner of the navigation bar."
    },

    // --- EDUCATION & AVAILABILITY ---
    {
      keywords: ["what do you study", "degree", "school", "university", "macewan", "education", "gpa"],
      answer:
        "I studied Computer Science at MacEwan University with a minor in Economics. I focused on software engineering, databases, and networking, maintaining a strong academic record."
    },
    {
      keywords: ["available", "start date", "when can you start", "notice period"],
      answer:
        "I am currently available to start immediately for full-time roles or contract work."
    },
    {
      keywords: ["relocate", "relocation", "remote", "moving"],
      answer:
        "I'm based in Edmonton but I am open to relocating for the right opportunity. I'm also fully equipped for remote work."
    },

    // --- TECH STACK ---
    {
      keywords: ["stack", "skills", "what can you do", "technologies", "languages"],
      answer:
        "My core stack is Python, C / systems, C#, Kotlin, SQL, HTML/CSS, Android Studio, Git, Wireshark, Snort, and RISC-V. I focus on building reliable, secure systems."
    },
    {
      keywords: ["react", "vue", "angular", "frontend framework", "javascript framework"],
      answer:
        "While my current portfolio focuses on vanilla JS and CSS for performance and control, I have experience with modern frontend concepts and can quickly adapt to frameworks like React or Vue."
    },
    {
      keywords: ["security", "network", "wireshark", "snort", "cyber"],
      answer:
        "On the security side, I use Wireshark and Snort for network analysis and intrusion detection. I’m interested in network security auditing, log analysis, and how software behaves in real networks."
    },

    // --- PROJECTS ---
    {
      keywords: ["projects", "show me your work", "portfolio", "built"],
      answer:
        "Some key projects: a healthcare recommendation engine for Life Tech Care (WordPress + C#/SQL), an Android tutor scheduling app in Kotlin, a student enrollment data warehouse in C#/SQL, a car rental management system, and a 2D game fully written in C."
    },
    {
      keywords: ["life tech", "healthcare", "quiz engine"],
      answer:
        "For Life Tech Care, I built a secure healthcare portal with a quiz-based recommendation engine. It combines custom WordPress features with a C#/SQL Server backend and serves 200+ users."
    },
    {
      keywords: ["android", "kotlin", "tutor", "scheduling app", "mobile"],
      answer:
        "The tutor scheduling app is built in Android Studio with Kotlin and SQL. It includes secure login, booking, chat, and schedule views for students and tutors."
    },
    {
      keywords: ["car rental", "asp.net", "open source"],
      answer:
        "The car rental system is a C#/SQL backend with ASP.NET. I worked on schema design, performance improvements, and testing to keep core booking and billing flows stable."
    },
    {
      keywords: ["game", "c game", "2d game"],
      answer:
        "I built a 3-level 2D game entirely in C to practice low-level memory management, collision detection, and game loop architecture without relying on heavy engines."
    },

    // --- EXPERIENCE & SOFT SKILLS ---
    {
      keywords: ["experience", "work", "jobs", "history"],
      answer:
        "I’ve done freelance dev work (Life Tech Care), served as Vice President External of the MacEwan CS Club, contributed to a car rental platform, and built a prize-winning Flask calendar app at a MacEwan hackathon."
    },
    {
      keywords: ["vice president", "vpexternal", "macs", "cs club", "leadership"],
      answer:
        "As Vice President External of the MacEwan CS Club, I organized 15+ tech events, connected students with industry, and helped grow engagement by around 35%."
    },
    {
      keywords: ["soft skills", "strengths", "teamwork", "communication"],
      answer:
        "I pride myself on clear communication (honed through my VP role), reliability, and a 'no-ego' approach to debugging and problem-solving. I enjoy bridging the gap between technical and non-technical stakeholders."
    },

    // --- CONTACT & SOCIALS ---
    {
      keywords: ["contact", "email", "reach you", "talk", "phone"],
      answer:
        "You can email me at saadullahsahi@gmail.com or call/text me at +1 (587) 987-0039. I’m always open to chatting about roles, projects, or collaborations."
    },
    {
      keywords: ["location", "where are you", "city"],
      answer:
        "I’m based in Edmonton, Alberta, Canada – open to local roles and remote opportunities."
    },
    {
      keywords: ["github", "code", "repos"],
      answer:
        "I mainly share my work and updates on LinkedIn: www.linkedin.com/in/saaadsahi. If you’d like to see specific code samples, just let me know what kind of project you’re interested in."
    },
    {
      keywords: ["linkedin", "profile"],
      answer:
        "Here’s my LinkedIn: www.linkedin.com/in/saaadsahi – that’s the best place to see my profile and connect."
    },
    {
      keywords: ["instagram", "social"],
      answer:
        "On Instagram I’m @saaadsahi – more personal, but feel free to connect there too."
    },

    // --- MISC ---
    {
      keywords: ["future plans", "dream job", "goal", "looking for"],
      answer:
        "I’m aiming for roles that mix full-stack development with security and systems thinking – places where I can design, build, and harden real products."
    },
    {
      keywords: ["joke", "funny"],
      answer:
        "Why do programmers prefer dark mode? Because light attracts bugs. (I know, classic.)"
    }
  ];

  /* ---------- UI helpers ---------- */
  function createMessageElement(text, cls) {
    const wrapper = document.createElement("div");
    wrapper.className = `chatbot-message ${cls}`;

    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${cls}`;
    bubble.innerText = text;

    wrapper.appendChild(bubble);
    return wrapper;
  }

  function appendMessage(text, cls) {
    const el = createMessageElement(text, cls);
    chatArea.appendChild(el);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  function botReply(text) {
    const typing = document.createElement("div");
    typing.className = "chatbot-message bot typing-indicator";
    typing.innerText = "Saad’s bot is thinking...";
    chatArea.appendChild(typing);
    chatArea.scrollTop = chatArea.scrollHeight;

    setTimeout(() => {
      typing.remove();
      appendMessage(text, "bot");
    }, 700);
  }

  /* ---------- Matching logic ---------- */
  function findAnswer(query) {
    const q = query.toLowerCase();

    // Try keyword match
    for (const item of faq) {
      if (item.keywords.some((kw) => q.includes(kw))) {
        return item.answer;
      }
    }

    // Fallback generic answer
    return "I’m not fully sure how to answer that yet. Ask me about my stack, projects, experience, or how to contact me — or email me at saadullahsahi@gmail.com.";
  }

  /* ---------- Input handling ---------- */
  function handleUserInput() {
    const raw = input.value.trim();
    if (!raw) return;

    appendMessage(raw, "user");
    input.value = "";
    const answer = findAnswer(raw);
    botReply(answer);
  }

  /* ---------- Event bindings ---------- */
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    box.classList.toggle("hidden");
  });

  closeBtn.addEventListener("click", () => {
    box.classList.add("hidden");
  });

  sendBtn.addEventListener("click", handleUserInput);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleUserInput();
    }
  });

  document.addEventListener("click", (e) => {
    if (!box.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
      box.classList.add("hidden");
    }
  });

  // Initial greeting – asks a question first
  botReply(
    "Hey, I’m Saad’s mini-bot. I can help you answer information abouut him, you can contact send him an email for more questions."
  );
});
