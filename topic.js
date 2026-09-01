const topics={
"ai-basics":{title:"AI Fundamentals",level:"BEGINNER",intro:"Before learning ChatGPT, understand the technology behind modern AI.",sections:[
["What is AI?","Artificial Intelligence is the field of creating systems that can perform tasks that normally require human-like capabilities such as understanding language, recognizing patterns and making predictions."],
["Generative AI","Generative AI creates new content such as text, images, audio or code from instructions. ChatGPT is a conversational application built around language models."],
["What is an LLM?","A Large Language Model learns statistical patterns from large amounts of text and can generate language one token at a time. It does not work like a human brain and can make mistakes."],
["Key takeaway","AI is the broad field → Generative AI creates content → language models specialize in language → ChatGPT provides a conversational interface."]]},
"chatgpt-basics":{title:"ChatGPT Basics",level:"BEGINNER",intro:"Learn the core workflow: give a clear instruction, provide context, review the answer and refine your request.",sections:[
["1. Start with the task","Tell the AI exactly what you want: explain, summarize, compare, create, calculate, brainstorm or rewrite."],
["2. Add context","Include the audience, goal, background information, source material and any details the AI needs."],
["3. Specify the output","Ask for a table, bullets, step-by-step guide, email, code, checklist or another format that suits your task."],
["Example","Weak: “Tell me Python.” Strong: “Teach me Python variables as a beginner. Explain in simple Hindi, give 5 real-life examples and then give me 5 practice questions.”"]]},
"prompt-engineering":{title:"Prompt Engineering",level:"BEGINNER → ADVANCED",intro:"Good prompting is structured communication. The more useful context you provide, the easier it is for AI to produce the result you need.",sections:[
["Role","Give the AI a useful role when it improves the task: “Act as a Python tutor” or “Act as a data analyst.”"],
["Context + constraints","State the goal, audience, input, limitations, tone, length and what must or must not be included."],
["Examples","For repetitive or specific outputs, show one or two examples of the format you want."],
["Iterate","Your first prompt does not need to be perfect. Review the response, identify what is missing and refine the instruction."]]},
"productivity":{title:"ChatGPT for Work",level:"INTERMEDIATE",intro:"Turn repetitive work into structured AI-assisted workflows while keeping human review in the loop.",sections:[
["Writing","Draft professional emails, summaries, meeting notes, announcements and documentation. Always verify important details."],
["Excel & data","Ask for formulas, explanations, data-cleaning ideas and dashboard recommendations. Validate formulas against your actual data."],
["Research & planning","Use AI to organize questions, compare options, create checklists and turn information into a structured plan."],
["Best practice","Never blindly paste confidential information into an AI tool. Follow your organization's data and privacy policies."]]},
"coding":{title:"ChatGPT for Coding",level:"INTERMEDIATE",intro:"Use AI as a coding assistant and tutor—not as a replacement for testing and understanding code.",sections:[
["Generate & explain","Ask for a small example, then ask the AI to explain each line and why the approach works."],
["Debug","Provide the exact error, relevant code, expected result and actual result. Ask for the root cause and a corrected version."],
["Learn","Ask for exercises, hints first, test cases and progressively harder challenges rather than only requesting final answers."],
["Example","“Act as a Python tutor. Explain this error, identify the cause, show the corrected code, and give me one similar exercise.”"]]},
"ai-apps":{title:"Build AI Applications",level:"ADVANCED",intro:"Move from using AI to building applications that connect a user interface, backend, model and data.",sections:[
["Typical architecture","Frontend → Backend/API → AI model → optional database/retrieval → response. Each layer has a different responsibility."],
["APIs","An AI API lets your application send structured requests to a model and receive generated output. Keep API keys on the server, not in frontend code."],
["RAG","Retrieval-Augmented Generation combines retrieval of relevant information with generation, allowing an application to ground responses in selected documents or data."],
["Build path","Start with a simple chatbot, add conversation history, then files/RAG, authentication, monitoring and deployment."]]}
};
const params=new URLSearchParams(location.search);const id=params.get("id")||"chatgpt-basics";const t=topics[id]||topics["chatgpt-basics"];
document.getElementById("topicTitle").textContent=t.title;document.getElementById("topicLevel").textContent=t.level;document.getElementById("topicIntro").textContent=t.intro;document.getElementById("crumbTopic").textContent=t.title.toUpperCase();
document.getElementById("topicBody").innerHTML=t.sections.map((s,i)=>`<section class="topic-section"><h2>${s[0]}</h2><p>${s[1]}</p></section>`).join("");
document.getElementById("practiceLink").href=`practice.html?topic=${id}`;
const side=document.getElementById("sideLessons");side.innerHTML=Object.entries(topics).map(([k,v],i)=>`<a class="${k===id?"selected":""}" href="topic.html?id=${k}">${String(i+1).padStart(2,"0")} ${v.title}</a>`).join("");