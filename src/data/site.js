const img = (name) => `/images/${name}`

export const CONTACT = {
  name: 'E&C Tour and Safari',
  phoneDisplay: '+250 788 355 122',
  phoneLocal: '0788 355 122',
  phoneHref: 'tel:+250788355122',
  whatsapp: '250788355122',
  address: 'KK 16 Ave, Kigali, Rwanda',
  facebook: 'https://web.facebook.com/p/EC-Tours-and-Safari-100063705503611',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4588191038347!2d30.10185387532405!3d-1.9705732367575957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca64ed40745b3%3A0x71924d8e90a644ad!2sE%26C%20Tour%20and%20Safari!5e0!3m2!1sen!2srw!4v1793082658215!5m2!1sen!2srw',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=E%26C+Tour+and+Safari+KK+16+Ave+Kigali',
}

export const whatsappLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const IMAGES = {
  // High-resolution scenery (Unsplash)
  heroGorilla: img('web/hero-gorilla.jpg'),
  heroSafari: img('web/hero-safari.jpg'),
  heroNyungwe: img('web/hero-nyungwe.jpg'),
  heroKivu: img('web/hero-kivu.jpg'),
  elephantsDrive: img('web/elephants-drive.jpg'),
  thousandHills: img('web/thousand-hills.jpg'),
  acaciaSunset: img('web/acacia-sunset.jpg'),

  // E&C's own photos
  canopyWalk: img('42494988_1543291115772942_1962788019773636608_n.jpg'),
  gorillaFamily: img('433964778_944733897660118_2626462492436257297_n.jpg'),
  lionsJeep: img('482359758_1224804336319738_3376219906187251842_n.jpg'),
  boatDock: img('484944135_1233728635427308_3686963525989401869_n.jpg'),
  hippos: img('487947860_1249151300551708_2086271729159345375_n.jpg'),
  rhinoPlains: img('488586077_1249151347218370_432231696631003749_n.jpg'),
  rhinoGrass: img('488610906_1251769950289843_4139931531602502996_n.jpg'),
  eland: img('488910107_1251415526991952_5944416776728744765_n.jpg'),
  gorillaThinker: img('489754159_1251415753658596_3102871000704115178_n.jpg'),
  elephantsGiraffes: img('491426789_1258882742911897_5787247139713770787_n.jpg'),
  roanAntelope: img('491842464_1262698532530318_9151415341247788662_n.jpg'),
  guideOnJeep: img('492049616_1267981508668687_681425818531645374_n.jpg'),
  elephantsTrack: img('492060317_1269652371834934_979297681123494937_n.jpg'),
  guestsKivu: img('492486738_1271705248296313_2534449080202946050_n.jpg'),
  bananaLady: img('492507345_1271703004963204_7995971675793706795_n.jpg'),
  guestsVillage: img('492523697_1271816291618542_1287502960019424185_n.jpg'),
  guestsMarket: img('492743843_1271435654989939_4237075475747888944_n.jpg'),
  babyGorillaForest: img('493075800_1272502561549915_7619209845817561137_n.jpg'),
  kigaliStreet: img('493289363_1271435788323259_3933909903706872696_n.jpg'),
  kigaliDinner: img('493290617_1271435781656593_4067265480886044249_n.jpg'),
  tourVan: img('493600723_1271503404983164_7997853746099157646_n.jpg'),
  guestsSunset: img('493721083_1271751524958352_5527289059767315674_n.jpg'),
  intoreDance: img('494284367_1274672307999607_5745497177974433112_n.jpg'),
  chimps: img('495369512_1277809354352569_4066291324099172308_n.jpg'),
  carH1: img('495527430_1285077596959078_3032082859062006162_n.jpg'),
  carCorolla: img('495609726_1285077893625715_3055481035845341534_n.jpg'),
  carTucsonSilver: img('496077200_1286998266767011_5445150408495167581_n.jpg'),
  carPrado: img('497352609_1286998226767015_3022665241503913758_n.jpg'),
  lionCub: img('500811592_9243017692466874_2587318106088865393_n.jpg'),
  safariCruiser: img('499556226_9243017585800218_5313792151023656195_n.jpg'),
  carSonata: img('504097291_10227918959461626_3103656999762089853_n.jpg'),
  babyGorilla: img('505418494_9325365057565470_3679489495808618608_n.jpg'),
  carSantaFe: img('514413231_1332739108859593_9086586516601517523_n.jpg'),
  giraffe: img('562333502_1431423302324506_6383148797522034803_n.jpg'),
  volcano: img('646117552_1561786279288207_5880330553461483074_n.jpg'),
  juvenileGorilla: img('749514400_1695359489264218_4922136497606836193_n.jpg'),
  carLandCruiserRear: img('847746303_1786444706822362_7313265548465236703_n.jpg'),
  guideBoat: img('849560327_1786444726822360_8663653070663950820_n.jpg'),
  carLandCruiserSide: img('855374780_1791146503018849_1356558835798541004_n.jpg'),
  helicopter: img('unnamed.webp'),
}

export const NAV_LINKS = [
  { href: '#tours', label: 'Tours' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#car-rental', label: 'Car Rental' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export const SERVICES = [
  'Gorilla trekking',
  'Wildlife safari',
  'Chimpanzees & Nyungwe',
  'Lake Kivu getaway',
  'Kigali city & culture',
  'East Africa combo',
  'Car rental',
  'Airport transfer',
  'Custom trip',
]
