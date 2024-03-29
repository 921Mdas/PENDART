import assets from "./assets";

const IDgenerator = () => {
  const random = Math.random() * 0.021233 * 0.2;
  return random.toString();
};

const NFTData = [
  {
    id: IDgenerator(),
    name: "Roselda Scarf - Ethiopia",
    creator: "Peter Hadid",
    price: 3.25,
    description:
      "The ruins of the ancient city of Aksum are found close to Ethiopia's northern border.The ruins of the ancient city of Aksum are found close to Ethiopia's northern border.The ruins of the ancient city of Aksum are found close to Ethiopia's northern border.",
    image: assets.nft01,
    bids: [
      {
        id: IDgenerator(),
        name: "Hellen Corpa",
        price: 4.25,
        image: assets.person02,
        date: "January 12, 2016 at 11:10 PM",
      },
      {
        id: IDgenerator(),
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Pende Masks - Congo",
    creator: "Sha Muzungu",
    price: 10.25,
    description:
      "Contemporary artist Sha Muzungu discusses the geometric iconography and calligraphy of this Ethiopian prayer book. Contemporary artist Sheila Hicks discusses the geometric iconography and calligraphy of this Ethiopian prayer book",
    image: assets.nft02,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Passion Vase Erithrea",
    creator: "Sheila Hicks",
    price: 95.25,
    description:
      "In this work, a contemporary Ethiopian artist explores the utopian potential of chaos in a globalizing world.In this work, a contemporary Ethiopian artist explores the utopian potential of chaos in a globalizing world.",
    image: assets.nft03,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: IDgenerator(),
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Initiation Mask - Zimbabwe",
    creator: "Paul Kalonda",
    price: 54.25,
    description:
      "Southern African cultures developed bronze casting for reliefs, like the famous Benin Bronzes, to decorate palaces and for highly naturalistic royal heads from around the Bini town of Benin City, Edo State, as well as in terracotta or metal, from the 12th–14th centuries. ",
    image: assets.nft04,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: IDgenerator(),
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Colorful flag - South Africa",
    creator: "Josianne Musvaire",
    price: 10.25,
    description:
      "Figures are used in religious rituals and are often coated with materials placed on them for ceremonial offerings. The Mande-speaking peoples of the same region make pieces from wood",
    image: assets.nft05,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Empty Soul - Gabon",
    creator: "Leo Mutunde",
    price: 20.25,
    description:
      "African art has had an important influence on European Modernist art,[9] which was inspired by their interest in abstract depiction. It was this appreciation of African sculpture that has been attributed to the very concept of African art",
    image: assets.nft06,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: IDgenerator(),
        name: "Jonh Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: IDgenerator(),
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: IDgenerator(),
    name: "Three spirited - Uganda",
    creator: "Victor Mashonge",
    price: 18.25,
    description:
      "Some of the earliest decorative objects, such as shell beads and evidence of paint, have been discovered in Africa, dating to the Middle Stone Age.",
    image: assets.nft07,
    bids: [
      {
        id: IDgenerator(),
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: IDgenerator(),
        name: "Jonh Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
];

export { NFTData };
