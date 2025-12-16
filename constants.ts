import { SlideContent } from './types';

// Suffix to ensure style consistency across all generated images
const PHOTO_STYLE = "realistic photography, 4k, high quality, hackathon environment, students, professional";

export const SLIDES: SlideContent[] = [
  // --- INTRO ---
  {
    moduleId: 0,
    type: 'intro',
    title: "How to Pitch & Win",
    subtitle: "The PEC Hacks Survival Guide to Judging",
    points: [
      "Welcome to the Pitch Dojo 🥋",
      "We are going to cover EVERYTHING: Design, Dev, Biz, & Body Language.",
      "Goal: Turn your spaghetti code into a Michelin-star meal (metaphorically).",
      "No boring slides allowed. Let's go!"
    ],
    imagePrompt: `university students presenting project at hackathon stage with microphone and screen, ${PHOTO_STYLE}`,
    imageCaption: "You, getting ready to pitch."
  },

  // --- MODULE 1 ---
  {
    moduleId: 1,
    type: 'content',
    title: "1.1 Not All Pitches Are Created Equal",
    subtitle: "Hackathon vs. Startup vs. Investor",
    points: [
      "Startup Pitch: 'We need $1M to grow.' (Takes months)",
      "Investor Pitch: 'Here is our 5-year ROI.' (Boring)",
      "Hackathon Pitch: 'Look at this cool thing we actually BUILT.' (Exciting!)",
      "Time Constraints: You have 2-4 minutes. Speedrun mode on.",
      "⚠️ Myth: Big Ideas > Execution. REALITY: Working Demo > World Peace Concept."
    ],
    imagePrompt: `students running fast in a hallway, metaphor for speed, ${PHOTO_STYLE}`,
    imageCaption: "It's a sprint, not a marathon."
  },
  {
    moduleId: 1,
    type: 'content',
    title: "1.2 What Judges Actually Want",
    subtitle: "Spoiler: It's not just code lines",
    points: [
      "Product Thinking: Does it solve a problem, or is it just cool tech?",
      "Business Awareness: Does it make 0 cents or 0 sense?",
      "Tech Feasibility: Is it a wrapper around ChatGPT, or did you engineer something?",
      "Impact: Does this help 5 people or 5 million?",
    ],
    imagePrompt: `judges evaluating student project on a laptop at a hackathon desk, ${PHOTO_STYLE}`,
    imageCaption: "Judges when you have a plan."
  },
  {
    moduleId: 1,
    type: 'quote',
    title: "Common Myths BUSTED",
    points: [
      "❌ 'Hackathons are only about coding' -> It's about SELLING the code.",
      "❌ 'Business models don't matter' -> If it can't sustain, it dies.",
      "❌ 'More features = Better' -> No. One killer feature > 10 broken ones."
    ],
    imagePrompt: `team collaborating at a whiteboard with sticky notes planning features, ${PHOTO_STYLE}`,
    imageCaption: "Stop building login pages."
  },

  // --- MODULE 2 ---
  {
    moduleId: 2,
    type: 'content',
    title: "2.1 Problem Identification",
    subtitle: "Don't be a solution looking for a problem",
    points: [
      "User-Centric Discovery: Don't guess. Observe.",
      "Pain Intensity: Is it a 'Mosquito Bite' (Annoying) or a 'Shark Bite' (Urgent)?",
      "Focus: Narrow it down. 'Solving Hunger' is too big. 'Reducing Food Waste in Campus Cafeteria' is gold."
    ],
    imagePrompt: `student interviewing a user with a notebook for research, ${PHOTO_STYLE}`,
    imageCaption: "Investigate the problem."
  },
  {
    moduleId: 2,
    type: 'content',
    title: "2.2 Who is the User?",
    subtitle: "Defining the Persona",
    points: [
      "Demographics: Age, Location, Job.",
      "Behavior: What do they do? What frustrates them?",
      "Primary vs. Secondary: The student uses the app (Primary), the university pays for it (Secondary)."
    ],
    imagePrompt: `diverse group of college students using mobile phones on campus, ${PHOTO_STYLE}`,
    imageCaption: "Know your audience."
  },
  {
    moduleId: 2,
    type: 'content',
    title: "2.3 Market Context & Validation",
    subtitle: "Prove it matters",
    points: [
      "Scope: Campus? City? Global?",
      "Market Size: Use t-shirt sizes (Small, Medium, Huge). Don't fake 'TAM/SAM/SOM' if you don't know it.",
      "Validation Hacks: Run a survey in the Discord, ask other teams, google it fast.",
      "Assumptions are dangerous. Facts win prizes."
    ],
    imagePrompt: `student pointing at a rising graph on a laptop screen with teammates, ${PHOTO_STYLE}`,
    imageCaption: "Stonks only go up."
  },

  // --- MODULE 3 ---
  {
    moduleId: 3,
    type: 'content',
    title: "3.1 Solution Framing",
    subtitle: "The One-Liner",
    points: [
      "Formula: 'We help [X] do [Y] by [Z].'",
      "Feature vs. Value: 'AI Chatbot' is a feature. 'Instant Mental Health Support' is value.",
      "Keep it simple enough for a 5-year-old to understand."
    ],
    imagePrompt: `student looking at computer screen with a smile, lightbulb moment, ${PHOTO_STYLE}`,
    imageCaption: "And then it hit me..."
  },
  {
    moduleId: 3,
    type: 'content',
    title: "3.2 Value Proposition",
    subtitle: "Why should they care?",
    points: [
      "Functional Value: Save time ⏰, Save money 💰, Reduce effort 📉.",
      "Emotional Value: Feel safe 🛡️, Feel cool 😎, Belonging 🤝.",
      "Be specific. 'Saves time' is weak. 'Reduces process from 2 days to 2 minutes' is strong."
    ],
    imagePrompt: `students high fiving each other at a desk after successful code run, ${PHOTO_STYLE}`,
    imageCaption: "Make them want it."
  },
  {
    moduleId: 3,
    type: 'content',
    title: "3.3 Competition & Fit",
    subtitle: "You are not the first (probably)",
    points: [
      "Acknowledge competitors. Ignoring them looks naive.",
      "Differentiation: Are you faster? Cheaper? Easier? Private?",
      "Product-Market Fit (Hackathon Scale): Who needs this RIGHT NOW? If your server dies, will anyone cry?"
    ],
    imagePrompt: `busy hackathon venue with many teams working side by side, ${PHOTO_STYLE}`,
    imageCaption: "Zoom past the legacy software."
  },

  // --- MODULE 4 ---
  {
    moduleId: 4,
    type: 'content',
    title: "4.1 Business Thinking",
    subtitle: "Yes, even for students",
    points: [
      "Business Clarity = Maturity. Judges love maturity.",
      "Feasibility: Could this actually exist in the real world?",
      "It doesn't need to make millions today, but it needs a path."
    ],
    imagePrompt: `student writing business notes on a paper pad with coffee, ${PHOTO_STYLE}`,
    imageCaption: "I should buy a boat."
  },
  {
    moduleId: 4,
    type: 'content',
    title: "4.2 & 4.3 Money Talks",
    subtitle: "Who pays and how?",
    points: [
      "Subscription (Netflix model)",
      "Freemium (Spotify model)",
      "Ads (The 'Please don't block me' model)",
      "B2B/Institutional (The 'Big Check' model)",
      "Commission (The 'Middleman' model)",
      "💡 Focus on the reasoning, not the exact numbers."
    ],
    imagePrompt: `students discussing revenue models at a whiteboard, ${PHOTO_STYLE}`,
    imageCaption: "Show me the monetization."
  },
  {
    moduleId: 4,
    type: 'content',
    title: "4.5 The Hackathon Canvas",
    subtitle: "Simplified Business Model",
    points: [
      "Customer Segments: Who are they?",
      "Value Prop: Why they buy.",
      "Channels: How you reach them.",
      "Revenue: How you make $.",
      "Cost Structure: Servers, API credits, Pizza."
    ],
    imagePrompt: `hands drawing a business model canvas on a large sheet of paper, ${PHOTO_STYLE}`,
    imageCaption: "It fits on a napkin."
  },

  // --- MODULE 5 ---
  {
    moduleId: 5,
    type: 'content',
    title: "5.1 & 5.2 Tech Feasibility",
    subtitle: "Realism > Fantasy",
    points: [
      "Tech Stack: Choose for SPEED, not just hype. Python/JS usually win hackathons.",
      "Time Limit: What can you build in 24h? MVP (Minimum Viable Product).",
      "Don't build a full login system with 2FA. Hardcode the user. We trust you."
    ],
    imagePrompt: `close up of code on a laptop screen dark mode IDE, ${PHOTO_STYLE}`,
    imageCaption: "2 hours remaining..."
  },
  {
    moduleId: 5,
    type: 'content',
    title: "5.3 & 5.4 Showing Off Engineering",
    subtitle: "Make it look hard (even if it wasn't)",
    points: [
      "Mention APIs, Databases, ML Models.",
      "Handle edge cases (or hide them).",
      "Architecture Diagram: Draw boxes and arrows. Judges love boxes and arrows.",
      "Explanation: Avoid jargon. 'We use a convolutional neural net' 😴 vs 'Our AI sees images like a human' 🤩."
    ],
    imagePrompt: `complex software architecture diagram drawn on a whiteboard, ${PHOTO_STYLE}`,
    imageCaption: "Look at all these wires (APIs)!"
  },

  // --- MODULE 6 ---
  {
    moduleId: 6,
    type: 'content',
    title: "6.1 & 6.2 The Holy Demo",
    subtitle: "Live or Die",
    points: [
      "Demo > Slides. Spend 60% of time here.",
      "Context: Set the scene before clicking.",
      "User Journey: Walk through a SPECIFIC scenario. 'Meet Bob. Bob is sad. Bob uses our app. Bob is happy.'",
      "Key Outcome: Show the value delivered."
    ],
    imagePrompt: `student presenting a mobile app demo on a projector screen, ${PHOTO_STYLE}`,
    imageCaption: "Please don't crash."
  },
  {
    moduleId: 6,
    type: 'quote',
    title: "Demo Survival Guide",
    points: [
      "✅ Show core functionality ONLY.",
      "✅ Avoid unstable features. If it crashes 50% of the time, cut it.",
      "🎥 PRE-RECORD A BACKUP. The WiFi *will* fail.",
      "🚑 Failure? Laugh it off. Explain what *should* have happened. Move on."
    ],
    imagePrompt: `students frantically fixing bugs on laptops at a hackathon table, ${PHOTO_STYLE}`,
    imageCaption: "This is fine. The demo is fine."
  },

  // --- MODULE 7 ---
  {
    moduleId: 7,
    type: 'content',
    title: "7.1 The Pitch Flow",
    subtitle: "Memorize this sequence",
    points: [
      "1. Hook (Grab attention)",
      "2. Problem (Make us feel pain)",
      "3. Solution (The hero arrives)",
      "4. DEMO (The magic)",
      "5. Tech Stack (The engine)",
      "6. Business/Impact (The sustainability)",
      "7. Team (The rockstars)"
    ],
    imagePrompt: `student telling a story with hand gestures during a presentation, ${PHOTO_STYLE}`,
    imageCaption: "Tell a story, don't read a list."
  },
  {
    moduleId: 7,
    type: 'content',
    title: "7.3 Design & Time",
    subtitle: "Make it pretty, make it fast",
    points: [
      "Minimal Text. Judges can't read and listen at the same time.",
      "Visual Storytelling. Use screenshots, diagrams, memes.",
      "Time Management: Practice! If you get cut off before the demo, you lose.",
      "Don't speak at 2x speed. Speak clearly."
    ],
    imagePrompt: `student designing a slide deck on a laptop with colorful graphics, ${PHOTO_STYLE}`,
    imageCaption: "Time is relative, except in a pitch."
  },

  // --- MODULE 8 ---
  {
    moduleId: 8,
    type: 'content',
    title: "8.1 Judge Psychology",
    subtitle: "Getting inside their heads",
    points: [
      "They are tired. They have seen 20 pitches. Wake them up.",
      "Recency Bias: They remember the beginning and the end.",
      "Penalties: No demo? -50 points. Overclaiming? -1000 aura.",
      "Clarity is King. If they don't get it in 30s, they tune out."
    ],
    imagePrompt: `judges sitting at a table listening intently to a pitch, ${PHOTO_STYLE}`,
    imageCaption: "It's a 'Yes' from me."
  },
  {
    moduleId: 8,
    type: 'content',
    title: "8.3 & 8.4 The Q&A",
    subtitle: "Defend your castle",
    points: [
      "Q: 'How will this scale?' A: Cloud infrastructure, microservices.",
      "Q: 'Why would someone pay?' A: Value proposition data.",
      "Q: 'Your UI is ugly.' A: 'It's an MVP focused on backend logic.' (Nice save).",
      "Be humble. If you don't know, say 'That's a great feature for V2!'"
    ],
    imagePrompt: `student confidently answering questions from judges with a microphone, ${PHOTO_STYLE}`,
    imageCaption: "Parry, dodge, answer."
  },

  // --- MODULE 9 ---
  {
    moduleId: 9,
    type: 'checklist',
    title: "9.1 Mistakes & 9.2 Best Practices",
    subtitle: "Do's and Don'ts",
    points: [
      "🚫 Don't: Feature Dump (Listing 50 buttons)",
      "🚫 Don't: Ignore Business (Money is real)",
      "🚫 Don't: Weak Closing ('Um, yeah, that's it.')",
      "✅ Do: Simple & Clear",
      "✅ Do: Confident Delivery (Fake it 'til you make it)",
      "✅ Do: Strong Narrative (Emotional connection)"
    ],
    imagePrompt: `tired students sleeping on their keyboards after a hackathon, ${PHOTO_STYLE}`,
    imageCaption: "Nailed it."
  },

  // --- MODULE 10 ---
  {
    moduleId: 10,
    type: 'activity',
    title: "Activity 1: The One-Liner",
    subtitle: "Hands-on Time! (5 Mins)",
    points: [
      "Task: Write your project's problem + solution + user in ONE sentence.",
      "Format: 'My product [Name] helps [User] who wants to [Job] by [Solution].'",
      "GO! ⏱️"
    ],
    imagePrompt: `students writing ideas on index cards during a workshop, ${PHOTO_STYLE}`,
    imageCaption: "Pencils down!"
  },
  {
    moduleId: 10,
    type: 'activity',
    title: "Activity 2 & 3",
    subtitle: "Sketching Success",
    points: [
      "Activity 2: Business Model Sketch (Who pays? What's the value?)",
      "Activity 3: Demo Storyboard (Draw the 3 key screens of your demo)",
      "You have 10 minutes. Discuss with your team."
    ],
    imagePrompt: `team sketching app wireframes on paper on a table, ${PHOTO_STYLE}`,
    imageCaption: "Brainstorming intensity: 100%"
  },
  {
    moduleId: 10,
    type: 'content',
    title: "Final Wrap-Up",
    subtitle: "You are ready.",
    points: [
      "1. Identify real problems.",
      "2. Design valuable solutions.",
      "3. Build a feasible MVP.",
      "4. Sell the dream.",
      "Good luck at PEC Hacks! 🚀"
    ],
    imagePrompt: `winning hackathon team holding a trophy and cheering, ${PHOTO_STYLE}`,
    imageCaption: "To the moon!"
  }
];