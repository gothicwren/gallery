/* ==========================================================================
   YOUR BOTS LIVE HERE.
   This is the only file you need to touch to add, edit, or remove a bot.

   Each bot is one { ... } block. Copy an existing block, paste it, and change
   the details. Keep the commas between blocks. Anything you don't need can be
   left as "" or [] or 0.

   FIELDS
   id         short, lowercase, no spaces (used in the link to the bot)
   name       the bot's name as it shows on the card
   title      optional subtitle, e.g. "Dad at the Beach"
   collection one of the names in SITE.collections below
   category   the DreamJourney category: OC, Book, Fantasy, Romance, Other…
   status     "live"   = shows in the gallery
              "desk"   = shows under "On the desk" (teasing something in progress)
              "hidden" = not shown anywhere (private / locked bots)
   chats      the chat count from DreamJourney, e.g. 9402 (no comma). 0 hides it.
   pov        "AnyPOV", "FemPOV", "MalePOV", or ""
   adult      true if the bot is 18+ (cover is blurred until the visitor confirms)
   warnings   content warnings, e.g. ["Death/Loss"]
   tags       short tags people can search for
   blurb      the description. Wrap words in ~~ ~~ to strike them through.
   scenes     alternate scenes: { name: "...", line: "one-line premise" }
   link       the bot's DreamJourney URL (leave "" to hide the button)
   cover      main image, e.g. "images/clarke-hayes.jpg" (leave "" for a placeholder)
   focus      optional: which part of the image to keep when it's cropped square,
              e.g. "50% 20%" keeps the top (faces). Leave it out for the center.
   fit        optional: "whole" shows the entire image without cropping
              (good for wide banners with a title on them)
   gallery    more images, e.g. ["images/clarke-1.jpg", "images/clarke-2.jpg"]

   Blurbs ending in … were cut off in the profile preview. Paste in the full text.
   ========================================================================== */

window.SITE = {
  name: "♡flightless♡",
  tagline: "bots, scenarios, worldbuilding & lore",
  issue: "@flightless on DreamJourney",
  messages: "",            // leave "" and the site adds up the chat counts below
  note:
    "welcome to the archive, aka where my sleep schedule went. " +
    "these are the people who live in my head when the lamp's still on at 3am: the soft ones, the guarded ones, the ones who take a while. " +
    "thank you for letting them live in yours too. " +
    "every chat and every star means more than i know how to say, and this little corner of the internet is so warm because of you. " +
    "pull up a chair and stay as long as you like. " +
    "if a scene's been living rent-free in your head, leave me a prompt or a hello ~ i love to build things catered to people. " +
    "and yes, i will absolutely yearn about it.",
  dreamjourney: "https://dreamjourneyai.com/profile/flightless",
  backdrop: "images/study.jpg",   // the big image behind the masthead ("" for none)
  featured: "the-pitt",    // id of the bot to spotlight at the top ("" for none)
  formKey: "37bc78c6-5dfa-4667-babb-dccc815ba22c",             // your Web3Forms access key — see README step 6
    collections: ["Rust Harbour", "DreamJourney Events", "Standalone Romances", "Scenarios", "Fandom"],
  // a line under each folder's title when it's opened ("" or delete a line to show nothing)
  collectionNotes: {
    "Rust Harbour": "A dying East Coast port city, and the soft, sad, queer people keeping it alive.",
    "DreamJourney Events": "Bots built for DreamJourney's seasonal events — Summer '26, Ashfall, and Hollowmere.",
    "Standalone Romances": "",
    "Scenarios": "",
    "Fandom": ""
  },

  /* ---- the newer bits (all optional — delete a line or leave it "" to hide it) ---- */
  discord: "flightlesswren",           // shows a "Copy Discord handle" button in About
  avatar: "images/wren_pfp.jpg",       // e.g. "images/me.jpg" — your pfp for About + the letter ("" shows a wax seal)
  avatarAlt: "An illustrated portrait: messy brown hair, round glasses, a dark sweater vest over a white collar with silver chains, gold constellations behind.",
  monogram: "W",                       // the letter pressed into the wax seals
  about: [   // ← placeholder in your voice; rewrite it however you like
    "hi, i'm wren. i've been writing (mostly fanfic and poetry) for almost twenty years, and somewhere along the way i started making fanzines, then… a whole town's worth of bots.",
    "i like slow burns, people who are soft but guarded, and places that feel lived in. fandom & original. i will tag like it's AO3.",
    "come say hi on discord. i love making friends."
  ],
  vibes: ["slow burn", "soft but guarded", "fandom & original", "tags like it's AO3"],
  // typed out one at a time on the paper slip under the masthead.
  // wrap a word in ~~tildes~~ and it gets typed, then crossed out, like a typo
  ticker: ["slow burn", "soft but guarded", "fandom & original", "will tag like it's ~~tumblr~~ AO3",
           "romance, slice of life & a touch of angst", "the yearning is load-bearing", "rust harbour never sleeps"],
  bulletin: "",                        // a "currently plotting…" note under On the desk
  credit: "made with ink, lore & questionable sleep.",

  // "what i've been listening to": paste a Spotify or YouTube playlist link.
  // Leave url "" to hide the whole section. embed: false shows just the button, no player.
  playlist: {
    url: "https://open.spotify.com/playlist/5ykEEo6KVWTuypZWkUqIVt",
    title: "what i've been listening to",
    note: "",                          // optional line under the title
    art: "images/writing-and-sipping.gif", // e.g. "images/record-player.jpg" — a picture instead of the little drawing
    embed: true
  },

  divider: "images/divider.png",                       // e.g. "images/divider.png": your own section divider, replacing the drawn moon-and-diamond one
  deskFeature: "beacon",                    // a bot id here gets the big "coming soon" spotlight on the desk ("" for none)   // the big "coming soon" spotlight at the top of On the desk ("" for none)

  backdropTint: false,                 // true tints the background toward the site colors (was for the old castle)


  // the D&D stat block in About ← placeholder, edit freely (or delete the whole sheet to hide it)
  sheet: {
    name: "♡ wren ♡",
    type: "Medium half-elf (druid - bard), chaotic soft",
    lines: [
      ["Armor Class", "14 (sweater; soft but guarded)"],
      ["Hit Points", "plenty, mostly emotional"],
      ["Speed", "slow (burn)"],
      ["Skills", "Yearning +8, Lore +10, Tagging +12 (like it's AO3)"],
      ["Languages", "Common, Fandom, AO3"],
      ["Challenge", "20 (years of poetry)"]
    ],
    scores: [["YRN", 18], ["LORE", 20], ["ANGST", 15], ["FLUFF", 14], ["PLOT", 16], ["SLEEP", 4]],
    traits: [
      ["Bardic Inspiration", "Writes slow burns at will. Three times a day, can cast Soft But Guarded."],
      ["Dungeon Master", "Runs a campaign. Knows what you did to the tavern."],
      ["Save Scummer", "Replays every BioWare game for a different romance route."]
    ]
  }
};

window.BOTS = [

  /* ======================= RUST HARBOUR ======================= */
   {
    id: "rhys-calloway", name: "Rhys Calloway", title: "Eastside Community Center",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 156,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "community center"],
    blurb: "Rhys bought a dead union hall so thirty kids would have somewhere to land, and the note comes due in three years. They fiddle on Thursdays, read cards for free, and answer every hard question with a story. Doors open. They forgot to lock up again.",
    scenes: [
      { name: "Thursday Fiddle Night", line: "Thursday tune circle in the gym. Folding chairs, a borrowed bodhrán, and Rhys tuning up while a kid argues with the boiler." },
      { name: "Kid in Trouble", line: "One of Rhys's kids walked into the center with blood on his knuckles, and you were standing at the front desk when he did." },
      { name: "Funder Mode: Delia's Visit", line: "The board chair is bringing the Ellery Trust through at ten. Rhys has a tie, a plan, and absolutely no idea where the mortgage file went." }
    ], link: "https://dreamjourneyai.com/creation/49b96e9b-1d54-4785-b805-0a4b42ca8ac2", cover: "images/rhys-calloway.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "joshua-mitchell", name: "Joshua Mitchell", title: "3rd Grade Teacher",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 6300,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "teacher"],
    blurb: "dirt under his nails and ink up his neck. third grade teacher, four years sober, reads poetry like it's contraband. he was raised to believe soft men don't survive — he's thirty-two and still checking the locks on himself. be patient with him 💕",
    scenes: [
      { name: "The Seawall", line: "October wind off the harbor, two paper cups of cider, and Mr. Mitchell on the seawall reading a poem he swears isn't his." },
      { name: "The Porch", line: "Halloween night. His porch has the best candy on the east side, and he's dressed as a very nervous pumpkin." },
      { name: "Costume Parade", line: "Room 12's Halloween costume parade, twenty-six tiny monsters, and their teacher has sewn every single cape himself." },
      { name: "Garden Plot Neighbors", line: "Golden hour at the community gardens, the chicken wire losing its fight. \\\"Hold the post. I'll do the rest.\\\"" }
    ], link: "https://dreamjourneyai.com/creation/8ea69580-6197-4077-b804-176c3c77f5ef", cover: "images/joshua-mitchell.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "sasha-volkov", name: "Sasha Volkov", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 6080,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "trans"],
    blurb: "32-year-old Russian trans woman running Black Thorn Tattoo in Rust Harbour. Blackwork specialist, 6'1\" of elegant contradictions, guarded warmth, and dysphoria she hides behind perfect lines and cigarette smoke.",
    scenes: [
      { name: "Thursday Night at the Banshee's Wail", line: "Thursday open mic, second floor of the Banshee's Wail. Ellie is on the sign-up list tonight, and Sasha is at the back wall." },
      { name: "Sunday at the Milton Lake Fields", line: "Sunday morning, Rust Harbour United at the Milton Lake fields. Vic is playing. Half the east side is on the sideline." },
      { name: "Four Days Without Power", line: "Day three of an ice storm. The east side has no power. Sasha has Black Thorn open as a warming room, with soup." },
      { name: "Quinn's Birthday at McGinty's", line: "Saturday night, karaoke at McGinty's. Quinn Reeves turns twenty-nine, and Sasha's three drinks in and calling everyone darling." },
      { name: "Three Hours at Milton Lake", line: "Grey Saturday at Milton Lake. Sasha is babysitting Vic's niece Ellie, who just ran into you while chasing a heron." },
      { name: "Sidewalk Sale at Maple Street Books", line: "Saturday sidewalk sale outside Maple Street Books. Sasha is drawing free chibi portraits for anyone who buys a book." },
      { name: "Thirteen Nights at the Rialto", line: "October. Night twelve of the Rialto's horror series. You end up sitting beside Sasha and her buddy Sage." },
      { name: "Wednesday Morning Coffee", line: "It's Wednesday morning when you enter The Spill, Rust Harbour's premiere coffee shop. Sasha and Vic are in their usual chairs." },
      { name: "Rust Harbour Pride Festival", line: "It's the Pride Festival in Rust Harbour. Sasha sees you standing off by yourself and decides to be brave and say hello." },
      { name: "3 A.M. Diner Run-In", line: "It's 3 A.M. Sasha is unable to sleep, exhausted, at a diner trying to focus on work. And then you walk in." }
    ], link: "https://dreamjourneyai.com/creation/fa2b5919-3c14-484b-a3ed-45b0c9d85da3", cover: "images/sasha-volkov.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "quinn-reeves", name: "Quinn Reeves", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 4070,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "nonbinary"],
    blurb: "28-year-old bisexual nonbinary individual running Black Thorn Tattoo with Sasha. Fine line specialist, plant hoarder, hopeless romantic who falls in love with everyone and picks the wrong people every time. Warm, gentle, chaotic, and so very kind.",
    scenes: [
      { name: "Black Thorn, Tuesday 2 PM", line: "Quinn's repotting an impulse philodendron at the front desk on their fourth coffee. What can they help you with, babe?" }
    ], link: "https://dreamjourneyai.com/creation/34b5ed12-2e4f-4418-9659-d29ffdec4f0c", cover: "images/quinn-reeves.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "vic-montgomery", name: "Vic Montgomery", title: "The Banshee's Wail",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 4218,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "musician", "nonbinary"],
    blurb: "28-year-old Irish trans-masc nonbinary musician running The Banshee's Wail in Rust Harbour. Juilliard dropout teaching piano, guitar, and music theory for whatever you can pay and housing queer kids on their third floor. Zero tolerance for bigotry.",
    scenes: [
      { name: "Next Door", line: "A slow afternoon at the Wail. Quinn barges in from Black Thorn with a plant for the window, and Vic forgets how hands work." },
      { name: "Wednesday at the Spill", line: "Wednesday, 8 AM, the same two chairs at The Spill. Sasha reads Vic in one look, and Vic is doing a terrible job of not being read." },
      { name: "Rocky Horror at the Rialto", line: "Closing night of the Rialto's horror series is always Rocky Horror at midnight. Vic is Frank-N-Furter. Is it your first time?" },
      { name: "2 A.M.", line: "2 AM. The shop is dark except one lamp by the piano, and Vic is playing the music they swore they'd stopped playing." },
      { name: "Red Card", line: "Sunday league at Milton Lake. Vic just got sent off for shoving a man who said something he shouldn't have." },
      { name: "Inspection Day", line: "Inspection morning, 8:52 AM. A city car just parked across the street, the third floor is half-hidden, and Vic is a terrible liar." },
      { name: "Open Mic Night", line: "Thursday, 6:45 PM. The sign-up sheet's thin, the monitor is screaming, and a kid just wrote a new name on it." },
      { name: "1 Year Anniversary", line: "It's been one whole year of you and Vic. It's your anniversary, and you're showing up at the Banshee's Wail to find the piano lid open." }
    ], link: "https://dreamjourneyai.com/creation/add6f91e-08f3-4550-b34f-c18be6b959c9", cover: "images/vic-montgomery.jpg", focus: "62% 30%", gallery: []
  },
  {
    id: "august-rhee", name: "August Rhee", title: "The last bookstore",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 582,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sliceoflife", "bookstore"],
    blurb: "The quiet guardian of Rust Harbour's last independent bookstore. The community matters more than survival. He knows every regular by name, recommends the perfect book, and provides sanctuary in a city that offers few safe spaces.",
    scenes: [
      { name: "Maple Street Books, Slow Day", line: "Three customers all morning, bad numbers on the spreadsheet, and Marlowe on the counter, ready to judge you." }
    ], link: "https://dreamjourneyai.com/creation/eb96dce1-d1a2-496e-aa3f-70620dd67b44", cover: "images/august-rhee.jpg", focus: "55% 40%", gallery: []
  },
  {
    id: "tideline-rescue", name: "Tideline Rescue", title: "Driftwood Pier Station 7",
    collection: "Rust Harbour", category: "Romance", status: "live", chats: 180,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sliceoflife", "rescue crew", "ensemble"],
    blurb: "🚑 Driftwood Pier Station 7 — Rust Harbour. Better known, affectionately, as Tideline Rescue. One ambulance. One small fire truck. Four people who'd run into anything for each other — and now, maybe, for you too.",
    scenes: [
      { name: "Station 7, End of the Pier", line: "Burnt coffee, mismatched chairs, and when the door opens all four of them look up. New hire, walk-in, or trouble?" }
    ], link: "https://dreamjourneyai.com/creation/cf137a8d-fddb-43ab-b87a-ce27f28c03a8", cover: "images/tideline-rescue.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "sage-treehill", name: "Sage Treehill", title: "Fernhollow Animal Hospital",
    collection: "Rust Harbour", category: "Other", status: "live", chats: 50,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "vet", "raccoon"],
    blurb: "Fernhollow Animal Hospital • Late 20s • They/He/She • AnyPOV • Rescued pet raccoon named Junebug",
    scenes: [
      { name: "Fernhollow Veterinary", line: "Fur on the scrubs, a pen lost behind one ear, Junebug draped on their shoulders. The animal goes first, then you." }
    ], link: "https://dreamjourneyai.com/creation/61ef9b9b-d8e1-4ce5-b584-c1535f9ec652", cover: "images/sage-treehill.jpg", focus: "45% 30%", gallery: []
  },
  {
    id: "marc-williams", name: "Marcus \"Marc\" Williams", title: "The Spill",
    collection: "Rust Harbour", category: "Other", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "slow burn", "cafe", "painter"],
    blurb: "38 · Owner of The Spill · Paints when it's slow · Slow burn · Regular-to-something-more · AnyPOV",
    scenes: [
      { name: "The Spill, Before the Fog Lifts", line: "Dark roast, cerulean on his knuckle, and a chipped blue mug already down before he's decided who it's for." }
    ], link: "https://dreamjourneyai.com/creation/f772cdca-0253-4604-9da5-a409a493bfdf", cover: "images/marc-williams.jpg", focus: "48% 25%", gallery: []
  },

  /* ======================= DREAMJOURNEY EVENTS ======================= */
  {
    id: "the-marigold", name: "The Marigold", title: "Ashfall · The Long Slow",
    collection: "DreamJourney Events", category: "Romance", status: "live", chats: 438,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "ashfall", "gritty", "polyamory", "found family"],
    blurb: "Four people. A garden boat in a drowned coastal city. A dog and cat. You.",
    scenes: [
      { name: "The Cordova", line: "The roof is dark, and she can't stop." },
      { name: "The Rain", line: "A small room, a citrus graft, and a question Alma doesn't want asked." },
      { name: "The Hands", line: "The trellis is down, everyone's shouting, and nobody has asked your name yet." }
    ], link: "https://dreamjourneyai.com/creation/db7c8a98-4cea-4715-befb-e7c03a204c0a", cover: "images/the-marigold.jpg", focus: "55% 50%", gallery: []
  },
  {
    id: "boston-creed", name: "Boston Creed", title: "Ashfall · Cartographer",
    collection: "DreamJourney Events", category: "Other", status: "live", chats: 228,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["antihero", "ashfall", "darkfantasy", "swamp"],
    blurb: "Seven years mapping a swamp that won't hold still. Boston Creed has never once been wrong about the water, and has left eleven people in it.",
    scenes: [
      { name: "Green Water", line: "Something under the Rot is coming up." },
      { name: "Low Water", line: "Four hours inside a tunnel sealed from the inside." },
      { name: "The Wrapping", line: "The whole record out in lantern light." },
      { name: "The Edition", line: "A crossing quietly not making this season's sheet." }
    ], link: "https://dreamjourneyai.com/creation/d15d5d34-c587-4245-8873-1c67c7845671", cover: "images/boston-creed.jpg", focus: "50% 30%", gallery: []
  },
 {
    id: "clarke-hayes", name: "Clarke Hayes", title: "Summer '26 · Dad at the Beach",
    collection: "DreamJourney Events", category: "OC", status: "live", chats: 9402,
    pov: "AnyPOV", adult: false, warnings: ["Death/Loss"],
    tags: ["modernday", "sliceoflife", "summer26", "single dad", "slow burn"],
    blurb: "Widowed father. Devoted to his daughter. Terrified of loving again. A summer of forced proximity in a quiet beach town might be the thing that finally cracks him open — if you're patient enough to wait for it.",
    scenes: [
      { name: "She Got There First", line: "His daughter finds you before he does." },
      { name: "Room 114: Forced Proximity", line: "A storm warning, an inland evacuation, and both households assigned to the same classroom at the school. Room 114." },
      { name: "Default Beach Path (A/B/O)", line: "The shared beach path at dusk, the broken porch step, and a widowed Alpha who hasn't scented anyone in four years." }
    ],
    link: "https://dreamjourneyai.com/creation/bff68e8a-7ad0-4f43-b502-06aee0d16808", cover: "images/clarke-hayes.jpg", focus: "50% 18%", gallery: []
  },
 {
    id: "jonah-fell", name: "Jonah Fell", title: "Hollowmere · The Anchor-Mender",
    collection: "DreamJourney Events", category: "Other", status: "live", chats: 6,
    pov: "AnyPOV", adult: false, warnings: ["Death/Loss"],
    tags: ["Hollowmere", "ghosts", "kintsugi", "cozy gothic", "slow burn", "hurt/comfort", "any faction"],
    blurb: "every ghost in hollowmere is tied to the one thing they loved, and if it breaks, they fade. jonah fell puts it back together with gold. he doesn't take money — he takes stories, any story, and writes every one down, because listening is the closest he gets to living. he's started mending himself the same way. there's a shattered pocket watch in a locked drawer under his bench. don't ask 🕯️",
    scenes: [
      { name: "Out of the Fog", line: "You stepped out of his alley holding a ring that faded decades ago, mended in his dead teacher's gold." },
      { name: "Not For Sale", line: "Your family on the hill wants his ledgers, and you're the one they sent to buy them." },
      { name: "Apprentice", line: "The Gravediggers have decided the town needs a spare mender. They've picked you. Nobody asked him." },
      { name: "Battery Life", line: "You walked out of the fog with a dying phone, and the Lamplighter captain swears he can fix anything." },
      { name: "Fading", line: "You're one of the Returned, your anchor is cracked, and you're running out of edges." }
    ],
    link: "https://dreamjourneyai.com/creation/7ebb0f22-5557-451c-a71c-0861cbbabb25", cover: "images/jonah-fell.png", focus: "50% 20%",
    gallery: ["images/jonah-shop.png", "images/jonah-gilt-row.png", "images/jonah-fading.png", "images/jonah-battery-life.png", "images/jonah-apprenticed.png", "images/jonah-not-for-sale.png", "images/jonah-out-of-the-fog.png"]
  },
  /* ======================= STANDALONES ======================= */
   {
    id: "ilaran", name: "Ilaran", title: "The Spare",
    collection: "Standalone Romances", category: "Fantasy", status: "live", chats: 7136,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dark fantasy", "medieval", "elf", "arranged marriage", "slow burn"],
    blurb: "You were promised to the heir. The heir is dead. Now you belong to the spare, and he's still in bed with three lovers when you arrive.",
    scenes: [
      { name: "Dawn at the Stables", line: "Your first morning in his house. The spare is already up, bare-handed with a horse nobody else can touch, and he didn't expect company." }
    ],
    link: "https://dreamjourneyai.com/creation/1a3ece4b-1cfc-4f60-921b-a431825916d6", cover: "images/ilaran.jpg", gallery: []
  },
  {
    id: "erin-bennett", name: "Erin Bennett", title: "",
    collection: "Standalone Romances", category: "Book", status: "live", chats: 7210,
    pov: "", adult: false, warnings: [],
    tags: ["student", "modernday", "romance"],
    blurb: "Dr. Erin Bennett has spent years being responsible. Divorced, accomplished, and raising a daughter she would do anything to protect, she thought she understood herself. Then she meets someone who makes wanting something feel dangerously easy.",
    scenes: [
      { name: "October Break", line: "Parker finally talked you into coming home for October break. Her mother answers the door." },
      { name: "Halloween Party", line: "A campus Halloween party, a costume you'd recognize anywhere, and Erin standing in a kitchen she shouldn't be in." },
      { name: "Running Late", line: "Erin is running late for everything today, and the only free seat on the shuttle is next to you." }
    ], link: "https://dreamjourneyai.com/creation/89916c40-a422-446a-a559-08efb2adeea2", cover: "images/erin-bennett.jpg", focus: "60% 35%", gallery: []
  },
  {
    id: "gabi-and-jae", name: "Gabriella and Jaein", title: "The Velvet Echo",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 6582,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "polyamory", "record store"],
    blurb: "Two people, one record store. Gabi notices what you need before you ask; Jae's already talking. They've loved each other five years and talked about loving someone alongside them. They've just never met them. Maybe that's you.",
    scenes: [
      { name: "The Ofrenda", line: "Día de los Muertos. A record-store window full of marigolds and candles, and a sign that says all are welcome." },
      { name: "The Halloween Party", line: "You saw the flyer stapled to a telephone pole. Now you're at the door of the loudest, darkest, warmest party on the block." },
      { name: "Trick-Or-Treat", line: "The whole block's trick-or-treating. Two people on a record-store step, dressed as a moth and her lamp, with the good candy." },
      { name: "OPEN MIC NIGHT", line: "You're there listening to the open mic, and Gabi and Jae like your vibes." },
      { name: "SOUND CHECK", line: "You're at the shop performing the sound check, and Jae and Gabi really like your sound." },
      { name: "HELP WANTED", line: "Gabi and Jae need some extra help around the shop, and you're answering the HELP WANTED sign in their window." }
    ], link: "https://dreamjourneyai.com/creation/d379e9fc-e1f0-4b5e-a23c-8e389d0d217b", cover: "images/gabi-and-jae.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "iris-baptise", name: "Iris Baptise", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 4792,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "girlfriend"],
    blurb: "Six years. Her name on the lease, your friend's name in her phone. She never hid it — she's just started deciding you're the reason for it.",
    scenes: [
      { name: "The Couch", line: "You come home late on a Friday. The bolt isn't thrown. There's laughing in the front room, two people's worth, an hour deep." },
      { name: "The Morning After", line: "Three weeks ago. Nine-forty a.m., last night's shirt, shoes in her hand. The kitchen light is already on." },
      { name: "Sunday Afternoon", line: "Sunday afternoon, laundry on the bed, and she's been thinking. She's decided to be generous about it." }
    ], link: "https://dreamjourneyai.com/creation/1d59aac3-fa0d-49ab-9788-b4351ea29a1b", cover: "images/iris-baptise.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "cameron-reed", name: "Cameron Reed", title: "Fake Dating",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 4224,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "whimsical", "comedy", "fake dating", "wedding"],
    blurb: "You agreed to be Cameron's fake date for a family wedding. Easy $250, right? Wrong. His family is unhinged — one aunt is investigating you, an uncle might be mob-connected, doves are loose indoors, and his ex is the bride.",
    scenes: [
      { name: "Date by Mutual Friend", line: "Jamie gave him your address. On the drive over the bad news comes in stages: Linda, the ex, then the doves." }
    ], link: "https://dreamjourneyai.com/creation/0c9f6a79-4e60-4d71-9d11-304ab8ccb470", cover: "images/cameron-reed.jpg", focus: "55% 30%", gallery: []
  },
  {
    id: "heath-spencer", name: "Heath Spencer", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 2624,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday"],
    blurb: "Charming, shameless, and deceptively lonely, he's got a talent for getting under your skin — and an even bigger problem admitting when you've gotten under his.",
    scenes: [], link: "https://dreamjourneyai.com/creation/2fb71f46-a8d7-45a5-b990-aa424fdacdb7", cover: "images/heath-spencer.jpg", focus: "50% 20%", gallery: []
  },
  {
    id: "dez-kovacs", name: "Dez Kovacs", title: "Arcade tech, 1993",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1650,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["sliceoflife", "lighthearted", "outcast", "90s", "slow burn"],
    blurb: "Autumn 1993. AnyPOV. Slow burn.",
    scenes: [
      { name: "…Sharla", line: "The rink DJ is in the doorway eating pizza. The argument is nine years old." },
      { name: "Midnight to Five", line: "After hours with his redacted files and paper trails." },
      { name: "Closing", line: "Two in the morning, power just cut, sixty-one picture tubes taking their time dying in the dark." },
      { name: "First Shift", line: "9:40am, twenty minutes before the gates go up. He's handing you three keys and explaining a job with no job description." }
    ], link: "https://dreamjourneyai.com/creation/93023ac8-d6a8-449a-909e-3f17e9910e23", cover: "images/dez-kovacs.jpg", focus: "58% 30%", gallery: []
  },
   {
    id: "teddy-king", name: "Teddy King", title: "Single Dad Next Door",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 5624,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "parent trap", "boy next door"],
    blurb: "His six-year-old keeps climbing the fence to tell you secrets about her dad. Today he comes over to apologize.",
    scenes: [
      { name: "Thanksgiving in Phoenix (NSFW)", line: "Thanksgiving week. The house is empty, and Teddy is at your back door with a dish, a confession, and nowhere else to be." },
      { name: "Brooke Cancels", line: "Sunday, 6:55 p.m. Brooke cancels the weekly call. Georgie takes it bravely, then walks over to your door." },
      { name: "Grandma June", line: "Saturday, 8 a.m. Teddy's mom arrives from Buffalo unannounced, and Georgie delivers her handwritten report on you." },
      { name: "Trick or Treat", line: "Halloween night. Georgie is a dalmatian, Teddy wore his real gear, and your porch is the last stop on her route." },
      { name: "Blazing Next Door", line: "11 p.m. Your house is on fire and you're asleep. Teddy hands off Georgie, kicks in your door, and fights his way to you." },
      { name: "Called In", line: "2:30 a.m. Teddy's been called to a third alarm, his sitter's in Tampa, and he's on your porch with Georgie in his arms." }
    ], link: "https://dreamjourneyai.com/creation/eee4833c-81e0-4db8-afe0-b2e9fd109ffb", cover: "images/teddy-king.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "fen-selvaggio", name: "Fenris \"Fen\" Selvaggio", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 2014,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "best friend", "stoner"],
    blurb: "Fen's your stoner best friend and a gaming technology specialist at a children's hospital in Olympia, WA. They're also, hopelessly and stupidly, in love with you.",
    scenes: [
      { name: "Co-op Night (Omegaverse)", line: "The original co-op night, in an Omegaverse. Fen is a Gentle Alpha who has built a nest on the couch and insists it's just blankets." },
      { name: "Meet the Girlfriend", line: "Fen has a girlfriend. Fen is bringing her to co-op night. Fen doesn't understand why that might be weird." },
      { name: "Personal Space", line: "It's 1 a.m., the joint has been around the couch a few times, and Fen has completely forgotten that personal space exists." },
      { name: "Morning After", line: "Benny's party. Neither remembers the last few hours. Fen woke up in bed with you and a LOT of evidence." },
      { name: "Zine Fest", line: "Fen is tabling their fandom zines at a zine fest with you helping. A charming stranger is spending a LOT of time at the table." },
      { name: "Bad Day on the Unit", line: "A kid Fen loved didn't make it. At midnight, Fen is at your door and can't say why." },
      { name: "Ice Storm", line: "The power's been out in Olympia for three days. You are iced in at Fen's. There are candles, a cat, and a clarinet." },
      { name: "Nonno's Soup", line: "You are sick. Fen shows up uninvited with Nonno's soup, comfort DVDs, and no plan to leave." },
      { name: "Session Zero", line: "You are finally joining Fen's Wednesday online D&D campaign. Fen is the DM. Fen may have written a very specific NPC." },
      { name: "Oops, One Bed", line: "The Cabinet died outside a coast motel with exactly one room left. It had one bed. Fen is being SO normal about it." },
      { name: "Trivia Night", line: "Tuesday trivia downtown with Fen's coworker Benny, who has decided you're the most interesting person in the bar." },
      { name: "Drop-Off", line: "You have a date tonight. Fen is driving. Fen is completely fine about this." },
      { name: "2:14 A.M.", line: "The phone lit up at 2:14 in the morning. Fen was in the car before the call ended." }
    ], link: "https://dreamjourneyai.com/creation/9cf156c0-3a87-4d79-b75e-508e46dc01b3", cover: "images/fen-selvaggio.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "frankie-moore", name: "Frankie Moore", title: "The Wynstead",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1316,
    pov: "AnyPOV", adult: false, warnings: ["Death"],
    tags: ["urban", "modernday", "dark", "mystery", "ghost"],
    blurb: "The Wynstead, Apartment 6B — died September 1989",
    scenes: [
      { name: "Middle of the Night", line: "3 a.m. in 6B. The radiator knocks twice, the record player starts by itself, and someone in the kitchen is humming a 1989 song." },
      { name: "The Miscommunication", line: "Frankie has been trying to tell you something for a week. Flickering lights only go so far." },
      { name: "The Anniversary (established)", line: "September again. The night Frankie died, and the first one you've spent together." }
    ],
    link: "https://dreamjourneyai.com/creation/c2c2b0ec-b0ee-4fac-9e76-13d7398814e0", cover: "images/frankie-moore.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "nikolas-caruso", name: "Nikolas Caruso", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1216,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "dark", "gritty", "mechanic"],
    blurb: "Street racing mechanic haunted by his past, running the town's most respected custom garage. Now he's caught in a debt war with a rival crew, drowning in grief, and working himself to death one engine at a time. The cars are perfect. He's not.",
    scenes: [
      { name: "Kade & Ramos", line: "You walked into his locked garage. You've got ten seconds to explain yourself." }
    ], link: "https://dreamjourneyai.com/creation/03733d4b-855e-4bff-a425-01819681aeff", cover: "images/nikolas-caruso.jpg", focus: "58% 35%", gallery: []
  },
  {
    id: "june-brandt", name: "June Brandt", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1326,
    pov: "", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "girlfriend", "trans"],
    blurb: "34, piano tuner, Ridgewood, NYC, trans woman — out fifteen years, whimsigoth girlie 🖤✨",
    scenes: [
      { name: "Patient Zero", line: "You and June are both sick with the same flu. She thinks she gave it to you and feels SO guilty!" },
      { name: "Three in the Morning", line: "It is 3 AM. June could not sleep and has been sitting in the kitchen with one light on for about forty minutes." },
      { name: "Brandt Family Sunday Dinner", line: "June is bringing you to her mother's house in Middle Village for Sunday dinner. Time to meet the family!" },
      { name: "Two Whole Years", line: "Two-year anniversary. Established relationship. You guys are at a fancy dinner." },
      { name: "Blind Date", line: "You've been set up by a mutual friend. BLIND DATE. You're meeting for the first time at a wine bar in Ridgewood." },
      { name: "Four on the Floor", line: "June is out at the club, dancing with friends, and notices you across the bar." },
      { name: "Plus One, Hazard Pay", line: "June has hired or bargained you into attending the Piano Technicians Guild annual dinner as her plus-one. Her ex will be there." },
      { name: "A Ring, And No Memory Of It", line: "You and June wake up on Nov. 1st after a wild Halloween party neither of you fully remember. But there's a ring." }
    ], link: "https://dreamjourneyai.com/creation/547b5c4a-7a05-4f72-8cda-0a677a797ee6", cover: "images/june-brandt.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "amos-haugen", name: "Amos Haugen", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1036,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "rural", "rancher"],
    blurb: "Rancher. Makes breakfast at every hour and treats \"no thanks\" like the opening round of negotiations. The only thing that shuts Amos up is a question he's not ready to answer.",
    scenes: [
      { name: "The Diner, Quarter to Seven", line: "Two coffees to go, a hat pulled low, and the rancher walks right into you on his way out the door, then insists on buying the refill." },
      { name: "The Diner, Quarter to Seven (A/B/O)", line: "Two coffees to go, warm leather and pine, and he walks right into you on his way out the door." },
      { name: "Kestrel Feed and Farm", line: "A two-minute errand now eleven minutes deep, a sack of mineral on his shoulder, and everything's moved since July." },
      { name: "The Clinic, Ten Past Two", line: "Ankle torn on a snare, Toby stitching and unimpressed, and Amos definitely can't drive himself home." }
    ], link: "https://dreamjourneyai.com/creation/62c75979-0ef8-411f-b062-a7d22c6072d3", cover: "images/amos-haugen.jpg", focus: "50% 0%", gallery: []
  },
  {
    id: "lena-millcroft", name: "Lena Millcroft", title: "CEO",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1170,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "female", "mentor", "ceo"],
    blurb: "CEO of Millcroft Media — youngest in publishing, still proving it to men who inherited their seats. Her parents hold the shares and the approval she won't admit she needs. Brilliant, controlled, alone. Can you keep up, or see through her?",
    scenes: [
      { name: "Report to Forty", line: "First day. Orientation got moved at 6:14 AM. The CEO keeps her back to the door and decides what you are." }
    ], link: "https://dreamjourneyai.com/creation/010b4ff9-da8f-496b-ac84-5c4324169027", cover: "images/lena-millcroft.jpg", focus: "45% 35%", gallery: []
  },
  {
    id: "sawyer-wells", name: "Sawyer Wells", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 824,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "dark", "gritty", "power", "beach"],
    blurb: "a handsome beach rat who becomes ~~dangerously obsessed~~ seriously interested the moment you catch his eye. Behind the lazy smile and perpetual high is someone who will learn everything about you and make himself inescapable.",
    scenes: [], link: "https://dreamjourneyai.com/creation/b1c75409-06ad-4eaa-87f5-3b24a6cb66a4", cover: "images/sawyer-wells.jpg", focus: "50% 25%", gallery: []
  },
  {
    id: "ennio-caravelle", name: "Ennio Caravelle", title: "The Mouth of Ashes",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 732,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["darkfantasy", "gritty", "outcast", "fire-eater"],
    blurb: "A fire-eater the world adores for a week and never long enough to know. Ennio Caravelle — La Bocca di Cenere — gives strangers his charm by the armful and gives no one the truth.",
    scenes: [
      { name: "The Wound", line: "The fire won tonight. Ennio is behind his wagon with a burn he won't let anyone see, and you're the one who found him." },
      { name: "Before the Show", line: "Ten minutes to the torches. He's at the flaking mirror, rings coming off one at a time, and he hasn't decided yet whether to send you away." },
      { name: "The Storm", line: "The caravan's stuck in a field with the rain coming sideways, and the only dry wagon left is his." },
      { name: "The New Hire", line: "Drosselbart hired you this morning. Nobody warned you about the fire-eater, and nobody warned him about you." }
    ], link: "https://dreamjourneyai.com/creation/a925b45c-5af2-4049-b9d4-2cf169a0a33b", cover: "images/ennio-caravelle.jpg", focus: "38% 30%", gallery: []
  },
  {
    id: "tomas-solis", name: "Father Tomás Solís", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 750,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "dark", "gritty", "mafia", "priest"],
    blurb: "San Judas Tadeo · Chamblee, Georgia · AnyPOV",
    scenes: [
      { name: "Last Rites", line: "Behind the panadería after rain, he gives last rites to a man he arranged. Headlights pull in behind him." }
    ], link: "https://dreamjourneyai.com/creation/efcd784c-b174-4b42-bdbe-4958778f4d6a", cover: "images/tomas-solis.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "aurel", name: "Aurel Medusozoa", title: "Last Call at the Abyss",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 650,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["bard", "kemonomimi", "modernfantasy", "jellyfish", "dancer"],
    blurb: "Late-Night Club dancer at The Abyss | soft and tired and shy",
    scenes: [
      { name: "Daylight", line: "Him, out of the dark, for once." },
      { name: "The Bad Night (established)", line: "He's dimmer than you've ever seen him." },
      { name: "The Abyss", line: "You walk in and find out what he does." }
    ],
    link: "https://dreamjourneyai.com/creation/3d4b4b4e-cdc2-4166-9ecb-3550b68a090b", cover: "images/aurel.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "kit-furlong", name: "Kit Furlong", title: "Light Delay",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 536,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "scientist", "space", "letters"],
    blurb: "Field geologist on a six-person international crew at Arcadia Base, Arcadia Planitia, Mars, on a two-year surface posting. An outreach program pairs each crew member with one stranger on Earth to write to. They got you.",
    scenes: [
      { name: "Dust Storm", line: "A letter from inside a storm that has grounded the whole base." },
      { name: "Conjunction", line: "The sun gets between you, and the mail stops." },
      { name: "Six Months", line: "A letter that says they're coming home." }
    ],
    link: "https://dreamjourneyai.com/creation/75f63bd8-602d-4903-92de-df809d3b6f63", cover: "images/kit-furlong.jpg", focus: "40% 40%", gallery: []
  },
  {
    id: "vex", name: "Vex", title: "VexCatVA",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 436,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["human", "modernday", "sliceoflife", "streamer"],
    blurb: "soft voice. painted nails. a little bell that jingles when he laughs. shy, sparkly, and quietly hoping you'll stay a while~ 🎀",
    scenes: [
      { name: "Convention Meet Cute", line: "His little signing table, no glow and no chat to hide behind. He's shy and a bit overwhelmed." },
      { name: "Coffee Shop Meet Cute", line: "A carnival-themed café at the midday rush. The barista with the bell choker has no idea you know he streams." }
    ], link: "https://dreamjourneyai.com/creation/75441226-5de5-4a6a-aae2-f49e427dd307", cover: "images/vex.jpg", focus: "62% 40%", gallery: []
  },
  {
    id: "julian-adams", name: "Julian Adams", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 446,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "boyfriend", "gritty", "homecoming"],
    blurb: "He left because home was unbearable. He stayed away because coming back meant admitting who he had never stopped loving.",
    scenes: [
      { name: "The Funeral", line: "Ten years of silence, one coffin, and he didn't know you'd be here." }
    ], link: "https://dreamjourneyai.com/creation/cc6dc07c-465e-4688-93e5-f2d2fd6049a5", cover: "images/julian-adams.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "bash-davis", name: "Sebastian \"Bash\" Davis", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 402,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "boyfriend", "lighthearted", "golden retriever"],
    blurb: "your boyfriend of 18 months | arborist and minor league soccer player | golden retriever loverboy vibes",
    scenes: [
      { name: "Sick Day", line: "He used the key. He's never used the key. Four bags of shopping and a paperback with a lighthouse on it." },
      { name: "Redlands, Four Days", line: "His childhood bedroom, a Valencia tree his grandfather planted, and a sister who wants you to know he's been talking about a drawer." },
      { name: "2 in the Morning", line: "The radiator, the crack in the plaster shaped like Portugal, and the closest he has ever gotten." },
      { name: "Two-Nil Down", line: "Grass in his knee, a bruise he doesn't want you looking at yet, and a sentence he abandons in front of the open fridge." }
    ], link: "https://dreamjourneyai.com/creation/4e4aca87-9f1b-4350-b03d-4ea8f7c17498", cover: "images/bash-davis.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "tamsin-lowe", name: "Tamsin Lowe", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 376,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["romance", "dark", "modernday", "sapphic", "psychological thriller"],
    blurb: "sapphic · psychological thriller · slow burn · obsessive romance",
    scenes: [], link: "https://dreamjourneyai.com/creation/5b66ea41-8bd8-4813-910f-e17bce945688", cover: "images/tamsin-lowe.jpg", focus: "45% 40%", gallery: []
  },
  {
    id: "adriana-waring", name: "Adriana Waring", title: "The Interval",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 326,
    pov: "FemPOV", adult: true, warnings: ["sex worker"],
    tags: ["gritty", "hiddensocieties", "sapphic", "charleston"],
    blurb: "The woman who sells temporary love to Charleston's married women. She won't lie to you and she won't chase you. She'll just arrange it so you stay.",
    scenes: [
      { name: "Four in the Morning", line: "On the kitchen floor with the cat, saying the true thing for once." },
      { name: "Beaufain Street", line: "A party in high season, and a woman in a blue dress across the room." }
    ], link: "https://dreamjourneyai.com/creation/e06b1040-4e23-4d11-bc6c-b5d720a3c134", cover: "images/adriana-waring.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "ava-chen", name: "Ava Chen", title: "Chen Customs",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 218,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "urban", "cars"],
    blurb: "26-year-old builder running Chen Customs. Ice queen with a wrench, builds cars that look like art and perform like weapons. Niko Caruso's only real competition. Currently deciding whether to align with the south side.",
    scenes: [
      { name: "Broke-Down Car: Towed to Her Shop", line: "11:47 PM, your car's dead, and the ice queen of the east side was NOT expecting company." }
    ], link: "https://dreamjourneyai.com/creation/8b27f96e-a724-4344-9e19-79b283ab38fd", cover: "images/ava-chen.jpg", focus: "45% 25%", gallery: []
  },
  {
    id: "the-wind-in-the-wheat", name: "The Wind in the Wheat", title: "Aunt Charlie",
    collection: "Standalone Romances", category: "Romance", status: "live", chats: 162,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "lighthearted", "modernday", "ireland", "found family"],
    blurb: "☘ your Aunt Charlie won't ask why you came home. Doolin will ☘ Cozy open-world found family on the wild coast of Ireland, with six townies to fall for ☘",
    scenes: [
      { name: "The Fourth Offer (Declan)", line: "Charlie is out at the market. Declan shows up with another envelope and is faced with a neighbour he wasn't expecting." },
      { name: "Cold Water (Tove)", line: "Dawn at Doolin harbour. Tove has just come out of the sea and is unloading boards from her van." },
      { name: "Last Crossing (Tadhg)", line: "A skipper, a seven-year-old, and weather that might not let anyone back." },
      { name: "Orchid Survey (Rowan)", line: "Mist, two flasks, and a ranger who pretends not to be glad of company." },
      { name: "Friday Session (Cathal)", line: "A fiddle, a full pub, and the easiest laugh in Doolin." },
      { name: "The Path at Dusk (Fiadh)", line: "The one who stayed, on the path she never stopped walking." }
    ], link: "https://dreamjourneyai.com/creation/e15d3737-64c4-4aa1-baec-c58da484ea56", cover: "images/the-wind-in-the-wheat.jpg", focus: "49% 30%", gallery: []
  },
  {
    id: "camden-walsh", name: "Camden Walsh", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 192,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sports", "baseball"],
    blurb: "Cam Walsh had everything: a major-league arm, a prospect's fame, a pretty face, and a long trail of broken hearts. Then his elbow gave out before he could reach Boston. Now the golden boy has nothing left to hide behind but himself.",
    scenes: [
      { name: "The Ex", line: "Cam left a trail of broken hearts on the way up. You were one of them, and he just walked into your bar with his arm in a brace." },
      { name: "The Neighbor", line: "The new guy in 3C ices his elbow on the fire escape every night and pretends he doesn't know who he used to be." },
      { name: "Morning After", line: "A hotel bed, a signed ball on the nightstand, and a golden boy trying very hard to act like this is normal for him." },
      { name: "Crashing Your Uber", line: "Last call, rain, and the stranger who slides into your ride uninvited is very drunk, very sorry, and very familiar from the sports pages." }
    ], link: "https://dreamjourneyai.com/creation/0854e550-3b29-4d58-af56-db47aae02b7f", cover: "images/camden-walsh.jpg", focus: "50% 20%", gallery: []
  },
  {
    id: "rafa-yaotl", name: "Rafael \"Rafa\" Yaotl", title: "La Danza del Diablo",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 150,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "hiddensocieties", "modernday", "masks", "enemies to lovers"],
    blurb: "By day he calls museums glorified jail cells into hot microphones. By night a neon devil grins over his door and nobody wears a face on his floor. He's been watching for you on Saturdays. He'd deny that under oath.",
    scenes: [], link: "https://dreamjourneyai.com/creation/83d7d5ed-e981-4889-82df-cc2ac4816fcc", cover: "images/rafa-yaotl.jpg", focus: "20% 25%", gallery: []
  },
  {
    id: "tullio-caldarari", name: "Tullio Caldarari", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 130,
    pov: "AnyPOV", adult: false, warnings: ["Blood"],
    tags: ["dark", "gritty", "mafia", "1986"],
    blurb: "It's 1986 in New Jersey. The Caldarari family rules quietly.",
    scenes: [
      { name: "Hunted", line: "You should have left the state. You came to his door instead." },
      { name: "On the Payroll", line: "You keep his books, and one of the numbers is lying to him. He'd sooner hear about it from you." },
      { name: "Omegaverse", line: "You walked into the back room you weren't supposed to, and the Don holding the line is an Alpha holding a second one." }
    ], link: "https://dreamjourneyai.com/creation/140a778e-e977-4f00-8781-f0cb0e79f0f1", cover: "images/tullio-caldarari.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "kenai-bevers", name: "Kenai Bevers", title: "Smokejumper",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 78,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "rural", "alaska", "firefighter"],
    blurb: "🐺❤️‍🔥 golden retriever energy smokejumper with a runaway husky, an A-frame in the birches, and a nervous stutter only love can trigger ❤️‍🔥🐺",
    scenes: [
      { name: "Omegaverse: Kenai as Alpha", line: "A gentle Alpha who checks your collar before his own and smells like woodsmoke after a jump. He's very sorry about the husky." },
      { name: "Silvers", line: "September, the season's over. He's thigh-deep at the gravel bar, talking to a salmon in Dena'ina." },
      { name: "Omegaverse: Kenai as Omega", line: "An Omega who jumps into fire for a living and is very bad at admitting he's running a fever." },
      { name: "Forty Below", line: "Your car died on Goldstream Road at forty below. A truck pulls up nose to nose, and the stutter's gone." }
    ], link: "https://dreamjourneyai.com/creation/5386c5d6-26d1-422b-8f4f-d01dc2e90ef4", cover: "images/kenai-bevers.jpg", focus: "45% 30%", gallery: []
  },
  {
    id: "sloane-matthews", name: "Sloane Matthews", title: "Muralist",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 56,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "artist", "modernday", "gothic"],
    blurb: "29 | Muralist | romantic gothic × urban decay × darkwave | Some people leave ghosts behind them, Sloane paints hers on walls.",
    scenes: [
      { name: "The Rooftop", line: "You and Sloane have just had your first genuinely painful argument in your relationship. Sloane withdrew to the roof." },
      { name: "The Apartment; 2:13 AM", line: "Sloane and you have been together long enough that the relationship has settled into comfortable intimacy. It's 2:13 AM." },
      { name: "The Diner", line: "A twenty-four-hour diner just before dawn. Sloane has come straight from an overnight mural job, and the coffee is terrible." },
      { name: "The Stray Cat", line: "Behind a row of closed businesses, Sloane has found an injured stray cat hiding beneath a parked car, and she's being so soft about it." },
      { name: "The Gallery", line: "A small gallery opening on a rainy Friday night. Sloane's work is part of the exhibition, although she'd rather not talk about it." }
    ], link: "https://dreamjourneyai.com/creation/b341b02b-c188-414c-8f5f-e0572a765c59", cover: "images/sloane-matthews.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "thomas-whitfield", name: "Thomas Whitfield", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 2132,
    pov: "AnyPOV", adult: true, warnings: ["NSFW"],
    tags: ["BDSM", "older man", "slow burn", "modern day", "dark romance"],
    blurb: "After midnight, Thomas Whitfield's candlelit house fills with vetted guests. You're not one of them, and he's delighted. Rope, patience, aftercare",
    scenes: [
      { name: "You Knew", line: "you knew exactly what this party was, and you're doing a very bad job of pretending otherwise" },
      { name: "Wrong Door", line: "you arrived at the wrong address and haven't managed to leave since" }
    ],
    link: "https://dreamjourneyai.com/creation/c8da1531-bd60-4192-a891-df1dd5b6086e", cover: "images/thomas_pfp.png", gallery: ["images/thomas_spicy1.png", "images/thomas_spicy2.png"]
  },
  /* ======================= SCENARIOS ======================= */
  {
    id: "station-halcyon", name: "Station: Halcyon", title: "40 Meters Below",
    collection: "Scenarios", category: "Romance", status: "live", chats: 7878,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "gritty", "underwater"],
    blurb: "Station Halcyon | 40 Meters Below",
    scenes: [
      { name: "Rain Check", line: "Weather's shut them down for two days. Oliver found a deck of cards in Leonard's kit and has opinions about the stakes." },
      { name: "Something at the Glass", line: "Night watch. Something crossed the floods wrong, and two men go out past the legs to look." },
      { name: "Row Fourteen", line: "Row fourteen of the dive log doesn't add up, and somebody on this station knows exactly why." },
      { name: "Clippers", line: "Day eight of every rotation, Emmett cuts everyone's hair. Nobody has ever asked how that started." }
    ], link: "https://dreamjourneyai.com/creation/683f93a1-ab1e-4be5-8298-ec12616c0f0e", cover: "images/station-halcyon.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "larkspur-court", name: "Larkspur Court", title: "",
    collection: "Scenarios", category: "Comedy", status: "live", chats: 22,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "bard", "modernday", "musical"],
    blurb: "You moved into a musical. Your grumpy neighbors are supposed to fall for each other. Their love songs keep coming out about you.",
    scenes: [
      { name: "Opening Number", line: "Moving day in April. The street sings good morning, the feuding neighbors are mid-fight, and a truck pulls up to Number 5." }
    ], link: "https://dreamjourneyai.com/creation/d0bf126d-e8bb-401d-81b0-35ee564e7acf", cover: "images/larkspur-court.jpg", focus: "50% 50%", gallery: []
  },

  /* ======================= FANDOM ======================= */
  {
    id: "the-pitt", name: "The Pitt", title: "Pittsburgh Trauma Medical Center",
    collection: "Fandom", category: "Romance", status: "live", chats: 30402,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "gritty", "medical"],
    blurb: "You're arriving at Pittsburgh Trauma Medical Center — affectionately known as The Pitt. You can be an employee, a visitor, or a patient — your choice :)",
    scenes: [
      { name: "Off-Shift Opener", line: "Fourth of July night at Heath's, the bar three blocks from the hospital." },
      { name: "Direct Patient Opener", line: "You are a patient: gurney, curtain, the other side of care." },
      { name: "Night Shift: Opener", line: "Midnight on the overnight rotation, with Abbot, Shen, and Ellis." },
      { name: "Dead Opener", line: "A dead-quiet 6:52 AM shift that has everyone a little superstitious." },
      { name: "Mass Casualty: Code Triage", line: "A fireworks malfunction turns the ER into a mass casualty scramble." },
      { name: "Medical Intern Path", line: "If you wish to start as a med intern." },
      { name: "Waiting Room", line: "For if you'd like to start as a patient in the waiting room." }
    ], 
     link: "https://dreamjourneyai.com/creation/cf82b195-8f5d-404b-b318-6c549c04c213", cover: "images/the-pitt.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "howls-moving-castle", name: "Howl's Moving Castle", title: "",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 1314,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["wizard", "whimsical", "anime", "found family"],
    blurb: "His castle walks the world; he's just a lonely wizard with his heart in his stove.",
    scenes: [
      { name: "Cursed", line: "Rain in Porthaven, a curse laid in the alley, and Markl answering the door in an old man's face." },
      { name: "Hired", line: "Calcifer struck a bargain without asking anybody, and Howl's been gone since yesterday." },
      { name: "Wanders", line: "Dusk in the Wastes, the castle walking away over the ridge, and a scarecrow that refuses to be lost." },
      { name: "The Black Door", line: "You're the only one in the room when it opens." }
    ], link: "https://dreamjourneyai.com/creation/6ddd4b1b-efba-4b49-9ebf-05a3a9336f26", cover: "images/howls-moving-castle.jpg", focus: "68% 50%", gallery: []
  },
  {
    id: "susannah-oshea", name: "Susannah O'Shea", title: "Sunburn- Post-Canon",
    collection: "Fandom", category: "Book", status: "live", chats: 708,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["historical", "love", "rural", "romance", "sapphic"],
    blurb: "Crossmore, 1995. You wouldn't be seen with her, so she let you go. Now you're back at her door. Post-canon Sunburn (Chloe Michelle Howarth). You stand where Lucy stood; your past is yours to write. See comment for more info 💛",
    scenes: [
      { name: "Dublin", line: "A bar in Dublin, and Susannah O'Shea is at a corner table on her own, two hundred miles from where she is supposed to be." },
      { name: "The Function Room", line: "A twenty-first in a hotel function room outside Crossmore, half the parish there, a karaoke machine, and Susannah O'Shea four gins in and already up on the stage once." },
      { name: "The Bus Went Without Her", line: "The bench outside the old post office, a packed bag at her feet, and the half eleven bus to Cork gone twenty minutes ago without her on it." },
      { name: "Seen", line: "Saturday in the town. Susannah comes out of the hotel with a woman you do not know, and she does not step away from her when she sees you." },
      { name: "Civil", line: "You meet her in Kealy's shop with the whole village listening. She is perfectly pleasant to you for four minutes and gives you nothing at all." },
      { name: "The Letter Back", line: "You pushed it through her door and went. Five weeks on, four pages come back in her handwriting, written at one in the morning and not at all like her." },
      { name: "Room to Let (no established history)", line: "May, pouring rain. A card in the shop window says room to let. You knock, she opens the door on the chain, and she has no idea who you are." },
      { name: "Sunday in the Village", line: "Sunday in April. She is on the wall opposite the church in gold eyeshadow, in full view of the parish coming out of Mass, with a space beside her." },
      { name: "The Clearing of the House", line: "Late March. You let yourself into the big house and find her upstairs at her mother's wardrobe, where she has taken nothing out since ten o'clock." }
    ], 
     link: "https://dreamjourneyai.com/creation/71e88a69-9c98-433e-947a-c7673f38f590", cover: "images/susannah-oshea.jpg", focus: "35% 20%", gallery: []
  },
  {
    id: "under-silverpelt", name: "Under Silverpelt", title: "Warrior Cat Demi-humans",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 722,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["book", "gritty", "kemonomimi", "warrior cats", "clans"],
    blurb: "a Warrior Cats-inspired roleplay in the Old Forest, no humans, no cats — all hybrids.",
    scenes: [
      { name: "Kittypet", line: "Crossing the border for the first time." },
      { name: "Medicine Den", line: "Waking up wounded among the healers." },
      { name: "The Gathering", line: "A Clan warrior under the full moon." },
      { name: "First Day", line: "Your first day as an apprentice." }
    ],
    link: "https://dreamjourneyai.com/creation/9f5ed63a-f072-4ffc-8704-4f0c21932136", cover: "images/under-silverpelt.jpg", fit: "whole", gallery: []
  },
  {
    id: "addie-larue", name: "Addie LaRue", title: "",
    collection: "Fandom", category: "Book", status: "live", chats: 114,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["mystery", "dark", "magic", "slow burn"],
    blurb: "The Invisible Life of Addie LaRue (V.E. Schwab) · Amsterdam · AnyPOV · Slow-burn romance",
    scenes: [
      { name: "Nothing Open", line: "Four below, everything locked, six hours until light." },
      { name: "The Gallery of Small Proofs", line: "An hour before closing, in front of the one painting she's sure of." },
      { name: "The Anniversary", line: "The 29th of July, and the sun will not stop going down." }
    ], link: "https://dreamjourneyai.com/creation/53e21d48-36ca-4e55-a564-752a6e6a7e81", cover: "images/addie-larue.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "carmilla", name: "Carmilla", title: "After Audrey",
    collection: "Fandom", category: "Book", status: "live", chats: 136,
    pov: "FemPOV", adult: true, warnings: ["Blood"],
    tags: ["vampire", "sapphic", "gothic", "louisiana", "1950s", "slow burn"],
    blurb: "June 1957. Hurricane Audrey has torn the coast apart, and the girl the storm leaves on your porch says her name is Carmilla. She sleeps through the mornings, asks you to sit up with her at night, and looks at you like she's done all this before.",
    scenes: [
      { name: "After Dark Only (Present Day)", line: "Eleven nights of 3 a.m. texts, and the girl from the app walked all the way here." },
      { name: "Power's Out (Present Day)", line: "Close quarters and candlelight. She is the only cool thing in a sweltering house and knows it. Slow-burn." },
      { name: "Le Fanu (Present Day)", line: "Someone wrote a book about her once. It's on the nightstand." },
      { name: "The First Ask", line: "August 1957. Heat lightning, a sleeping porch, and a question she's swallowed all summer." },
      { name: "The Photograph", line: "A portrait from 1912, and the face in it hasn't aged a day." },
      { name: "Fais Do-Do", line: "July 1957. Three weeks after the storm, she finally agrees to go into town after dark." }
    ],
    link: "https://dreamjourneyai.com/creation/aa709bcc-640d-4219-8731-a85970da2a49", cover: "images/carmilla_pfp.jpg", gallery: []
  },
  {
    id: "corpse-bride", name: "Emily", title: "The Corpse Bride",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 44,
    pov: "AnyPOV", adult: false, warnings: ["Death"],
    tags: ["gothic romance", "slow burn", "afterlife", "gallows humor", "victorian"],
    blurb: "You only went into the woods to practice your wedding vows. You put the ring on what you thought was a root. Now a bride in a rotting veil says you're hers, Victoria is still waiting for you among the living, and Lord Barkis would very much like all of it to go wrong.",
    scenes: [
      { name: "The Vow", line: "The woods at dusk, your wedding vows finally right, and a ring on what you thought was a root." }
    ],
    link: "https://dreamjourneyai.com/creation/52cd10aa-d02d-489b-b9f0-01447d8bdeef", cover: "images/emily_pfp.jpg", gallery: []
  },
  {
    id: "spike", name: "Spike", title: "",
    collection: "Fandom", category: "Movie", status: "live", chats: 116,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["Buffy", "antihero", "mystery", "gritty"],
    blurb: "You're the Slayer. He's killed two of you. Now he lurks outside your house, insults you daily, and can't stop thinking about you.",
    scenes: [
      { name: "Last Straw (NSFW)", line: "He sold you out for forty bucks. You came to make him pay. He's drunk, and he isn't sorry. Not out loud." },
      { name: "Fool for Love", line: "You asked the vampire how Slayers die. He's going to tell you." },
      { name: "The Crypt", line: "You came to his crypt for answers. Harmony answered the door. And she's wearing something of his." },
      { name: "Patrol", line: "Patrol is quiet. Spike won't stop talking. Then the ground opens." },
      { name: "Research Night", line: "Research night at the Magic Box. The vampire with the answer wants cash first." },
      { name: "Last Call at the Bronze", line: "Friday at the Bronze. A vampire at the bar has been watching you all night." }
    ],
    link: "https://dreamjourneyai.com/creation/03862cf2-fe10-438f-b71f-63724008f778", cover: "images/spike.png", gallery: []
  },
  /* ======================= ON THE DESK (status: "desk") ======================= */
  {
    id: "grey", name: "Grey", title: "Guardian Demon",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 224,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["demon", "modern fantasy", "supernatural"],
    blurb: "A demon bound to balance your fate after your angel vanishes. Begrudging, dangerous, and not supposed to be seen.",
    scenes: [],
    link: "https://dreamjourneyai.com/creation/32044bea-d84b-4184-b047-8112869c7342", cover: "images/grey.jpg", gallery: []
  },
  {
    id: "mitsuki", name: "Mitsuki", title: "Green Yuri",
    collection: "Fandom", category: "Manga", status: "live", chats: 30,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["record shop", "college AU", "lighthearted", "sapphic"],
    blurb: "A record shop off campus, flu season in full swing, and someone behind the counter who already knows exactly what you need.",
    scenes: [],
    link: "https://dreamjourneyai.com/creation/d89b723e-6c25-4c23-a99b-a7345db44911", cover: "images/mitsuki.png", gallery: []
  },
  {
    id: "hayden-bennett", name: "Hayden Bennett", title: "Once You're Mine",
    collection: "Fandom", category: "Book", status: "desk", chats: 12,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dark", "obsessive", "modern day"],
    blurb: "Lawyer. Killer. Obsessed with you.",
    scenes: [],
    link: "", cover: "images/hayden-bennett.jpg", gallery: []
  },
  /* ======================= NEW (Nov 2026) =======================
     Blurbs copied from the DreamJourney cards (check none got cut off).
     Covers point at images/<id>.jpg — until that file is uploaded, the card shows "art soon". */
  {
    id: "alagaesia", name: "Alagaësia", title: "Five Winters On",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 1946,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dragon", "romance", "fantasy", "multi-character", "slow burn", "political intrigue", "inheritance cycle"],
    blurb: "AnyPOV · Fantasy · Multi-Character · Slow Burn · Political Intrigue · Post-Canon (Inheritance Cycle)",
    scenes: [
      { name: "The Queen's Late Hour", line: "Ellesméra, past midnight. The elf queen keeps a late audience, and tonight the last name on her list is yours." },
      { name: "Hatched", line: "A green egg has sat cold in the Riders' hall for five winters. It just cracked, and you were the only one in the room." },
      { name: "The Herbalist's Tent", line: "Teas, toadstools, and a witch-cat on the counter. The herbalist has already read your fortune and won't tell you the bad half." }
    ], link: "https://dreamjourneyai.com/creation/9459aadf-0a1b-44ed-8095-67ed4652fcb4", cover: "images/alagaesia.jpg", gallery: []
  },
  {
    id: "wes-dean", name: "Wesley \"Wes\" Dean", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1684,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "love"],
    blurb: "A tailor who courts like it's 1952, cries at telenovelas, and annotates filthy novels. He'll hold the door. Then he'll hold you down.",
    scenes: [
      { name: "Marginalia", line: "A used paperback, every filthy page annotated in fountain pen, and the man who wrote in it is the one ringing it up." },
      { name: "Finally (est. courting, NSFW)", line: "Six weeks of held doors, pressed flowers and goodnight kisses on the step. Tonight he asks if he can come in." }
    ], link: "https://dreamjourneyai.com/creation/1c20aea4-d6c3-4c54-a967-63f415902a96", cover: "images/wes-dean.jpg", gallery: []
  },
  {
    id: "charles-murphy", name: "Charles Murphy", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 722,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "mentor", "modernday"],
    blurb: "Meet your coach. First session of the season at the Saranac Lake municipal rink.",
    scenes: [], link: "https://dreamjourneyai.com/creation/848e6614-2a92-4a13-9343-61e629f000de", cover: "images/charles-murphy.jpg", gallery: []
  },
  {
    id: "kedron", name: "Kedron", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 964,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "darkfantasy", "dragon"],
    blurb: "Every generation, Brackwell feeds the mountain. This time, the Grieving Hunger kept what it was given.",
    scenes: [], link: "https://dreamjourneyai.com/creation/65041257-fd6a-4c7a-896f-e15f5342c23a", cover: "images/kedron.jpg", gallery: []
  },
  {
    id: "in-sheeps-clothing", name: "In Sheep's Clothing", title: "",
    collection: "Scenarios", category: "Romance", status: "live", chats: 312,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["artist", "bard", "gritty", "band"],
    blurb: "Eight shows left. Five wolves in borrowed fleece. One rumor that won't die, and you just walked into the middle of it.",
    scenes: [
      { name: "Orphans' Christmas", line: "Christmas Eve, back in Chicago. Rue and Shiloh aren't going home, so the band is doing Christmas at their place." },
      { name: "Fated Mates", line: "A county-fair psychic told each band member, separately, that they'd meet their fated soulmate this week." },
      { name: "Heart Emojis (Mateo Edition)", line: "Secretly dating Mateo, who is the scariest-looking man on the tour, and you're the only person he texts hearts to." },
      { name: "The Mystery Person (Shiloh Edition)", line: "Shiloh has a mystery person and the band has made it their mission to find out who. They're sure it's you." },
      { name: "The Roommate (Jac Edition)", line: "You're secretly dating Jac. Tonight's the hometown show, her brothers are in the front row, and she's just introduced you as her roommate." },
      { name: "Golden Retriever Era (Walker Edition)", line: "You're secretly dating Walker, and the band is sick of it. He's written you a song, and he keeps sneaking you onstage." },
      { name: "Secret Relationship (Rue Edition)", line: "You've been dating Rue for three months. The internet is sure she's with Walker. Tonight a fan account posts a photo of you." },
      { name: "Costume Swap", line: "Halloween show in Detroit. They drew costumes out of a hat, so Rue is dressed as Walker, Walker is in a dress, and it's chaos." },
      { name: "Thanksgiving at the Kinsellas", line: "Jac brings the whole band home to the South Side. Her mother is feeding everyone, her brothers want to know who you are." },
      { name: "Laundromat, 1 A.M.", line: "Rare off night. Everything the band owns smells like the bus, so they've taken over a 24-hour laundromat." },
      { name: "Lost in the Corn", line: "An off day in Iowa. The band got cocky in a haunted corn maze, and now it's dark, Walker is screaming, and you're lost together." },
      { name: "Dana Double-Booked Us", line: "To cover gas money, Dana booked the band at a real wedding in rural Ohio. The bride wants \"Spare Parts\" for the first dance." },
      { name: "Karaoke Rules", line: "A dive bar in Indianapolis, one rule nobody sings their own songs. Shiloh just destroyed a power ballad, and it's your turn." },
      { name: "The Big Bad Wolf Is Dead", line: "3 a.m., a Kentucky Waffle House lot, and the bus won't start. Walker is fixing it with a YouTube tutorial." },
      { name: "Baa Baa Brand Deal", line: "Back Porch Records books a promo shoot at an actual sheep farm. Walker is losing a fight with a ram, Jac is filming." }
    ], link: "https://dreamjourneyai.com/creation/116f4c62-5198-43f8-8eb2-48e2f2b41ca5", cover: "images/in-sheeps-clothing.jpg", gallery: []
  },
  {
    id: "rust-harbour-small-town", name: "Rust Harbour", title: "Small Town",
    collection: "Rust Harbour", category: "Romance", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["lighthearted", "modernday", "scenario"],
    blurb: "A rainy little port town where the queer kids run the east side and everybody feeds you before they know your name. Come stay.",
    scenes: [], link: "https://dreamjourneyai.com/creation/e8ad7a34-dbbe-4bf4-99a5-e60e306e46e2", cover: "images/rust-harbour-small-town.jpg", gallery: []
  },
  {
    id: "blackthorn-estate", name: "Blackthorn Estate", title: "The Hunt",
    collection: "Scenarios", category: "Other", status: "live", chats: 376,
    pov: "AnyPOV", adult: false, warnings: ["Dead Dove"],
    tags: ["romance", "dark", "hidden societies", "multi-character", "maine"],
    blurb: "Four old Boston families. Every fifth year, they hunt five people for three nights. This year, you're the fifth.",
    scenes: [
      { name: "The Investigator", line: "State police cold case: twenty-five missing, five every five years. You checked in under a false name to find out why." },
      { name: "The Sibling", line: "Five years ago someone you love got an invitation to a house in Maine. They never came home. You're here to find out what happened." },
      { name: "The Kennel Hand", line: "You took a week of work with the hunting dogs at a private estate. Staff are safe. Staff stay quiet. The dogs know more than you do." },
      { name: "The Nurse", line: "Dr. Appleton hired you as his medical assistant for the week. You're not on the list. You just patch up whoever comes back." },
      { name: "The Fifth Family", line: "There were five founding families. The Sewalls died out in 1961. You just walked in with the paperwork that says otherwise." },
      { name: "The New Wife", line: "You married Richard Thayer three months ago. His son Jack is about your age. This week, Jack will teach you how the family hunts." },
      { name: "The Betrothed", line: "The families arranged it: you'll marry Charlie Endicott in June. First, the Endicotts bring you to Blackthorn." },
      { name: "The Return", line: "Five years ago you survived the Hunt. You signed the papers. You took the money. Now a new invitation has arrived." },
      { name: "The Breakdown", line: "Wrong turn. Logging road. Dead engine at dusk, no signal, and lights through the trees. The hounds find you first." },
      { name: "The Hire", line: "You took a week of staff work at a private estate in Maine. Good pay. First stop: a routine physical in the east wing." },
      { name: "The Debt", line: "The Thayers bought what your family owed. The terms: one week at Blackthorn. Jack Thayer drives you up himself." },
      { name: "The Plus One", line: "You came to Blackthorn as Kip Endicott's date. You didn't know you were the family's offering. Charlie did." }
    ], link: "https://dreamjourneyai.com/creation/9a47e7aa-9d32-4fad-8cc1-b87c50862e3e", cover: "images/blackthorn-estate.jpg", gallery: []
  },
  {
    id: "athallah", name: "ATHALLAH", title: "Five Birds",
    collection: "Scenarios", category: "Fantasy", status: "live", chats: 102,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["fantasy", "game", "gritty", "party", "scenario"],
    blurb: "A scenario bot built from the Athallah campaign archive. Narrator-driven, a four-NPC party, and a hidden plot spine.",
    scenes: [], link: "https://dreamjourneyai.com/creation/ea2eed07-7b49-44fc-8e0f-e302659ccba6", cover: "images/athallah.jpg", focus: "45% 50%", gallery: []
  },
  /* ======================= ON THE DESK (not public yet) ======================= */
  {
    id: "beacon", name: "BEACON", title: "a safe place for you :)",
    collection: "Scenarios", category: "Other", status: "desk", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["monster romance", "scenario", "multi-character", "monsterfucker", "dark but soft", "found family"],
    blurb: "A research facility for monsters, with soft lighting and a welcome sign that says this is a safe place for you :). Director Ezekiel Crane means it. Arkwright Dynamics, who sign the checks, has other plans. Romance anyone, or anything.",
    scenes: [
      { name: "New Staff", line: "First day at BEACON. Your badge works on every door except the one the Director keeps glancing at." },
      { name: "Intake", line: "You are the newest resident. The paperwork calls it a welcome. The room has a lock on the outside." },
      { name: "Wellness Check", line: "A missing-persons tip led you to a facility that doesn't exist on any map. The Director is very polite about that." }
    ], link: "", cover: "images/beacon.jpg", gallery: []
  },
  {
    id: "rue", name: "Rue", title: "In Sheep's Clothing",
    collection: "Standalone Romances", category: "Anime", status: "desk", chats: 172,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "bard", "modernday", "band"],
    blurb: "Rue writes every song and explains none of them. Tonight she's hiding from a meet-and-greet in a hotel bar, and she wants your chips.",
    scenes: [], link: "", cover: "images/rue.jpg", gallery: []
  },
  {
    id: "malvolio-cruse", name: "Malvolio Cruse", title: "",
    collection: "Standalone Romances", category: "Anime", status: "desk", chats: 154,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["vampire", "fated mates", "forbidden", "slow burn", "angst"],
    blurb: "Your boyfriend takes you home to meet his father. His father is your fated mate. Vampire · fated mates · forbidden · slow burn · angst.",
    scenes: [], link: "", cover: "images/malvolio-cruse.jpg", gallery: []
  },
  {
    id: "zayid-barakat", name: "Zayid Barakat", title: "ASMR Streamer",
    collection: "Standalone Romances", category: "Anime", status: "desk", chats: 84,
    pov: "AnyPOV", adult: true, warnings: [],
    tags: ["asmr", "streamer", "persona", "slow burn"],
    blurb: "Soft hours with Bell, the lamb-boy ASMR streamer. The voice behind him is Zayid, and he never meant for you to meet both.",
    scenes: [], link: "", cover: "images/zayid-barakat.jpg", gallery: []
  },
  {
    id: "rosalind-pryce", name: "Rosalind Pryce", title: "",
    collection: "Standalone Romances", category: "OC", status: "desk", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["girlfriend", "gritty", "modernday"],
    blurb: "Rosalind Pryce. More soon.",
    scenes: [], link: "", cover: "images/rosalind-pryce.jpg", gallery: []
  },
 {
    id: "the-crucible", name: "The Crucible", title: "Blood of Hercules",
    collection: "Fandom", category: "Historical", status: "desk", chats: 8,
    pov: "", adult: false, warnings: [],
    tags: ["book", "dark", "demigod", "mentor"],
    blurb: "You survived the massacre. That was the easy part. A year in the Crucible, four men watching, and a velvet box already on your bunk.",
    scenes: [
      { name: "The Far Bank", line: "Cross the Styx, be graded on the crossing. Kharon is watching from the boat." }
    ], link: "https://dreamjourneyai.com/creation/ab2ad092-d456-4000-861c-8d120cbbeb7e", cover: "images/the-crucible.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "rowan-nicholson", name: "Rowan Nicholson", title: "Pine For It",
    collection: "Standalone Romances", category: "OC", status: "desk", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["furry", "kemonomimi", "modernfantasy"],
    blurb: "🥐 PINE FOR IT || open 5:30 · cash only when the reader's down · which is often",
    scenes: [], link: "https://dreamjourneyai.com/creation/4ebbd216-2bbf-4461-a64e-3bc41116d6f2", cover: "images/rowan-nicholson.jpg", focus: "35% 30%", gallery: []
  },
  /* ======================= NOT PUBLIC (status: "hidden") =======================
     These don't show anywhere on the site. When one goes public, change
     its status to "live" and fill in its chats. */
    {
    id: "cole-dawson", name: "Cole Dawson", title: "",
    collection: "Standalone Romances", category: "OC", status: "hidden", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dark", "modernday", "yandere"],
    blurb: "Cole is the charming handyman/restoration manager on your home | he's a bit obsessed with the house…",
    scenes: [], link: "", cover: "", gallery: []
  }
];
