# future_of_id — Product Strategy & Vision Notes
*Historical strategy snapshot captured from planning conversation — April 2026*

> Historical note: This document preserves strategic context from an earlier planning moment. Some current-state details below are stale; use `README.md`, `docs/strategy/ROADMAP.md`, ADRs, and validation logs for current implementation status.

---

## What This Project Is

**future_of_id** is a guided, self-paced learning experience exploring the seven capabilities shaping the future of instructional design through 2030.

The project does two things simultaneously:
1. Teaches the L&D community how instructional design is evolving through AI, analytics, simulations, adaptive pathways, systems thinking, and human-centered change.
2. Serves as a portfolio-grade full-stack learning product demonstrating modern instructional design, React/Next.js development, AI integration, progress tracking, and scalable content architecture.

### The Seven Capabilities
1. AI Literacy and Agent-Enabled Learning Design
2. Performance Consulting and Business Alignment
3. Learning Analytics and Evidence-Based Design
4. Scenario, Simulation, and Conversation Design
5. Adaptive and Personalized Learning Architecture
6. Content Systems Thinking and Workflow Automation
7. Human-Centered Change, Ethics, and Learner Trust

---

## The Dual Purpose (Why This Exists)

This project serves two audiences simultaneously:

**For the L&D community:** A high-quality, modern learning experience that teaches practitioners how their field is evolving — and uses the future of instructional design to teach it.

**For Bradley's career:** A live demonstration of a rare skillset combination — deep L&D domain expertise *plus* software development and AI integration. This combination is uncommon in the industry and commands significantly higher compensation than traditional instructional design alone.

> The meta-concept: the course *teaches* the future of instructional design by *using* the future of instructional design.

---

## Current State (April 2026 Historical Snapshot)

### What's Built
- Solid Next.js / TypeScript / Tailwind architecture
- Course dashboard with progress tracking (localStorage)
- Module 1 (AI Literacy) — fully built with content, interactive scenarios, reflection prompts
- Orientation page — complete
- Reusable component library (ModuleCard, ProgressBar, LessonSection, etc.)

### What's In Progress
- Content for Modules 2–8 (actively being researched and written)
- Brainstorming unique AI interactions for each module

### What's Missing
- Actual AI/LLM integration (no API calls yet — top priority)
- Modules 2–8 content
- Home page (still default Next.js boilerplate)
- Backend / database / user accounts
- About page

### Overall Completion: ~35–40%

---

## Strategic Insights

### On Sharing Publicly (LinkedIn, L&D Communities)

**Don't share until it's ready.** The target audience — L&D professionals and curriculum designers — will immediately evaluate whether the product *demonstrates* what it claims to teach. Sharing too early risks:
- Undermining credibility if they find empty modules
- Making the "AI integration" claim feel hollow with no real AI behind it
- Losing the first impression moment permanently

**Minimum bar before sharing publicly:**
- 2–3 more modules with real content
- At least one genuine AI-powered interaction (e.g., Claude API call for reflection feedback)
- A real home page

**The LinkedIn strategy:** Don't wait until it's "done" to post. Share the *process* — short posts about what you're building, what you're learning, what a specific AI interaction does and why you designed it that way. The L&D community engages heavily with behind-the-scenes, reflective content. Build the audience before the product is finished.

---

### On Pricing — Free vs. Subscription

**Keep it free. Permanently.**

The $4.99–$9.99/year subscription model is the worst of both worlds:
- Too low to generate meaningful revenue (need 10,000 subscribers just to approach $50k/year before fees and taxes)
- High enough to kill virality and LinkedIn sharing
- Adds operational complexity (billing, support, churn) that slows development

**The core argument for free:**
> "10,000 L&D professionals actively use a platform I built" on a resume or LinkedIn profile is worth far more to your career than $49,000 in subscription revenue.

The project's ROI is in what it does for your salary and opportunities — not what it earns directly.

**Future monetization that could actually move the needle (later, not now):**
- Higher salary at next role (primary goal)
- Consulting / freelance from L&D orgs who want help implementing AI in their programs
- Live cohort or workshop built on top of the content ($300–$500/person)
- Sponsored content or partnerships once real traffic exists

If a subscription model ever makes sense, the price point would need to be $99–$199/year minimum — not $4.99.

---

### On Ongoing Content (Blogs, Articles, New Modules)

Necessary but not differentiating. Every content platform does this. Worth doing, but don't let it become the focus over finishing the core modules first. The risk is it becomes a maintenance burden without meaningfully growing the audience.

**Priority order:**
1. Finish the 8 core modules
2. Add real AI interactions to each
3. Then layer in ongoing content

---

### On the Articulate Storyline Code Snippet Library

**This is the most original and strategically valuable idea discussed.**

**Why it stands out:**
- The Storyline developer community is real and underserved
- Code snippets are currently scattered across Facebook groups, Reddit threads, and random blog posts — no central, organized, quality-controlled resource exists
- A GitHub-hosted, searchable library fills a real gap

**The open-source angle:** Shifts the project from "one person's course" to "a community resource" — fundamentally more defensible and valuable.

**Critical implementation notes:**
- GitHub is the right place to *host* it, but the wrong place for most L&D professionals to *use* it. Most instructional designers are not comfortable with Git. You need a clean front-end on the site that surfaces snippets in a readable, copyable format — GitHub is the backend, not the UX.
- Don't assume a flood of contributions. Most open-source projects have 2–3 real contributors. Plan for that reality.
- Storyline snippets break when versions change — build in a curation/deprecation system.

**The strategic picture:**
Course + code library = learn it here, use it here. That combination is far stickier than a course alone and gives practitioners a reason to return repeatedly.

> Build the course first. Then the library.

---

### On Acquisition Potential

**Not a fantasy, but not a plan either.**

Acquisitions of small content/learning platforms do happen — but companies are bought for:
1. A sizeable, engaged user base
2. Proprietary technology
3. A defensible distribution channel

Content alone is almost never the reason. An acquirer can hire writers and instructional designers. They can't easily buy an audience or a community.

**What would make this acquisition-relevant:**
The code snippet library + community angle is the most acquisition-relevant piece. If 5,000+ active L&D practitioners are regularly contributing and pulling from the library, that's something with real value to a platform like Articulate, Learnosity, or LinkedIn Learning. But the community has to exist first.

**The honest math for small SaaS/content acquisitions:**
- Proven recurring revenue required
- User base measured in tens of thousands
- 2–3 years of operating history
- Clear integration value for the buyer

That's a 5–7 year outcome if everything goes well — not a near-term exit.

**The right mindset:**
Don't build this *for* an acquisition. Build it for career impact and community value. If it grows into something with real users and real engagement, the acquisition conversation finds you. Chasing it from the start leads to bad product decisions.

---

## Key Principles to Keep Coming Back To

1. **The AI features must actually use AI.** If a hiring manager or senior L&D leader clicks through and the "AI components" are static quizzes, it undercuts the entire narrative. Don't cut corners here.

2. **Free maximizes the primary goal.** The project's value is in what it does for your reputation and career — not what it earns directly. A paywall gets in the way of that.

3. **Finish the core before expanding.** Blogs, articles, and a snippet library are great additions — after the 8 modules are solid.

4. **The combination is genuinely rare.** Most L&D professionals can't build software. Most developers don't understand instructional design. You're in a very small group that can do both. This project makes that visible and undeniable.

5. **Share the process, not just the product.** Post on LinkedIn while building. The L&D community engages heavily with reflective, behind-the-scenes content. Build the audience before the product is finished.

---

*This document was created to capture strategic insights and should be revisited and updated as the project evolves.*
