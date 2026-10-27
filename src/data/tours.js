import { IMAGES } from './site'

export const TOUR_CATEGORIES = ['All', 'Primates', 'Wildlife', 'Culture & City', 'Lakes', 'Hiking', 'East Africa']

export const TOURS = [
  {
    id: 'gorilla-trekking',
    title: 'Mountain Gorilla Trekking',
    location: 'Volcanoes National Park',
    category: 'Primates',
    days: 3,
    group: '1–8 guests',
    image: IMAGES.gorillaThinker,
    badge: 'Signature',
    summary:
      'Hike the bamboo slopes of the Virunga volcanoes and spend an unforgettable hour face to face with a habituated mountain gorilla family.',
    highlights: [
      'Gorilla permit arranged',
      'Golden monkey option',
      'Twin Lakes viewpoint',
      'Iby’iwacu cultural village',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Kigali → Musanze',
        text: 'Pick-up from your hotel or the airport and a scenic drive north through the hills to Musanze. Evening briefing and dinner with views of the volcanoes.',
      },
      {
        day: 'Day 2',
        title: 'Gorilla trek',
        text: 'Early check-in at Kinigi park HQ, then trek with expert rangers to your assigned gorilla family. Afternoon visit to a local community or the Twin Lakes of Burera & Ruhondo.',
      },
      {
        day: 'Day 3',
        title: 'Golden monkeys & return',
        text: 'Optional golden monkey trek or Dian Fossey hike in the morning, then a relaxed drive back to Kigali.',
      },
    ],
  },
  {
    id: 'akagera-big-five',
    title: 'Akagera Big Five Safari',
    location: 'Akagera National Park',
    category: 'Wildlife',
    days: 2,
    group: '1–7 guests',
    image: IMAGES.giraffe,
    badge: 'Popular',
    summary:
      'Rwanda’s only savannah park, home to lions, rhinos, elephants, buffalo and leopards. Game drives in a pop-top 4x4 and a boat safari on Lake Ihema.',
    highlights: [
      'Pop-top 4x4 game drives',
      'Lake Ihema boat safari',
      'Rhinos, lions & elephants',
      'Sunset in the savannah',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Kigali → Akagera',
        text: 'Early departure east to Akagera. Game drive through the southern woodlands, then an afternoon boat safari among hippos, crocodiles and water birds on Lake Ihema.',
      },
      {
        day: 'Day 2',
        title: 'Northern plains game drive',
        text: 'Dawn game drive into the northern plains where the big cats, rhinos and giraffes roam, before heading back to Kigali in the afternoon.',
      },
    ],
  },
  {
    id: 'nyungwe-canopy',
    title: 'Nyungwe Canopy & Chimpanzees',
    location: 'Nyungwe Forest National Park',
    category: 'Primates',
    days: 3,
    group: '1–8 guests',
    image: IMAGES.canopyWalk,
    summary:
      'Walk among the treetops on East Africa’s only canopy walkway and track chimpanzees through one of Africa’s oldest montane rainforests.',
    highlights: ['Canopy walkway', 'Chimpanzee tracking', '13 primate species', 'Tea plantations'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Kigali → Nyungwe',
        text: 'Drive south-west via Huye and the King’s Palace Museum in Nyanza, arriving at the edge of the forest in the evening.',
      },
      {
        day: 'Day 2',
        title: 'Chimps & canopy walk',
        text: 'Early morning chimpanzee trek, then the famous canopy walkway suspended 50 m above the forest floor.',
      },
      {
        day: 'Day 3',
        title: 'Tea estates & return',
        text: 'Guided walk through the Gisakura tea plantation before returning to Kigali.',
      },
    ],
  },
  {
    id: 'lake-kivu',
    title: 'Lake Kivu Escape',
    location: 'Rubavu & Karongi',
    category: 'Lakes',
    days: 2,
    group: '1–10 guests',
    image: IMAGES.guideBoat,
    summary:
      'Unwind on the shores of one of Africa’s great lakes: boat trips to the islands, hot springs, coffee farms and golden sunsets over the water.',
    highlights: ['Island boat cruise', 'Coffee farm visit', 'Hot springs', 'Lakeside sunset'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Kigali → Rubavu',
        text: 'Drive along the Congo-Nile corridor to Rubavu. Afternoon at the beach and an evening stroll along the lakeshore.',
      },
      {
        day: 'Day 2',
        title: 'Islands & coffee',
        text: 'Morning boat cruise to Napoleon’s Island and the fishermen’s villages, a coffee washing station visit, then the return to Kigali.',
      },
    ],
  },
  {
    id: 'kigali-city',
    title: 'Kigali City & Culture Tour',
    location: 'Kigali',
    category: 'Culture & City',
    days: 1,
    group: '1–12 guests',
    image: IMAGES.kigaliStreet,
    summary:
      'Discover Africa’s cleanest capital: the Genocide Memorial, colourful markets, art studios, the car-free zone and a rooftop dinner with a view.',
    highlights: ['Kigali Genocide Memorial', 'Kimironko market', 'Art galleries', 'Rooftop dinner'],
    itinerary: [
      {
        day: 'Morning',
        title: 'History & reflection',
        text: 'Hotel pick-up and a guided visit to the Kigali Genocide Memorial.',
      },
      {
        day: 'Afternoon',
        title: 'Markets & art',
        text: 'Kimironko market, the Nyamirambo neighbourhood and local art studios. Local lunch included.',
      },
      {
        day: 'Evening',
        title: 'City lights',
        text: 'Sundowner and dinner at a panoramic rooftop restaurant before your drop-off.',
      },
    ],
  },
  {
    id: 'rwanda-uganda',
    title: 'Primates & Savannah Combo',
    location: 'Rwanda & Uganda',
    category: 'East Africa',
    days: 7,
    group: '2–7 guests',
    image: IMAGES.chimps,
    badge: 'Cross-border',
    summary:
      'The great East African circuit: gorillas in the Virungas, chimps in the forest and tree-climbing lions on the Ugandan savannah, all with one team.',
    highlights: [
      'Gorillas & chimpanzees',
      'Queen Elizabeth NP',
      'Kazinga Channel cruise',
      'Cross-border logistics handled',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Kigali & Volcanoes',
        text: 'City orientation, then the drive to Musanze and your gorilla trek.',
      },
      {
        day: 'Day 3–4',
        title: 'Into Uganda',
        text: 'Cross into Uganda via the Bunagana or Cyanika border to Queen Elizabeth National Park. Game drives and a Kazinga Channel boat cruise.',
      },
      {
        day: 'Day 5–6',
        title: 'Kyambura & Ishasha',
        text: 'Chimpanzee tracking in Kyambura Gorge and a search for the tree-climbing lions of Ishasha.',
      },
      { day: 'Day 7', title: 'Return to Kigali', text: 'Scenic drive back to Rwanda for your departure.' },
    ],
  },
  {
    id: 'cultural-village',
    title: 'Rwandan Village Life',
    location: 'Musanze & Eastern Province',
    category: 'Culture & City',
    days: 1,
    group: '1–15 guests',
    image: IMAGES.intoreDance,
    summary:
      'Dance with Intore performers, grind sorghum, carry bananas home from the farm and share a meal cooked in a family kitchen.',
    highlights: ['Traditional Intore dance', 'Banana beer making', 'Home-cooked lunch', 'Community-led'],
    itinerary: [
      {
        day: 'Morning',
        title: 'Welcome to the village',
        text: 'Traditional welcome and drum performance, then a walk through the farms with your hosts.',
      },
      {
        day: 'Afternoon',
        title: 'Hands-on traditions',
        text: 'Cook, grind, weave and dance alongside the community before returning to your hotel.',
      },
    ],
  },
  {
    id: 'bisoke-hike',
    title: 'Mount Bisoke Crater Lake Hike',
    location: 'Volcanoes National Park',
    category: 'Hiking',
    days: 1,
    group: '1–8 guests',
    image: IMAGES.volcano,
    summary:
      'Climb a dormant Virunga volcano through bamboo and giant lobelias to a stunning crater lake on the Rwanda–Congo border.',
    highlights: ['3,711 m summit', 'Crater lake views', 'Afro-alpine vegetation', 'Expert park rangers'],
    itinerary: [
      {
        day: 'Morning',
        title: 'Briefing & ascent',
        text: 'Early briefing at Kinigi park HQ, then a steady climb with rangers and porters through bamboo and hagenia forest.',
      },
      {
        day: 'Afternoon',
        title: 'Summit & descent',
        text: 'Picnic lunch beside the crater lake, then descend and return to your lodge in Musanze or to Kigali.',
      },
    ],
  },
  {
    id: 'east-africa-grand',
    title: 'Great East Africa Safari',
    location: 'Rwanda · Tanzania · Kenya',
    category: 'East Africa',
    days: 10,
    group: '2–7 guests',
    image: IMAGES.lionsJeep,
    summary:
      'Gorillas in Rwanda, then on to the endless plains of the Serengeti and Maasai Mara for the big cats and the Great Migration.',
    highlights: ['Serengeti & Ngorongoro', 'Maasai Mara', 'Great Migration season', 'Flights & transfers arranged'],
    itinerary: [
      { day: 'Day 1–3', title: 'Rwanda', text: 'Kigali city tour and gorilla trekking in Volcanoes National Park.' },
      {
        day: 'Day 4–7',
        title: 'Tanzania',
        text: 'Fly to Kilimanjaro, then game drives in the Serengeti and down into the Ngorongoro Crater.',
      },
      {
        day: 'Day 8–10',
        title: 'Kenya',
        text: 'Cross into the Maasai Mara for the big cats and river crossings before flying out of Nairobi.',
      },
    ],
  },
]
