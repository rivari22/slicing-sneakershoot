export interface IListShoes {
  id: number;
  merk: string;
  name: string;
  price: string;
  image: string;
  isFavorite: boolean;
}

export const listShoes : Array<IListShoes> = [
  {
    id: 1,
    merk: 'Jordan',
    name: 'Jordan 1 High Element Gore-Tex Light Bone',
    price: '3,670,000',
    image: 'jordan1GoreText.png',
    isFavorite: false
  },
  {
    id: 2,
    merk: 'Nike',
    name: 'Nike Dunk Low EMB NBA 75th Anniversary Chicago',
    price: '3,800,000',
    image: 'nikeDunkLowChicago.png',
    isFavorite: false
  },
  {
    id: 3,
    merk: 'Adidas',
    name: 'adidas Yeezy Boost 350 V2 Bred',
    price: '3,350,000',
    image: 'yeezyV2Bred.png',
    isFavorite: false
  },
  {
    id: 4,
    merk: 'Adidas',
    name: 'adidas NMD R1 Black Signal Pink',
    price: '1,000,000',
    image: 'NMDr1BlackPink.png',
    isFavorite: false
  },
  {
    id: 5,
    merk: 'Puma',
    name: 'Puma RS-X Trophies Dark Shadow',
    price: '650,000',
    image: 'pumaRsX.png',
    isFavorite: false
  },
  {
    id: 6,
    merk: 'Puma',
    name: 'Puma RS-X Transformers Bumblebee',
    price: '1,800,000',
    image: 'pumaTransformer.png',
    isFavorite: false
  },
  {
    id: 7,
    merk: 'Vans',
    name: 'Vans Old Skool',
    price: '600,000',
    image: 'VansOldSkool.png',
    isFavorite: false
  },
  {
    id: 8,
    merk: 'Vans',
    name: 'Vans Checkerboard Dx Black White Japan Market',
    price: '730,000',
    image: 'vansChecker.png',
    isFavorite: false
  }
];
