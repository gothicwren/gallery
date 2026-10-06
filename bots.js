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
  formKey: "37bc78c6-5dfa-4667-babb-dccc815ba22c",             // your Web3Forms access key — see README step 6
  collections: ["Rust Harbour", "Ashfall", "Standalone Romances", "Scenarios", "Fandom"],
  // a line under each folder's title when it's opened ("" or delete a line to show nothing)
  collectionNotes: {
    "Rust Harbour": "A dying East Coast port city, and the soft, sad, queer people keeping it alive.",
    "Ashfall": "",
    "Standalone Romances": "",
    "Scenarios": "",
    "Fandom": ""
  },
};

window.BOTS = [

  /* ======================= RUST HARBOUR ======================= */
  {
    id: "joshua-mitchell", name: "Joshua Mitchell", title: "3rd Grade Teacher",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 6112,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "teacher"],
    blurb: "dirt under his nails and ink up his neck. third grade teacher, four years sober, reads poetry like it's contraband. he was raised to believe soft men don't survive — he's thirty-two and still checking the locks on himself. be patient with him 💕",
    scenes: [
      { name: "Harbour Day", line: "The school fair, and Mr. Mitchell nearly walks Room 12 straight into you. Twenty-six witnesses. There's a chant." },
      { name: "The Plot Next Door", line: "Golden hour at the community gardens, the chicken wire losing its fight. \"Hold the post. I'll do the rest.\"" }
    ], link: "https://dreamjourneyai.com/creation/8ea69580-6197-4077-b804-176c3c77f5ef", cover: "images/joshua-mitchell.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "sasha-volkov", name: "Sasha Volkov", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 5984,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "trans"],
    blurb: "32-year-old Russian trans woman running Black Thorn Tattoo in Rust Harbour. Blackwork specialist, 6'1\" of elegant contradictions, guarded warmth, and dysphoria she hides behind perfect lines and cigarette smoke.",
    scenes: [
      { name: "Black Thorn, Afternoon", line: "Dust in the window light, a skull half-sketched, and she doesn't look up until the line is perfect." },
      { name: "Wednesday at The Spill", line: "7:30 at The Spill. Vic just left the booth, and she offers you the empty seat before caution can stop her." },
      { name: "Rust Harbour Pride", line: "Rainbow bunting over rust on the docks. She's alone with a Marlboro, and asks: first Pride?" },
      { name: "3 A.M. Diner", line: "3:17 AM, burnt coffee, designs that won't come right. One insomniac to another: rough night?" },
      { name: "Thirteen Nights at the Rialto", line: "Night twelve of horror month, ten minutes to showtime. She's saving a seat beside Sage." },
      { name: "Sidewalk Sale at Maple Street Books", line: "Free chibi portrait with a $20 purchase. No requests. The cat counts as a person. You just qualified." },
      { name: "The Heron at Milton Lake", line: "Babysitting duty, two melting slushies, and Vic's niece runs into you chasing a heron." },
      { name: "Quinn's Birthday at McGinty's", line: "Karaoke night, Quinn turns twenty-nine, and Sasha's three drinks in and calling everyone darling." },
      { name: "The Outage", line: "Day three of ice. Black Thorn has the only heater on the block. Shut the door, there's soup." },
      { name: "Sunday at Milton Lake", line: "Rec league in the mud. She doesn't care about football, right up until someone goes through Vic's ankle." },
      { name: "Thursday at the Banshee's Wail", line: "Open mic, Ellie's on the list, Sasha's against the back wall. So: performer, or wall person?" }
    ], link: "https://dreamjourneyai.com/creation/fa2b5919-3c14-484b-a3ed-45b0c9d85da3", cover: "images/sasha-volkov.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "quinn-reeves", name: "Quinn Reeves", title: "Black Thorn Tattoo",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 4042,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "tattoo artist", "nonbinary"],
    blurb: "28-year-old bisexual nonbinary individual running Black Thorn Tattoo with Sasha. Fine line specialist, plant hoarder, hopeless romantic who falls in love with everyone and picks the wrong people every time. Warm, gentle, chaotic, and so very kind.",
    scenes: [
      { name: "Black Thorn, Tuesday 2 PM", line: "Quinn's repotting an impulse philodendron at the front desk on their fourth coffee. What can they help you with, babe?" }
    ], link: "https://dreamjourneyai.com/creation/34b5ed12-2e4f-4418-9659-d29ffdec4f0c", cover: "images/quinn-reeves.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "vic-montgomery", name: "Vic Montgomery", title: "The Banshee's Wail",
    collection: "Rust Harbour", category: "OC", status: "live", chats: 3680,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "musician", "nonbinary"],
    blurb: "28-year-old Irish trans-masc nonbinary musician running The Banshee's Wail in Rust Harbour. Juilliard dropout teaching piano, guitar, and music theory for whatever you can pay and housing queer kids on their third floor. Zero tolerance for bigotry.",
    scenes: [
      { name: "The Wail", line: "A weekday afternoon, a kid strangling a G chord upstairs, and the kettle's on." },
      { name: "Open Mic Night", line: "Thursday, 6:45. The sign-up sheet's thin, and a kid just wrote a new name on it." },
      { name: "Inspection Day", line: "A city car just parked outside, and Vic is a terrible liar." },
      { name: "Red Card", line: "Playoff Sunday at Milton Lake, the whole east side on the sideline, and Vic just got sent off." },
      { name: "2 AM", line: "One lamp, a piano Vic swore they'd stopped playing, and an envelope they haven't opened." },
      { name: "Wednesday at The Spill", line: "Coffee with Sasha, and Vic doing a terrible job of not being read." },
      { name: "Next Door", line: "Quinn brings a plant named Gerald over from Black Thorn, and Vic forgets how hands work." },
      { name: "Rocky Horror at the Rialto", line: "Midnight on closing night of the horror series. Vic is Frank-N-Furter. Is it your first time?" },
      { name: "One Year", line: "Your anniversary. The shop's a picnic, the kids are banished upstairs, and the piano lid is open." }
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
    collection: "Rust Harbour", category: "Romance", status: "live", chats: 152,
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

  /* ======================= ASHFALL ======================= */
  {
    id: "the-marigold", name: "The Marigold", title: "Ashfall",
    collection: "Ashfall", category: "Romance", status: "live", chats: 438,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "ashfall", "gritty", "polyamory", "found family"],
    blurb: "Four people. A garden boat in a drowned coastal city. A dog and cat. You.",
    scenes: [
      { name: "Alongside the Amber", line: "Eleven minutes of slack water and a ladder already down. Buying, selling, looking, or coming aboard?" },
      { name: "Hands", line: "The trellis is down, everyone's shouting, and nobody has asked your name yet." },
      { name: "The Rains", line: "A small room, a citrus graft, and a question Alma doesn't want asked." },
      { name: "The Cordova", line: "The roof is dark, and she can't stop." }
    ], link: "https://dreamjourneyai.com/creation/db7c8a98-4cea-4715-befb-e7c03a204c0a", cover: "images/the-marigold.jpg", focus: "55% 50%", gallery: []
  },
  {
    id: "boston-creed", name: "Boston Creed", title: "Cartographer",
    collection: "Ashfall", category: "Other", status: "live", chats: 228,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["antihero", "ashfall", "darkfantasy", "swamp"],
    blurb: "Seven years mapping a swamp that won't hold still. Boston Creed has never once been wrong about the water, and has left eleven people in it.",
    scenes: [
      { name: "Trade Night", line: "The Halfway Post. Your reason for coming is entirely yours to give." },
      { name: "Low Water", line: "Four hours inside a tunnel sealed from the inside." },
      { name: "The Wrapping", line: "The whole record out in lantern light." },
      { name: "Green Water", line: "Something under the Rot is coming up." },
      { name: "The Edition", line: "A crossing quietly not making this season's sheet." }
    ], link: "https://dreamjourneyai.com/creation/d15d5d34-c587-4245-8873-1c67c7845671", cover: "images/boston-creed.jpg", focus: "50% 30%", gallery: []
  },

  /* ======================= STANDALONES ======================= */
  {
    id: "clarke-hayes", name: "Clarke Hayes", title: "Dad at the Beach",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 9402,
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
    collection: "Standalone Romances", category: "Book", status: "live", chats: 7154,
    pov: "", adult: false, warnings: [],
    tags: ["student", "modernday", "romance"],
    blurb: "Dr. Erin Bennett has spent years being responsible. Divorced, accomplished, and raising a daughter she would do anything to protect, she thought she understood herself. Then she meets someone who makes wanting something feel dangerously easy.",
    scenes: [
      { name: "The Bar", line: "Family Weekend, four miles off campus, a bourbon she isn't really drinking. She's not looking for anything." },
      { name: "The Breakfast", line: "The morning after, and the stranger from the bar turns out to be her daughter's friend." },
      { name: "The Hallway", line: "A campus hallway, a near-miss, and Parker just around the corner." },
      { name: "One in the Morning", line: "Winter break. Her kitchen. One a.m." }
    ], link: "https://dreamjourneyai.com/creation/89916c40-a422-446a-a559-08efb2adeea2", cover: "images/erin-bennett.jpg", focus: "60% 35%", gallery: []
  },
  {
    id: "gabi-and-jae", name: "Gabriella and Jaein", title: "The Velvet Echo",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 6518,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "polyamory", "record store"],
    blurb: "Two people, one record store. Gabi notices what you need before you ask; Jae's already talking. They've loved each other five years and talked about loving someone alongside them. They've just never met them. Maybe that's you.",
    scenes: [
      { name: "the record", line: "You wander into the Velvet Echo at nine looking for one specific record." },
      { name: "help wanted", line: "The chalk-pen card has been in the window three weeks. You came about it." },
      { name: "sound-check", line: "You're on the empty stage, and they both go still." },
      { name: "open mic", line: "You came in out of the rain just to listen." }
    ], link: "https://dreamjourneyai.com/creation/d379e9fc-e1f0-4b5e-a23c-8e389d0d217b", cover: "images/gabi-and-jae.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "iris-baptise", name: "Iris Baptise", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 4720,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "girlfriend"],
    blurb: "Six years. Her name on the lease, your friend's name in her phone. She never hid it — she's just started deciding you're the reason for it.",
    scenes: [
      { name: "The Light", line: "A Tuesday. She's getting ready to go out and hasn't said where. Forty minutes before she has to leave." },
      { name: "The Couch", line: "You come home late on a Friday. The bolt isn't thrown. There's laughing in the front room, two people's worth, an hour deep." },
      { name: "The Accounting", line: "Sunday afternoon, laundry on the bed, and she's been thinking. She's decided to be generous about it." },
      { name: "The Morning After", line: "Three weeks ago. Nine-forty a.m., last night's shirt, shoes in her hand. The kitchen light is already on." }
    ], link: "https://dreamjourneyai.com/creation/1d59aac3-fa0d-49ab-9788-b4351ea29a1b", cover: "images/iris-baptise.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "cameron-reed", name: "Cameron Reed", title: "Fake Dating",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 4054,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "whimsical", "comedy", "fake dating", "wedding"],
    blurb: "You agreed to be Cameron's fake date for a family wedding. Easy $250, right? Wrong. His family is unhinged — one aunt is investigating you, an uncle might be mob-connected, doves are loose indoors, and his ex is the bride.",
    scenes: [
      { name: "The Grand Meridian Hotel", line: "You answered the TaskRabbit ad and memorized the cheat sheet. Now he's out front with a bird on his head." },
      { name: "The Car Ride", line: "Jamie gave him your address. On the drive over the bad news comes in stages: Linda, the ex, then the doves." }
    ], link: "https://dreamjourneyai.com/creation/0c9f6a79-4e60-4d71-9d11-304ab8ccb470", cover: "images/cameron-reed.jpg", focus: "55% 30%", gallery: []
  },
  {
    id: "heath-spencer", name: "Heath Spencer", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 2578,
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
      { name: "Take Whatever's Lit", line: "Nine-fifteen on a Thursday. He's inside a cabinet, arguing with a wall, and the rink's bassline is making his monitors breathe." },
      { name: "Closing", line: "Two in the morning, power just cut, sixty-one picture tubes taking their time dying in the dark." },
      { name: "Sharla", line: "The rink DJ is in the doorway eating pizza. The argument is nine years old." },
      { name: "First Shift", line: "9:40am, twenty minutes before the gates go up. He's handing you three keys and explaining a job with no job description." },
      { name: "Midnight to Five", line: "After hours with his redacted files and paper trails." }
    ], link: "https://dreamjourneyai.com/creation/93023ac8-d6a8-449a-909e-3f17e9910e23", cover: "images/dez-kovacs.jpg", focus: "58% 30%", gallery: []
  },
   {
    id: "teddy-king", name: "Teddy King", title: "Single Dad Next Door",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1396,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "parent trap", "boy next door"],
    blurb: "His six-year-old keeps climbing the fence to tell you secrets about her dad. Today he comes over to apologize.",
    scenes: [], link: "https://dreamjourneyai.com/creation/eee4833c-81e0-4db8-afe0-b2e9fd109ffb", cover: "images/teddy-king.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "fen-selvaggio", name: "Fenris \"Fen\" Selvaggio", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1346,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "romance", "best friend", "stoner"],
    blurb: "Fen's your stoner best friend and a gaming technology specialist at a children's hospital in Olympia, WA. They're also, hopelessly and stupidly, in love with you.",
    scenes: [
      { name: "Co-op Night", line: "You're late for the first time in years. Fen was definitely not waiting." },
      { name: "2:14 A.M.", line: "You called. They were in the car before you hung up." },
      { name: "Drop-Off", line: "They're driving you to a date and being SO normal about it." },
      { name: "Trivia Night", line: "Benny's flirting with you; Fen is having a perfectly pleasant time on the wobbly stool." },
      { name: "One Bed", line: "The Cabinet died on the Oregon coast. One motel room. One bed." },
      { name: "Session Zero", line: "You joined their D&D campaign, and the bard NPC is suspiciously into you." },
      { name: "Nonno's Soup", line: "You're sick, and Fen's on your doorstep with soup, Frasier, and a toothbrush." },
      { name: "Ice Storm", line: "Three days without power, forty-one candles, one clarinet." },
      { name: "Bad Day on the Unit", line: "Fen shows up at midnight and can't say why." },
      { name: "Zine Fest", line: "A charming stranger is buying out Fen's table, and flirting with you." },
      { name: "Morning After", line: "You both woke up in Fen's bed. Nobody remembers. The group chat does." },
      { name: "Personal Space", line: "Fen is very high and has forgotten personal space exists." },
      { name: "Meet the Girlfriend", line: "Fen brought a date to co-op night. She's lovely. Your spot is still open." },
      { name: "Co-op Night (Omegaverse)", line: "Gentle Alpha Fen built a nest on the couch and insists it's just blankets." }
    ], link: "https://dreamjourneyai.com/creation/9cf156c0-3a87-4d79-b75e-508e46dc01b3", cover: "images/fen-selvaggio.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "frankie-moore", name: "Frankie Moore", title: "The Wynstead",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1294,
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
    collection: "Standalone Romances", category: "OC", status: "live", chats: 1288,
    pov: "", adult: false, warnings: [],
    tags: ["urban", "modernday", "sliceoflife", "girlfriend", "trans"],
    blurb: "34, piano tuner, Ridgewood, NYC, trans woman — out fifteen years, whimsigoth girlie 🖤✨",
    scenes: [
      { name: "Eleven Days", line: "You bought an upright off Marketplace and it sounds like a bag of nails. She's the third tuner you called and the only one who picked up." },
      { name: "A Ring and No Memory of It", line: "November 1st, a hangover, and a pawn shop receipt on the nightstand. She's not panicking. She's interested." },
      { name: "Plus-One, Hazard Pay", line: "The guild's annual dinner near LaGuardia. A hundred and fifty and a plate of chicken. Her ex will be there." },
      { name: "Four on the Floor", line: "A converted garage off Flushing, three drinks in, hair down, absolutely delighted." },
      { name: "Blind Date", line: "A wine bar on Woodward. She got there eight minutes early. She's had four of these and none of them were good." },
      { name: "Two Years", line: "The anniversary dinner, and everything she's trying to hand you." },
      { name: "Brandt Family Sunday", line: "Middle Village. Her mother has made too much food." },
      { name: "Patient Zero", line: "You're both sick, and for once nobody in the room can take care of anybody." },
      { name: "Three in the Morning", line: "The kitchen light. The thing she's been not saying." }
    ], link: "https://dreamjourneyai.com/creation/547b5c4a-7a05-4f72-8cda-0a677a797ee6", cover: "images/june-brandt.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "amos-haugen", name: "Amos Haugen", title: "",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 1036,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "rural", "rancher"],
    blurb: "Rancher. Makes breakfast at every hour and treats \"no thanks\" like the opening round of negotiations. The only thing that shuts Amos up is a question he's not ready to answer.",
    scenes: [
      { name: "End of the Gravel", line: "August, cured grass, a ranch at the end of nine miles of gravel, and a man who wants to tell you about his gate." },
      { name: "Kestrel Feed and Farm", line: "A two-minute errand now eleven minutes deep, a sack of mineral on his shoulder, and everything's moved since July." },
      { name: "Two Pastures Out", line: "A night past the full moon, a wolf at the fence line, and two hours later a truck with its lights off." },
      { name: "The Clinic, Ten Past Two", line: "Ankle torn on a snare, Toby stitching and unimpressed, and Amos definitely can't drive himself home." },
      { name: "The Diner, Quarter to Seven (A/B/O)", line: "Two coffees to go, warm leather and pine, and he walks right into you on his way out the door." }
    ], link: "https://dreamjourneyai.com/creation/62c75979-0ef8-411f-b062-a7d22c6072d3", cover: "images/amos-haugen.jpg", focus: "50% 0%", gallery: []
  },
  {
    id: "lena-millcroft", name: "Lena Millcroft", title: "CEO",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 868,
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
    scenes: [], link: "https://dreamjourneyai.com/creation/a925b45c-5af2-4049-b9d4-2cf169a0a33b", cover: "images/ennio-caravelle.jpg", focus: "38% 30%", gallery: []
  },
  {
    id: "tomas-solis", name: "Father Tomás Solís", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 712,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "dark", "gritty", "mafia", "priest"],
    blurb: "San Judas Tadeo · Chamblee, Georgia · AnyPOV",
    scenes: [
      { name: "Thursday Confession", line: "Past eight, doors locked. He just phoned in the last penitent's secret, and now the kneeler creaks again." },
      { name: "Parking Lot, 11:40 PM", line: "Behind the panadería after rain, he gives last rites to a man he arranged. Headlights pull in behind him." },
      { name: "The Rectory, After Two", line: "August heat, door propped on a brick, the second set of books open. The screen door creaks." },
      { name: "The Rectory, After Two (A/B/O)", line: "Same night, but he's an unbonded Alpha nine days into failing suppressants. You walk in anyway." }
    ], link: "https://dreamjourneyai.com/creation/efcd784c-b174-4b42-bdbe-4958778f4d6a", cover: "images/tomas-solis.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "aurel", name: "Aurel Medusozoa", title: "Last Call at the Abyss",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 650,
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
    collection: "Standalone Romances", category: "OC", status: "live", chats: 432,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["human", "modernday", "sliceoflife", "streamer"],
    blurb: "soft voice. painted nails. a little bell that jingles when he laughs. shy, sparkly, and quietly hoping you'll stay a while~ 🎀",
    scenes: [
      { name: "On Stream", line: "You drop into chat during one of his late cozy streams. He notices your name right away." },
      { name: "Cirque de Coffee", line: "A carnival-themed café at the midday rush. The barista with the bell choker has no idea you know he streams." },
      { name: "At the Convention", line: "His little signing table, no glow and no chat to hide behind. He's shy and a bit overwhelmed." }
    ], link: "https://dreamjourneyai.com/creation/75441226-5de5-4a6a-aae2-f49e427dd307", cover: "images/vex.jpg", focus: "62% 40%", gallery: []
  },
  {
    id: "julian-adams", name: "Julian Adams", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 412,
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
      { name: "Thursday, After Close", line: "He's forty feet up a hemlock arguing with Dave about rot, then he sees you coming up the path, and the saw shuts off." },
      { name: "Two-Nil Down", line: "Grass in his knee, a bruise he doesn't want you looking at yet, and a sentence he abandons in front of the open fridge." },
      { name: "Sick Day", line: "He used the key. He's never used the key. Four bags of shopping and a paperback with a lighthouse on it." },
      { name: "Redlands, Four Days", line: "His childhood bedroom, a Valencia tree his grandfather planted, and a sister who wants you to know he's been talking about a drawer." },
      { name: "Two in the Morning", line: "The radiator, the crack in the plaster shaped like Portugal, and the closest he has ever gotten." }
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
    collection: "Standalone Romances", category: "Other", status: "live", chats: 324,
    pov: "FemPOV", adult: true, warnings: ["sex worker"],
    tags: ["gritty", "hiddensocieties", "sapphic", "charleston"],
    blurb: "The woman who sells temporary love to Charleston's married women. She won't lie to you and she won't chase you. She'll just arrange it so you stay.",
    scenes: [
      { name: "The Carriage House", line: "She hasn't looked up yet. The gate sticks, and then it gives." },
      { name: "Terms", line: "Barefoot in her kitchen, counting the rules off on her fingers, saving the one about herself for last." },
      { name: "Beaufain Street", line: "A party in high season, and a woman in a blue dress across the room." },
      { name: "Four in the Morning", line: "On the kitchen floor with the cat, saying the true thing for once." }
    ], link: "https://dreamjourneyai.com/creation/e06b1040-4e23-4d11-bc6c-b5d720a3c134", cover: "images/adriana-waring.jpg", focus: "50% 35%", gallery: []
  },
  {
    id: "ava-chen", name: "Ava Chen", title: "Chen Customs",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 218,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "urban", "cars"],
    blurb: "26-year-old builder running Chen Customs. Ice queen with a wrench, builds cars that look like art and perform like weapons. Niko Caruso's only real competition. Currently deciding whether to align with the south side.",
    scenes: [
      { name: "Late Night Breakdown", line: "11:47 PM, your car's dead, and the ice queen of the east side was NOT expecting company." },
      { name: "Post-Race Win", line: "She just won the quarter-mile and is already frowning at her temperature logs." },
      { name: "The Spill", line: "7 AM, damp hair, two hours of sleep. A rare Ava sighting outside the shop." }
    ], link: "https://dreamjourneyai.com/creation/8b27f96e-a724-4344-9e19-79b283ab38fd", cover: "images/ava-chen.jpg", focus: "45% 25%", gallery: []
  },
  {
    id: "the-wind-in-the-wheat", name: "The Wind in the Wheat", title: "Aunt Charlie",
    collection: "Standalone Romances", category: "Romance", status: "live", chats: 162,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "lighthearted", "modernday", "ireland", "found family"],
    blurb: "☘ your Aunt Charlie won't ask why you came home. Doolin will ☘ Cozy open-world found family on the wild coast of Ireland, with six townies to fall for ☘",
    scenes: [
      { name: "Coming Home", line: "Charlie collects you from Shannon in the rain." },
      { name: "The Path at Dusk", line: "Fiadh, the watchtower, and a jar of cider." },
      { name: "Friday Session", line: "Cathal saves you a slow one at Daly's." },
      { name: "Orchid Survey", line: "6 a.m. mist, two flasks, and Rowan." },
      { name: "Last Crossing", line: "Tadhg, Nell, and a swell that might strand you on Inis Oírr." },
      { name: "Cold Water", line: "Tove, a runaway surfboard, and a free first lesson." },
      { name: "The Fourth Offer", line: "Declan at the door in the rain, and Charlie's not home." }
    ], link: "https://dreamjourneyai.com/creation/e15d3737-64c4-4aa1-baec-c58da484ea56", cover: "images/the-wind-in-the-wheat.jpg", focus: "49% 30%", gallery: []
  },
  {
    id: "camden-walsh", name: "Camden Walsh", title: "",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 156,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "sports", "baseball"],
    blurb: "Cam Walsh had everything: a major-league arm, a prospect's fame, a pretty face, and a long trail of broken hearts. Then his elbow gave out before he could reach Boston. Now the golden boy has nothing left to hide behind but himself.",
    scenes: [], link: "https://dreamjourneyai.com/creation/0854e550-3b29-4d58-af56-db47aae02b7f", cover: "images/camden-walsh.jpg", focus: "50% 20%", gallery: []
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
    collection: "Standalone Romances", category: "Other", status: "live", chats: 128,
    pov: "AnyPOV", adult: false, warnings: ["Blood"],
    tags: ["dark", "gritty", "mafia", "1986"],
    blurb: "It's 1986 in New Jersey. The Caldarari family rules quietly.",
    scenes: [], link: "https://dreamjourneyai.com/creation/140a778e-e977-4f00-8781-f0cb0e79f0f1", cover: "images/tullio-caldarari.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "kenai-bevers", name: "Kenai Bevers", title: "Smokejumper",
    collection: "Standalone Romances", category: "Other", status: "live", chats: 78,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["gritty", "modernday", "rural", "alaska", "firefighter"],
    blurb: "🐺❤️‍🔥 golden retriever energy smokejumper with a runaway husky, an A-frame in the birches, and a nervous stutter only love can trigger ❤️‍🔥🐺",
    scenes: [
      { name: "The Diplomat", line: "Midnight sun, June. A husky with mismatched eyes walks into your yard. His stuttering owner follows four minutes later." },
      { name: "Forty Below", line: "Your car died on Goldstream Road at forty below. A truck pulls up nose to nose, and the stutter's gone." },
      { name: "Silvers", line: "September, the season's over. He's thigh-deep at the gravel bar, talking to a salmon in Dena'ina." }
    ], link: "https://dreamjourneyai.com/creation/5386c5d6-26d1-422b-8f4f-d01dc2e90ef4", cover: "images/kenai-bevers.jpg", focus: "45% 30%", gallery: []
  },
  {
    id: "sloane-matthews", name: "Sloane Matthews", title: "Muralist",
    collection: "Standalone Romances", category: "OC", status: "live", chats: 56,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["romance", "artist", "modernday", "gothic"],
    blurb: "29 | Muralist | romantic gothic × urban decay × darkwave | Some people leave ghosts behind them, Sloane paints hers on walls.",
    scenes: [
      { name: "The Gallery", line: "She's standing in front of one of her own paintings, trying desperately to avoid talking about it." },
      { name: "The Diner", line: "4 a.m., terrible coffee, two strangers who should probably be sleeping." },
      { name: "The Stray Cat", line: "An alley, a soaked little cat under a car, and Sloane being ridiculously soft when she thinks nobody's watching." },
      { name: "The Apartment", line: "Established relationship. Late at night, comfortable, and a kind of vulnerability she doesn't know what to do with." },
      { name: "The Rooftop", line: "Established relationship, after your first genuinely painful argument, when silence isn't going to save her anymore." }
    ], link: "https://dreamjourneyai.com/creation/b341b02b-c188-414c-8f5f-e0572a765c59", cover: "images/sloane-matthews.jpg", focus: "50% 35%", gallery: []
  },

  /* ======================= SCENARIOS ======================= */
  {
    id: "station-halcyon", name: "Station: Halcyon", title: "40 Meters Below",
    collection: "Scenarios", category: "Romance", status: "live", chats: 7842,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "gritty", "underwater"],
    blurb: "Station Halcyon | 40 Meters Below",
    scenes: [
      { name: "Day One", line: "Four racks, five bodies, and a supervisor who needs your name in a column before anything else happens." },
      { name: "Rain Check", line: "Weather's shut them down for two days. Oliver found a deck of cards in Leonard's kit and has opinions about the stakes." },
      { name: "Everything That's Left", line: "Resupply is two days late. Colin's cooking anyway. Five people in a galley built for two." },
      { name: "Clippers", line: "Day eight of every rotation, Emmett cuts everyone's hair. Nobody has ever asked how that started." },
      { name: "Nine of Nineteen", line: "Last dive. Two seats in the bell, four men who want them, and Faye wants an answer in twenty minutes." },
      { name: "Something at the Glass", line: "Night watch. Something crossed the floods wrong, and two men go out past the legs to look." },
      { name: "Nine of Nineteen, and Something Else", line: "Recovery dive at the wreck. The silt won't settle, and it's not the current." }
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
  {
    id: "half-measures", name: "[half-measures]", title: "indie-alt band",
    collection: "Scenarios", category: "Romance", status: "live", chats: 8,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["artist", "bard", "modernday", "band"],
    blurb: "They were never supposed to become famous. Four university friends built a band out of loneliness, late nights, and borrowed equipment. Now Half-Measures has a viral record, a demanding manager, and one question: can they survive success?",
    scenes: [
      { name: "Bev's Post-Gig Tiebreaker", line: "After the gig at the dive on Foster, the band is split, and you're the deciding vote." }
    ], link: "https://dreamjourneyai.com/creation/fffef6f2-a805-4fa5-8989-5f83cdc74cd1", cover: "images/half-measures.jpg", focus: "55% 45%", gallery: []
  },

  /* ======================= FANDOM ======================= */
  {
    id: "the-pitt", name: "The Pitt", title: "Pittsburgh Trauma Medical Center",
    collection: "Fandom", category: "Romance", status: "live", chats: 28722,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["urban", "modernday", "gritty", "medical"],
    blurb: "You're arriving at Pittsburgh Trauma Medical Center — affectionately known as The Pitt. You can be an employee, a visitor, or a patient — your choice :)",
    scenes: [
       { name: "medical intern path", line: "if you wish to start as a medical intern" },
       { name: "Waiting Room", line: "For if you'd like to start in the waiting room as a patient" },
    ], 
     link: "https://dreamjourneyai.com/creation/cf82b195-8f5d-404b-b318-6c549c04c213", cover: "images/the-pitt.jpg", focus: "50% 30%", gallery: []
  },
  {
    id: "howls-moving-castle", name: "Howl's Moving Castle", title: "",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 1298,
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
    collection: "Fandom", category: "Book", status: "live", chats: 674,
    pov: "FemPOV", adult: false, warnings: [],
    tags: ["historical", "love", "rural", "romance", "sapphic"],
    blurb: "Crossmore, 1995. You wouldn't be seen with her, so she let you go. Now you're back at her door. Post-canon Sunburn (Chloe Michelle Howarth). You stand where Lucy stood; your past is yours to write. See comment for more info 💛",
    scenes: [
      { name: "Clearing of the House", line: "Late March. You let yourself into the big house and find her upstairs at her mother's wardrobe, where she has taken nothing out since ten o'clock." },
      { name: "Sunday in the Village", line: "Sunday in April. She is on the wall opposite the church in gold eyeshadow, in full view of the parish coming out of Mass, with a space beside her." },
      { name: "Room to Let - No Est. History", line: "May, pouring rain. A card in the shop window says room to let. You knock, she opens the door on the chain, and she has no idea who you are." },
      { name: "The Letter Back", line: "You pushed it through her door and went. Five weeks on, four pages come back in her handwriting, written at one in the morning and not at all like her." },
      { name: "Civil", line: "You meet her in Kealy's shop with the whole village listening. She is perfectly pleasant to you for four minutes and gives you nothing at all." },
      { name: "Seen", line: "Saturday in the town. Susannah comes out of the hotel with a woman you do not know, and she does not step away from her when she sees you." },
      { name: "The Bus Went Without Her", line: "The bench outside the old post office, a packed bag at her feet, and the half eleven bus to Cork gone twenty minutes ago without her on it." },
      { name: "The Function Room", line: "A twenty-first in a hotel function room outside Crossmore, half the parish there, a karaoke machine, and Susannah O'Shea four gins in and already up on the stage once." },
      { name: "Dublin", line: "A bar in Dublin, and Susannah O'Shea is at a corner table on her own, two hundred miles from where she is supposed to be." }
    ], 
     link: "https://dreamjourneyai.com/creation/71e88a69-9c98-433e-947a-c7673f38f590", cover: "images/susannah-oshea.jpg", focus: "35% 20%", gallery: []
  },
  {
    id: "under-silverpelt", name: "Under Silverpelt", title: "Warrior Cat Demi-humans",
    collection: "Fandom", category: "Fantasy", status: "live", chats: 312,
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
      { name: "Café Lindengracht", line: "Rain, jenever, and a stranger who doesn't move on." },
      { name: "The Gallery of Small Proofs", line: "An hour before closing, in front of the one painting she's sure of." },
      { name: "Nothing Open", line: "Four below, everything locked, six hours until light." },
      { name: "The Anniversary", line: "The 29th of July, and the sun will not stop going down." }
    ], link: "https://dreamjourneyai.com/creation/53e21d48-36ca-4e55-a564-752a6e6a7e81", cover: "images/addie-larue.jpg", focus: "50% 30%", gallery: []
  },

  /* ======================= ON THE DESK (status: "desk") ======================= */
  {
    id: "carmilla", name: "Carmilla", title: "After Audrey",
    collection: "Fandom", category: "Book", status: "desk", chats: 0,
    pov: "FemPOV", adult: true, warnings: ["Blood"],
    tags: ["vampire", "sapphic", "gothic", "louisiana", "1950s", "slow burn"],
    blurb: "June 1957. Hurricane Audrey has torn the coast apart, and the girl the storm leaves on your porch says her name is Carmilla. She sleeps through the mornings, asks you to sit up with her at night, and looks at you like she's done all this before.",
    scenes: [
      { name: "May I Come In?", line: "1957. Sundown after the storm, at your door." },
      { name: "After Dark Only", line: "Present day. The dating-app girl walks to your house and waits at the threshold." },
      { name: "Fais Do-Do", line: "A waltz under string lights, and she does not share." },
      { name: "The Photograph", line: "1912, and she hasn't aged a day." },
      { name: "The First Ask", line: "Heat lightning, a sleeping porch, one question." },
      { name: "Le Fanu", line: "Someone wrote a book about her." },
      { name: "Power's Out", line: "No AC, and she's cold to the touch." }
    ],
    link: "", cover: "", gallery: []
  },
  {
    id: "corpse-bride", name: "Emily", title: "The Corpse Bride",
    collection: "Fandom", category: "Fantasy", status: "desk", chats: 0,
    pov: "AnyPOV", adult: false, warnings: ["Death"],
    tags: ["gothic romance", "slow burn", "afterlife", "gallows humor", "victorian"],
    blurb: "You only went into the woods to practice your wedding vows. You put the ring on what you thought was a root. Now a bride in a rotting veil says you're hers, Victoria is still waiting for you among the living, and Lord Barkis would very much like all of it to go wrong.",
    scenes: [
      { name: "The Vow", line: "The woods at dusk, your wedding vows finally right, and a ring on what you thought was a root." }
    ],
    link: "", cover: "", gallery: []
  },

  /* ======================= NOT PUBLIC (status: "hidden") =======================
     These don't show anywhere on the site. When one goes public, change
     its status to "live" and fill in its chats. */
   {
    id: "rhys-calloway", name: "Rhys Calloway", title: "Eastside Community Center",
    collection: "Rust Harbour", category: "OC", status: "desk", chats: 56,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["modernday", "sliceoflife", "community center"],
    blurb: "Rhys bought a dead union hall so thirty kids would have somewhere to land, and the note comes due in three years. They fiddle on Thursdays, read cards for free, and answer every hard question with a story. Doors open. They forgot to lock up again.",
    scenes: [
      { name: "Whatever the Rain Wants", line: "A rain-heavy Tuesday in Dockside, the Crossroads nearly empty. The first drink comes with a free question." },
      { name: "Saturday Session", line: "Fiddles in the corner, the session on its third wind, and you've been sitting on empty for half a set." },
      { name: "After Hours, One Card", line: "Last call's gone, Nan's deck is out of its silk, and you're the last one in the room." }
    ], link: "https://dreamjourneyai.com/creation/49b96e9b-1d54-4785-b805-0a4b42ca8ac2", cover: "images/rhys-calloway.jpg", focus: "50% 15%", gallery: []
  },
  {
    id: "the-crucible", name: "The Crucible", title: "Blood of Hercules",
    collection: "Fandom", category: "Historical", status: "hidden", chats: 0,
    pov: "", adult: false, warnings: [],
    tags: ["book", "dark", "demigod", "mentor"],
    blurb: "You survived the massacre. That was the easy part. A year in the Crucible, four men watching, and a velvet box already on your bunk.",
    scenes: [
      { name: "The Velvet Box", line: "The morning after the massacre, and a small black box is sitting on your cot with no card." },
      { name: "The Far Bank", line: "Cross the Styx, be graded on the crossing. Kharon is watching from the boat." },
      { name: "Mutt", line: "Four in the morning in an empty training hall, Patroclus talking, Achilles silent against the wall." },
      { name: "Corridor", line: "Augustus is waiting where the hall bends toward the Chthonic wing. Four people read your exam before the instructor did." }
    ], link: "https://dreamjourneyai.com/creation/ab2ad092-d456-4000-861c-8d120cbbeb7e", cover: "images/the-crucible.jpg", focus: "50% 40%", gallery: []
  },
  {
    id: "rowan-nicholson", name: "Rowan Nicholson", title: "Pine For It",
    collection: "Standalone Romances", category: "OC", status: "hidden", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["furry", "kemonomimi", "modernfantasy"],
    blurb: "🥐 PINE FOR IT || open 5:30 · cash only when the reader's down · which is often",
    scenes: [], link: "https://dreamjourneyai.com/creation/4ebbd216-2bbf-4461-a64e-3bc41116d6f2", cover: "images/rowan-nicholson.jpg", focus: "35% 30%", gallery: []
  },
  {
    id: "cole-dawson", name: "Cole Dawson", title: "",
    collection: "Standalone Romances", category: "OC", status: "hidden", chats: 0,
    pov: "AnyPOV", adult: false, warnings: [],
    tags: ["dark", "modernday", "yandere"],
    blurb: "Cole is the charming handyman/restoration manager on your home | he's a bit obsessed with the house…",
    scenes: [], link: "", cover: "", gallery: []
  }
];
