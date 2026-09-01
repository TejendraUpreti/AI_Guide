const data={
"ai-basics":["AI Fundamentals","Explain the difference between AI, Generative AI and LLMs to a complete beginner.","ai-basics"],
"chatgpt-basics":["ChatGPT Basics","Write a prompt asking AI to teach you a topic. Include your level, language and desired format.","chatgpt-basics"],
"prompt-engineering":["Prompt Engineering","Create a structured prompt using Task + Context + Format + Constraints.","prompt-engineering"],
"productivity":["ChatGPT for Work","Write a prompt that asks AI to create a professional email from rough notes.","productivity"],
"coding":["ChatGPT for Coding","Write a prompt asking AI to debug a Python program. Include the error and expected result.","coding"],
"ai-apps":["Build AI Applications","Write a prompt asking AI to design a simple AI chatbot architecture using a frontend, Python backend and database.","ai-apps"]};
const id=new URLSearchParams(location.search).get("topic")||"chatgpt-basics";const d=data[id]||data["chatgpt-basics"];
document.getElementById("taskTitle").textContent=d[1];document.getElementById("practiceIntro").textContent=`Practice: ${d[0]}. Write your own answer/prompt and use the checklist to improve it.`;
document.getElementById("nextPractice").href=`practice.html?topic=${d[2]}`;
document.getElementById("check").onclick=()=>{
 const a=document.getElementById("answer").value.trim();const f=document.getElementById("feedback");
 if(!a){f.textContent="Write something first. Try to include the task, context and desired output.";f.className="feedback bad";return}
 let score=0;["act as","task","explain","context","format","example","beginner","step","output","constraint"].forEach(k=>{if(a.toLowerCase().includes(k))score++});
 if(score>=3){f.textContent="Great structure! Your prompt includes useful instructions. Now test it in an AI assistant and refine the result.";f.className="feedback good"}else{f.textContent="Good start. Add more context and explicitly specify the output format, audience or constraints.";f.className="feedback bad"}
};