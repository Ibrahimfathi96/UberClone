export type IFilterData = {
  name: string;
  image: any;
  id: string;
};
export const filterData: IFilterData[] = [
  {
    name: 'Ride',
    image: require('../assets/images/ride.png'),
    id: '0',
  },
  {
    name: 'Food',
    image: require('../assets/images/food2.png'),
    id: '1',
  },
  {
    name: 'Package',
    image: require('../assets/images/package.png'),
    id: '2',
  },
  {
    name: 'Reserve',
    image: require('../assets/images/reserve.png'),
    id: '3',
  },
];

export const rideData = [
  {
    street: '32 Olivia Rd',
    area: 'Klipfontein 83-Ir,Boksburg',
    id: '0',
  },
  {
    street: 'Hughes Industrial Park',
    area: 'Hughes,Boksburg',
    id: '1',
  },
  {
    street: '32 Olivia Road',
    area: ' East Rand,Ekurhuleni,Gauteng,1459',
    id: '2',
  },
  {
    street: 'Total Boksburg',
    area: '35 Atlas Rd,Anderbolt,Boksburg',
    id: '3',
  },
  {
    street: '179 8th Ave',
    area: 'Bezuidenhout Valley,Johannesburg',
    id: '4',
  },
];

export const carTypeData = [
  // {
  //   title: 'Popular',
  //   data: [
  //     {
  //       name: 'Uber Go',
  //       group: 2,
  //       price: 7,
  //       image: require('../assets/imagesuberGo.png'),
  //       note: 'Affordable.compact rides',
  //       promotion: 5,
  //       time: '20:19',
  //       id: '0',
  //     },
  //     {
  //       name: 'UberX',
  //       group: 3,
  //       price: 5.5,
  //       image: require('../assets/imagesuberX.png'),
  //       note: 'Affordable everyday trips',
  //       promotion: 0,
  //       time: '20:20',
  //       id: '1',
  //     },
  //     {
  //       name: 'Connect',
  //       group: 0,
  //       price: 12.6,
  //       image: require('../assets/imagesuberConnect.png'),
  //       note: 'Send and receive packages',
  //       promotion: 10,
  //       time: '20:33',
  //       id: '2',
  //     },
  //   ],
  // },
  // {
  //   title: 'Premium',
  //   data: [
  //     {
  //       name: 'Black',
  //       group: 3,
  //       price: 17.4,
  //       image: require('../assets/images/uberBlack.png'),
  //       note: 'Premium trips in luxury cars',
  //       promotion: 0,
  //       time: '20:31',
  //       id: '3',
  //     },
  //     {
  //       name: 'Van',
  //       group: 6,
  //       price: 22.3,
  //       image: require('../assets/images/uberVan.png'),
  //       note: 'Rides for groups up to 6',
  //       promotion: 12,
  //       time: '20:31',
  //       id: '4',
  //     },
  //   ],
  // },
  // {
  //   title: 'More',
  //   data: [
  //     {
  //       name: 'Assist',
  //       group: 3,
  //       price: 35.3,
  //       image: require('../assets/images/uberAssist.png'),
  //       note: 'Special assistance from certified drivers',
  //       promotion: 26,
  //       time: '20:25',
  //       id: '5',
  //     },
  //   ],
  // },
];

export const requestData = [
  {
    name: 'For Me',
    id: 0,
  },
  {
    name: 'For Someone',
    id: 1,
  },
];

export const rideOptions = [
  {
    name: 'Personal',
    icon: 'account',
    id: '0',
  },
  {
    name: 'Business',
    icon: 'briefcase',
    id: '1',
  },
];

export const paymentOptions = [
  // {
  //   image: require('../assets/images/visaIcon.png'),
  //   text: 'Visa ...0476',
  // },
  // {
  //   image: require('../assets/images/cashIcon.png'),
  //   text: 'Cash',
  // },
];

export const availableServices = [
  'Uber Go',
  'UberX',
  'Uber connect',
  'Uber Black',
  'Uber Van',
  'Uber Assist',
];

export const carsAround = [
  {
    latitude: 30.6,
    longitude: 31.51,
  },
  {
    latitude: 30.61,
    longitude: 31.52,
  },
  {
    latitude: 30.59,
    longitude: 31.5,
  },
  {
    latitude: 30.62,
    longitude: 31.53,
  },
  {
    latitude: 30.58,
    longitude: 31.49,
  },
  {
    latitude: 30.65,
    longitude: 31.49,
  },
  {
    latitude: 30.45,
    longitude: 31.59,
  },
];
