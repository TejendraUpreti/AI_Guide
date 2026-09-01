const lessons=[
{id:"ai-basics",n:"01",icon:"🧠",title:"AI Fundamentals",level:"Beginner",desc:"Understand AI, Generative AI and language models before using ChatGPT."},
{id:"chatgpt-basics",n:"02",icon:"💬",title:"ChatGPT Basics",level:"Beginner",desc:"Learn conversations, instructions, context and how to get useful answers."},
{id:"prompt-engineering",n:"03",icon:"✍️",title:"Prompt Engineering",level:"Beginner → Advanced",desc:"Build precise prompts using roles, context, examples and constraints."},
{id:"productivity",n:"04",icon:"⚡",title:"ChatGPT for Work",level:"Intermediate",desc:"Use AI for writing, Excel, research, planning and everyday productivity."},
{id:"coding",n:"05",icon:"💻",title:"ChatGPT for Coding",level:"Intermediate",desc:"Learn to use AI for Python, SQL, debugging, explanations and projects."},
{id:"ai-apps",n:"06",icon:"⚙️",title:"Build AI Applications",level:"Advanced",desc:"Understand APIs, databases, RAG and the architecture of AI applications."}
];
const grid=document.getElementById("lessonGrid");
if(grid)grid.innerHTML=lessons.map(x=>`<a class="lesson-card" href="topic.html?id=${x.id}"><span class="num">${x.n}</span><div class="lesson-icon">${x.icon}</div><small>${x.level}</small><h2>${x.title}</h2><p>${x.desc}</p><strong>Open Topic →</strong></a>`).join("");