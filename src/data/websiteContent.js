/**
 * FLAME Kurukshetra 2027 - Consolidated Data Registry
 * Uses clean dummy placeholder imagery throughout (per user instructions)
 * Categorizes all events across Sports, Cultural, Management, and Esports.
 */

// =========================================================================
// 1. COMMITTEE HEADS & APEX LEADERSHIP (All Dummy Portrait Placeholders)
// =========================================================================
export const COMMITTEE_HEADS = [
  {
    id: "HEAD-01",
    name: "Chairperson",
    role: "Chairperson",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    idBadge: "CHAIRPERSON",
    oneLiner: "Steering overarching institutional alignment, festival strategy, and apex leadership for Kurukshetra.",
    wingLabel: "Apex Leadership",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    fullBio: "The Chairperson steers the overarching festival vision, University Senate liaison, and council execution matrix. Ensuring Kurukshetra sets new benchmarks across athletic integrity, production grandeur, and nationwide contingent participation.",
    deliverables: [
      "Strategic university governance & institutional clearances",
      "Inter-collegiate council leadership & steering protocols",
      "Festival milestone roadmaps & apex steering committee oversight"
    ],
    email: "chairperson.kurukshetra@flame.edu.in",
    linkedin: "https://linkedin.com"
  },
  {
    id: "HEAD-02",
    name: "General Secretary",
    role: "General Secretary",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    idBadge: "GENERAL SECRETARY",
    oneLiner: "Orchestrating council administration, inter-university delegations, and multi-wing operational convergence.",
    wingLabel: "Central Administration",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    fullBio: "Coordinates strategic convergence across all festival operational wings. The mandate encompasses contingent growth roadmaps, institutional alliances, and dispute-resolution frameworks to maintain seamless cross-department synchrony.",
    deliverables: [
      "Contingent delegation expansion across 60+ Tier-1 universities",
      "Cross-wing synchronization & conflict mitigation matrices",
      "Daily operational execution reviews and milestone tracking"
    ],
    email: "gensec1.kurukshetra@flame.edu.in",
    linkedin: "https://linkedin.com"
  },
  {
    id: "HEAD-03",
    name: "General Secretary",
    role: "General Secretary",
    wing: "governance",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    idBadge: "GENERAL SECRETARY",
    oneLiner: "Managing regulatory compliance, senate approvals, and grievance resolution frameworks across contingents.",
    wingLabel: "Council Protocol",
    roleClass: "role-ec",
    instagram: "flamekurukshetra",
    fullBio: "Oversees festival protocol, official communications, regulatory compliance, and university administrative alignment. Serves as the primary custodian of festival governance and contingent grievance resolutions.",
    deliverables: [
      "Official University Council approvals & contingent rulebook",
      "Festival documentation, judicial committee & contingent accreditation",
      "Central dispatch and daily festival communications bulletin"
    ],
    email: "gensec2.kurukshetra@flame.edu.in",
    linkedin: "https://linkedin.com"
  },
  {
    id: "HEAD-04",
    name: "Divyanshri Munot",
    role: "Head of Admin & Logistics",
    wing: "logistics",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    idBadge: "ADMIN & LOGISTICS",
    oneLiner: "Commanding heavy arena equipment staging, multi-arena transport flow, and round-the-clock logistics.",
    wingLabel: "Admin & Logistics",
    roleClass: "role-ops",
    instagram: "divyanshri_munot",
    fullBio: "Divyanshri oversees the backbone of Kurukshetra, managing venue fabrication, stadium equipment, equipment transfers, electrical matrices, and uninterrupted vendor coordination across all 4 festival days.",
    deliverables: [
      "Venue fabrication, arena staging & heavy equipment procurement",
      "Round-the-clock logistics supply chains & power infrastructure",
      "Court-side equipment readiness & tournament gear allocation"
    ],
    email: "divyanshri.munot@flame.edu.in",
    linkedin: "https://instagram.com/divyanshri_munot"
  },
  {
    id: "HEAD-05",
    name: "Sid Shekhar",
    role: "Head of Hospitality",
    wing: "hospitality",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    idBadge: "HOSPITALITY",
    oneLiner: "Facilitating luxury athlete lodging, nutrition dining pipelines, and dedicated concierges for 2,000+ participants.",
    wingLabel: "Hospitality & VIP",
    roleClass: "role-pr",
    instagram: "_sidshekhar_",
    fullBio: "Sid leads the hospitality brigade, guaranteeing comfortable accommodations, curated athlete nutrition, transit shuttles, and VIP protocol for hundreds of visiting contingents and celebrity guests.",
    deliverables: [
      "Athlete accommodation allotment across partnered luxury hotels",
      "High-nutrition catering, hydration zones & dining pipelines",
      "24/7 contingent concierge desk & transit shuttle fleet management"
    ],
    email: "sid.shekhar@flame.edu.in",
    linkedin: "https://instagram.com/_sidshekhar_"
  },
  {
    id: "HEAD-06",
    name: "Mishti Gupta",
    role: "Co-Head PR",
    wing: "pr",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD PR",
    oneLiner: "Spearheading national press outreach, external media relations, and public communications across university networks.",
    wingLabel: "PR & Media",
    roleClass: "role-creative",
    instagram: "mishtigupta_",
    fullBio: "Mishti drives national media coverage, print publications, news wire syndications, and high-visibility festival press briefings, elevating Kurukshetra's identity as a premier collegiate brand.",
    deliverables: [
      "National press releases, journalist accreditation & festival media kit",
      "Strategic PR alliances with national collegiate publications",
      "Crisis communication management and external brand messaging"
    ],
    email: "mishti.gupta@flame.edu.in",
    linkedin: "https://instagram.com/mishtigupta_"
  },
  {
    id: "HEAD-07",
    name: "Yashasvi Nagarale",
    role: "Co-Head PR",
    wing: "pr",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD PR",
    oneLiner: "Driving campus ambassador syndications, influencer tie-ups, and student PR networks across 60+ universities.",
    wingLabel: "PR & Media",
    roleClass: "role-creative",
    instagram: "yashasvinagarale_",
    fullBio: "Yashasvi coordinates extensive student outreach across colleges, managing national campus ambassadors, digital press campaigns, and celebrity engagement.",
    deliverables: [
      "National Campus Ambassador network spanning 60+ partner campuses",
      "Influencer collaborations, podcast interviews & festival buzz",
      "On-ground press desk and athlete spotlight interviews"
    ],
    email: "yashasvi.nagarale@flame.edu.in",
    linkedin: "https://instagram.com/yashasvinagarale_"
  },
  {
    id: "HEAD-08",
    name: "Saanvi Agrawal",
    role: "Head of Sports",
    wing: "sports",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    idBadge: "SPORTS",
    oneLiner: "Administering national tournament fixtures, rulebook compliance, certified referee panels, and podium tallies.",
    wingLabel: "Sports Operations",
    roleClass: "role-sports",
    instagram: "saanvii_agrawal",
    fullBio: "Saanvi commands the flagship sporting tournaments of Kurukshetra, governing 12+ national athletic disciplines, international standard court fixtures, and federation-certified referee adjudications.",
    deliverables: [
      "Fixtures across Turf Football, Basketball, Tennis, Cricket, Badminton & Track",
      "Federation-certified referee panels & judicial dispute committee",
      "Real-time match schedules, point tables & championship trophies"
    ],
    email: "saanvi.agrawal@flame.edu.in",
    linkedin: "https://instagram.com/saanvii_agrawal"
  },
  {
    id: "HEAD-09",
    name: "Anvi",
    role: "Co-Head Culturals",
    wing: "cultural",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Curating Kalakaar Katta, headline musical acts, stage spectacles, and immersive amphitheater productions.",
    wingLabel: "Cultural & Stage",
    roleClass: "role-cultural",
    instagram: "_.anviii._",
    fullBio: "Anvi shapes the vibrant cultural heart of Kurukshetra, spearheading Kalakaar Katta, concert lighting, theatrical sets, and star artist nights that illuminate the FLAME amphitheater.",
    deliverables: [
      "Curating Kalakaar Katta flagship showcase & stage choreography",
      "A-list celebrity artist contracting, sound checks & rider hospitality",
      "Stage aesthetics, dynamic light cues & stadium spectacle timing"
    ],
    email: "anvi@flame.edu.in",
    linkedin: "https://instagram.com/_.anviii._"
  },
  {
    id: "HEAD-10",
    name: "Dhritee",
    role: "Co-Head Culturals",
    wing: "cultural",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    idBadge: "CO-HEAD CULTURALS",
    oneLiner: "Directing battle of the bands, street dance battles, acoustic showcases, and high-energy festival stages.",
    wingLabel: "Cultural & Stage",
    roleClass: "role-cultural",
    instagram: "dhritee_bee",
    fullBio: "Dhritee leads competitive cultural showcases, overseeing band showdowns, rap cyphers, street dance arenas, and interactive performing arts competitions with renowned judges.",
    deliverables: [
      "Battle of the Bands, Step Up Dance, and Slam Poetry rulebooks",
      "Judge panels consisting of industry stalwarts and music producers",
      "Acoustic setups, sound mixing & audience experience design"
    ],
    email: "dhritee@flame.edu.in",
    linkedin: "https://instagram.com/dhritee_bee"
  },
  {
    id: "HEAD-11",
    name: "Ayush Mittal",
    role: "Head of Management Events",
    wing: "management",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    idBadge: "MANAGEMENT EVENTS",
    oneLiner: "Orchestrating Shark Arena B-Plan pitches, corporate crisis simulations, stock trading floors, and case studies.",
    wingLabel: "Management Events",
    roleClass: "role-tech",
    instagram: "ayush.mittalll",
    fullBio: "Ayush commands the intellectual arena of Kurukshetra, staging high-stakes venture pitching, simulated stock markets, crisis response rooms, and live business strategy faceoffs with venture capitalists.",
    deliverables: [
      "Shark Arena B-Plan competition with active VC angel investors",
      "Wolf of Dalal Street real-time trading floor simulation",
      "Corporate crisis simulation rooms & business consulting cases"
    ],
    email: "ayush.mittal@flame.edu.in",
    linkedin: "https://instagram.com/ayush.mittalll"
  },
  {
    id: "HEAD-12",
    name: "Devam Gadia",
    role: "Head of Finance",
    wing: "finance",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    idBadge: "FINANCE",
    oneLiner: "Steward of multi-crore budget modeling, cash disbursements, sponsor auditing, and treasury compliance.",
    wingLabel: "Finance & Accounts",
    roleClass: "role-ec",
    instagram: "devam.gadia",
    fullBio: "Devam manages the festival treasury, overseeing commercial agreements, vendor disbursement milestones, prize pool allocations, and meticulous audit transparency.",
    deliverables: [
      "Festival multi-crore operating budget modeling & cash-flow planning",
      "Vendor invoice clearance, prize pool escrow & tax compliance",
      "Daily expenditure auditing and post-fest fiscal closure reports"
    ],
    email: "devam.gadia@flame.edu.in",
    linkedin: "https://instagram.com/devam.gadia"
  },
  {
    id: "HEAD-13",
    name: "Shashwat",
    role: "Head of Sponsorship",
    wing: "sponsorship",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    idBadge: "SPONSORSHIP",
    oneLiner: "Securing tier-1 corporate brand deals, marquee title partnerships, on-court activations, and sponsor ROI.",
    wingLabel: "Sponsorship & Alliances",
    roleClass: "role-pr",
    instagram: "shashwat_1702",
    fullBio: "Shashwat leads corporate alliance development, pitching national brands, negotiating title endorsements, organizing experiential marketing booths, and optimizing sponsor brand equity.",
    deliverables: [
      "Title, Associate, and Beverage marquee brand sponsorships",
      "30+ promotional stalls, product sampling zones & sponsor lounges",
      "Corporate analytics reporting and guaranteed sponsor deliverables"
    ],
    email: "shashwat@flame.edu.in",
    linkedin: "https://instagram.com/shashwat_1702"
  },
  {
    id: "HEAD-14",
    name: "Janhavi",
    role: "Head of Registrations",
    wing: "registrations",
    photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80",
    idBadge: "REGISTRATIONS",
    oneLiner: "Supervising 2,500+ athlete sign-ups, team accreditation badges, slot allotment, and contingent check-ins.",
    wingLabel: "Contingent Registrations",
    roleClass: "role-sports",
    instagram: "janhavi.1010",
    fullBio: "Janhavi runs the registration pipeline, overseeing collegiate verification, athlete digital credentials, slot allocation, and real-time contingent reception upon campus arrival.",
    deliverables: [
      "Contingent registration portal administration & KYC validation",
      "Athlete credential cards, security wristbands & event badges",
      "Real-time contingent desk for on-the-spot team slotting"
    ],
    email: "janhavi@flame.edu.in",
    linkedin: "https://instagram.com/janhavi.1010"
  },
  {
    id: "HEAD-15",
    name: "Stuti Lakshman",
    role: "Head of Ceremonies",
    wing: "ceremonies",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    idBadge: "CEREMONIES",
    oneLiner: "Choreographing the opening torchbearer parade, stadium medal podiums, and grand closing spectacles.",
    wingLabel: "Ceremonies & Protocols",
    roleClass: "role-cultural",
    instagram: "stuti_lakshman",
    fullBio: "Stuti directs the monumental ceremonial moments of Kurukshetra, including the Phoenix flame lighting, captain oath-taking marches, grand medal ceremonies, and fireworks finales.",
    deliverables: [
      "Opening Ceremony choreography, contingent parade & Phoenix torch flame",
      "Medal distribution protocol, dignitary felicitation & podium ceremonies",
      "Closing Ceremony spectacle and trophy presentation choreography"
    ],
    email: "stuti.lakshman@flame.edu.in",
    linkedin: "https://instagram.com/stuti_lakshman"
  },
  {
    id: "HEAD-16",
    name: "Nischal Jogani",
    role: "Head of IT",
    wing: "it",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    idBadge: "IT & DIGITAL",
    oneLiner: "Engineering low-latency web portals, sub-second live scoreboards, API scoring feeds, and campus mesh Wi-Fi.",
    wingLabel: "IT & Digital Grid",
    roleClass: "role-tech",
    instagram: "nischaljogani",
    fullBio: "Nischal commands the digital architecture of Kurukshetra, deploying web registration portals, real-time match scoring APIs, live stream integrations, and robust network infrastructure.",
    deliverables: [
      "Festival web architecture, contingent authentication & live schedule API",
      "Court-side referee digital scoring pads with instant arena board sync",
      "High-bandwidth Wi-Fi meshes across turfs, arenas & press rooms"
    ],
    email: "nischal.jogani@flame.edu.in",
    linkedin: "https://instagram.com/nischaljogani"
  },
  {
    id: "HEAD-17",
    name: "Rajveer",
    role: "Head of Security",
    wing: "security",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    idBadge: "SECURITY",
    oneLiner: "Managing 24/7 stadium access checkpoints, paramedic emergency lanes, and zero-incident festival safety.",
    wingLabel: "Security & Crowd Safety",
    roleClass: "role-ops",
    instagram: "hennessy_rajveer5",
    fullBio: "Rajveer ensures the safety of over 15,000 daily campus footfalls, coordinating access points, emergency medical lanes, crowd flow dynamics, and rapid-response safety dispatches.",
    deliverables: [
      "24/7 stadium security perimeters, metal detectors & access control",
      "Paramedic emergency stations, doctors on standby & ambulance lanes",
      "Crowd control protocols during high-intensity football & concert nights"
    ],
    email: "rajveer@flame.edu.in",
    linkedin: "https://instagram.com/hennessy_rajveer5"
  }
];

// =========================================================================
// 2. OFFICIAL EVENTS DATABASE (Categorized: sports, cultural, management, esports)
// =========================================================================
export const SCHEDULE_EVENTS = [
  // --- CULTURAL EVENTS ---
  {
    id: "band-battle",
    name: "Battle of the Bands (DECIBEL)",
    category: "cultural",
    categoryLabel: "Cultural • Live Music",
    days: [2],
    datesText: "Feb 19 (Evening)",
    venue: "Main Campus Amphitheater",
    format: "Live Band Performance (20-Min Slot)",
    desc: "The ultimate collegiate rock, indie, and fusion showdown under a concert-grade PA system with 2,500+ live spectators.",
    prize: "₹1,50,000 + Studio Recording",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "street-dance",
    name: "Step Up: Street Dance Battle",
    category: "cultural",
    categoryLabel: "Cultural • Urban Dance",
    days: [3],
    datesText: "Feb 20",
    venue: "Central Plaza Stage",
    format: "Crew Routine & 1v1 Cypher Battles",
    desc: "Fierce hip-hop, breaking, popping, and urban choreography battles adjudicated by renowned industry choreographers.",
    prize: "₹1,35,000 + Trophy",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "kalakaar-katta",
    name: "Kalakaar Katta Unplugged",
    category: "cultural",
    categoryLabel: "Cultural • Acoustic & Slam",
    days: [1, 2],
    datesText: "Feb 18 – 19",
    venue: "Katta Circle Courtyard",
    format: "Acoustic Sets, Spoken Word & Slams",
    desc: "Intimate evening open mics, soulful indie acoustic jams, and expressive spoken-word poetry under the amphitheater lights.",
    prize: "₹1,20,000 + Featured Spot",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "fashion-show",
    name: "Fashion Promenade: Phoenix Walk",
    category: "cultural",
    categoryLabel: "Cultural • Couture & Runway",
    days: [3],
    datesText: "Feb 20 (Night)",
    venue: "Main Amphitheater Runway",
    format: "Thematic Ramp Walk & Presentation",
    desc: "Avant-garde and sustainable couture interpretations designed and modeled by top collegiate fashion contingents.",
    prize: "₹1,40,000 + Best Model Honors",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "standup",
    name: "Stand-Up & Stage Dramatics",
    category: "cultural",
    categoryLabel: "Cultural • Theatre & Comedy",
    days: [1],
    datesText: "Feb 18 (Evening)",
    venue: "Auditorium Hall 1",
    format: "Solo Set & Nukkad Natak Showcase",
    desc: "Sharp observational wit, theatrical street plays, and stage monologues judged by headline performing artists.",
    prize: "₹1,15,000 + Festival Opener Spot",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=900&q=80"
  },

  // --- SPORTS EVENTS ---
  {
    id: "football",
    name: "Football Championship",
    category: "sports",
    categoryLabel: "Sports • Turf 11v11",
    days: [1, 2, 3],
    datesText: "Feb 18 – 20",
    venue: "FLAME Main Turf Arena",
    format: "11v11 Knockout (90 Mins + Extra Time)",
    desc: "Western India's premier collegiate football tournament with certified national referees, floodlit championship turf, and high-intensity knockouts.",
    prize: "₹1,45,000 + Phoenix Cup",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "basketball",
    name: "Basketball Slam 5v5",
    category: "sports",
    categoryLabel: "Sports • Indoor Hardwood",
    days: [2, 3, 4],
    datesText: "Feb 19 – 21",
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
    categoryLabel: "Sports • White-Ball T20",
    days: [1, 2, 3, 4],
    datesText: "Feb 18 – 21",
    venue: "FLAME Cricket Oval",
    format: "T20 White-Ball Knockouts",
    desc: "Inter-collegiate 20-over battle on turf pitches featuring digital scoring, white leather balls, and pavilion floodlights.",
    prize: "₹1,50,000 + Phoenix Trophy",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "tennis",
    name: "Tennis & Padel Open",
    category: "sports",
    categoryLabel: "Sports • Racket Arena",
    days: [1, 2, 3],
    datesText: "Feb 18 – 20",
    venue: "Center Court & Padel Glass Arena",
    format: "Singles & Doubles Best of 3 Sets",
    desc: "Professional synthetic courts and panoramic glass padel enclosures for high-velocity baseline and net duels.",
    prize: "₹1,30,000 + Championship Medals",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "badminton",
    name: "Badminton Masters",
    category: "sports",
    categoryLabel: "Sports • Indoor Courts",
    days: [1, 2, 3],
    datesText: "Feb 18 – 20",
    venue: "Indoor Badminton Arena (4 Synthetic Courts)",
    format: "BWF Best of 3 Sets (21 Points)",
    desc: "High-flying smashes and precision drop shots on cushioned synthetic courts under glare-free stadium lighting.",
    prize: "₹1,25,000 + Phoenix Trophies",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "volleyball",
    name: "Volleyball Spike Cup",
    category: "sports",
    categoryLabel: "Sports • Outdoor Floodlit",
    days: [2, 3, 4],
    datesText: "Feb 19 – 21",
    venue: "Outdoor Floodlit Volleyball Arena",
    format: "6v6 Best of 5 Sets (25 Points)",
    desc: "High-intensity blocking and explosive spikes on regulation outdoor courts under the evening floodlights.",
    prize: "₹1,28,000 + Medals",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "table-tennis",
    name: "Table Tennis Invitational",
    category: "sports",
    categoryLabel: "Sports • Indoor Hall",
    days: [1, 2],
    datesText: "Feb 18 – 19",
    venue: "Indoor Sports Complex (Hall B)",
    format: "Singles & Mixed Team Knockout",
    desc: "ITTF-standard Stag tournament tables, precision spin rallies, and rapid-fire team faceoffs.",
    prize: "₹1,20,000 + Medals",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "athletics",
    name: "Athletics & Sprint Track",
    category: "sports",
    categoryLabel: "Sports • Track & Field",
    days: [1, 4],
    datesText: "Feb 18 & 21",
    venue: "Olympic-Standard 400m Synthetic Track",
    format: "Heats & Timed Finals (100m, 400m, 4x100m)",
    desc: "Electronic gun start, photo-finish timing, and roaring collegiate crowds across sprint and relay finals.",
    prize: "₹1,30,000 + Individual Laurels",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "swimming",
    name: "Aquatics & Swimming Gala",
    category: "sports",
    categoryLabel: "Sports • 50m Olympic Pool",
    days: [2, 3],
    datesText: "Feb 19 – 20",
    venue: "Olympic-Length 50m Aquatic Center",
    format: "Freestyle, Butterfly, Breaststroke & Relays",
    desc: "Temperature-controlled competition lanes with electronic touch-pad timing and dedicated spectator seating.",
    prize: "₹1,25,000 + Medals",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "ultimate-frisbee",
    name: "Ultimate Frisbee Mixed Gold",
    category: "sports",
    categoryLabel: "Sports • Mixed 7v7 Turf",
    days: [1, 2, 3],
    datesText: "Feb 18 – 20",
    venue: "Arjuna Main Turf, FLAME",
    format: "7v7 Mixed Gender (First to 15 Points)",
    desc: "Fast-paced disc handling, end-zone layout catches, and WFDF spirit-of-the-game championship play.",
    prize: "₹1,15,000 + Gold Medals",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80"
  },

  // --- MANAGEMENT EVENTS ---
  {
    id: "shark-arena",
    name: "Shark Arena: B-Plan Pitch",
    category: "management",
    categoryLabel: "Management • Venture Pitch",
    days: [2],
    datesText: "Feb 19",
    venue: "Venture War Room (Auditorium)",
    format: "10-Min Pitch + 5-Min Shark Q&A",
    desc: "Collegiate startup and venture pitch competition judged by Angel Investors, VC partners, and unicorn founders.",
    prize: "₹1,60,000 Seed Grant",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "crisis-sim",
    name: "Corporate Crisis Simulation",
    category: "management",
    categoryLabel: "Management • Strategy & PR",
    days: [1],
    datesText: "Feb 18",
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
    categoryLabel: "Management • Finance & Trading",
    days: [1, 2],
    datesText: "Feb 18 – 19",
    venue: "Finance Lab Simulation Terminals",
    format: "Live Market & Portfolio Simulation",
    desc: "High-frequency stock market simulation trading equities, commodities, and derivatives amidst breaking mock news.",
    prize: "₹1,30,000 Cash Prize",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80"
  },

  // --- ESPORTS & MIND SPORTS EVENTS ---
  {
    id: "valorant-cup",
    name: "Valorant Tactical Championship",
    category: "esports",
    categoryLabel: "Esports • 5v5 Tactical FPS",
    days: [3, 4],
    datesText: "Feb 20 – 21",
    venue: "Esports Arena & LAN Stage",
    format: "5v5 Tournament Draft (BO3 LAN Finals)",
    desc: "Low-latency LAN stage showdown with live shoutcasters, big-screen spectator feeds, and collegiate tactical squads.",
    prize: "₹1,40,000 + Pro Gaming Gear",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "bgmi-royale",
    name: "BGMI Battlegrounds Royale",
    category: "esports",
    categoryLabel: "Esports • Squad Battle Royale",
    days: [2, 3],
    datesText: "Feb 19 – 20",
    venue: "Indoor Esports Coliseum",
    format: "Custom Lobbies (6-Match Point Matrix)",
    desc: "24 top university squads drop into custom tournament lobbies battling for placement and finish points on the live leaderboard.",
    prize: "₹1,25,000 + Championship Belt",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "ea-fc-chess",
    name: "EA FC 27 & Speed Chess Arena",
    category: "esports",
    categoryLabel: "Esports • Console & Mind Sports",
    days: [1, 2],
    datesText: "Feb 18 – 19",
    venue: "Digital Lounge & Mind Pavilion",
    format: "1v1 PS5 Knockouts & FIDE Blitz Swiss",
    desc: "Next-gen PS5 console football showdowns alongside digital DGT-board blitz chess tiebreaks under tournament clocks.",
    prize: "₹1,20,000 + Grand Trophy",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80"
  }
];

// =========================================================================
// 3. BLOG & FESTIVAL CHRONICLES (Dummy Images)
// =========================================================================
export const BLOG_POSTS = [
  {
    id: 'story-1',
    title: '10 AI Tools Transforming Collegiate Athletics & Arena Officiating in 2027',
    category: 'Tools',
    tagColor: '#FE5A00',
    date: 'Feb 10, 2027',
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
    date: 'Feb 05, 2027',
    readTime: '7 min read',
    author: 'Saanvi Agrawal',
    role: 'Head of Sports Operations',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
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
At Kurukshetra, matches that go into extra time demand peak aerobic fitness. Teams monitoring hydration and sprint mileage during Day 1 group stages consistently outlast opponents in Sunday's Gold Medal matches.

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
    date: 'Jan 28, 2027',
    readTime: '6 min read',
    author: 'Chairperson',
    role: 'Chairperson, Executive Council',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'An inspiring reflection on what makes FLAME Kurukshetra the gold standard of collegiate festivals in India: unmatched sportsmanship, cultural passion, and lifelong memories.',
    content: `## A Crucible of Passion and Sportsmanship

We stand at a critical juncture where human athletic grit, artistic brilliance, and intellectual rigor converge. When 2,500+ athletes from 50+ universities arrive at FLAME University for Kurukshetra 2027, they are not only participating in a festival—they are entering a rite of passage.

### Beyond Medals: The Spirit of Brotherhood
Collegiate sports teach resilience that textbooks cannot impart. Watching rival teams battle tooth and nail for 90 minutes on the turf, only to share meals at the night cafeteria and dance together at the Amphitheater concert, embodies the true spirit of the Phoenix.

As the floodlights ignite across our Lavale campus, every participant carries home memories forged in sweat, cheers, and unyielding camaraderie.`
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
    answer: "FLAME Kurukshetra is Western India's premier inter-collegiate sports, cultural, management, and esports festival hosted annually at FLAME University's campus in Lavale, Pune. The 2027 edition runs across four adrenaline-fueled days from February 18 to February 21, 2027."
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
    answer: "Colleges can register an entire institutional contingent or enter standalone teams for specific sports, cultural, management, and esports events via our online portal. Each contingent is assigned a dedicated Kurukshetra POC to facilitate seamless slotting, accreditation, and schedule alignment."
  },
  {
    id: "faq-4",
    category: "registrations",
    categoryLabel: "Registrations & Teams",
    question: "What is the registration fee, and what does it include?",
    answer: "Registration fees vary depending on the event discipline (team sports, individual racket sports, cultural flagships, management & esports). The fee covers official event participation, referee adjudication, official accreditation badges, hydration stations, paramedic support, and access to all festival pro-nights and concerts."
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
// 5. ALBUM ARCHIVE MEDIA GALLERY (All Dummy Highlight Images)
// =========================================================================
export const ALBUM_MEDIA = [
  {
    id: "photo-01",
    title: "Football Championship — Floodlit Turf Finale",
    category: "Football",
    day: 1,
    date: "Feb 18, 2027",
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
    date: "Feb 19, 2027",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
    size: "3.1 MB",
    photographer: "Athlete Capture Crew"
  },
  {
    id: "photo-03",
    title: "Center Court Tennis — Baseline Rally Under Lights",
    category: "Tennis",
    day: 2,
    date: "Feb 19, 2027",
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
    date: "Feb 20, 2027",
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
    date: "Feb 18, 2027",
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
    date: "Feb 19, 2027",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "2.1 MB",
    photographer: "Kuru Arts Team"
  },
  {
    id: "photo-07",
    title: "Fashion Promenade — Avant-Garde Runway Showcase",
    category: "Culturals",
    day: 3,
    date: "Feb 20, 2027",
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
    date: "Feb 19, 2027",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "1.7 MB",
    photographer: "Court Photographer"
  },
  {
    id: "photo-09",
    title: "Aquatic Center — 50m Butterfly Championship",
    category: "Athletics",
    day: 1,
    date: "Feb 18, 2027",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
    size: "3.8 MB",
    photographer: "Ceremonies Wing"
  },
  {
    id: "photo-10",
    title: "Esports Mainstage — LAN Grand Finals",
    category: "Culturals",
    day: 4,
    date: "Feb 21, 2027",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
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
