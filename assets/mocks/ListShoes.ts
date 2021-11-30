interface IShoesOptions {
  id: number;
  value: string;
  isSelected: boolean;
}

export interface IListShoes {
  id: number;
  merk: string;
  name: string;
  price: string;
  image: string;
  isFavorite: boolean;
  isInTheCart: boolean;
  size: Array<IShoesOptions>
  color: Array<IShoesOptions>
}

export const listShoes : Array<IListShoes> = [
  {
    id: 1,
    merk: 'Jordan',
    name: 'Jordan 1 High Element Gore-Tex Light Bone',
    price: '3670000',
    image: 'jordan1GoreText.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: false
      },
      {
        id: 222,
        value: 'grey',
        isSelected: false
      },
      {
        id: 223,
        value: 'red',
        isSelected: true
      }
    ]
  },
  {
    id: 2,
    merk: 'Nike',
    name: 'Nike Dunk Low EMB NBA 75th Anniversary Chicago',
    price: '3800000',
    image: 'nikeDunkLowChicago.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: true
      },
      {
        id: 222,
        value: 'black',
        isSelected: false
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 3,
    merk: 'Adidas',
    name: 'adidas Yeezy Boost 350 V2 Bred',
    price: '3350000',
    image: 'yeezyV2Bred.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: false
      },
      {
        id: 222,
        value: 'black',
        isSelected: true
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 4,
    merk: 'Adidas',
    name: 'adidas NMD R1 Black Signal Pink',
    price: '1000000',
    image: 'NMDr1BlackPink.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: false
      },
      {
        id: 222,
        value: 'black',
        isSelected: true
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 5,
    merk: 'Puma',
    name: 'Puma RS-X Trophies Dark Shadow',
    price: '650000',
    image: 'pumaRsX.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: true
      },
      {
        id: 222,
        value: 'black',
        isSelected: false
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 6,
    merk: 'Puma',
    name: 'Puma RS-X Transformers Bumblebee',
    price: '1800000',
    image: 'pumaTransformer.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: true
      },
      {
        id: 222,
        value: 'black',
        isSelected: false
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 7,
    merk: 'Vans',
    name: 'Vans Old Skool',
    price: '600000',
    image: 'VansOldSkool.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: false
      },
      {
        id: 222,
        value: 'black',
        isSelected: true
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  },
  {
    id: 8,
    merk: 'Vans',
    name: 'Vans Checkerboard Dx Black White Japan Market',
    price: '730000',
    image: 'vansChecker.png',
    isFavorite: false,
    isInTheCart: false,
    size: [
      {
        id: 111,
        value: 'US 6',
        isSelected: true
      },
      {
        id: 112,
        value: 'US 7',
        isSelected: false
      },
      {
        id: 113,
        value: 'US 8',
        isSelected: false
      },
      {
        id: 114,
        value: 'US 9',
        isSelected: false
      },
      {
        id: 115,
        value: 'US 10',
        isSelected: false
      }
    ],
    color: [
      {
        id: 221,
        value: 'green',
        isSelected: true
      },
      {
        id: 222,
        value: 'black',
        isSelected: false
      },
      {
        id: 223,
        value: 'red',
        isSelected: false
      }
    ]
  }
];
