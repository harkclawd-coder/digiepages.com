export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  sections: { heading: string; body: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "google-business-profile-checklist",
    title: "A Google Business Profile checklist for local businesses",
    description:
      "A practical checklist for setting up and maintaining a Google Business Profile that shows up in Maps and local search.",
    date: "2025-09-15",
    readMinutes: 5,
    sections: [
      {
        heading: "Start with accuracy",
        body: [
          "Your name, address, phone number, hours, and website should match what is on your site and in other directories. Inconsistent details confuse both customers and search engines.",
          "Check special hours for holidays and update them before the date, not after.",
        ],
      },
      {
        heading: "Choose categories and services carefully",
        body: [
          "Pick one primary category that describes your main business, then add only the secondary categories that are true. Add each service you offer with a short description.",
          "Categories and services are how Google decides which searches you are relevant for, so they deserve more attention than any other field.",
        ],
      },
      {
        heading: "Keep the profile active",
        body: [
          "Add real photos regularly, answer questions, and publish posts about offers, events, and seasonal work. An active profile tells customers you are open and paying attention.",
        ],
      },
      {
        heading: "Ask for reviews and reply to all of them",
        body: [
          "Make reviewing easy with a direct link and ask at the moment the customer is happiest. Reply to every review, including negative ones, politely and specifically.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-local-directory-site",
    title: "What a hyper-local directory site is and why it still works",
    description:
      "How town and category directory sites help local businesses get found by search engines and AI assistants.",
    date: "2025-09-22",
    readMinutes: 4,
    sections: [
      {
        heading: "A clear answer for a place and a category",
        body: [
          "People search for things like a service plus a town. A directory page that answers exactly that, with accurate businesses and clear structure, is easy for search engines to understand and easy for people to use.",
        ],
      },
      {
        heading: "Structure and schema do the heavy lifting",
        body: [
          "Consistent URLs, internal links between areas and categories, and structured data for each business help crawlers build an accurate picture of who serves where.",
        ],
      },
      {
        heading: "Built for AI assistants too",
        body: [
          "AI assistants draw on the same public web. Clean sitemaps, an llms.txt file, and plain-language descriptions make it easier for them to cite the right business for the right area.",
        ],
      },
    ],
  },
  {
    slug: "measuring-local-marketing-roi",
    title: "How to measure local marketing ROI with call tracking",
    description:
      "Why call tracking and lead attribution matter for local businesses, and how to use them to decide where to spend.",
    date: "2025-10-01",
    readMinutes: 4,
    sections: [
      {
        heading: "Count leads, not clicks",
        body: [
          "For most local businesses the valuable action is a phone call or a booking. Clicks and impressions are useful signals, but they do not pay the bills.",
        ],
      },
      {
        heading: "Give each channel its own number",
        body: [
          "Use separate tracking numbers for your Google Business Profile, directory listings, and ads, and capture the source on web forms. Now each lead can be traced to a channel.",
        ],
      },
      {
        heading: "Review monthly and decide quarterly",
        body: [
          "Look at leads by channel every month for trends, and make budget decisions each quarter so a single slow week does not drive the plan.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
