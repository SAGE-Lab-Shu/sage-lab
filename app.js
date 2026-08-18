const translations = {
  en: {
    skip:'Skip to content',navResearch:'Research',navWork:'Work',navDemos:'Demos',navPeople:'People',navJoin:'Join us',heroEyebrow:'School of Computer Engineering and Science · Shanghai University',heroLine1:'Intelligence that understands.',heroLine2:'Systems we can trust.',heroIntro:'We study how machines perceive, reason and act — and how they can remain reliable, secure and controllable in the real world.',explore:'Explore our research',openings:'View open positions',nodeCore:'Trusted AI',nodeReason:'Reasoning',nodeAgent:'Agents',nodeSecurity:'Security',visualHint:'Select a node to explore',topicDefaultTitle:'Cognition × Security',topicDefaultText:'From capability boundaries to trusted deployment',leadBy:'LED BY',leaders:'Prof. Xinpeng Zhang · Dr. Pengzhou Cheng',locationLabel:'BASED IN',location:'Shanghai · China',focusLabel:'AT THE INTERSECTION OF',latest:'LATEST',newsText:'We welcome undergraduate, master’s and research interns working on foundation models, agents and AI security.',details:'Details →',researchTitle:'Advancing intelligence.\nDefining its safeguards.',researchIntro:'We bring cognition and security into one research framework — from the reasoning mechanisms of foundation models to intelligent systems that can be verified and deployed.',r1Title:'Multimodal Cognition & Reasoning',r1Text:'Understanding causal links across vision, language and environmental feedback for compositional reasoning in complex tasks.',r2Title:'Autonomous Interactive Agents',r2Text:'Building general agents that plan, use tools and continuously learn through real-world interaction.',r3Title:'Artificial Intelligence Security',r3Text:'Studying attack surfaces, risk evaluation and defenses to make models and agents more reliable and controllable.',r4Title:'Multimedia Information Security',r4Text:'Developing theory and methods in steganography, forensics and privacy to protect the authenticity of digital content.',workTitle:'Selected work',allPapers:'All publications →',paper1Title:'Multimodal reasoning and safe decision-making in complex environments',paper1Desc:'A traceable path from visual evidence to language reasoning, with systematic evaluation of agent reliability under uncertainty.',placeholderAuthors:'Student Name*, Cheng P., Zhang X.',placeholderNote:'Sample content · Replace with a verified lab publication',paper2Title:'A risk benchmark for autonomous agents',paper2Desc:'Across tool use, long-term memory and environment interaction.',paper3Title:'Robust provenance for generated content',paper3Desc:'Connecting content generation, distribution and trustworthy verification.',demoTitle:'Beyond papers,\nwe build systems.',demoIntro:'Our interactive demos reveal how models reason, how agents act, and where safeguards intervene.',filterAll:'All',filterAgent:'Agents',filterSecurity:'Security',filterMultimodal:'Multimodal',demo1Desc:'Observe and intercept high-risk agent tool calls in real time.',demo2Desc:'Visualize how multimodal models reason through complex scenes.',demo3Desc:'Detect generated content and surface interpretable provenance clues.',launch:'Launch demo',projectTitle:'Projects & open source',project1:'Hands-on Large Language Models',project1Desc:'An open-source learning resource for developers and researchers, co-developed by Pengzhou Cheng.',project2Desc:'A multidimensional evaluation platform for autonomous agent risk.',project3Desc:'A controlled environment for red-teaming, attack reproduction and defense evaluation.',comingSoon:'Coming soon',internalTest:'Private beta',peopleTitle:'Curious by nature.\nRigorous by practice.',peopleIntro:'We are researchers who care about long-term questions and enjoy solving real problems.',academicLead:'ACADEMIC LEAD',zhangName:'Prof. Xinpeng Zhang',zhangRole:'Dean, School of Computer Engineering and Science · NSFC Distinguished Young Scholar',aiSafety:'AI Security',mediaSecurity:'Multimedia Security',profile:'Profile ↗',principalInvestigator:'CORE FACULTY',chengName:'Dr. Pengzhou Cheng',chengRole:'Assistant Professor, School of Computer Engineering and Science, Shanghai University',multimodal:'Multimodal Reasoning',agentSafety:'Agent Security',students:'Students',studentNote:'Layout samples — replace with verified member information',student1:'Student Name',student2:'Student Name',student3:'Student Name',student4:'Student Name',phd:'PhD Student',master:'Master’s Student',undergrad:'Undergraduate Researcher',youMaybe:'You could be next',viewOpenings:'View open positions →',joinTitle:'Work on questions\nwithout standard answers.',joinDesc:'We welcome undergraduate, master’s, PhD and research interns. We value strong programming fundamentals, lasting curiosity and the ability to solve problems independently.',contactUs:'Contact the lab',directions:'OPEN AREAS',directionList:'Foundation Models · Agents · AI Security · Cybersecurity',address:'ADDRESS',addressText:'99 Shangda Road, Baoshan District, Shanghai',footerSchool:'School of Computer Engineering and Science, Shanghai University',footerLab:'Artificial Intelligence Cognition & Security Laboratory',simPrompt:'Ready to run safety evaluation...',runDemo:'Run demo'
  }
};

Object.assign(translations.en, {
  r2Title:'Autonomously Evolving Agents', r2Text:'Studying how agents continuously improve reasoning, action and task generalization through recursive self-evolution, online self-distillation and sustained environmental feedback.',
  cogSub1:'Multimodal', cogSub2:'Reasoning', cogSub3:'Alignment', agentSub1:'Recursive Self-Evolution', agentSub2:'Online Self-Distillation', agentSub3:'Continual Adaptation', aiSub1:'Agent Safety', aiSub2:'Red Teaming', aiSub3:'Trusted AI', mediaSub1:'Hiding', mediaSub2:'Forensics', mediaSub3:'Privacy',
  orbitCaption:'Cognition and reasoning build capability; agents turn capability into action; dual safeguards run throughout the system on the path to safe and trustworthy AGI.',
  frameworkTitle:'Research framework', foundationLayer:'Capability foundation', agencyLayer:'Autonomous action', safetyLayer:'Dual safety assurance', researchGoal:'RESEARCH GOAL', safeAgi:'Safe & Trustworthy General Intelligence', frameworkCaption:'From understanding and reasoning, through autonomous action and systematic safeguards, toward verifiable and controllable general intelligence.',
  recentWork:'Recent research', viewStudy:'View research overview →',
  labGitHub:'Visit the lab GitHub →',
  newsText:'We welcome undergraduate, master’s, PhD and research interns working on foundation models, agents and AI security.',
  workTitle:'Representative research', allPapers:'View publication list →', figureFromPaper:'Core figure from the paper',
  problem:'Problem', method:'Approach', result:'Key result', readPaper:'Read paper ↗',
  faithfulLead:'Training mobile GUI agents to act from screen evidence and user intent—and to stop, go back or verify when critical evidence is missing or conflicting.',
  faithfulProblem:'GUI agents may rely on memorized interaction shortcuts, producing ungrounded actions under occluded interfaces, conflicting instructions or insufficient evidence.',
  faithfulMethod:'A faithfulness-oriented SFT cold start followed by RFT with thought–action consistency rewards and the Guided Advantage Estimator (GuAE) for stable learning.',
  faithfulResult:'Trap-scenario success rate, up substantially from the 13.88% baseline',
  ghostLead:'Uncovering supply-chain backdoor risks in multimodal mobile GUI agents, with AgentGhost as a systematic red-teaming framework.',
  ghostProblem:'Third-party models can combine goals with interaction history to covertly trigger malicious actions while completing the requested task.',
  ghostMethod:'Composite goal- and interaction-level triggers with Min-Max optimization to balance stealth, effectiveness and clean-task utility.',
  ghostResult:'peak attack success rate; a tailored defense reduces it to 22.1%',
  kairosLead:'A GUI agent that evaluates confidence at every step—acting autonomously when certain and asking for human help when uncertain.',
  kairosProblem:'Fully autonomous agents tend to over-execute under ambiguous instructions, interruptions and environmental hijacks.',
  kairosMethod:'Collaborative probing produces step-level confidence annotations, followed by confidence-driven adaptive interaction.',
  kairosResult:'task-success improvement across complex scenarios and public benchmarks',
  genptwLead:'Embedding structured watermarks during image generation to unify provenance tracing and tamper localization in one forensic framework.',
  genptwProblem:'Existing methods often rely on post-processing or reference images and struggle to combine provenance, localization and visual fidelity.',
  genptwMethod:'Cross-attention and spatial fusion in latent space, paired with a frequency-coordinated decoder for extraction and localization.',
  genptwResult:'provenance tracing and tamper localization across multiple generation models'
  ,riskTaxonomy:'Risks', attackTaxonomy:'Attacks', defenseTaxonomy:'Defenses', evaluationTaxonomy:'Evaluation',
  publicPreview:'Structured from public paper information · not an original figure', authors:'Authors', scope:'Scope', value:'Research value',
  behaviorLead:'A systematic view of risks, attacks, defenses and evaluation for autonomous interactive agents, establishing a shared problem space for behavior-level safety.',
  behaviorScope:'Behavioral risks across autonomous tool use, environment interaction and long-horizon tasks, connecting attack mechanisms with defensive strategies.',
  behaviorValue:'organizing agent behavior safety through risks, attacks, defenses and evaluation', viewRecord:'View public record ↗',
  researchStudent:'Student Researcher', doctoral2025:'PhD Student · 2025 Cohort', studentNote:'Member profiles are being updated'
});

let currentLang = 'zh';
const original = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => original.set(el, el.textContent));

const orbitContent = {
  zh: {
    cognition: {index:'01', title:'多模态认知与推理', topics:['多模态大模型','推理机制','对齐与认知建模']},
    agent: {index:'02', title:'自主进化智能体', topics:['递归自进化','在线自蒸馏','持续适应']},
    aiSecurity: {index:'03', title:'人工智能安全', topics:['智能体安全','红队测试','可信与可控 AI']},
    mediaSecurity: {index:'04', title:'多媒体信息安全', topics:['信息隐藏','数字取证','隐私保护']}
  },
  en: {
    cognition: {index:'01', title:'Multimodal Cognition & Reasoning', topics:['Multimodal LLMs','Reasoning Mechanisms','Alignment & Cognitive Modeling']},
    agent: {index:'02', title:'Autonomously Evolving Agents', topics:['Recursive Self-Evolution','Online Self-Distillation','Continual Adaptation']},
    aiSecurity: {index:'03', title:'Artificial Intelligence Security', topics:['Agent Security','Red Teaming','Trustworthy & Controllable AI']},
    mediaSecurity: {index:'04', title:'Multimedia Information Security', topics:['Information Hiding','Digital Forensics','Privacy Protection']}
  }
};
let activeOrbitTopic = null;

function renderOrbitCore(topic){
  const core = document.querySelector('.sagi-core');
  if(!core) return;
  const kicker = core.querySelector('.core-kicker');
  const title = core.querySelector('.core-title');
  const topics = core.querySelector('.core-subtopics');
  core.classList.toggle('showing-topic', Boolean(topic));
  topics.replaceChildren();
  if(!topic){
    kicker.textContent = currentLang === 'en' ? translations.en.researchGoal : original.get(kicker);
    title.textContent = currentLang === 'en' ? translations.en.safeAgi : original.get(title);
    const label = document.createElement('small');
    label.textContent = 'SAFE & TRUSTWORTHY AGI';
    topics.append(label);
  }else{
    const content = orbitContent[currentLang][topic];
    kicker.textContent = `${content.index} · ${currentLang === 'en' ? 'SUBTOPICS' : '细分方向'}`;
    title.textContent = content.title;
    content.topics.forEach(item => {
      const label = document.createElement('small');
      label.textContent = item;
      topics.append(label);
    });
  }
  document.querySelectorAll('.sagi-node').forEach(button => {
    const selected = button.dataset.orbitTopic === topic;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? 'SAGE Lab · 上海大学' : 'SAGE Lab · Shanghai University';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = lang === 'en' ? translations.en[key] : original.get(el);
    if(value) el.innerHTML = value.replace(/\n/g,'<br>');
  });
  const spans = document.querySelectorAll('.language-toggle span');
  spans[0].classList.toggle('active', lang === 'zh');
  spans[1].classList.toggle('active', lang === 'en');
  document.querySelector('.language-toggle').setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换至中文');
  renderOrbitCore(activeOrbitTopic);
}

document.querySelector('.language-toggle').addEventListener('click',()=>setLanguage(currentLang === 'zh' ? 'en' : 'zh'));

document.querySelectorAll('.sagi-node').forEach(button=>button.addEventListener('click',()=>{
  activeOrbitTopic = activeOrbitTopic === button.dataset.orbitTopic ? null : button.dataset.orbitTopic;
  renderOrbitCore(activeOrbitTopic);
}));
renderOrbitCore(null);

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
menuButton.addEventListener('click',()=>{
  const open = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open ? '关闭菜单' : '打开菜单');
});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');menuButton.setAttribute('aria-expanded','false')}));

const topicContent = {
  zh:{reason:['多模态推理','理解跨越视觉与语言的证据链'],agent:['自主智能体','让规划、行动与反馈形成闭环'],security:['可信安全','识别风险，并把防御置于系统之中']},
  en:{reason:['Multimodal reasoning','Following evidence across vision and language'],agent:['Autonomous agents','Closing the loop between planning, action and feedback'],security:['Trusted security','Identifying risk and building defenses into the system']}
};
document.querySelectorAll('.hero-visual button.node').forEach(button=>button.addEventListener('click',()=>{
  const [title,text] = topicContent[currentLang][button.dataset.topic];
  document.querySelector('.topic-note strong').textContent=title;
  document.querySelector('.topic-note span').textContent=text;
}));

document.querySelectorAll('.demo-tabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.demo-tabs button').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});
  button.classList.add('active');button.setAttribute('aria-selected','true');
  document.querySelectorAll('.demo-card').forEach(card=>card.classList.toggle('hidden',button.dataset.filter!=='all'&&!card.dataset.category.includes(button.dataset.filter)));
}));

const dialog = document.querySelector('.demo-dialog');
const demoDescriptions = {
  guard:{title:'SAGE Guard',zh:'模拟智能体调用外部工具时的策略检查与风险拦截。',en:'Simulate policy checks and risk interception when an agent calls external tools.'},
  scene:{title:'SceneThink',zh:'模拟多模态场景理解中的证据定位与推理链生成。',en:'Simulate evidence localization and reasoning traces in multimodal scene understanding.'},
  trace:{title:'OriginTrace',zh:'模拟生成内容检测与来源可信度分析。',en:'Simulate generated-content detection and provenance confidence analysis.'}
};
document.querySelectorAll('.launch-demo').forEach(button=>button.addEventListener('click',()=>{
  const demo=demoDescriptions[button.dataset.demo];
  dialog.dataset.demo=button.dataset.demo;dialog.querySelector('h2').textContent=demo.title;dialog.querySelector('.dialog-desc').textContent=demo[currentLang];
  dialog.querySelector('.sim-status').textContent='READY';dialog.querySelector('.sim-progress i').style.width='0';dialog.querySelector('.sim-result').textContent='';dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('.run-sim').addEventListener('click',()=>{
  const status=dialog.querySelector('.sim-status'),bar=dialog.querySelector('.sim-progress i'),result=dialog.querySelector('.sim-result');
  status.textContent='RUNNING';bar.style.width='100%';result.textContent='';
  setTimeout(()=>{status.textContent='COMPLETE';result.textContent=currentLang==='zh'?'✓ 评测完成 · 检测到 1 项风险并已安全拦截':'✓ Evaluation complete · 1 risk detected and safely blocked'},1450);
});

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
