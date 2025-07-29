export const categories = [
  {
    name: "Creams",
  },
  {
    name: "Masks",
  },
  {
    name: "Cleansers",
  },
  {
    name: "Serums",
  },
  {
    name: "Patches",
  },
];

export const _ingredients = [
  {
    name: "Hyaluronic Acid",
    price: 179,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
  {
    name: "Niacinamide",
    price: 79,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868919/ingred2_dpegtv.png",
  },
  {
    name: "Vitamin C",
    price: 79,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868919/ingred3_tybry3.png",
  },
  {
    name: "Retinol",
    price: 59,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868919/ingred4_eiieff.png",
  },
  {
    name: "Aloe Vera Extract",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Green Tea",
    price: 59,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
  {
    name: "Salicylic Acid",
    price: 79,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
  {
    name: "Collagen",
    price: 79,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
  {
    name: "Peptides",
    price: 79,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
  {
    name: "Ceramides",
    price: 59,
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748868917/ingred1_f8mnc3.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Moisturizing (hydrating) mask",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748862488/masks3_pagiut.png",
    categoryId: 2,
  },
  {
    name: "Brightening mask",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748862316/masks1_mszkth.png",
    categoryId: 2,
  },
  {
    name: "Anti-aging mask",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748862315/masks2_baxpaw.png",
    categoryId: 2,
  },
  {
    name: "Soothing mask",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748862488/masks5_lkra64.png",
    categoryId: 2,
  },
  {
    name: "Vitamin mask",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748862488/masks4_t7kzo2.png",
    categoryId: 2,
  },
  {
    name: "Balancing cleanser",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748865549/clean1_ouw3cr.png",
    categoryId: 3,
  },
  {
    name: "Soothing cleanser ",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748865550/clean3_n5jjzr.png",
    categoryId: 3,
  },
  {
    name: "Deep cleansing wash",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748865550/clear5_vzdlo9.png",
    categoryId: 3,
  },
  {
    name: "Exfoliating cleanser",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748865553/clean4_dcvq0v.png",
    categoryId: 3,
  },
  {
    name: "Makeup remover ",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748865554/clean2_vtiglk.png",
    categoryId: 3,
  },
  {
    name: "Hydrating serum",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870598/serum1_ogpjao.png",
    categoryId: 4,
  },
  {
    name: "Vitamin C serum",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870598/serum3_ycijcq.png",
    categoryId: 4,
  },
  {
    name: "Retinol serum",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870598/serum4_aa4byc.png",
    categoryId: 4,
  },
  {
    name: "Anti-wrinkle serum",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870601/serum2_ekqkom.png",
    categoryId: 4,
  },
  {
    name: "Brightening serum",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870598/serum3_ycijcq.png",
    categoryId: 4,
  },
  {
    name: "Wrinkle patches",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870599/patches1_akr8rh.png",
    categoryId: 5,
  },
  {
    name: "Brightening patches",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870908/patches2_atcywv.png",
    categoryId: 5,
  },
  {
    name: "Cooling patches ",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870599/patches1_akr8rh.png",
    categoryId: 5,
  },
  {
    name: "Lifting patches",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870908/patches2_atcywv.png",
    categoryId: 5,
  },
  {
    name: "Soothing patches",
    imageUrl:
      "https://res.cloudinary.com/dslhlosqo/image/upload/v1748870599/patches1_akr8rh.png",
    categoryId: 5,
  },
];
