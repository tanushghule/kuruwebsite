/**
 * FLAME Kurukshetra 2027 - Consolidated Data Registry
 * Updated per FK27 Website Review PDF (Pages 1 to 11):
 * - Dates: 22nd–26th January 2027
 * - Categories: Sports Events ('sports'), Cultural Events ('cultural'), Management Events ('management') — Esports removed
 * - Meet the OC Hierarchy: Row 1 = 3 Advisors (Farrokh Sir, Razmi Ma'am, Tamosi Ma'am), Row 2 = EC, Row 3+ = CC Heads
 */

// =========================================================================
// 1A. FACULTY ADVISORS (First Row on Meet the OC — Page 11)
// =========================================================================
export const FACULTY_ADVISORS = [
  {
    id: "ADV-01",
    name: "Farrokh Sir",
    role: "Faculty Advisor",
    tier: "advisor",
    wing: "advisor",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    idBadge: "FACULTY ADVISOR",
    oneLiner: "Guiding the institutional vision, athletic excellence, and foundational values of FLAME Kurukshetra.",
    wingLabel: "Faculty Advisory Board",
    email: "kurukshetra@flame.edu.in"
  },
  {
    id: "ADV-02",
    name: "Razmi Ma'am",
    role: "Faculty Advisor",
    tier: "advisor",
    wing: "advisor",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    idBadge: "FACULTY ADVISOR",
    oneLiner: "Mentoring the student secretariat across cultural programming, campus operations, and student governance.",
    wingLabel: "Faculty Advisory Board",
    email: "kurukshetra@flame.edu.in"
  },
  {
    id: "ADV-03",
    name: "Tamosi Ma'am",
    role: "Faculty Advisor",
    tier: "advisor",
    wing: "advisor",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    idBadge: "FACULTY ADVISOR",
    oneLiner: "Supporting inter-collegiate outreach, management conclaves, and academic-extracurricular synergy.",
    wingLabel: "Faculty Advisory Board",
    email: "kurukshetra@flame.edu.in"
  }
];

// =========================================================================
// 1B. EXECUTIVE COUNCIL (Second Row on Meet the OC — Page 11)
// =========================================================================
export const EC_MEMBERS = [
  {
    id: "HEAD-01",
    name: "Parth",
    role: "Chairperson",
    tier: "ec",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    idBadge: "EXECUTIVE COUNCIL • CHAIRPERSON",
    oneLiner: "Steering overarching institutional alignment, festival strategy, and apex leadership for Kurukshetra 2027.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "chairperson.kurukshetra@flame.edu.in"
  },
  {
    id: "HEAD-02",
    name: "Khushi",
    role: "General Secretary",
    tier: "ec",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    idBadge: "EXECUTIVE COUNCIL • GEN SEC",
    oneLiner: "Orchestrating council administration, inter-university delegations, and multi-wing operational convergence.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "gensec1.kurukshetra@flame.edu.in"
  },
  {
    id: "HEAD-03",
    name: "General Secretary",
    role: "General Secretary",
    tier: "ec",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    idBadge: "EXECUTIVE COUNCIL • GEN SEC",
    oneLiner: "Managing regulatory compliance, senate approvals, and grievance resolution frameworks across contingents.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "gensec2.kurukshetra@flame.edu.in"
  }
];

// =========================================================================
// 1C. CORE COMMITTEE (CC) HEADS (Third Row Onwards on Meet the OC — Page 11)
// =========================================================================
export const CC_HEADS = [
  {
    id: "HEAD-04",
    name: "Divyanshri Munot",
    role: "Head of Admin & Logistics",
    tier: "cc",
    wing: "logistics",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    idBadge: "ADMIN & LOGISTICS",
    oneLiner: "Commanding heavy arena equipment staging, multi-arena transport flow, and round-the-clock logistics.",
    wingLabel: "Admin & Logistics",
    roleClass: "role-ops",
    instagram: "divyanshri_munot",
    email: "divyanshri.munot@flame.edu.in"
  },
  {
    id: "HEAD-05",
    name: "Sid Shekhar",
    role: "Head of Hospitality",
    tier: "cc",
    wing: "hospitality",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    idBadge: "HOSPITALITY",
    oneLiner: "Facilitating athlete lodging, nutrition dining pipelines, and dedicated concierges for visiting participants.",
    wingLabel: "Hospitality & VIP",
    roleClass: "role-pr",
    instagram: "_sidshekhar_",
    email: "sid.shekhar@flame.edu.in"
  },
  {
    id: "HEAD-06",
    name: "Mishti Gupta",
    role: "Co-Head PR",
    tier: "cc",
    wing: "pr",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD PR",
    oneLiner: "Spearheading national press outreach, external media relations, and public communications across university networks.",
    wingLabel: "PR & Media",
    roleClass: "role-creative",
    instagram: "mishtigupta_",
    email: "mishti.gupta@flame.edu.in"
  },
  {
    id: "HEAD-07",
    name: "Yashasvi Nagarale",
    role: "Co-Head PR",
    tier: "cc",
    wing: "pr",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD PR",
    oneLiner: "Driving campus ambassador syndications, influencer tie-ups, and student PR networks across partner universities.",
    wingLabel: "PR & Media",
    roleClass: "role-creative",
    instagram: "yashasvinagarale_",
    email: "yashasvi.nagarale@flame.edu.in"
  },
  {
    id: "HEAD-08",
    name: "Saanvi Agrawal",
    role: "Head of Sports",
    tier: "cc",
    wing: "sports",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    idBadge: "SPORTS",
    oneLiner: "Administering national tournament fixtures, rulebook compliance, certified referee panels, and podium tallies.",
    wingLabel: "Sports Operations",
    roleClass: "role-sports",
    instagram: "saanvii_agrawal",
    email: "saanvi.agrawal@flame.edu.in"
  },
  {
    id: "HEAD-09",
    name: "Anvi",
    role: "Co-Head Culturals",
    tier: "cc",
    wing: "cultural",
    photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Curating Kalakaar Katta, headline musical acts, stage spectacles, and immersive amphitheater productions.",
    wingLabel: "Cultural & Stage",
    roleClass: "role-cultural",
    instagram: "_.anviii._",
    email: "anvi@flame.edu.in"
  },
  {
    id: "HEAD-10",
    name: "Dhritee",
    role: "Co-Head Culturals",
    tier: "cc",
    wing: "cultural",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Directing battle of the bands, street dance battles, acoustic showcases, and high-energy festival stages.",
    wingLabel: "Cultural & Stage",
    roleClass: "role-cultural",
    instagram: "dhritee_bee",
    email: "dhritee@flame.edu.in"
  },
  {
    id: "HEAD-11",
    name: "Ayush Mittal",
    role: "Head of Management Events",
    tier: "cc",
    wing: "management",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    idBadge: "MANAGEMENT EVENTS",
    oneLiner: "Orchestrating Shark Arena B-Plan pitches, corporate crisis simulations, stock trading floors, and case studies.",
    wingLabel: "Management Events",
    roleClass: "role-tech",
    instagram: "ayush.mittalll",
    email: "ayush.mittal@flame.edu.in"
  },
  {
    id: "HEAD-12",
    name: "Devam Gadia",
    role: "Head of Finance",
    tier: "cc",
    wing: "finance",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    idBadge: "FINANCE",
    oneLiner: "Steward of budget modeling, cash disbursements, sponsor auditing, and treasury compliance.",
    wingLabel: "Finance & Accounts",
    roleClass: "role-ec",
    instagram: "devam.gadia",
    email: "devam.gadia@flame.edu.in"
  },
  {
    id: "HEAD-13",
    name: "Shashwat",
    role: "Head of Sponsorship",
    tier: "cc",
    wing: "sponsorship",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    idBadge: "SPONSORSHIP",
    oneLiner: "Securing corporate brand deals, marquee title partnerships, on-court activations, and sponsor deliverables.",
    wingLabel: "Sponsorship & Alliances",
    roleClass: "role-pr",
    instagram: "shashwat_1702",
    email: "shashwat@flame.edu.in"
  },
  {
    id: "HEAD-14",
    name: "Janhavi",
    role: "Head of Registrations",
    tier: "cc",
    wing: "registrations",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    idBadge: "REGISTRATIONS",
    oneLiner: "Supervising athlete sign-ups, team accreditation badges, slot allotment, and contingent check-ins.",
    wingLabel: "Contingent Registrations",
    roleClass: "role-sports",
    instagram: "janhavi.1010",
    email: "janhavi@flame.edu.in"
  },
  {
    id: "HEAD-15",
    name: "Stuti Lakshman",
    role: "Head of Ceremonies",
    tier: "cc",
    wing: "ceremonies",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    idBadge: "CEREMONIES",
    oneLiner: "Choreographing the opening torchbearer parade, stadium medal podiums, and grand closing spectacles.",
    wingLabel: "Ceremonies & Protocols",
    roleClass: "role-cultural",
    instagram: "stuti_lakshman",
    email: "stuti.lakshman@flame.edu.in"
  },
  {
    id: "HEAD-16",
    name: "Nischal Jogani",
    role: "Head of IT",
    tier: "cc",
    wing: "it",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    idBadge: "IT & DIGITAL",
    oneLiner: "Engineering web portals, live scoreboards, API scoring feeds, and digital infrastructure.",
    wingLabel: "IT & Digital Grid",
    roleClass: "role-tech",
    instagram: "nischaljogani",
    email: "nischal.jogani@flame.edu.in"
  },
  {
    id: "HEAD-17",
    name: "Rajveer",
    role: "Head of Security",
    tier: "cc",
    wing: "security",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    idBadge: "SECURITY",
    oneLiner: "Managing stadium access checkpoints, paramedic emergency lanes, and festival safety protocols.",
    wingLabel: "Security & Crowd Safety",
    roleClass: "role-ops",
    instagram: "hennessy_rajveer5",
    email: "rajveer@flame.edu.in"
  }
];

export const COMMITTEE_HEADS = [...EC_MEMBERS, ...CC_HEADS];

// =========================================================================
// 2. OFFICIAL EVENTS DATABASE (Categorized: sports, cultural, management)
//    - Esports removed per Page 5
//    - Dates updated to 22nd–26th January 2027 per Page 4
//    - Includes explicit timings & venues for horizontal Schedule Page (Page 6)
//      and Events Page (Page 3 / events1.png & events2.png)
// =========================================================================
export const SCHEDULE_EVENTS = [
  // --- CULTURAL EVENTS ---
  {
    id: "band-battle",
    name: "Battle of the Bands (DECIBEL)",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [2],
    datesText: "January 23, 2027",
    timing: "06:00 PM – 09:30 PM",
    venue: "Main Campus Amphitheater",
    format: "Live Band Performance (20-Min Slot)",
    desc: "The ultimate collegiate rock, indie, and fusion showdown under a concert-grade PA system with live spectators.",
    prize: "₹1,50,000 + Trophy",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "street-dance",
    name: "Step-off (Western Group Dance)",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [3],
    datesText: "January 24, 2027",
    timing: "05:30 PM – 08:30 PM",
    venue: "Central Plaza Stage",
    format: "Crew Routine & Group Choreography",
    desc: "Unleash rhythm, coordination, and creativity with your crew! Step-off brings fierce hip-hop and urban dance battles.",
    prize: "₹1,35,000 + Trophy",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "kalakaar-katta",
    name: "Kalakaar Katta Unplugged",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "04:00 PM – 07:00 PM",
    venue: "Katta Circle Courtyard",
    format: "Acoustic Sets, Spoken Word & Slams",
    desc: "Intimate evening open mics, soulful indie acoustic jams, and expressive spoken-word poetry under the courtyard lights.",
    prize: "₹1,20,000 + Featured Spot",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "fashion-show",
    name: "Fashion Promenade: Phoenix Walk",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [4],
    datesText: "January 25, 2027",
    timing: "07:00 PM – 10:00 PM",
    venue: "Main Amphitheater Runway",
    format: "Thematic Ramp Walk & Presentation",
    desc: "Avant-garde and couture fashion interpretations designed and modeled by top collegiate fashion contingents.",
    prize: "₹1,40,000 + Best Model Honors",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "standup",
    name: "Stand-Up & Stage Dramatics",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1, 5],
    datesText: "January 22 & 26, 2027",
    timing: "03:00 PM – 06:00 PM",
    venue: "Auditorium Hall 1",
    format: "Solo Set & Theatrical Showcase",
    desc: "Sharp observational wit, theatrical street plays, and stage monologues judged by headline performing artists.",
    prize: "₹1,15,000 + Festival Opener Spot",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=900&q=80"
  },

  // --- SPORTS EVENTS ---
  {
    id: "yoga",
    name: "Yoga",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [4],
    datesText: "January 25, 2027",
    timing: "07:30 AM – 11:00 AM",
    venue: "Indoor Sports Complex (Studio Hall)",
    format: "Traditional & Rhythmic Asana Championship",
    desc: "Showcase strength, flexibility, and focus in FLAME Kurukshetra's traditional Yoga championship.",
    prize: "₹85,000 + Championship Medals",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3, 4],
    datesText: "January 24, 2027",
    timing: "09:00 AM – 04:30 PM",
    venue: "Outdoor Floodlit Volleyball Arena",
    format: "6v6 Best of 5 Sets (25 Points)",
    desc: "Battle it out at the FLAME Kurukshetra 2027 Volleyball Championship on regulation floodlit courts.",
    prize: "₹1,28,000 + Medals",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "tennis",
    name: "Tennis",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 24, 2027",
    timing: "08:30 AM – 03:30 PM",
    venue: "Center Court & Synthetic Tennis Arena",
    format: "Singles & Doubles Best of 3 Sets",
    desc: "Ace your game at the FLAME Kurukshetra 2027 Tennis Championship across synthetic hardcourts.",
    prize: "₹1,30,000 + Championship Medals",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2],
    datesText: "January 23, 2027",
    timing: "10:00 AM – 05:00 PM",
    venue: "Indoor Sports Complex (Hall B)",
    format: "Singles & Mixed Team Knockout",
    desc: "Smash your limits at the FLAME Kurukshetra 2027 Table Tennis Championship on Stag tournament tables.",
    prize: "₹1,20,000 + Medals",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "swimming",
    name: "Swimming",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [4, 5],
    datesText: "January 26, 2027",
    timing: "08:00 AM – 01:30 PM",
    venue: "Olympic-Length 50m Aquatic Center",
    format: "Freestyle, Butterfly, Breaststroke & Relays",
    desc: "Dive into excellence at the FLAME Kurukshetra 2027 Swimming Championship in our 50m Olympic pool.",
    prize: "₹1,25,000 + Medals",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "football",
    name: "Football Championship",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 5],
    datesText: "January 22 – 26, 2027",
    timing: "09:00 AM – 06:00 PM",
    venue: "FLAME Main Turf Arena",
    format: "11v11 Knockout (90 Mins + Extra Time)",
    desc: "Western India's premier collegiate football tournament with certified national referees and floodlit championship turf.",
    prize: "₹1,45,000 + Phoenix Cup",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "basketball",
    name: "Basketball Slam 5v5",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3, 4, 5],
    datesText: "January 23 – 26, 2027",
    timing: "10:00 AM – 07:00 PM",
    venue: "Indoor Wooden Championship Court",
    format: "FIBA 5v5 Full-Court (4 Quarters)",
    desc: "Fierce indoor hardwood action featuring FIBA official scoreboards, 24-second shot clocks, and electric court-side crowds.",
    prize: "₹1,35,000 + MVP Honors",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "cricket",
    name: "Kurukshetra T20 Trophy",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4, 5],
    datesText: "January 22 – 26, 2027",
    timing: "08:30 AM – 04:30 PM",
    venue: "FLAME Cricket Oval",
    format: "T20 White-Ball Knockouts",
    desc: "Inter-collegiate 20-over battle on turf pitches featuring digital scoring, white leather balls, and pavilion floodlights.",
    prize: "₹1,50,000 + Phoenix Trophy",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "badminton",
    name: "Badminton Masters",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "09:30 AM – 05:30 PM",
    venue: "Indoor Badminton Arena (4 Synthetic Courts)",
    format: "BWF Best of 3 Sets (21 Points)",
    desc: "High-flying smashes and precision drop shots on cushioned synthetic courts under glare-free stadium lighting.",
    prize: "₹1,25,000 + Phoenix Trophies",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chess",
    name: "Chess Grand Prix",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2],
    datesText: "January 22, 2027",
    timing: "10:00 AM – 04:00 PM",
    venue: "Mind Hall (Indoor Sports Complex)",
    format: "FIDE Swiss League (Rapid & Blitz)",
    desc: "FIDE-rated arbiters, digital DGT boards, and timed blitz tiebreaks to crown the collegiate Grandmaster.",
    prize: "₹1,20,000 + Grand Trophy",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80"
  },

  // --- MANAGEMENT EVENTS ---
  {
    id: "shark-arena",
    name: "Shark Arena: B-Plan Pitch",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [2, 3],
    datesText: "January 23 – 24, 2027",
    timing: "11:00 AM – 04:00 PM",
    venue: "Venture War Room (Auditorium)",
    format: "10-Min Pitch + 5-Min Shark Q&A",
    desc: "Collegiate startup and venture pitch competition judged by Angel Investors, VC partners, and startup founders.",
    prize: "₹1,60,000 Seed Grant",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "crisis-sim",
    name: "Corporate Crisis Simulation",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "10:00 AM – 03:30 PM",
    venue: "Executive Council Chambers",
    format: "Escalating Boardroom War Room",
    desc: "Teams navigate market shocks, hostile takeovers, and live press conferences under intense real-time pressure.",
    prize: "₹1,25,000 + Mentorship",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dalal-street",
    name: "Wolf of Dalal Street",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [3, 4],
    datesText: "January 24 – 25, 2027",
    timing: "09:30 AM – 03:30 PM",
    venue: "Finance Lab Simulation Terminals",
    format: "Live Market & Portfolio Simulation",
    desc: "High-frequency stock market simulation trading equities, commodities, and derivatives amidst breaking mock news.",
    prize: "₹1,30,000 Cash Prize",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80"
  }
];

// =========================================================================
// 3. BLOG & FESTIVAL CHRONICLES
// =========================================================================
export const BLOG_POSTS = [
  {
    id: 'story-1',
    title: '10 AI Tools Transforming Collegiate Athletics & Arena Officiating in 2027',
    category: 'Tools',
    tagColor: '#FE5A00',
    date: 'Jan 10, 2027',
    readTime: '5 min read',
    author: 'Nischal Jogani',
    role: 'Head of IT & Digital Grid',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Discover the cutting-edge AI suites streamlining sports analytics, match officiating, automated video highlight clipping, and tournament scheduling at Kurukshetra.',
    content: `## The Modern Intelligence Revolution in Collegiate Athletics

As technology advances into 2027, artificial intelligence has ceased to be an experimental tool and has become the backbone of modern campus festival logistics, competitive match preparation, and athletic performance tracking.

From high-precision ball tracking systems on the synthetic tennis courts to dynamic bracket balancing algorithms, tournament directors and athletes alike are experiencing a paradigm shift.

> "AI is no longer just for enterprise software. At Kurukshetra 2027, real-time computer vision assists our officiating teams, tracks player mileage on the football turf, and serves predictive scheduling notifications to 2,500+ collegiate athletes." — Nischal Jogani, Head of IT

### Top 5 Ways AI is Revolutionizing Sports Festivals in 2027:
- **Autonomous Video Curation:** Neural networks automatically detect key plays, goals, and game-winning aces to generate instant social highlight reels.
- **Biometric Heatmaps & Load Monitoring:** Non-invasive camera feeds compute athlete fatigue, allowing team coaches to prevent injuries during intense multi-match weekends.
- **Dynamic Queue & Crowd Flow Optimization:** Real-time sensor vision balances spectator flow between the indoor sports complex and the outdoor football stadium.
- **Smart Rulebook Interpretation:** Instant conversational retrieval for intricate rule queries across 20+ distinct disciplines.
- **Decentralized Fixture Integrity:** Algorithms simulate knockout seedings to prevent unfair match scheduling bottlenecks.

Whether you are competing in the cricket knockout or spectating at Kalakaar Katta, technology ensures every moment operates like a finely tuned engine.`
  },
  {
    id: 'story-2',
    title: 'Tactical Playbook: How Collegiate Squads Master the High-Press System',
    category: 'Guides',
    tagColor: '#FAAD36',
    date: 'Jan 05, 2027',
    readTime: '7 min read',
    author: 'Saanvi Agrawal',
    role: 'Head of Sports Operations',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'A deep-dive tactical analysis into collegiate turf football dynamics, transition speed, high pressing traps, and how university teams prepare for 90-minute knockout battles.',
    content: `## Dissecting the High-Press Blueprint on Turf

Collegiate football knockout matches are decided in split seconds. In this tactical breakdown, we analyze how collegiate squads leverage counter-pressing patterns, spatial compression, and lightning-fast transitions.

### 1. Spatial Overloads & The Half-Space Trap
Modern college teams no longer rely purely on raw pace on the wings. They overload the central half-spaces, baiting opponent midfielders into narrow passing lanes before launching aggressive 3-man traps.

\`\`\`
Deep Turnover -> Direct Central Through-Ball -> Weak-side Inverted Run -> High-xG Finish
\`\`\`

### 2. Conditioning & The Fourth Quarter Factor
At Kurukshetra, matches that go into extra time demand peak aerobic fitness. Teams monitoring hydration and sprint mileage during Day 1 group stages consistently outlast opponents in the Gold Medal matches.

### Key Insights for Competing Contingents:
- Transition speed beats individual dribbling prowess.
- Maintain compact horizontal distances between center-backs and holding midfielders.
- Capitalize on set pieces: 34% of Kurukshetra goals originate from dead-ball deliveries.`
  },
  {
    id: 'story-3',
    title: 'The Phoenix Epoch: The Heritage and Grandeur of Kurukshetra',
    category: 'Insights',
    tagColor: '#FE5A00',
    date: 'Jan 02, 2027',
    readTime: '6 min read',
    author: 'Parth',
    role: 'Chairperson, Executive Council',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'An inspiring reflection on what makes FLAME Kurukshetra the gold standard of collegiate festivals in India: unmatched sportsmanship, cultural passion, and lifelong memories.',
    content: `## A Crucible of Passion and Sportsmanship

We stand at a critical juncture where human athletic grit, artistic brilliance, and intellectual rigor converge. When 2,500+ athletes from 50+ universities arrive at FLAME University for Kurukshetra 2027, they are not only participating in a festival—they are entering a rite of passage.

### Beyond Medals: The Spirit of Brotherhood
Collegiate sports teach resilience that textbooks cannot impart. Watching rival teams battle tooth and nail for 90 minutes on the turf, only to share meals at the night cafeteria and dance together at the Amphitheater concert, embodies the true spirit of the Phoenix.

As the floodlights ignite across our campus, every participant carries home memories forged in sweat, cheers, and unyielding camaraderie.`
  }
];

// =========================================================================
// 4. FREQUENTLY ASKED QUESTIONS (FAQ)
// =========================================================================
export const FAQ_DATA = [
  {
    id: "faq-1",
    category: "general",
    categoryLabel: "General & Overview",
    question: "What is FLAME Kurukshetra, and what are the official festival dates for 2027?",
    answer: "FLAME Kurukshetra is Western India's premier inter-collegiate sports, cultural, and management events festival hosted annually at FLAME University's campus. The 2027 edition runs across five action-packed days from 22nd to 26th January 2027."
  },
  {
    id: "faq-2",
    category: "general",
    categoryLabel: "General & Overview",
    question: "Who is eligible to participate in Kurukshetra competitions?",
    answer: "Enrolled undergraduate and postgraduate students from recognized universities, colleges, and institutes across India are eligible. All participants must present a valid Government Photo ID (Aadhar/Passport) and their official College Identity Card at check-in."
  },
  {
    id: "faq-3",
    category: "registrations",
    categoryLabel: "Registrations & Teams",
    question: "How does Contingent Registration work, and can colleges enter multiple teams?",
    answer: "Colleges can register an entire institutional contingent or enter standalone teams for specific sports, cultural, and management events via our online portal. Each contingent is assigned a dedicated Kurukshetra POC to facilitate seamless slotting, accreditation, and schedule alignment."
  },
  {
    id: "faq-4",
    category: "registrations",
    categoryLabel: "Registrations & Teams",
    question: "What is the registration fee, and what does it include?",
    answer: "Registration fees vary depending on the event discipline (team sports, individual racket sports, cultural flagships, and management events). The fee covers official event participation, referee adjudication, official accreditation badges, hydration stations, paramedic support, and access to all festival pro-nights and concerts."
  },
  {
    id: "faq-5",
    category: "hospitality",
    categoryLabel: "Stay & Hospitality",
    question: "Is accommodation provided for outstation teams on or near campus?",
    answer: "Yes! The Kurukshetra Hospitality Wing arranges secure, comfortable lodging for outstation contingents at vetted partner hotels with dedicated shuttle transport to and from the FLAME campus throughout match days. Food passes and nutrition dining can also be bundled."
  },
  {
    id: "faq-6",
    category: "hospitality",
    categoryLabel: "Stay & Hospitality",
    question: "What dining and food options are available on campus during festival days?",
    answer: "FLAME University features multiple dining halls, curated food stalls, cafes, and late-night food trucks catering to diverse culinary preferences, offering high-protein athlete meals, quick snacks, and beverages."
  },
  {
    id: "faq-7",
    category: "rulebooks",
    categoryLabel: "Rules & Officiating",
    question: "Who adjudicates the sporting matches, and how are disputes resolved?",
    answer: "All matches are refereed by certified officials from respective state and national sports federations (AIFF, BFI, FIBA, ITTF). Any technical disputes are escalated directly to the Kurukshetra Judicial Committee comprising the Sports Head, Chief Referee, and University Observer."
  },
  {
    id: "faq-8",
    category: "rulebooks",
    categoryLabel: "Rules & Officiating",
    question: "Are studded cleats allowed on the synthetic football turf?",
    answer: "Moulded rubber studs (FG/AG) are permitted on the main championship turf. Metal studs, blade studs, and flat non-cleated soles are strictly prohibited to ensure player safety and turf preservation."
  },
  {
    id: "faq-9",
    category: "security",
    categoryLabel: "Security & Guidelines",
    question: "What safety, medical, and emergency facilities are present on-site?",
    answer: "The campus maintains 24/7 emergency medical clinics, on-standby ambulances, certified physiotherapists, and paramedic tents positioned at every major court and turf. Rapid emergency transit routes are maintained at all times."
  },
  {
    id: "faq-10",
    category: "security",
    categoryLabel: "Security & Guidelines",
    question: "What is the policy regarding alcohol, smoking, and campus discipline?",
    answer: "FLAME University is a strictly zero-tolerance campus regarding alcohol, narcotics, smoking, and harassment. Any contingent found violating these regulations will face immediate disqualification, forfeiture of prizes, and reporting to their institution."
  }
];

// =========================================================================
// 5. ALBUM ARCHIVE MEDIA GALLERY
// =========================================================================
export const ALBUM_MEDIA = [
  {
    id: "photo-01",
    title: "Football Championship — Floodlit Turf Finale",
    category: "Football",
    day: 1,
    date: "Jan 22, 2027",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    size: "2.4 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-02",
    title: "Hardwood Basketball — Championship Tip-Off",
    category: "Basketball",
    day: 2,
    date: "Jan 23, 2027",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
    size: "3.1 MB",
    photographer: "Athlete Capture Crew"
  },
  {
    id: "photo-03",
    title: "Center Court Tennis — Baseline Rally Under Lights",
    category: "Tennis",
    day: 3,
    date: "Jan 24, 2027",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "1.9 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-04",
    title: "Amphitheater Battle of the Bands — Mainstage Spectacle",
    category: "Culturals",
    day: 3,
    date: "Jan 24, 2027",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    size: "4.2 MB",
    photographer: "Pro-Night Media"
  },
  {
    id: "photo-05",
    title: "400m Track Sprint — Photo-Finish Heats",
    category: "Athletics",
    day: 1,
    date: "Jan 22, 2027",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
    size: "2.8 MB",
    photographer: "Track & Field Bureau"
  },
  {
    id: "photo-06",
    title: "Kalakaar Katta — Acoustic Sessions Under Lights",
    category: "Culturals",
    day: 2,
    date: "Jan 23, 2027",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "2.1 MB",
    photographer: "Kuru Arts Team"
  },
  {
    id: "photo-07",
    title: "Fashion Promenade — Avant-Garde Runway Showcase",
    category: "Culturals",
    day: 4,
    date: "Jan 25, 2027",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
    size: "3.6 MB",
    photographer: "Design Media Desk"
  },
  {
    id: "photo-08",
    title: "Badminton Masters — Indoor Arena Finals",
    category: "Badminton",
    day: 2,
    date: "Jan 23, 2027",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "1.7 MB",
    photographer: "Court Photographer"
  },
  {
    id: "photo-09",
    title: "Aquatic Center — 50m Butterfly Championship",
    category: "Athletics",
    day: 5,
    date: "Jan 26, 2027",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "3.8 MB",
    photographer: "Ceremonies Wing"
  },
  {
    id: "photo-10",
    title: "Volleyball Spike Cup — Outdoor Arena Action",
    category: "Football",
    day: 4,
    date: "Jan 25, 2027",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "4.5 MB",
    photographer: "Kuru Media Wing"
  }
];

// =========================================================================
// 6. LIVE MATCHUPS & TICKER DATA
// =========================================================================
export const TICKER_MATCHUPS = [
  {
    id: "m-1",
    sport: "Football",
    stage: "Semi-Final",
    status: "78' LIVE",
    isLive: true,
    teamA: "FLAME Lions",
    teamB: "IIT Bombay",
    score: "2 – 1",
    venue: "Turf Arena 1",
    link: "/live-events"
  },
  {
    id: "m-2",
    sport: "Basketball",
    stage: "Final",
    status: "Q4 02:14",
    isLive: true,
    teamA: "Ashoka Knights",
    teamB: "NMIMS Titans",
    score: "68 – 65",
    venue: "Indoor Court",
    link: "/live-events"
  },
  {
    id: "m-3",
    sport: "Tennis",
    stage: "Men's Singles",
    status: "Set 2",
    isLive: true,
    teamA: "St. Xavier's",
    teamB: "BITS Pilani",
    score: "6-4, 3-2",
    venue: "Center Court",
    link: "/live-events"
  },
  {
    id: "m-4",
    sport: "Cricket T20",
    stage: "Super 8",
    status: "16.2 Ov",
    isLive: true,
    teamA: "FLAME Royals",
    teamB: "IIM Ahmedabad",
    score: "148/3",
    venue: "Cricket Oval",
    link: "/live-events"
  },
  {
    id: "m-5",
    sport: "Volleyball",
    stage: "Women's QF",
    status: "Set 3",
    isLive: true,
    teamA: "Symbiosis",
    teamB: "Christ University",
    score: "22 – 20",
    venue: "Outdoor Arena",
    link: "/live-events"
  },
  {
    id: "m-6",
    sport: "Badminton",
    stage: "Mixed Doubles",
    status: "Game 2",
    isLive: true,
    teamA: "IIT Delhi",
    teamB: "FLAME Warriors",
    score: "19 – 17",
    venue: "Badminton Complex",
    link: "/live-events"
  }
];
