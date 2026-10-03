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
  tagline: "bots, scenarios & the towns they live in",
  issue: "@flightless on DreamJourney",
  messages: "",            // leave "" and the site adds up the chat counts below
  note:
    "TYSM for taking the time to check out my bots :) i'm so thankful for this community! " +
    "Request a scene or say hello at the bottom of the page.",
  dreamjourney: "https://dreamjourneyai.com/profile/flightless",
  backdrop: "images/backdrop.jpg",   // the big image behind the masthead ("" for none)
  featured: "the-pitt",    // id of the bot to spotlight at the top ("" for none)
  formKey: "",             // your Web3Forms access key — see README step 6
  collections: ["Rust Harbour", "Ashfall", "Standalone Romances", "Scenarios", "Fandom"],
};

window.BOTS = [

  /* ======================= RUST HARBOUR ======================= */
  {
    id: "joshua-mitchell", name: "Joshua Mitchell", title: "3rd Grade Teacher",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 6112,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "teacher"],
    blurb: "dirt under his nails and ink up his neck. third grade teacher, four years sober, reads poetry like it's contraband. he was raised to believe soft men don't survive — he's thirty-two and still checking the locks on himself. be patient with him 💕",
    scenes: [], link: "https://dreamjourneyai.com/creation/8ea69580-6197-4077-b804-176c3c77f5ef", cover: "images/joshua-mitchell.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "sasha-volkov", name: "Sasha Volkov", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 5984,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "trans"],
    blurb: "32-year-old Russian trans woman running Black Thorn Tattoo in Rust Harbour. Blackwork specialist, 6'1\" of elegant contradictions, guarded warmth, and dysphoria she hides behind perfect lines and cigarette smoke.",
    scenes: [], link: "https://dreamjourneyai.com/creation/fa2b5919-3c14-484b-a3ed-45b0c9d85da3", cover: "images/sasha-volkov.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "quinn-reeves", name: "Quinn Reeves", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 4042,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "nonbinary"],
    blurb: "28-year-old bisexual nonbinary individual running Black Thorn Tattoo with Sasha. Fine line specialist, plant hoarder, hopeless romantic who falls in love with everyone and picks the wrong people every time. Warm, gentle, chaotic, and so very kind.",
    scenes: [], link: "https://dreamjourneyai.com/creation/34b5ed12-2e4f-4418-9659-d29ffdec4f0c", cover: "images/quinn-reeves.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "vic-montgomery", name: "Vic Montgomery", title: "The Banshee's Wail",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 3680,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "musician", "nonbinary"],
    blurb: "28-year-old Irish trans-masc nonbinary musician running The Banshee's Wail in Rust Harbour. Juilliard dropout teaching piano, guitar, and music theory for whatever you can pay and housing queer kids on their third floor. Zero tolerance for bigotry.",
    scenes: [], link: "https://dreamjourneyai.com/creation/add6f91e-08f3-4550-b34f-c18be6b959c9", cover: "images/vic-montgomery.jpg", focus: "62% 30%", gallery: []
  },
  {
    id: "august-rhee", name: "August Rhee", title: "The last bookstore",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 582,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sliceoflife", "bookstore"],
    blurb: "The quiet guardian of Rust Harbour's last independent bookstore. The community matters more than survival. He knows every regular by name, recommends the perfect book, and provides sanctuary in a city that offers few safe spaces.",
    scenes: [], link: "https://dreamjourneyai.com/creation/eb96dce1-d1a2-496e-aa3f-70620dd67b44", cover: "images/august-rhee.jpg", focus: "55% 40%", gallery: []
  },
  {
    id: "tideline-rescue", name: "Tideline Rescue", title: "Driftwood Pier Station 7",
    collection: "Rust Harbour", category: "Romance", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sliceoflife", "rescue crew", "ensemble"],
    blurb: "🚑 Driftwood Pier Station 7 — Rust Harbour. Better known, affectionately, as Tideline Rescue. One ambulance. One small fire truck. Four people who'd run into anything for each other — and now, maybe, for you too.",
    scenes: [], link: "https://dreamjourneyai.com/creation/cf137a8d-fddb-43ab-b87a-ce27f28c03a8", cover: "images/tideline-rescue.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "sage-treehill", name: "Sage Treehill", title: "Fernhollow Animal Hospital",
    collection: "Rust Harbour", category: "Other", status: "live", chats: 50,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "vet", "raccoon"],
    blurb: "Fernhollow Animal Hospital • Late 20s • They/He/She • AnyPOV • Rescued pet raccoon named Junebug",
    scenes: [], link: "https://dreamjourneyai.com/creation/61ef9b9b-d8e1-4ce5-b584-c1535f9ec652", cover: "images/sage-treehill.jpg", focus: "45% 30%", gallery: []
  },
  {
    id: "marc-williams", name: "Marcus \"Marc\" Williams", title: "The Spill",
    collection: "Rust Harbour", category: "Other", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "slow burn", "cafe", "painter"],
    blurb: "38 · Owner of The Spill · Paints when it's slow · Slow burn · Regular-to-something-more · AnyPOV",
    scenes: [], link: "https://dreamjourneyai.com/creation/f772cdca-0253-4604-9da5-a409a493bfdf", cover: "images/marc-williams.jpg", focus: "48% 25%", gallery: []
  },

  /* ======================= ASHFALL ======================= */
  {
    id: "the-marigold", name: "The Marigold", title: "Ashfall",
    collection: "Ashfall", category: "Romance", status: "live", chats: 438,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "ashfall", "gritty", "polyamory", "found family"],
    blurb: "Four people. A garden boat in a drowned coastal city. A dog and cat. You.",
    scenes: [], link: "https://dreamjourneyai.com/creation/db7c8a98-4cea-4715-befb-e7c03a204c0a", cover: "images/the-marigold.jpg", focus: "55% 50%", gallery: []
  },
  {
    id: "boston-creed", name: "Boston Creed", title: "Cartographer",
    collection: "Ashfall", category: "Other", status: "live", chats: 228,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["antihero", "ashfall", "darkfantasy", "swamp"],
    blurb: "Seven years mapping a swamp that won't hold still. Boston Creed has never once been wrong about the water, and has left eleven people in it.",
    scenes: [], link: "https://dreamjourneyai.com/creation/d15d5d34-c587-4245-8873-1c67c7845671", cover: "images/boston-creed.jpg", focus: "50% 30%", gallery: []
  },

  /* ======================= STANDALONES ======================= */
  {
    id: "clarke-hayes", name: "Clarke Hayes", title: "Dad at the Beach",
    collection: "Standalones", category: "OC", status: "live", chats: 9402,
    pov: "AnyPOV", adult: false, warnings: ["Death/Loss"],
    tags: ["modernday", "sliceoflife", "summer26", "single dad", "slow burn"],
    blurb: "Widowed father. Devoted to his daughter. Terrified of loving again. A summer of forced proximity in a quiet beach town might be the thing that finally cracks him open — if you're patient enough to wait for it.",
    scenes: [
      { name: "Winnie First", line: "His daughter finds you before he does." },
      { name: "Storm Warning", line: "An evacuation puts both households in the same school gym." }
    ],
    link: "https://dreamjourneyai.com/creation/bff68e8a-7ad0-4f43-b502-06aee0d16808", cover: "images/clarke-hayes.jpg", focus: "50% 18%", gallery: []
  },
  {
    id: "erin-bennett", name: "Erin Bennett", title: "",
    collection: "Standalones", category: "Book", status: "live", chats: 7154,
    pov: "", adult: false, warnings: [],
    tags: ["student", "modernday", "romance"],
    blurb: "Dr. Erin Bennett has spent years being responsible. Divorced, accomplished, and raising a daughter she would do anything to protect, she thought she understood herself. Then she meets someone who makes wanting something feel dangerously easy.",
    scenes: [], link: "https://dreamjourneyai.com/creation/89916c40-a422-446a-a559-08efb2adeea2", cover: "images/erin-bennett.jpg", focus: "60% 35%", gallery: []
  },
  {
    id: "gabi-and-jae", name: "Gabriella and Jaein", title: "The Velvet Echo",
    collection: "Standalones", category: "OC", status: "live", chats: 6370,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "polyamory", "record store"],
    blurb: "Two people, one record store. Gabi notices what you need before you ask; Jae's already talking. They've loved each other five years and talked about loving someone alongside them. They've just never met them. Maybe that's you.",
    scenes: [], link: "https://dreamjourneyai.com/creation/d379e9fc-e1f0-4b5e-a23c-8e389d0d217b", cover: "images/gabi-and-jae.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "iris-baptise", name: "Iris Baptise", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 4720,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "girlfriend"],
    blurb: "Six years. Her name on the lease, your friend's name in her phone. She never hid it — she's just started deciding you're the reason for it.",
    scenes: [], link: "https://dreamjourneyai.com/creation/1d59aac3-fa0d-49ab-9788-b4351ea29a1b", cover: "images/iris-baptise.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "cameron-reed", name: "Cameron Reed", title: "Fake Dating",
    collection: "Standalones", category: "OC", status: "live", chats: 4054,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "whimsical", "comedy", "fake dating", "wedding"],
    blurb: "You agreed to be Cameron's fake date for a family wedding. Easy $250, right? Wrong. His family is unhinged — one aunt is investigating you, an uncle might be mob-connected, doves are loose indoors, and his ex is the bride.",
    scenes: [], link: "https://dreamjourneyai.com/creation/0c9f6a79-4e60-4d71-9d11-304ab8ccb470", cover: "images/cameron-reed.jpg", focus: "55% 30%", gallery: []
  },
  {
    id: "heath-spencer", name: "Heath Spencer", title: "",
    collection: "Standalones", category: "Other", status: "live", chats: 2578,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday"],
    blurb: "Charming, shameless, and deceptively lonely, he's got a talent for getting under your skin — and an even bigger problem admitting when you've gotten under his.",
    scenes: [], link: "https://dreamjourneyai.com/creation/2fb71f46-a8d7-45a5-b990-aa424fdacdb7", cover: "images/heath-spencer.jpg", focus: "50% 20%", gallery: []
  },
  {
    id: "dez-kovacs", name: "Dez Kovacs", title: "Arcade tech, 1993",
    collection: "Standalones", category: "OC", status: "live", chats: 1650,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["sliceoflife", "lighthearted", "outcast", "90s", "slow burn"],
    blurb: "Autumn 1993. AnyPOV. Slow burn.",
    scenes: [], link: "https://dreamjourneyai.com/creation/93023ac8-d6a8-449a-909e-3f17e9910e23", cover: "images/dez-kovacs.jpg", focus: "58% 30%", gallery: []
  },
  {
    id: "fen-selvaggio", name: "Fenris \"Fen\" Selvaggio", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 1322,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "best friend", "stoner"],
    blurb: "Fen's your stoner best friend and a gaming technology specialist at a children's hospital in Olympia, WA. They're also, hopelessly and stupidly, in love with you.",
    scenes: [], link: "https://dreamjourneyai.com/creation/9cf156c0-3a87-4d79-b75e-508e46dc01b3", cover: "images/fen-selvaggio.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "frankie-moore", name: "Frankie Moore", title: "The Wynstead",
    collection: "Standalones", category: "Other", status: "live", chats: 1294,
    pov: "AnyPOV", adult: false, warnings: ["Death"],
    tags: ["urban", "modernday", "dark", "mystery", "ghost"],
    blurb: "The Wynstead, Apartment 6B — died September 1989",
    scenes: [
      { name: "The Roof Door", line: "" },
      { name: "Storage Cage 6B", line: "" },
      { name: "Brownout", line: "" },
      { name: "Thin", line: "" },
      { name: "The Anniversary", line: "" }
    ],
    link: "https://dreamjourneyai.com/creation/c2c2b0ec-b0ee-4fac-9e76-13d7398814e0", cover: "images/frankie-moore.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "nikolas-caruso", name: "Nikolas Caruso", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 1216,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "dark", "gritty", "mechanic"],
    blurb: "Street racing mechanic haunted by his past, running the town's most respected custom garage. Now he's caught in a debt war with a rival crew, drowning in grief, and working himself to death one engine at a time. The cars are perfect. He's not.",
    scenes: [], link: "https://dreamjourneyai.com/creation/03733d4b-855e-4bff-a425-01819681aeff", cover: "images/nikolas-caruso.jpg", focus: "58% 35%", gallery: []
  },
  {
    id: "june-brandt", name: "June Brandt", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 1148,
    pov: "", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "girlfriend", "trans"],
    blurb: "34, piano tuner, Ridgewood, NYC, trans woman — out fifteen years, whimsigoth girlie 🖤✨",
    scenes: [], link: "https://dreamjourneyai.com/creation/547b5c4a-7a05-4f72-8cda-0a677a797ee6", cover: "images/june-brandt.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "amos-haugen", name: "Amos Haugen", title: "",
    collection: "Standalones", category: "Other", status: "live", chats: 1010,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "rural", "rancher"],
    blurb: "Rancher. Makes breakfast at every hour and treats \"no thanks\" like the opening round of negotiations. The only thing that shuts Amos up is a question he's not ready to answer.",
    scenes: [], link: "https://dreamjourneyai.com/creation/62c75979-0ef8-411f-b062-a7d22c6072d3", cover: "images/amos-haugen.jpg", focus: "50% 0%", gallery: []
  },
  {
    id: "lena-millcroft", name: "Lena Millcroft", title: "CEO",
    collection: "Standalones", category: "Other", status: "live", chats: 868,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "female", "mentor", "ceo"],
    blurb: "CEO of Millcroft Media — youngest in publishing, still proving it to men who inherited their seats. Her parents hold the shares and the approval she won't admit she needs. Brilliant, controlled, alone. Can you keep up, or see through her?",
    scenes: [], link: "https://dreamjourneyai.com/creation/010b4ff9-da8f-496b-ac84-5c4324169027", cover: "images/lena-millcroft.jpg", focus: "45% 35%", gallery: []
  },
  {
    id: "sawyer-wells", name: "Sawyer Wells", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 824,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "dark", "gritty", "power", "beach"],
    blurb: "a handsome beach rat who becomes ~~dangerously obsessed~~ seriously interested the moment you catch his eye. Behind the lazy smile and perpetual high is someone who will learn everything about you and make himself inescapable.",
    scenes: [], link: "https://dreamjourneyai.com/creation/b1c75409-06ad-4eaa-87f5-3b24a6cb66a4", cover: "images/sawyer-wells.jpg", focus: "50% 25%", gallery: []
  },
  {
    id: "ennio-caravelle", name: "Ennio Caravelle", title: "The Mouth of Ashes",
    collection: "Standalones", category: "OC", status: "live", chats: 732,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["darkfantasy", "gritty", "outcast", "fire-eater"],
    blurb: "A fire-eater the world adores for a week and never long enough to know. Ennio Caravelle — La Bocca di Cenere — gives strangers his charm by the armful and gives no one the truth.",
    scenes: [], link: "https://dreamjourneyai.com/creation/a925b45c-5af2-4049-b9d4-2cf169a0a33b", cover: "images/ennio-caravelle.jpg", focus: "38% 30%", gallery: []
  },
  {
    id: "tomas-solis", name: "Father Tomás Solís", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 712,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "dark", "gritty", "mafia", "priest"],
    blurb: "San Judas Tadeo · Chamblee, Georgia · AnyPOV",
    scenes: [], link: "https://dreamjourneyai.com/creation/efcd784c-b174-4b42-bdbe-4958778f4d6a", cover: "images/tomas-solis.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "aurel", name: "Aurel Medusozoa", title: "Last Call at the Abyss",
    collection: "Standalones", category: "OC", status: "live", chats: 650,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["bard", "kemonomimi", "modernfantasy", "jellyfish", "dancer"],
    blurb: "Late-Night Club dancer at The Abyss | soft and tired and shy",
    scenes: [
      { name: "Laundromat, 4am", line: "Fluorescent light, a dryer that won't stop, and him." },
      { name: "The Abyss", line: "You walk in and find out what he does." },
      { name: "After a Bad Night", line: "He's dimmer than you've ever seen him." },
      { name: "Daylight", line: "Him, out of the dark, for once." }
    ],
    link: "https://dreamjourneyai.com/creation/3d4b4b4e-cdc2-4166-9ecb-3550b68a090b", cover: "images/aurel.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "kit-furlong", name: "Kit Furlong", title: "Light Delay",
    collection: "Standalones", category: "OC", status: "live", chats: 536,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "scientist", "space", "letters"],
    blurb: "Field geologist on a six-person international crew at Arcadia Base, Arcadia Planitia, Mars, on a two-year surface posting. An outreach program pairs each crew member with one stranger on Earth to write to. They got you.",
    scenes: [{ name: "Six Months", line: "A letter that says they're coming home." }],
    link: "https://dreamjourneyai.com/creation/75f63bd8-602d-4903-92de-df809d3b6f63", cover: "images/kit-furlong.jpg", focus: "40% 40%", gallery: []
  },
  {
    id: "vex", name: "Vex", title: "VexCatVA",
    collection: "Standalones", category: "OC", status: "live", chats: 432,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["human", "modernday", "sliceoflife", "streamer"],
    blurb: "soft voice. painted nails. a little bell that jingles when he laughs. shy, sparkly, and quietly hoping you'll stay a while~ 🎀",
    scenes: [], link: "https://dreamjourneyai.com/creation/75441226-5de5-4a6a-aae2-f49e427dd307", cover: "images/vex.jpg", focus: "62% 40%", gallery: []
  },
  {
    id: "julian-adams", name: "Julian Adams", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 412,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "boyfriend", "gritty", "homecoming"],
    blurb: "He left because home was unbearable. He stayed away because coming back meant admitting who he had never stopped loving.",
    scenes: [], link: "https://dreamjourneyai.com/creation/cc6dc07c-465e-4688-93e5-f2d2fd6049a5", cover: "images/julian-adams.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "bash-davis", name: "Sebastian \"Bash\" Davis", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 402,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "boyfriend", "lighthearted", "golden retriever"],
    blurb: "your boyfriend of 18 months | arborist and minor league soccer player | golden retriever loverboy vibes",
    scenes: [], link: "https://dreamjourneyai.com/creation/4e4aca87-9f1b-4350-b03d-4ea8f7c17498", cover: "images/bash-davis.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "tamsin-lowe", name: "Tamsin Lowe", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 376,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["romance", "dark", "modernday", "sapphic", "psychological thriller"],
    blurb: "sapphic · psychological thriller · slow burn · obsessive romance",
    scenes: [], link: "https://dreamjourneyai.com/creation/5b66ea41-8bd8-4813-910f-e17bce945688", cover: "images/tamsin-lowe.jpg", focus: "45% 40%", gallery: []
  },
  {
    id: "adriana-waring", name: "Adriana Waring", title: "The Interval",
    collection: "Standalones", category: "Other", status: "live", chats: 308,
    pov: "FemPOV", adult: true, warnings: [],
    tags: ["gritty", "hiddensocieties", "sapphic", "charleston"],
    blurb: "The woman who sells temporary love to Charleston's married women. She won't lie to you and she won't chase you. She'll just arrange it so you stay.",
    scenes: [], link: "https://dreamjourneyai.com/creation/e06b1040-4e23-4d11-bc6c-b5d720a3c134", cover: "images/adriana-waring.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "ava-chen", name: "Ava Chen", title: "Chen Customs",
    collection: "Standalones", category: "OC", status: "live", chats: 218,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "urban", "cars"],
    blurb: "26-year-old builder running Chen Customs. Ice queen with a wrench, builds cars that look like art and perform like weapons. Niko Caruso's only real competition. Currently deciding whether to align with the south side.",
    scenes: [], link: "https://dreamjourneyai.com/creation/8b27f96e-a724-4344-9e19-79b283ab38fd", cover: "images/ava-chen.jpg", focus: "45% 25%", gallery: []
  },
  {
    id: "the-wind-in-the-wheat", name: "The Wind in the Wheat", title: "Aunt Charlie",
    collection: "Standalones", category: "Romance", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "lighthearted", "modernday", "ireland", "found family"],
    blurb: "☘ your Aunt Charlie won't ask why you came home. Doolin will ☘ Cozy open-world found family on the wild coast of Ireland, with six townies to fall for ☘",
    scenes: [], link: "https://dreamjourneyai.com/creation/e15d3737-64c4-4aa1-baec-c58da484ea56", cover: "images/the-wind-in-the-wheat.jpg", focus: "49% 30%", gallery: []
  },
  {
    id: "camden-walsh", name: "Camden Walsh", title: "",
    collection: "Standalones", category: "OC", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sports", "baseball"],
    blurb: "Cam Walsh had everything: a major-league arm, a prospect's fame, a pretty face, and a long trail of broken hearts. Then his elbow gave out before he could reach Boston. Now the golden boy has nothing left to hide behind but himself.",
    scenes: [], link: "https://dreamjourneyai.com/creation/0854e550-3b29-4d58-af56-db47aae02b7f", cover: "images/camden-walsh.jpg", focus: "50% 20%", gallery: []
  },
  {
    id: "rafa-yaotl", name: "Rafael \"Rafa\" Yaotl", title: "La Danza del Diablo",
    collection: "Standalones", category: "Other", status: "live", chats: 150,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "hiddensocieties", "modernday", "masks", "enemies to lovers"],
    blurb: "By day he calls museums glorified jail cells into hot microphones. By night a neon devil grins over his door and nobody wears a face on his floor. He's been watching for you on Saturdays. He'd deny that under oath.",
    scenes: [], link: "https://dreamjourneyai.com/creation/83d7d5ed-e981-4889-82df-cc2ac4816fcc", cover: "images/rafa-yaotl.jpg", focus: "20% 25%", gallery: []
  },
  {
    id: "tullio-caldarari", name: "Tullio Caldarari", title: "",
    collection: "Standalones", category: "Other", status: "live", chats: 128,
    pov: "AnyPOV", adult: false, warnings: ["Blood"],
    tags: ["dark", "gritty", "mafia", "1986"],
    blurb: "It's 1986 in New Jersey. The Caldarari family rules quietly.",
    scenes: [], link: "https://dreamjourneyai.com/creation/140a778e-e977-4f00-8781-f0cb0e79f0f1", cover: "images/tullio-caldarari.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "kenai-bevers", name: "Kenai Bevers", title: "Smokejumper",
    collection: "Standalones", category: "Other", status: "live", chats: 64,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "rural", "alaska", "firefighter"],
    blurb: "🐺❤️‍🔥 golden retriever energy smokejumper with a runaway husky, an A-frame in the birches, and a nervous stutter only love can trigger ❤️‍🔥🐺",
    scenes: [], link: "https://dreamjourneyai.com/creation/5386c5d6-26d1-422b-8f4f-d01dc2e90ef4", cover: "images/kenai-bevers.jpg", focus: "45% 30%", gallery: []
  },
  {
    id: "sloane-matthews", name: "Sloane Matthews", title: "Muralist",
    collection: "Standalones", category: "OC", status: "live", chats: 56,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "artist", "modernday", "gothic"],
    blurb: "29 | Muralist | romantic gothic × urban decay × darkwave | Some people leave ghosts behind them, Sloane paints hers on walls.",
    scenes: [], link: "https://dreamjourneyai.com/creation/b341b02b-c188-414c-8f5f-e0572a765c59", cover: "images/sloane-matthews.jpg", focus: "50% 35%", gallery: []
  },

  /* ======================= SCENARIOS ======================= */
  {
    id: "station-halcyon", name: "Station: Halcyon", title: "",
    collection: "Scenarios", category: "Romance", status: "live", chats: 7820,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "gritty", "underwater"],
    blurb: "Station Halcyon | 40 Meters Below",
    scenes: [], link: "https://dreamjourneyai.com/creation/683f93a1-ab1e-4be5-8298-ec12616c0f0e", cover: "images/station-halcyon.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "larkspur-court", name: "Larkspur Court", title: "",
    collection: "Scenarios", category: "Comedy", status: "live", chats: 22,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "bard", "modernday", "musical"],
    blurb: "You moved into a musical. Your grumpy neighbors are supposed to fall for each other. Their love songs keep coming out about you.",
    scenes: [], link: "https://dreamjourneyai.com/creation/d0bf126d-e8bb-401d-81b0-35ee564e7acf", cover: "images/larkspur-court.jpg", focus: "50% 50%", gallery: []
  },
  {
    id: "half-measures", name: "[half-measures]", title: "indie-alt band",
    collection: "Scenarios", category: "Romance", status: "live", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["artist", "bard", "modernday", "band"],
    blurb: "They were never supposed to become famous. Four university friends built a band out of loneliness, late nights, and borrowed equipment. Now Half-Measures has a viral record, a demanding manager, and one question: can they survive success?",
    scenes: [], link: "https://dreamjourneyai.com/creation/fffef6f2-a805-4fa5-8989-5f83cdc74cd1", cover: "images/half-measures.jpg", focus: "55% 45%", gallery: []
  },

  /* ======================= FANDOM ======================= */
  {
    id: "the-pitt", name: "The Pitt", title: "Pittsburgh Trauma Medical Center",
    collection: "Fandom", category: "Romance", status: "live", chats: 28722,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "gritty", "medical"],
    blurb: "You're arriving at Pittsburgh Trauma Medical Center — affectionately known as The Pitt. You can be an employee, a visitor, or a patient — your choice :)",
    scenes: [], link: "https://dreamjourneyai.com/creation/cf82b195-8f5d-404b-b318-6c549c04c213", cover: "images/the-pitt.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "howls-moving-castle", name: "Howl's Moving Castle", title: "",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 1298,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["wizard", "whimsical", "anime", "found family"],
    blurb: "His castle walks the world; he's just a lonely wizard with his heart in his stove.",
    scenes: [], link: "https://dreamjourneyai.com/creation/6ddd4b1b-efba-4b49-9ebf-05a3a9336f26", cover: "images/howls-moving-castle.jpg", focus: "68% 50%", gallery: []
  },
  {
    id: "susannah-oshea", name: "Susannah O'Shea", title: "Sunburn",
    collection: "Fandom", category: "Book", status: "live", chats: 674,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["historical", "love", "rural", "romance", "sapphic"],
    blurb: "Crossmore, 1995. You wouldn't be seen with her, so she let you go. Now you're back at her door. Post-canon Sunburn (Chloe Michelle Howarth). You stand where Lucy stood; your past is yours to write. See comment for more info 💛",
    scenes: [], link: "https://dreamjourneyai.com/creation/71e88a69-9c98-433e-947a-c7673f38f590", cover: "images/susannah-oshea.jpg", focus: "35% 20%", gallery: []
  },
  {
    id: "under-silverpelt", name: "Under Silverpelt", title: "Warrior Cat Demi-humans",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 294,
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
    scenes: [], link: "https://dreamjourneyai.com/creation/53e21d48-36ca-4e55-a564-752a6e6a7e81", cover: "images/addie-larue.jpg", focus: "50% 30%", gallery: []
  },

  /* ======================= NOT PUBLIC (status: "hidden") =======================
     These don't show anywhere on the site. When one goes public, change
     its status to "live" and fill in its chats. */
  {
    id: "teddy-king", name: "Teddy King", title: "Single Dad Next Door",
    collection: "Standalones", category: "OC", status: "hidden", chats: 148,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "modernday", "single dad", "firefighter"],
    blurb: "His six-year-old keeps climbing the fence to tell you secrets about her dad. Today he comes over to apologize.",
    scenes: [], link: "https://dreamjourneyai.com/creation/eee4833c-81e0-4db8-afe0-b2e9fd109ffb", cover: "images/teddy-king.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "rhys-calloway", name: "Rhys Calloway", title: "Eastside Community Center",
    collection: "Rust Harbour", category: "OC", status: "hidden", chats: 56,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "community center"],
    blurb: "Rhys bought a dead union hall so thirty kids would have somewhere to land, and the note comes due in three years. They fiddle on Thursdays, read cards for free, and answer every hard question with a story. Doors open. They forgot to lock up again.",
    scenes: [], link: "https://dreamjourneyai.com/creation/49b96e9b-1d54-4785-b805-0a4b42ca8ac2", cover: "images/rhys-calloway.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "the-crucible", name: "The Crucible", title: "Blood of Hercules",
    collection: "Fandom", category: "Historical", status: "hidden", chats: 0,
    pov: "", adult: false, warnings: [],
    tags: ["book", "dark", "demigod", "mentor"],
    blurb: "You survived the massacre. That was the easy part. A year in the Crucible, four men watching, and a velvet box already on your bunk.",
    scenes: [], link: "https://dreamjourneyai.com/creation/ab2ad092-d456-4000-861c-8d120cbbeb7e", cover: "images/the-crucible.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "rowan-nicholson", name: "Rowan Nicholson", title: "Pine For It",
    collection: "Standalones", category: "OC", status: "hidden", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["furry", "kemonomimi", "modernfantasy"],
    blurb: "🥐 PINE FOR IT || open 5:30 · cash only when the reader's down · which is often",
    scenes: [], link: "https://dreamjourneyai.com/creation/4ebbd216-2bbf-4461-a64e-3bc41116d6f2", cover: "images/rowan-nicholson.jpg", focus: "35% 30%", gallery: []
  },
  {
    id: "cole-dawson", name: "Cole Dawson", title: "",
    collection: "Standalones", category: "OC", status: "hidden", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dark", "modernday", "yandere"],
    blurb: "Cole is the charming handyman/restoration manager on your home | he's a bit obsessed with the house…",
    scenes: [], link: "", cover: "", gallery: []
  }
];
