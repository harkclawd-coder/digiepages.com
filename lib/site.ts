import type { Icon } from "@phosphor-icons/react";
import {
  Buildings,
  Car,
  ForkKnife,
  MapTrifold,
  Megaphone,
  Scales,
  Storefront,
  Tooth,
  Wrench,
  Star,
  Phone,
} from "@phosphor-icons/react/ssr";

export const SITE = {
  name: "DigiePages",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://digiepages.com",
  tagline: "Hyper-local digital marketing that puts you on the map",
  description:
    "DigiePages builds hyper-local directories, optimizes Google Business Profiles, and runs local ad products that turn searches into calls, visits, and booked jobs.",
  email: "info@digiepages.com",
  altEmail: "hi@digiepages.com",
  cta: "Get a free audit",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
] as const;

export const STATS = [
  { value: "15+", label: "Years of directory heritage" },
  { value: "500+", label: "Local clients served" },
  { value: "3×", label: "Average lead increase" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: Icon;
  summary: string;
  headline: string;
  intro: string;
  features: string[];
  outcomes: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "priority-spotlight",
    name: "Priority Spotlight Placement",
    short: "Spotlight Ads",
    icon: Megaphone,
    summary: "Featured Spotlight with Guaranteed Interactions — we purchase targeted Google ad space that sends local searchers straight to our Lower Mainland business directory, where your listing sits inside a bright red spotlight box right at the top of your category.",
    headline: "Guaranteed visibility at the top of your category",
    intro: "We buy premium Google ad placements that put your business in a spotlight box at the very top of local search results, driving immediate views and interactions.",
    features: [
      "Targeted Google ad placement in your service category",
      "Bright red spotlight box at top of search results",
      "Guaranteed minimum monthly views and interactions",
      "Direct tracking of calls, clicks, emails, and direction requests"
    ],
    outcomes: [
      {
        title: "Consistent monthly lead flow",
        body: "At least 37 listing views and 37 direct interactions every month, including calls, website clicks, emails, and direction requests."
      },
      {
        title: "No waiting for organic results",
        body: "Immediate visibility without waiting months for SEO to take effect — ideal for urgent lead generation needs."
      }
    ],
    faqs: [
      {
        q: "How quickly do results start?",
        a: "Spotlight placements go live within 24-48 hours of campaign launch."
      },
      {
        q: "Is this in addition to SEO services?",
        a: "Yes. Spotlight ads provide immediate leads while your organic presence builds over time."
      },
      {
        q: "Can I target specific neighborhoods?",
        a: "Yes. Geo-targeting lets you focus on specific cities, neighborhoods, or radius around your business."
      }
    ]
  },
  {
    slug: "local-seo",
    name: "Local & Organic SEO",
    short: "Map Pack SEO",
    icon: MapTrifold,
    summary: "Long-Term Top Google Map Pack Rankings — ranking your business in the top three Google map spots when local customers search in your city.",
    headline: "Dominate local map rankings for steady organic leads",
    intro: "We optimize your Google Business Profile, website, and citations to secure and maintain top-three positions in Google Maps for your primary service keywords.",
    features: [
      "Google Business Profile optimization and maintenance",
      "Local citation building and cleanup across directories",
      "On-page SEO for service-area pages",
      "Review generation and management system"
    ],
    outcomes: [
      {
        title: "Steady organic lead flow",
        body: "Top-three map pack rankings generate consistent phone calls and website visits from local searchers."
      },
      {
        title: "Long-term visibility investment",
        body: "Unlike paid ads, organic rankings provide ongoing value without ongoing media spend."
      }
    ],
    faqs: [
      {
        q: "How long until I see results?",
        a: "Initial improvements in 4-6 weeks; stable top-three rankings typically achieved in 3-4 months."
      },
      {
        q: "Do I need to keep paying monthly?",
        a: "Yes. Ongoing optimization is required to maintain rankings against competitors and algorithm updates."
      },
      {
        q: "What if I already have a Google Business Profile?",
        a: "We audit and optimize your existing profile, fixing issues and enhancing what's already working."
      }
    ]
  },
  {
    slug: "social-media",
    name: "Social Media Account Management",
    short: "Social Management",
    icon: Star,
    summary: "Hands-Free Active Social Pages — full management of your Facebook, Instagram, and LinkedIn with active job-site photos and branded posts.",
    headline: "Professional social media that showcases your work",
    intro: "We create, schedule, and publish engaging content to your social profiles, including real-time job-site updates, before/after transformations, and educational content that positions you as the local expert.",
    features: [
      "Content creation and scheduling for Facebook, Instagram, LinkedIn",
      "Regular job-site photo and video updates",
      "Before/after project showcases",
      "Educational content that builds authority"
    ],
    outcomes: [
      {
        title: "Engaged local following",
        body: "Active social profiles build trust and keep your business top-of-mind when locals need your services."
      },
      {
        title: "Lead generation from social",
        body: "Social profiles drive direct messages, comments, and profile visits that convert to service requests."
      }
    ],
    faqs: [
      {
        q: "How often do you post?",
        a: "Typically 3-4 times per week across platforms, with increased frequency during peak seasons."
      },
      {
        q: "Do you respond to comments and messages?",
        a: "Yes. We monitor and respond to comments, questions, and direct messages during business hours."
      },
      {
        q: "Can I review content before it goes live?",
        a: "Yes. All content is sent for your approval before publishing unless you opt for full automation."
      }
    ]
  },
  {
    slug: "reputation-management",
    name: "Reputation & Review Management",
    short: "Review Management",
    icon: Star,
    summary: "5-Star Review Growth & Monitoring — structured post-job customer review collection for Google and HomeStars and active review monitoring.",
    headline: "Systematic review generation and reputation protection",
    intro: "We automate happy customer review requests after jobs and monitor for new reviews across platforms, enabling rapid response to both positive and negative feedback.",
    features: [
      "Automated post-job review request system",
      "Review monitoring across Google, HomeStars, and other platforms",
      "Rapid response templates for negative feedback",
      "Review reporting and sentiment tracking"
    ],
    outcomes: [
      {
        title: "Higher average rating",
        body: "Systematic review requests increase your review volume and average star rating over time."
      },
      {
        title: "Rapid issue resolution",
        body: "Fast detection and response to negative reviews prevents reputation damage and shows customers you care."
      }
    ],
    faqs: [
      {
        q: "How do you get reviews without being pushy?",
        a: "We send automated, polite review requests after job completion, making it easy for satisfied customers to share feedback."
      },
      {
        q: "What if I get a negative review?",
        a: "We alert you immediately and provide response templates to address concerns professionally and publicly."
      },
      {
        q: "Do you remove fake or malicious reviews?",
        a: "We flag suspicious reviews for platform investigation and provide evidence to support removal requests."
      }
    ]
  },
  {
    slug: "mobile-websites",
    name: "Modern, Mobile-Friendly Websites",
    short: "Mobile Websites",
    icon: Storefront,
    summary: "Regular Websites Built to Work Great on Phones — we design clean, professional business websites and make sure they run smoothly and load fast on mobile phones, so visitors do not bounce away and actually click to call.",
    headline: "Websites that convert mobile visitors into customers",
    intro: "We build responsive websites optimized for speed and usability on smartphones, ensuring your online presence works as hard as you do to generate leads.",
    features: [
      "Mobile-responsive design that works on all devices",
      "Speed optimization for fast loading on cellular connections",
      "Clear call-to-action placement for clicks and calls",
      "Integration with Google Business Profile and local SEO"
    ],
    outcomes: [
      {
        title: "Lower bounce rates",
        body: "Fast-loading, easy-to-use mobile sites keep visitors engaged long enough to take action."
      },
      {
        title: "Higher mobile conversion rates",
        body: "When your mobile site works well, visitors are more likely to call, click, or request a quote."
      }
    ],
    faqs: [
      {
        q: "Do I need to provide my own content?",
        a: "We can create content from scratch or optimize and reorganize your existing materials."
      },
      {
        q: "How long does a website take to build?",
        a: "Typically 3-4 weeks from kickoff to launch, depending on complexity and feedback cycles."
      },
      {
        q: "Can I update the website myself later?",
        a: "Yes. We build on user-friendly platforms and provide training so you can make basic updates."
      }
    ]
  },
  {
    slug: "listings-management",
    name: "Listings Management",
    short: "Synced Listings",
    icon: Buildings,
    summary: "Synced Across Maps, AI Search & Smart Speakers — locking your business details across forty plus Canadian directories, AI platforms like ChatGPT, and smart speakers like Alexa and Siri.",
    headline: "Your business information, everywhere it matters",
    intro: "We manage your business listings across major directories, data aggregators, and emerging platforms to ensure consistency and accuracy wherever customers might search for you.",
    features: [
      "Management of 40+ Canadian business directories",
      "Sync with AI platforms like ChatGPT and Perplexity",
      "Optimization for voice search on Alexa, Siri, and Google Assistant",
      "Monthly audit and correction of inconsistencies"
    ],
    outcomes: [
      {
        title: "Consistent information everywhere",
        body: "Your name, address, phone, hours, and services are accurate and uniform across all platforms where customers search."
      },
      {
        title: "Visibility in emerging search channels",
        body: "Your business appears in voice search results and AI-generated answers, not just traditional web search."
      }
    ],
    faqs: [
      {
        q: "How often do you audit listings?",
        a: "We perform a full audit and correction cycle monthly to catch and fix inconsistencies quickly."
      },
      {
        q: "What if I move or change my phone number?",
        a: "We update all listings within 48 hours of receiving your change notice."
      },
      {
        q: "Do you handle duplicate listings?",
        a: "Yes. We identify and request removal of duplicate listings that confuse search engines and customers."
      }
    ]
  },
  {
    slug: "text-email-marketing",
    name: "Text & Email Marketing Platforms",
    short: "Text/Email Marketing",
    icon: Phone,
    summary: "Direct Lead & Re-Engagement Campaigns — direct SMS and email systems to convert new leads fast and reactivate past clients for repeat business.",
    headline: "Automated follow-up that turns leads into loyal customers",
    intro: "We set up automated SMS and email sequences that engage new leads immediately and nurture past clients to encourage repeat business and referrals.",
    features: [
      "Automated welcome and nurture sequences for new leads",
      "Re-engagement campaigns for past clients",
      "Segmentation based on service history and interests",
      "Tracking and attribution of conversions by channel"
    ],
    outcomes: [
      {
        title: "Faster lead-to-customer conversion",
        body: "Automated follow-up ensures leads are contacted quickly while their interest is still fresh."
      },
      {
        title: "Increased repeat business rate",
        body: "Regular, valuable communication keeps past clients engaged and more likely to hire you again."
      }
    ],
    faqs: [
      {
        q: "How soon do leads get contacted?",
        a: "New leads receive their first message within minutes of submission during business hours."
      },
      {
        q: "Can I customize the messages?",
        a: "Yes. We work with you to create brand-appropriate tone and content for all automated sequences."
      },
      {
        q: "Do you include opt-out options?",
        a: "Yes. All communications include clear unsubscribe links to maintain compliance."
      }
    ]
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI Integration",
    short: "AI Workflows",
    icon: Wrench,
    summary: "Automated Custom Business Workflows — custom A-I agents that automate internal operations, scheduling, team tasks, and customer workflows.",
    headline: "Custom AI automation that eliminates repetitive work",
    intro: "We build specialized AI agents that handle your unique business processes, from appointment scheduling to job tracking, reducing manual effort and human error.",
    features: [
      "Custom AI agents for your specific workflows",
      "Integration with existing tools (calendar, CRM, accounting)",
      "Continuous learning and improvement over time",
      "Transparent oversight and control dashboards"
    ],
    outcomes: [
      {
        title: "Reduced administrative overhead",
        body: "Automated workflows free up your time to focus on billable work and business growth."
      },
      {
        title: "Fewer errors and missed follow-ups",
        body: "AI agents don't forget tasks or make typos — they execute consistently according to your rules."
      }
    ],
    faqs: [
      {
        q: "What kinds of tasks can you automate?",
        a: "Almost any repeatable digital task: scheduling, reminders, data entry, notifications, report generation, and more."
      },
      {
        q: "Do I need to change my existing tools?",
        a: "No. We design agents to work with your current stack via APIs, webhooks, or middleware."
      },
      {
        q: "How secure is the automation?",
        a: "Agents operate with least-privilege access and audit logs for all actions performed on your behalf."
      }
    ]
  },
  {
    slug: "ai-voice",
    name: "AI Voice Agents & Calling Systems",
    short: "AI Voice",
    icon: Phone,
    summary: "24/7 Phone Handling & Lead Generation — smart A-I voice callers for 24/7 inbound phone answering and automated outbound lead generation.",
    headline: "Always-available phone presence that never misses a lead",
    intro: "We deploy AI voice systems that answer calls around the clock, qualify leads, book appointments, and run automated outbound campaigns to generate new business opportunities.",
    features: [
      "24/7 AI-powered phone answering with call routing",
      "Automated lead qualification and appointment booking",
      "Outbound calling campaigns for lead generation",
      "Call recording and transcription for quality control"
    ],
    outcomes: [
      {
        title: "Never miss a call",
        body: "Your business never goes to voicemail during operating hours — every call is answered immediately."
      },
      {
        title: "Predictable outbound lead flow",
        body: "Regular automated calling campaigns generate a steady stream of new conversation opportunities."
      }
    ],
    faqs: [
      {
        q: "Will customers know they're talking to AI?",
        a: "The system identifies itself as an automated assistant but can seamlessly transfer to a human when needed."
      },
      {
        q: "Can the AI handle complex questions?",
        a: "It handles routine inquiries and scheduling; complex issues are flagged for your personal attention."
      },
      {
        q: "How do you prevent spam or abusive calls?",
        a: "Built-in fraud detection and call filtering block unwanted calls while allowing legitimate business through."
      }
    ]
  }
];

export const STEPS = [
  {
    n: "01",
    title: "Audit and strategy",
    time: "48-hour turnaround",
    body: "A deep local visibility audit covering listings, Google Business Profile, reviews, competitors, and keyword gaps.",
  },
  {
    n: "02",
    title: "Build and launch",
    time: "Weeks, not quarters",
    body: "Directory pages live in two weeks. Google Business Profile optimized in five days. Ad campaigns running in 72 hours.",
  },
  {
    n: "03",
    title: "Operate and optimize",
    time: "Monthly and quarterly",
    body: "Monthly reporting, quarterly strategy reviews, and continuous schema, content, and profile updates keep you ahead.",
  },
  {
    n: "04",
    title: "Scale and expand",
    time: "When you are ready",
    body: "New service areas, new verticals, and franchise rollouts, all on the same playbook with compounding results.",
  },
] as const;

export type Industry = {
  slug: string;
  name: string;
  icon: Icon;
  summary: string;
  headline: string;
  challenges: string[];
  plays: { title: string; body: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants and cafes",
    icon: ForkKnife,
    summary: "Win the near-me search at mealtime.",
    headline: "Be the answer when someone searches for dinner nearby",
    challenges: [
      "Menus, hours, and photos are out of date across listings",
      "Reviews decide the click before anyone visits your site",
      "Competitors show up first in the Maps results",
    ],
    plays: [
      {
        title: "Profile that stays current",
        body: "Menus, hours, holiday changes, and photos are kept accurate on Google and across directories.",
      },
      {
        title: "Review request and response flow",
        body: "Happy guests are asked at the right moment, and every review gets a timely reply.",
      },
      {
        title: "Neighborhood and cuisine pages",
        body: "Directory pages for your area and category help you appear for the searches that bring guests in.",
      },
    ],
  },
  {
    slug: "home-services",
    name: "Home services",
    icon: Wrench,
    summary: "Plumbers, HVAC, electricians, roofers, and more.",
    headline: "Get the call when a pipe bursts or the AC quits",
    challenges: [
      "Emergency searches are won in seconds, mostly in Maps",
      "Service areas are broad, and pages rarely cover each town",
      "It is unclear which ads create real jobs",
    ],
    plays: [
      {
        title: "Local Services Ads setup",
        body: "Google Guaranteed campaigns are configured and managed so you appear at the top for urgent searches.",
      },
      {
        title: "Service-area coverage",
        body: "Town-level directory pages and Google Business Profile service areas cover every place you work.",
      },
      {
        title: "Call tracking by source",
        body: "Each call is tied back to its channel so you can put budget behind what books jobs.",
      },
    ],
  },
  {
    slug: "dental-medical",
    name: "Dental and medical",
    icon: Tooth,
    summary: "Trusted, accurate, and easy to book.",
    headline: "Show patients an accurate, trusted practice before they call",
    challenges: [
      "Provider and location details drift across listings",
      "Review replies need care and consistency",
      "Patients compare several practices before booking",
    ],
    plays: [
      {
        title: "Consistent listings",
        body: "Names, addresses, hours, and providers are cleaned up and kept consistent across directories.",
      },
      {
        title: "Service pages with schema",
        body: "Clear service and provider pages with structured data help search engines understand what you offer.",
      },
      {
        title: "Measured new-patient calls",
        body: "Call tracking shows which channels produce new-patient inquiries.",
      },
    ],
  },
  {
    slug: "legal-professional",
    name: "Legal and professional",
    icon: Scales,
    summary: "Be visible for high-intent local searches.",
    headline: "Be visible when someone needs a local professional today",
    challenges: [
      "High-intent searches are competitive and local",
      "Practice areas and locations need separate, clear pages",
      "Reviews and reputation weigh heavily on the decision",
    ],
    plays: [
      {
        title: "Practice area by location pages",
        body: "Structured pages for each service and place you cover, with clear schema and internal links.",
      },
      {
        title: "Reputation system",
        body: "A compliant review request flow and a response playbook keep your profile credible.",
      },
      {
        title: "Lead attribution",
        body: "See which channels produce consultations so spend follows results.",
      },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    summary: "Repair, detailing, dealerships, and more.",
    headline: "Keep the bays full with nearby, ready-to-book customers",
    challenges: [
      "Customers search by service and by distance",
      "Reviews and photos influence who gets the booking",
      "Seasonal demand needs timely campaigns",
    ],
    plays: [
      {
        title: "Service-led profile",
        body: "Services, products, and photos are set up on Google so you appear for the exact work you do.",
      },
      {
        title: "Seasonal campaigns",
        body: "Posts and local ads are timed for tires, inspections, and other seasonal peaks.",
      },
      {
        title: "Geo-targeted ads",
        body: "Campaigns target the neighborhoods within reach of your shop.",
      },
    ],
  },
  {
    slug: "franchises",
    name: "Franchises and multi-location",
    icon: Buildings,
    summary: "One playbook across every location.",
    headline: "Roll out one local playbook across every location",
    challenges: [
      "Hundreds of profiles drift out of sync",
      "Local pages are inconsistent or missing",
      "Reporting is hard to roll up by location and region",
    ],
    plays: [
      {
        title: "Central control, local detail",
        body: "Profiles, directory pages, and schema are managed from one source of truth with location-level detail.",
      },
      {
        title: "Franchise rollouts",
        body: "New locations launch on the same playbook, so the tenth location is as strong as the first.",
      },
      {
        title: "Rolled-up reporting",
        body: "Results are reported by location, region, and brand.",
      },
    ],
  },
];

export type PlanId = "listings" | "growth" | "leads" | "network";

export type Plan = {
  id: PlanId;
  name: string;
  blurb: string;
  monthly: number | null;
  featured?: boolean;
  cta: string;
  highlights: string[];
};

export const PLANS: Plan[] = [
  {
    id: "listings",
    name: "Local Listings",
    blurb: "Get your foundation right: clean listings and a complete profile.",
    monthly: 199,
    cta: SITE.cta,
    highlights: [
      "Visibility audit",
      "Listing cleanup",
      "Google Business Profile setup",
      "Monthly report",
    ],
  },
  {
    id: "growth",
    name: "Local Growth",
    blurb: "Everything in Listings plus ongoing profile work and directory pages.",
    monthly: 599,
    featured: true,
    cta: SITE.cta,
    highlights: [
      "Weekly posts and seasonal campaigns",
      "Review generation and response",
      "Directory landing pages with schema",
      "Quarterly strategy review",
    ],
  },
  {
    id: "leads",
    name: "Local Leads",
    blurb: "Everything in Growth plus managed local ads and call attribution.",
    monthly: 1199,
    cta: SITE.cta,
    highlights: [
      "Local Services and Maps campaigns",
      "Meta geo-targeted creative",
      "Call tracking and attribution",
      "Dedicated strategist",
    ],
  },
  {
    id: "network",
    name: "Multi-Location",
    blurb: "For agencies, franchises, and multi-location brands.",
    monthly: null,
    cta: "Talk to sales",
    highlights: [],
  },
];

export type MatrixValue = boolean | string;
export type MatrixGroup = {
  group: string;
  rows: { label: string; values: [MatrixValue, MatrixValue, MatrixValue, MatrixValue] }[];
};

export const MATRIX: MatrixGroup[] = [
  {
    group: "Visibility",
    rows: [
      { label: "Local visibility audit", values: [true, true, true, true] },
      { label: "Listing cleanup", values: [true, true, true, true] },
      { label: "Directory landing pages", values: [false, true, true, true] },
      { label: "Entity schema markup", values: [false, true, true, true] },
      { label: "AI-crawler readiness (llms.txt, sitemaps)", values: [false, true, true, true] },
    ],
  },
  {
    group: "Google Business Profile",
    rows: [
      { label: "Setup, verification, and cleanup", values: [true, true, true, true] },
      { label: "Weekly posts and seasonal campaigns", values: [false, true, true, true] },
      { label: "Review generation and response", values: [false, true, true, true] },
      { label: "Q&A and photo management", values: [false, true, true, true] },
    ],
  },
  {
    group: "Advertising",
    rows: [
      { label: "Local Services Ads", values: [false, false, true, true] },
      { label: "Maps and Search local campaigns", values: [false, false, true, true] },
      { label: "Meta and Instagram geo-targeted", values: [false, false, true, true] },
      { label: "Call tracking and attribution", values: [false, false, true, true] },
    ],
  },
  {
    group: "Reporting and support",
    rows: [
      { label: "Monthly report", values: [true, true, true, true] },
      { label: "Quarterly strategy review", values: [false, true, true, true] },
      { label: "Dedicated strategist", values: [false, false, true, true] },
      { label: "Location and region roll-up reporting", values: [false, false, false, true] },
    ],
  },
];

export const HOME_FAQS = [
  {
    q: "What does DigiePages do?",
    a: "We build hyper-local directories, optimize and operate Google Business Profiles, and run local ad products, with call tracking to show which channel produced each lead.",
  },
  {
    q: "Who do you work with?",
    a: "Agencies, franchises, multi-location brands, and ambitious single-location owners.",
  },
  {
    q: "How quickly can we get started?",
    a: "The audit takes 48 hours. Google Business Profile is optimized in about five days, ad campaigns run within 72 hours, and directory pages go live in about two weeks.",
  },
  {
    q: "What does reporting look like?",
    a: "Monthly reporting and a quarterly strategy review, with results broken out by channel and, for multi-location clients, by location.",
  },
  {
    q: "Do you use AI?",
    a: "We use automation for scale, such as drafting posts and generating schema, and a person reviews the output. Our directory sites are also built to be readable by AI assistants.",
  },
];

export const PRICING_FAQS = [
  {
    q: "Is ad spend included in the plan price?",
    a: "No. Ad spend is paid directly to the ad platform and is separate from our management fee.",
  },
  {
    q: "What is the difference between Growth and Leads?",
    a: "Growth covers your listings, profile, reviews, and directory pages. Leads adds managed local ads and call tracking so you can see which channel produced each call.",
  },
  {
    q: "Is pricing per location?",
    a: "Plans are priced for a single location. Agencies, franchises, and multi-location brands should choose the Multi-Location plan for custom pricing.",
  },
  {
    q: "How fast can we start?",
    a: "The audit takes 48 hours. Profile optimization takes about five days, ads run within 72 hours, and directory pages go live in about two weeks.",
  },
];
