/**
 * FLAME Kurukshetra 2027 - Official Consolidated Data Registry
 * Synced directly from:
 * - Google Sheet: Final Events List (1WDlNxpschyBh2XUXal3ht1aYUtFLaOcH4eV2QhUAE8I)
 * - Google Sheet: FK 2027 OC Data (1PrOTwfITd757dCh_rH8BmVZO--5WsidkTxhb08ItzLk)
 * - Google Drive: website photos (1OJt-ZugtCQq32LRXcvWQPNrS8WbBQN8z) & Collage (1kAGtjvH1t_tADA14E6OJKYpL4gz7ZLnr)
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
    photo: "/assets/heads/ec-president.jpg",
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
    photo: "/assets/heads/cc-logistics.jpg",
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
    photo: "/assets/heads/cc-marketing.jpg",
    idBadge: "FACULTY ADVISOR",
    oneLiner: "Supporting inter-collegiate outreach, management conclaves, and academic-extracurricular synergy.",
    wingLabel: "Faculty Advisory Board",
    email: "kurukshetra@flame.edu.in"
  }
];

// =========================================================================
// 1B. EXECUTIVE COUNCIL (Second Row on Meet the OC — Synced from FK 2027 OC Data)
// =========================================================================
export const EC_MEMBERS = [
  {
    id: "HEAD-01",
    name: "Ayush Kumar",
    role: "Chairperson",
    tier: "ec",
    wing: "governance",
    photo: "/assets/oc/ayush-kumar.jpg",
    idBadge: "EXECUTIVE COUNCIL • CHAIRPERSON",
    oneLiner: "Steering overarching institutional alignment, festival strategy, and apex leadership for Kurukshetra 2027.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "ayush.kumar@flame.edu.in"
  },
  {
    id: "HEAD-02",
    name: "Khushi Bhatia",
    role: "Joint Secretary",
    tier: "ec",
    wing: "governance",
    photo: "/assets/oc/khushi-bhatia.jpg",
    idBadge: "EXECUTIVE COUNCIL • JOINT SECRETARY",
    oneLiner: "Orchestrating council administration, inter-university delegations, and multi-wing operational convergence.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "khushi.bhatia@flame.edu.in"
  },
  {
    id: "HEAD-03",
    name: "Parthsarthi Goyal",
    role: "Joint Secretary",
    tier: "ec",
    wing: "governance",
    photo: "/assets/heads/ec-secretary.jpg",
    idBadge: "EXECUTIVE COUNCIL • JOINT SECRETARY",
    oneLiner: "Managing regulatory compliance, senate approvals, and grievance resolution frameworks across contingents.",
    wingLabel: "Executive Council",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    email: "parthsarthi.goyal@flame.edu.in"
  }
];

// =========================================================================
// 1C. CORE COMMITTEE (CC) HEADS (Third Row Onwards — Synced from FK 2027 OC Data)
// =========================================================================
export const CC_HEADS = [
  {
    id: "HEAD-04",
    name: "Divyanshri Munot",
    role: "Head of Admin & Logistics",
    tier: "cc",
    wing: "logistics",
    photo: "/assets/oc/divyanshri-munot.jpg",
    idBadge: "ADMIN & LOGISTICS",
    oneLiner: "Commanding heavy arena equipment staging, multi-arena transport flow, and round-the-clock logistics.",
    wingLabel: "Logistics Team",
    roleClass: "role-ops",
    instagram: "divyanshri_munot",
    email: "divyanshri.munot@flame.edu.in"
  },
  {
    id: "HEAD-05",
    name: "Siddharth Salunkhe",
    role: "Head of Hospitality",
    tier: "cc",
    wing: "hospitality",
    photo: "/assets/oc/siddharth-salunkhe.jpg",
    idBadge: "HOSPITALITY",
    oneLiner: "Facilitating athlete lodging, nutrition dining pipelines, and dedicated concierges for visiting participants.",
    wingLabel: "Hospitality Team",
    roleClass: "role-pr",
    instagram: "_sidshekhar_",
    email: "siddharth.salunkhe@flame.edu.in"
  },
  {
    id: "HEAD-06",
    name: "Mishti Gupta",
    role: "Co-Head PR",
    tier: "cc",
    wing: "pr",
    photo: "/assets/heads/cc-marketing.jpg",
    idBadge: "CO-HEAD PR",
    oneLiner: "Spearheading national press outreach, external media relations, and public communications across university networks.",
    wingLabel: "PR Team",
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
    photo: "/assets/oc/yashasvi-nagarale.jpg",
    idBadge: "CO-HEAD PR",
    oneLiner: "Driving campus ambassador syndications, influencer tie-ups, and student PR networks across partner universities.",
    wingLabel: "PR Team",
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
    photo: "/assets/oc/saanvi-agrawal.jpg",
    idBadge: "SPORTS",
    oneLiner: "Administering national tournament fixtures, rulebook compliance, certified referee panels, and podium tallies.",
    wingLabel: "Sports Operations",
    roleClass: "role-sports",
    instagram: "saanvii_agrawal",
    email: "saanvi.agrawal@flame.edu.in"
  },
  {
    id: "HEAD-09",
    name: "Anvi Bhojnagarwala",
    role: "Co-Head Culturals",
    tier: "cc",
    wing: "cultural",
    photo: "/assets/oc/anvi-bhojnagarwala.jpg",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Curating flagship cultural showcases, headline musical acts, stage spectacles, and amphitheater productions.",
    wingLabel: "Culturals Team",
    roleClass: "role-cultural",
    instagram: "_.anviii._",
    email: "anvi.bhojnagarwala@flame.edu.in"
  },
  {
    id: "HEAD-10",
    name: "Dhritee Bhardwaj",
    role: "Co-Head Culturals",
    tier: "cc",
    wing: "cultural",
    photo: "/assets/oc/dhritee-bhardwaj.jpg",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Directing dance showdowns, theatrical stages, music competitions, and high-energy cultural arenas.",
    wingLabel: "Culturals Team",
    roleClass: "role-cultural",
    instagram: "dhritee_bee",
    email: "dhritee.bhardwaj@flame.edu.in"
  },
  {
    id: "HEAD-11",
    name: "Ayush Mittal",
    role: "Head of Management Events",
    tier: "cc",
    wing: "management",
    photo: "/assets/oc/ayush-mittal.jpg",
    idBadge: "MANAGEMENT EVENTS",
    oneLiner: "Orchestrating Case Conquest, Business Fiesta, MUN, Battle of Bids, and Article Writing competitions.",
    wingLabel: "ME Events Team",
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
    photo: "/assets/oc/devam-gadia.jpg",
    idBadge: "FINANCE",
    oneLiner: "Steward of budget modeling, cash disbursements, sponsor auditing, and treasury compliance.",
    wingLabel: "Finance Team",
    roleClass: "role-ec",
    instagram: "devam.gadia",
    email: "devam.gadia@flame.edu.in"
  },
  {
    id: "HEAD-13",
    name: "Shashwat Tripathi",
    role: "Head of Sponsorship",
    tier: "cc",
    wing: "sponsorship",
    photo: "/assets/oc/shashwat-tripathi.jpg",
    idBadge: "SPONSORSHIP",
    oneLiner: "Securing corporate brand deals, marquee title partnerships, on-court activations, and sponsor deliverables.",
    wingLabel: "Sponsorship Team",
    roleClass: "role-pr",
    instagram: "shashwat_1702",
    email: "shashwat.tripathi@flame.edu.in"
  },
  {
    id: "HEAD-14",
    name: "Janhavi Ajgaonkar",
    role: "Head of Registrations",
    tier: "cc",
    wing: "registrations",
    photo: "/assets/oc/janhavi-ajgaonkar.jpg",
    idBadge: "REGISTRATIONS",
    oneLiner: "Supervising athlete sign-ups, team accreditation badges, slot allotment, and contingent check-ins.",
    wingLabel: "Registrations Team",
    roleClass: "role-sports",
    instagram: "janhavi.1010",
    email: "janhavi.ajgaonkar@flame.edu.in"
  },
  {
    id: "HEAD-15",
    name: "Stuti Lakshman",
    role: "Head of Ceremonies",
    tier: "cc",
    wing: "ceremonies",
    photo: "/assets/oc/stuti-lakshman.jpg",
    idBadge: "CEREMONIES",
    oneLiner: "Choreographing the opening torchbearer parade, stadium medal podiums, and grand closing spectacles.",
    wingLabel: "Ceremonies Team",
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
    photo: "/assets/oc/nischal-jogani.jpg",
    idBadge: "IT & DIGITAL",
    oneLiner: "Engineering web portals, live scoreboards, API scoring feeds, and digital infrastructure.",
    wingLabel: "IT Team",
    roleClass: "role-tech",
    instagram: "nischaljogani",
    email: "nischal.jogani@flame.edu.in"
  },
  {
    id: "HEAD-17",
    name: "Rajveer Pathak",
    role: "Head of Security",
    tier: "cc",
    wing: "security",
    photo: "/assets/oc/rajveer-pathak.jpg",
    idBadge: "SECURITY",
    oneLiner: "Managing stadium access checkpoints, paramedic emergency lanes, and festival safety protocols.",
    wingLabel: "Security Team",
    roleClass: "role-ops",
    instagram: "hennessy_rajveer5",
    email: "rajveer.pathak@flame.edu.in"
  }
];

export const COMMITTEE_HEADS = [...EC_MEMBERS, ...CC_HEADS];

// =========================================================================
// 2. OFFICIAL EVENTS DATABASE
//    Synced directly from `Final Events List` (events.xlsx) & Drive `website photos`
//    - Sports Events (Cricket, Basketball 5x5 & 3x3, Tennis, Volleyball, Badminton,
//      Table Tennis, Swimming, FLAME Hill Run 5K, Football, Street Football, Futsal,
//      Frisbee Mix, Chess, Sprints & Relays, Snooker, Zumba, Yoga, Squash, Handball,
//      Kickboxing, Pickleball, Padel, and Inferno [renamed from Hyrox])
//    - Cultural Events (Dance Group Western & Indian, Dance Solo Western & Indian,
//      Music Group, Music Solo, Theatre Group & Solo, Filmmaking, Photography, Art, Poetry)
//    - Management Events (Case Conquest, Business Fiesta, MUN, Battle of Bids, Article Writing)
// =========================================================================
export const SCHEDULE_EVENTS = [
  // ================= CULTURAL EVENTS =================
  {
    id: "dance-group-western",
    name: "Dance Group (Western)",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [3],
    datesText: "January 24, 2027",
    timing: "05:30 PM – 08:30 PM",
    venue: "Main Campus Amphitheater",
    format: "Western Group Choreography (Max Team Size: 18)",
    desc: "Unleash rhythm, coordination, and high-voltage energy with your crew in the flagship Western Group Dance showdown.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/dance-western.jpg"
  },
  {
    id: "dance-group-indian",
    name: "Dance Group (Indian)",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [2],
    datesText: "January 23, 2027",
    timing: "04:30 PM – 07:30 PM",
    venue: "Main Campus Amphitheater",
    format: "Classical & Folk Group Showcase (Max Team Size: 18)",
    desc: "Celebrate heritage, grace, and classical/folk ensemble choreography on the grand FLAME amphitheater stage.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/dance-indian.jpg"
  },
  {
    id: "dance-solo",
    name: "Dance Solo (Western & Indian)",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "02:00 PM – 05:00 PM",
    venue: "Auditorium & Central Plaza Stage",
    format: "Solo Performance — Western & Indian Categories (Team Size: 1)",
    desc: "Command the spotlight in solo classical, contemporary, hip-hop, or freestyle dance categories.",
    prize: "Solo Laurels + Cash Prize",
    image: "/assets/events/dance-solo.jpg"
  },
  {
    id: "music-group",
    name: "Music Group",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [2],
    datesText: "January 23, 2027",
    timing: "06:00 PM – 09:30 PM",
    venue: "Main Campus Amphitheater",
    format: "Band & Ensemble Performance (Max Team Size: 8)",
    desc: "The ultimate collegiate band, fusion, and ensemble music showdown under concert-grade lighting and sound.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/music-group.jpg"
  },
  {
    id: "music-solo",
    name: "Music Solo",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1],
    datesText: "January 22, 2027",
    timing: "03:30 PM – 06:30 PM",
    venue: "Katta Circle Courtyard",
    format: "Solo Vocal & Instrumental Showcase (Team Size: 1)",
    desc: "Soulful solo vocals and instrumental performances in an intimate acoustic courtyard setting.",
    prize: "Solo Laurels + Cash Prize",
    image: "/assets/events/music-solo.jpg"
  },
  {
    id: "theatre-group",
    name: "Theatre Group",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [4],
    datesText: "January 25, 2027",
    timing: "03:00 PM – 06:30 PM",
    venue: "Auditorium Hall 1 & Plaza",
    format: "Stage Play & Nukkad Natak (Max Team Size: 10)",
    desc: "Powerful ensemble dramatics, theatrical storytelling, and street play productions judged by theatre stalwarts.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/theater-group.jpg"
  },
  {
    id: "theatre-solo",
    name: "Theatre Solo",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1],
    datesText: "January 22, 2027",
    timing: "02:00 PM – 04:30 PM",
    venue: "Black Box / Auditorium",
    format: "Mono-Acting & Dramatic Monologue (Team Size: 1)",
    desc: "Captivate the jury with solo character portrayals, dramatic monologues, and expressive stagecraft.",
    prize: "Solo Laurels + Cash Prize",
    image: "/assets/events/theater.jpg"
  },
  {
    id: "creative-arts-online",
    name: "Filmmaking, Photography, Art & Poetry",
    category: "cultural",
    categoryLabel: "CULTURAL EVENTS",
    days: [1, 2, 3, 4],
    datesText: "January 22 – 25, 2027",
    timing: "10:00 AM – 05:00 PM",
    venue: "Campus Gallery & Online Submissions",
    format: "Filmmaking, Photography (Online), Art (Online) & Poetry (Online) (Team Size: 1)",
    desc: "Visual storytelling, short filmmaking, fine art, photography, and spoken/written poetry competitions.",
    prize: "Featured Exhibition + Cash Prize",
    image: "/assets/collage/collage-2.jpg"
  },

  // ================= MANAGEMENT EVENTS =================
  {
    id: "case-conquest",
    name: "Case Conquest",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "10:00 AM – 04:00 PM",
    venue: "Executive Council Chambers",
    format: "Strategic Business Case Competition (Team Size: 2)",
    desc: "Analyze real-world corporate challenges, build actionable strategy decks, and defend your recommendations before industry leaders.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/case-conquest.jpg"
  },
  {
    id: "business-fiesta",
    name: "Business Fiesta",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [2, 3],
    datesText: "January 23 – 24, 2027",
    timing: "11:00 AM – 04:30 PM",
    venue: "Venture War Room (Auditorium)",
    format: "Entrepreneurship & Business Strategy Showdown (Team Size: 1)",
    desc: "Test your商业 acumen, crisis decision-making, and entrepreneurial pitch skills in FLAME Kurukshetra's flagship Business Fiesta.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/management.jpg"
  },
  {
    id: "battle-of-bids",
    name: "Battle of Bids",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [3, 4],
    datesText: "January 24 – 25, 2027",
    timing: "10:30 AM – 04:00 PM",
    venue: "Finance Lab & Auction Arena",
    format: "Strategic Auction & Resource Bidding (Team Size: 2)",
    desc: "High-stakes live bidding war where valuation instincts, budget management, and game theory determine the winning franchise.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/case-conquest.jpg"
  },
  {
    id: "mun",
    name: "MUN (Model United Nations)",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "09:30 AM – 05:00 PM",
    venue: "Senate Conference Hall",
    format: "Parliamentary Diplomacy & Policy Debate (Team Size: 1)",
    desc: "Debate global geopolitical crises, draft resolutions, and forge diplomatic coalitions in the Kurukshetra MUN.",
    prize: "Best Delegate Gavel + Cash Prize",
    image: "/assets/events/management.jpg"
  },
  {
    id: "article-writing",
    name: "Article Writing",
    category: "management",
    categoryLabel: "MANAGEMENT EVENTS",
    days: [2],
    datesText: "January 23, 2027",
    timing: "11:00 AM – 02:00 PM",
    venue: "Academic Block / Online Submission",
    format: "Business & Economic Editorial Writing (Team Size: 1)",
    desc: "Craft incisive analytical articles on contemporary financial, economic, and management paradigms.",
    prize: "Publication + Cash Prize",
    image: "/assets/events/case-conquest.jpg"
  },

  // ================= SPORTS EVENTS =================
  {
    id: "inferno",
    name: "Inferno",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3],
    datesText: "January 23 – 24, 2027",
    timing: "07:00 AM – 12:00 PM",
    venue: "FLAME Athletic Track & Endurance Arena",
    format: "Men Open, Men Doubles, Women Doubles & Mixed Doubles (Open)",
    desc: "Push your physical limits in Inferno—FLAME Kurukshetra's flagship high-intensity functional fitness and endurance race.",
    prize: "Inferno Championship Trophy + Medals",
    image: "/assets/events/kickboxing.jpg"
  },
  {
    id: "football",
    name: "Football (Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4, 5],
    datesText: "January 22 – 26, 2027",
    timing: "08:30 AM – 06:30 PM",
    venue: "FLAME Main Turf Arena",
    format: "Inter-University 11v11 (Squad Size: 18 — 11+7)",
    desc: "Western India's premier inter-university 11v11 football tournament on floodlit championship turf for Men and Women.",
    prize: "Phoenix Cup + Cash Prize",
    image: "/assets/events/football.jpg"
  },
  {
    id: "street-football",
    name: "Street Football (Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3],
    datesText: "January 23 – 24, 2027",
    timing: "10:00 AM – 05:00 PM",
    venue: "Street Cage Arena",
    format: "Open (17–30) 3v3 Cage Knockout (Squad Size: 4 — 3+1)",
    desc: "Fast-paced, high-skill 3v3 Street Football battles for Men and Women in a tight cage format.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/street-football.jpg"
  },
  {
    id: "futsal",
    name: "Futsal (5v5 Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "09:00 AM – 05:30 PM",
    venue: "Futsal Turf Court",
    format: "Inter-University 5v5 (Squad Size: 12 — 5+7)",
    desc: "High-tempo 5v5 Futsal championship featuring rapid transitions and close-control technical play.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/futsal.jpg"
  },
  {
    id: "cricket",
    name: "Cricket (Men)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4, 5],
    datesText: "January 22 – 26, 2027",
    timing: "08:00 AM – 04:30 PM",
    venue: "FLAME Cricket Oval",
    format: "Inter-University (17–24) Leather Ball (Squad Size: 16 — 11+5)",
    desc: "Inter-university 20-over battle on turf pitches featuring certified umpires, digital scoring, and pavilion floodlights.",
    prize: "Phoenix Trophy + Cash Prize",
    image: "/assets/events/cricket.jpg"
  },
  {
    id: "basketball-5x5",
    name: "Basketball 5x5 (Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4, 5],
    datesText: "January 22 – 26, 2027",
    timing: "09:00 AM – 07:00 PM",
    venue: "Indoor Wooden & Floodlit Courts",
    format: "Inter-University (17–25) 5v5 (Squad Size: 12 — 5+7)",
    desc: "Fierce 5v5 full-court basketball action for Men and Women with official FIBA shot clocks and electric crowds.",
    prize: "Championship Trophy + MVP Honors",
    image: "/assets/events/basketball.jpg"
  },
  {
    id: "basketball-3x3",
    name: "Basketball 3x3 (Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [3, 4],
    datesText: "January 24 – 25, 2027",
    timing: "10:00 AM – 05:00 PM",
    venue: "Outdoor Half-Court Arena",
    format: "Open 3x3 Half-Court (Squad Size: 4 — 3+1)",
    desc: "Explosive half-court 3x3 basketball showdowns with rapid 12-second shot clocks.",
    prize: "Championship Medals + Cash Prize",
    image: "/assets/events/basketball-3x3.jpg"
  },
  {
    id: "volleyball",
    name: "Volleyball (Men & Women)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3, 4],
    datesText: "January 23 – 25, 2027",
    timing: "09:00 AM – 05:00 PM",
    venue: "Outdoor Floodlit Volleyball Arena",
    format: "Inter-University (17–25) 6v6 (Squad Size: 12 — 6+6)",
    desc: "Battle it out at the FLAME Kurukshetra 2027 Volleyball Championship across Men's and Women's brackets.",
    prize: "Championship Trophy + Medals",
    image: "/assets/events/volleyball.jpg"
  },
  {
    id: "tennis",
    name: "Tennis (Singles, Doubles & Mixed)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4],
    datesText: "January 22 – 25, 2027",
    timing: "08:00 AM – 04:00 PM",
    venue: "Center Court Synthetic Tennis Arena",
    format: "Open (17–28) — Men's/Women's Singles, Men's Doubles & Mixed Doubles",
    desc: "Ace your game at the FLAME Kurukshetra 2027 Tennis Championship across synthetic hardcourts.",
    prize: "Championship Trophy + Medals",
    image: "/assets/events/tennis.jpg"
  },
  {
    id: "badminton",
    name: "Badminton (Singles, Doubles & Mixed)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3, 4],
    datesText: "January 22 – 25, 2027",
    timing: "09:00 AM – 06:00 PM",
    venue: "Indoor Badminton Arena (Synthetic Courts)",
    format: "Open (17–28) — MS, WS, MD, WD & XD",
    desc: "High-flying smashes and precision drop shots across Men's, Women's, and Mixed Doubles brackets.",
    prize: "Phoenix Trophies + Cash Prize",
    image: "/assets/events/badminton.jpg"
  },
  {
    id: "table-tennis",
    name: "Table Tennis (Team, Singles & Doubles)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "09:30 AM – 05:30 PM",
    venue: "Indoor Sports Complex (Hall B)",
    format: "Open (16–30) — Men/Women Team (5), MS, WS, MD, WD & XD",
    desc: "Smash your limits at the FLAME Kurukshetra 2027 Table Tennis Championship on Stag tournament tables.",
    prize: "Championship Trophies + Medals",
    image: "/assets/events/table-tennis.jpg"
  },
  {
    id: "swimming",
    name: "Swimming (Individual & 4x50m Relays)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [4, 5],
    datesText: "January 25 – 26, 2027",
    timing: "08:00 AM – 02:00 PM",
    venue: "Olympic-Length 50m Aquatic Center",
    format: "Open (16–30) — 50m Free, Back, Breast, Fly & 4x50m Free/Medley Relays",
    desc: "Dive into excellence at the FLAME Kurukshetra 2027 Swimming Championship across individual sprints and team relays.",
    prize: "Championship Medals + Cash Prize",
    image: "/assets/events/swimming.jpg"
  },
  {
    id: "flame-hill-run-5k",
    name: "FLAME Hill Run 5K",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [4],
    datesText: "January 25, 2027",
    timing: "06:30 AM – 09:30 AM",
    venue: "FLAME Valley Hill Trail & Track",
    format: "Open (16+) Men, Women & FLAME Student Categories",
    desc: "Conquer the scenic yet demanding 5K hill trail across the lush FLAME University valley.",
    prize: "Finisher Laurels + Cash Prize",
    image: "/assets/events/5k-run.jpg"
  },
  {
    id: "frisbee",
    name: "Frisbee Mix (Open)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "08:30 AM – 05:00 PM",
    venue: "Arjuna Main Turf",
    format: "Open (16–30) Mixed Gender Ultimate (Squad Size: 20)",
    desc: "Fast-paced disc handling, end-zone layout catches, and WFDF spirit-of-the-game championship play.",
    prize: "Gold Medals + Cash Prize",
    image: "/assets/events/frisbee.jpg"
  },
  {
    id: "athletics",
    name: "Athletics (Sprints & 4x100m Relays)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 5],
    datesText: "January 22 & 26, 2027",
    timing: "08:00 AM – 01:00 PM",
    venue: "400m Synthetic Athletic Track",
    format: "Inter-University (17–24) — 100m, 200m, 400m & 4x100m Relays (M/W/Mixed)",
    desc: "Explosive track sprints and baton relays across 100m, 200m, 400m, and 4x100m Men, Women, and Mixed categories.",
    prize: "Track Laurels + Medals",
    image: "/assets/events/athletics.jpg"
  },
  {
    id: "handball",
    name: "Handball (Men & Women Open)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3],
    datesText: "January 23 – 24, 2027",
    timing: "09:00 AM – 04:30 PM",
    venue: "Outdoor Handball Arena",
    format: "Open (16–27) 7v7 (Squad Size: 14 — 7+7)",
    desc: "High-scoring team handball clashes featuring jump-shot goals and fast-break counterattacks.",
    prize: "Championship Trophy + Medals",
    image: "/assets/events/handball.jpg"
  },
  {
    id: "squash",
    name: "Squash (Men's, Women's & Mixed Doubles)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "09:30 AM – 05:00 PM",
    venue: "Indoor Glass-Back Squash Courts",
    format: "Open — Men's Singles, Women's Singles & Mixed Doubles (2)",
    desc: "High-velocity glass-court squash duels testing agility, wall precision, and endurance.",
    prize: "Championship Trophy + Medals",
    image: "/assets/events/squash.jpg"
  },
  {
    id: "padel-pickleball",
    name: "Padel & Pickleball Open",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [2, 3, 4],
    datesText: "January 23 – 25, 2027",
    timing: "09:00 AM – 06:00 PM",
    venue: "Padel Glass Arena & Pickleball Courts",
    format: "Open — Padel (MD, WD, XD) & Pickleball (MS, WS, MD, WD, XD)",
    desc: "Compete in India's fastest-growing racket sports across dedicated Padel and Pickleball brackets.",
    prize: "Championship Trophies + Medals",
    image: "/assets/events/tennis.jpg"
  },
  {
    id: "snooker",
    name: "Snooker (Open)",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2, 3],
    datesText: "January 22 – 24, 2027",
    timing: "10:00 AM – 06:00 PM",
    venue: "Indoor Cue Sports Lounge",
    format: "Open Knockout Frames",
    desc: "Precision cue control, break-building, and tactical safety play on tournament-grade snooker tables.",
    prize: "Championship Trophy + Cash Prize",
    image: "/assets/events/snooker.jpg"
  },
  {
    id: "chess",
    name: "Chess Non-Rated Mix",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [1, 2],
    datesText: "January 22 – 23, 2027",
    timing: "10:00 AM – 04:30 PM",
    venue: "Mind Hall (Indoor Sports Complex)",
    format: "Open Non-Rated Swiss League",
    desc: "Timed rapid and blitz chess battles under tournament clocks to crown the Kurukshetra Chess Champion.",
    prize: "Grand Trophy + Cash Prize",
    image: "/assets/events/case-conquest.jpg"
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [3, 4],
    datesText: "January 24 – 25, 2027",
    timing: "11:00 AM – 05:00 PM",
    venue: "Combat Sports Ring (Indoor Complex)",
    format: "Weight-Category Point & Ring Bouts",
    desc: "Controlled striking, footwork, and ring generalship officiated by certified combat sports referees.",
    prize: "Championship Medals + Trophy",
    image: "/assets/events/kickboxing.jpg"
  },
  {
    id: "yoga-zumba",
    name: "Yoga & Zumba Masterclass",
    category: "sports",
    categoryLabel: "SPORTS EVENTS",
    days: [4],
    datesText: "January 25, 2027",
    timing: "07:30 AM – 11:30 AM",
    venue: "Indoor Studio & Amphitheater Lawn",
    format: "Yoga Open (17–35) & FLAME Masterclasses",
    desc: "Showcase strength, flexibility, and mindfulness in the Yoga championship alongside high-energy Zumba sessions.",
    prize: "Championship Medals + Laurels",
    image: "/assets/events/zumba.jpg"
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
    avatar: '/assets/oc/nischal-jogani.jpg',
    image: '/assets/events/football.jpg',
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

Whether you are competing in the cricket knockout or spectating at the Amphitheater, technology ensures every moment operates like a finely tuned engine.`
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
    avatar: '/assets/oc/saanvi-agrawal.jpg',
    image: '/assets/events/street-football.jpg',
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
    author: 'Ayush Kumar',
    role: 'Chairperson, Executive Council',
    avatar: '/assets/oc/ayush-kumar.jpg',
    image: '/assets/collage/collage-1.jpg',
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
    answer: "Enrolled undergraduate and postgraduate students from recognized universities, colleges, and institutes across India are eligible. Open category events also welcome eligible participants within the specified age brackets. All participants must present a valid Government Photo ID and College ID at check-in."
  },
  {
    id: "faq-3",
    category: "registrations",
    categoryLabel: "Registrations & Teams",
    question: "Do we need to enter phone numbers and emails for all players in team sports?",
    answer: "No! Only the Team Captain / Team POC's phone number and email ID are required when registering for team events. Simply toggle the Captain / POC slider ON for your designated captain."
  },
  {
    id: "faq-4",
    category: "registrations",
    categoryLabel: "Registrations & Teams",
    question: "What is the registration fee, and what does it include?",
    answer: "Registration fees vary depending on the event discipline (team sports, individual racket sports, cultural flagships, and management events). The fee covers official event participation, referee adjudication, official accreditation badges, hydration stations, paramedic support, and access to festival pro-nights."
  },
  {
    id: "faq-5",
    category: "hospitality",
    categoryLabel: "Stay & Hospitality",
    question: "Is accommodation provided for outstation teams on or near campus?",
    answer: "Yes! The Kurukshetra Hospitality Wing arranges secure, comfortable lodging for outstation contingents with dedicated shuttle transport throughout match days. Food passes and athlete dining can also be bundled."
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
    answer: "All matches are refereed by certified officials from respective state and national sports federations. Any technical disputes are escalated directly to the Kurukshetra Judicial Committee comprising the Sports Head, Chief Referee, and Faculty Advisor."
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
    answer: "The campus maintains 24/7 emergency medical clinics, on-standby ambulances, certified physiotherapists, and paramedic tents positioned at every major court and turf."
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
// 5. ALBUM ARCHIVE MEDIA GALLERY (Real Downloaded Kurukshetra Photos from Drive)
// =========================================================================
export const ALBUM_MEDIA = [
  {
    id: "photo-01",
    title: "Floodlit Turf Football — Championship Action",
    category: "Football",
    day: 1,
    date: "Jan 22, 2027",
    image: "/assets/events/football.jpg",
    aspect: "landscape",
    size: "2.4 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-02",
    title: "Amphitheater Cultural Showcase — Mainstage Lights",
    category: "Culturals",
    day: 2,
    date: "Jan 23, 2027",
    image: "/assets/collage/collage-2.jpg",
    aspect: "landscape",
    size: "2.4 MB",
    photographer: "Pro-Night Media"
  },
  {
    id: "photo-03",
    title: "Hardwood Basketball 5x5 — Tip-Off Showdown",
    category: "Basketball",
    day: 2,
    date: "Jan 23, 2027",
    image: "/assets/events/basketball.jpg",
    aspect: "landscape",
    size: "1.9 MB",
    photographer: "Athlete Capture Crew"
  },
  {
    id: "photo-04",
    title: "Western Group Dance — Crew Choreography Finale",
    category: "Culturals",
    day: 3,
    date: "Jan 24, 2027",
    image: "/assets/events/dance-western.jpg",
    aspect: "landscape",
    size: "3.2 MB",
    photographer: "Pro-Night Media"
  },
  {
    id: "photo-05",
    title: "FLAME Hill Run 5K & Track Sprints",
    category: "Athletics",
    day: 4,
    date: "Jan 25, 2027",
    image: "/assets/events/5k-run.jpg",
    aspect: "landscape",
    size: "2.8 MB",
    photographer: "Track & Field Bureau"
  },
  {
    id: "photo-06",
    title: "Center Court Tennis — Baseline Rally",
    category: "Tennis",
    day: 3,
    date: "Jan 24, 2027",
    image: "/assets/events/tennis.jpg",
    aspect: "landscape",
    size: "2.1 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-07",
    title: "Volleyball Championship — Outdoor Floodlit Court",
    category: "Football",
    day: 3,
    date: "Jan 24, 2027",
    image: "/assets/events/volleyball.jpg",
    aspect: "landscape",
    size: "2.5 MB",
    photographer: "Court Photographer"
  },
  {
    id: "photo-08",
    title: "Badminton Masters — Indoor Synthetic Arena",
    category: "Badminton",
    day: 2,
    date: "Jan 23, 2027",
    image: "/assets/events/badminton.jpg",
    aspect: "landscape",
    size: "1.9 MB",
    photographer: "Court Photographer"
  },
  {
    id: "photo-09",
    title: "Olympic 50m Pool — Swimming Gala Finals",
    category: "Athletics",
    day: 5,
    date: "Jan 26, 2027",
    image: "/assets/events/swimming.jpg",
    aspect: "landscape",
    size: "3.1 MB",
    photographer: "Aquatic Media Desk"
  },
  {
    id: "photo-10",
    title: "Cricket Oval — Leather Ball T20 Showdown",
    category: "Football",
    day: 4,
    date: "Jan 25, 2027",
    image: "/assets/events/cricket.jpg",
    aspect: "landscape",
    size: "3.2 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-11",
    title: "Indian Classical & Folk Dance Showcase",
    category: "Culturals",
    day: 2,
    date: "Jan 23, 2027",
    image: "/assets/events/dance-indian.jpg",
    aspect: "landscape",
    size: "2.7 MB",
    photographer: "Kuru Arts Team"
  },
  {
    id: "photo-12",
    title: "Ultimate Frisbee Mixed Open — Arjuna Turf",
    category: "Athletics",
    day: 2,
    date: "Jan 23, 2027",
    image: "/assets/events/frisbee.jpg",
    aspect: "landscape",
    size: "2.3 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-13",
    title: "Kurukshetra Moments — Campus Arena Highlights",
    category: "Culturals",
    day: 1,
    date: "Jan 22, 2027",
    image: "/assets/collage/collage-1.jpg",
    aspect: "landscape",
    size: "1.8 MB",
    photographer: "Kuru Media Wing"
  },
  {
    id: "photo-14",
    title: "Track & Field — Sprint Finish Line",
    category: "Athletics",
    day: 1,
    date: "Jan 22, 2027",
    image: "/assets/collage/collage-3.jpg",
    aspect: "landscape",
    size: "1.9 MB",
    photographer: "Track & Field Bureau"
  },
  {
    id: "photo-15",
    title: "Evening Stage & Crowd Energy",
    category: "Culturals",
    day: 3,
    date: "Jan 24, 2027",
    image: "/assets/collage/collage-6.jpg",
    aspect: "landscape",
    size: "2.6 MB",
    photographer: "Pro-Night Media"
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
    sport: "Cricket",
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
