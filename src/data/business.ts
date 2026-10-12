export const business = {
  name: "Clapham Car Care",
  legalName: "TNL The Next Level Automotive",
  alternateName: ["TNL Automotive", "TNL The Next Level Automotive"],
  category: "Car wash and detailing",
  phoneDisplay: "07530 077007",
  phoneTel: "+447530077007",
  address: {
    street: "95 High Street",
    locality: "Clapham",
    region: "Bedford",
    postcode: "MK41 6AQ",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: { lat: 52.1608065, lng: -0.4965611 },
  plusCode: "5G63+89",
  mapsUrl: "https://maps.app.goo.gl/t3q85wTN4hqsFnVR8",
  placeId: "ChIJI6Zf6U6xd0gRoaTMiNQAEZA",
  rating: 4.9,
  reviewCount: 18,
  hours: [
    { days: "Monday to Saturday", opens: "09:30", closes: "18:00", label: "9:30am to 6pm" },
    { days: "Sunday", opens: "10:00", closes: "16:00", label: "10am to 4pm" },
  ],
  dayHours: [
    { day: "Monday", opens: "09:30", closes: "18:00" },
    { day: "Tuesday", opens: "09:30", closes: "18:00" },
    { day: "Wednesday", opens: "09:30", closes: "18:00" },
    { day: "Thursday", opens: "09:30", closes: "18:00" },
    { day: "Friday", opens: "09:30", closes: "18:00" },
    { day: "Saturday", opens: "09:30", closes: "18:00" },
    { day: "Sunday", opens: "10:00", closes: "16:00" },
  ],
} as const;

export const levelOne = {
  name: "Level 1",
  includes: [
    "Wheel and tyre clean",
    "Decontaminating pre-wash",
    "Snow foam",
    "Hand wash",
    "Dry",
    "Tyre shine",
  ],
  prices: [
    { name: "Small and medium cars", price: "£15" },
    { name: "Large car, van, or 4x4", price: "£19" },
  ],
  note: "Heavily soiled vehicles may have a £10 surcharge.",
} as const;

export const extras = [
  { name: "Paint correction", price: "from £149" },
  { name: "Ceramic coating, up to 5 years of protection", price: "from £199" },
  { name: "Fabric hood cleaning and protection", price: "from £45" },
  { name: "Interior upholstery cleaning and stain removal", price: "from £45" },
  { name: "Smart repair", price: "from £95" },
  { name: "Alloy wheel refurbishment", price: "from £125" },
  { name: "Window tinting", price: "from £125" },
  { name: "Paint protection film", price: "from £125" },
  { name: "Vehicle wrapping", price: "from £250" },
] as const;

export type Review = {
  name: string;
  detail?: string;
  stars: number;
  when: string;
  text: string;
  reply?: string;
  named: boolean;
};

export const reviews: Review[] = [
  {
    name: "hayabusa nutter",
    detail: "7 reviews on Google",
    stars: 5,
    when: "3 months ago",
    named: true,
    text: "Hi, very happy with the work carried out on my car and very impressed with the finish. Also a big thing for me is the quality of products used. I had a Level 3 clean and was very impressed, and will be back again.",
    reply:
      "Hi Pal. Thank you for your great review and we are glad you were happy. We look forward to seeing you again. Thanks, Clapham Car Care Team.",
  },
  {
    name: "Mrs W",
    detail: "4 reviews on Google",
    stars: 5,
    when: "7 months ago",
    named: true,
    text: "I recently used a family-run car cleaning business in the area, and I honestly could not be happier with the experience. From the moment I arrived, the service felt personal and welcoming. You can really tell when a business is run by people who genuinely care about their work and their customers. The team took the time to ask about specific areas I wanted them to focus on and explained clearly what their cleaning package included. The quality of the work was outstanding. My car had not had a proper deep clean in months, and by the time they were finished, it looked almost brand new. The exterior was spotless and gleaming, the wheels were scrubbed to perfection, and even stubborn dirt in hard-to-reach areas was completely gone. Inside, every surface was cleaned and polished, the carpets were thoroughly vacuumed, and the whole car smelled fresh without being overpowering. What really stood out to me was the attention to detail. Little things, like neatly arranging items left in the glove box and making sure no streaks were left on the windows, showed how much pride they take in their work. It did not feel rushed or mechanical. It felt careful and thorough. On top of that, their pricing was fair and transparent, especially considering the level of service provided. Supporting a small family business instead of a large chain also felt good, knowing the money goes directly to people who work hard and value their customers. If you are looking for a reliable, friendly, and detail-oriented car cleaning service, I would highly recommend giving this family-run business a try. I will definitely be going back.",
    reply:
      "Thank you for your glowing review Mrs W. It is greatly appreciated. We are glad you were happy with the results of our work and look forward to seeing you again. Many thanks again. Clapham Car Care Team.",
  },
  {
    name: "Ian Joseph",
    detail: "Local Guide, 46 reviews on Google",
    stars: 5,
    when: "5 months ago",
    named: true,
    text: "An excellent and friendly service, all costs are transparent, so you won't be shocked.",
    reply:
      "Hi Ian. Thank you for your kind words and we are glad you were happy with the service. We look forward to seeing you again. The Clapham Car Care Team.",
  },
  {
    name: "Tracie Pryke",
    detail: "3 reviews on Google",
    stars: 5,
    when: "a year ago",
    named: true,
    text: "Great service provided and a good price as well. Took my car in at around 10am and asked for it to be ready around noon. Received a call just after noon already to be collected. Cash and card payment accepted. Definitely will be back.",
    reply:
      "Hi Tracie, thank you for using Clapham Car Care and for your kind words. We look forward to seeing you again.",
  },
  {
    name: "Mohit Sharma",
    detail: "4 reviews on Google",
    stars: 5,
    when: "a year ago",
    named: true,
    text: "They were very polite, and very professional. I was so pleased with the result, my car looks amazing, and you could see they took pride in their work. I would highly recommend them.",
    reply:
      "Hi Mohit. Thank you for leaving your review. We hope to see you again soon. Clapham Car Care Team.",
  },
  {
    name: "Google review",
    stars: 5,
    when: "14 February 2026",
    named: false,
    text: "Great service and the car looks amazing. Thanks so much.",
  },
  {
    name: "Google review",
    stars: 5,
    when: "16 November 2025",
    named: false,
    text: "Another job well done.",
  },
  {
    name: "Google review",
    stars: 5,
    when: "3 October 2025",
    named: false,
    text: "Purchased a small van from these guys at TNL 2 weeks ago and it was as described. Prepared really well. Could not tell it had sign writing on previously. Great prep, great little van. Thanks guys.",
  },
  {
    name: "Google review",
    stars: 5,
    when: "3 October 2025",
    named: false,
    text: "Super clean and efficient service. Inside and out my car was spotless after using Clapham Car Care. Booked in nice and easy and collected on time. Brilliant team and will definitely be using again.",
  },
  {
    name: "Google review",
    stars: 5,
    when: "2 October 2025",
    named: false,
    text: "Great job on my Discovery 4. It was not in the best shape after a trip away and they made it come up new. Will definitely be using again.",
  },
];

export const areas = [
  {
    name: "Clapham",
    miles: "on the High Street",
    text: "The bay is at 95 High Street, in the row with the motor trade units. Look for the black front and the Clapham Car Care sign.",
  },
  {
    name: "Brickhill",
    miles: "around 1 mile",
    text: "Brickhill sits just south of the village. It is a short run up towards Clapham High Street.",
  },
  {
    name: "Oakley",
    miles: "around 2 miles",
    text: "Oakley is the next village north. Come down through Clapham and the wash is on the High Street.",
  },
  {
    name: "Bromham",
    miles: "around 2 miles",
    text: "Bromham is to the west. Drivers come across and leave the car with us for a Level 1 or a booked extra.",
  },
  {
    name: "Biddenham",
    miles: "around 2 miles",
    text: "Biddenham is south-west of the bay. The High Street unit is easy to find once you are in the village.",
  },
  {
    name: "Milton Ernest",
    miles: "around 2 miles",
    text: "Milton Ernest is north of Oakley. People drive down to the bay rather than using a supermarket wash.",
  },
  {
    name: "Bedford",
    miles: "around 2 miles",
    text: "Bedford town centre is south of Clapham. Come up the High Street. We are open seven days, with shorter hours on Sunday.",
  },
  {
    name: "Putnoe",
    miles: "around 3 miles",
    text: "Putnoe is on the north side of Bedford. The drive up to Clapham is straightforward in normal traffic.",
  },
  {
    name: "Goldington",
    miles: "around 3 miles",
    text: "Goldington is east of Bedford town. Allow a little longer if you are coming at school-run time.",
  },
  {
    name: "Ravensden",
    miles: "around 3 miles",
    text: "Ravensden is north-east of Bedford. The bay is a village hand wash, not a drive-through tunnel.",
  },
  {
    name: "Kempston",
    miles: "around 3 miles",
    text: "Kempston is south of the river. Drivers bring daily cars and larger vehicles. A large car, van, or 4x4 is £19 for Level 1.",
  },
  {
    name: "Renhold",
    miles: "around 4 miles",
    text: "Renhold is east of the town. Call before you set off if you want an extra such as paint correction, so we can book the time.",
  },
] as const;

export const faqs = [
  {
    q: "Where is the bay?",
    a: "95 High Street, Clapham, Bedford, MK41 6AQ. The unit has a black front and a Clapham Car Care sign. Plus code 5G63+89.",
  },
  {
    q: "When are you open?",
    a: "Monday to Saturday, 9:30am to 6pm. Sunday, 10am to 4pm.",
  },
  {
    q: "What is in the Level 1 wash?",
    a: "Wheel and tyre clean, a decontaminating pre-wash, snow foam, a hand wash, a dry, and tyre shine. Small and medium cars are £15. A large car, van, or 4x4 is £19. Heavily soiled vehicles may have a £10 surcharge.",
  },
  {
    q: "Do you take card?",
    a: "Yes. Customers pay by cash or card.",
  },
  {
    q: "Do you buy vehicles?",
    a: "Yes. The board on the bay says cars, vans, and motorbikes are bought for cash. Ask for a quote.",
  },
] as const;

export function addressLine() {
  const a = business.address;
  return `${a.street}, ${a.locality}, ${a.region} ${a.postcode}`;
}
