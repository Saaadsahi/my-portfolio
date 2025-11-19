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
  const faq = [
    {
      keywords: ["who are you", "about you", "about yourself"],
      answer:
        "I’m Saad Sahi, a full-stack and security-minded developer based in Edmonton, AB. I recently finished my Computer Science degree (with an Econ minor) at MacEwan."
    },
    {
      keywords: ["what do you study", "degree", "school", "university", "macewan"],
      answer:
        "I studied Computer Science at MacEwan University with a minor in Economics, focusing on software engineering, databases, and networking."
    },
    {
      keywords: ["stack", "skills", "what can you do", "technologies"],
      answer:
        "My core stack is Python, C / systems, C#, Kotlin, SQL, HTML/CSS, Android Studio, Git, Wireshark, Snort, and RISC-V. Most of the icons you see in the Tech Stack section are tools I’ve actually used in shipped projects."
    },
    {
      keywords: ["security", "network", "wireshark", "snort"],
      answer:
        "On the security side, I use Wireshark and Snort for network analysis and intrusion detection. I’m interested in network security auditing, log analysis, and how software behaves in real networks."
    },
    {
      keywords: ["projects", "show me your work", "portfolio"],
      answer:
        "Some key projects: a healthcare recommendation engine for Life Tech Care (WordPress + C#/SQL), an Android tutor scheduling app in Kotlin, a student enrollment data warehouse in C#/SQL, a car rental management system, and a 2D game fully written in C."
    },
    {
      keywords: ["life tech", "healthcare", "quiz engine"],
      answer:
        "For Life Tech Care, I built a secure healthcare portal with a quiz-based recommendation engine. It combines custom WordPress features with a C#/SQL Server backend and serves 200+ users."
    },
    {
      keywords: ["android", "kotlin", "tutor", "scheduling app"],
      answer:
        "The tutor scheduling app is built in Android Studio with Kotlin and SQL. It includes secure login, booking, chat, and schedule views for students and tutors."
    },
    {
      keywords: ["car rental", "asp.net", "open source"],
      answer:
        "The car rental system is a C#/SQL backend with ASP.NET. I worked on schema design, performance improvements, and testing to keep core booking and billing flows stable."
    },
    {
      keywords: ["experience", "work", "jobs"],
      answer:
        "I’ve done freelance dev work (Life Tech Care), served as Vice President External of the MacEwan CS Club, contributed to a car rental platform, and built a prize-winning Flask calendar app at a MacEwan hackathon."
    },
    {
      keywords: ["vice president", "vpexternal", "macs", "cs club"],
      answer:
        "As Vice President External of the MacEwan CS Club, I organized 15+ tech events, connected students with industry, and helped grow engagement by around 35%."
    },
    {
      keywords: ["contact", "email", "reach you", "talk"],
      answer:
        "You can email me at saadullahsahi@gmail.com or call/text me at +1 (587) 987-0039. I’m always open to chatting about roles, projects, or collaborations."
    },
    {
      keywords: ["location", "where are you"],
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
    {
      keywords: ["future plans", "dream job", "goal"],
      answer:
        "I’m aiming for roles that mix full-stack development with security and systems thinking – places where I can design, build, and harden real products."
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
    "Hey, I’m Saad’s mini-bot. Before I answer anything, what are you most curious about: my tech stack, specific projects, or work experience?"
  );
});
