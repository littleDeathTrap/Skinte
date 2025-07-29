import { Prisma } from "@prisma/client";
import { categories, _ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  creamType,
  volume,
}: {
  productId: number;
  creamType?: 1 | 2;
  volume?: 30 | 50 | 100;
}) => {
  return {
    productId,
    price: randomDecimalNumber(290, 990),
    creamType,
    volume,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ua",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ua",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const cream1 = await prisma.product.create({
    data: {
      name: "Night cream",
      imageUrl:
        "https://res.cloudinary.com/dslhlosqo/image/upload/v1748866376/creams1_cvkab6.png",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const cream2 = await prisma.product.create({
    data: {
      name: "Day cream",
      imageUrl:
        "https://res.cloudinary.com/dslhlosqo/image/upload/v1748866377/creams2_sby9ng.png",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const cream3 = await prisma.product.create({
    data: {
      name: "Brightening cream",
      imageUrl:
        "https://res.cloudinary.com/dslhlosqo/image/upload/v1748866378/creams3_ebefvw.png",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });
  const cream4 = await prisma.product.create({
    data: {
      name: "Eye cream",
      imageUrl:
        "https://res.cloudinary.com/dslhlosqo/image/upload/v1748866378/creams4_qeijyc.png",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Night cream
      generateProductItem({ productId: cream1.id, creamType: 1, volume: 30 }),
      generateProductItem({ productId: cream1.id, creamType: 2, volume: 50 }),
      generateProductItem({ productId: cream1.id, creamType: 2, volume: 100 }),

      // Day cream
      generateProductItem({ productId: cream2.id, creamType: 1, volume: 30 }),
      generateProductItem({ productId: cream2.id, creamType: 1, volume: 50 }),
      generateProductItem({ productId: cream2.id, creamType: 1, volume: 100 }),
      generateProductItem({ productId: cream2.id, creamType: 2, volume: 30 }),
      generateProductItem({ productId: cream2.id, creamType: 2, volume: 50 }),
      generateProductItem({ productId: cream2.id, creamType: 2, volume: 100 }),

      // Brightening cream
      generateProductItem({ productId: cream3.id, creamType: 1, volume: 30 }),
      generateProductItem({ productId: cream3.id, creamType: 1, volume: 50 }),
      generateProductItem({ productId: cream3.id, creamType: 1, volume: 100 }),
      generateProductItem({ productId: cream3.id, creamType: 2, volume: 30 }),
      generateProductItem({ productId: cream3.id, creamType: 2, volume: 50 }),
      generateProductItem({ productId: cream3.id, creamType: 2, volume: 100 }),

      //Eye cream
      generateProductItem({ productId: cream4.id, creamType: 1, volume: 30 }),
      generateProductItem({ productId: cream4.id, creamType: 1, volume: 50 }),
      generateProductItem({ productId: cream4.id, creamType: 1, volume: 100 }),
      generateProductItem({ productId: cream4.id, creamType: 2, volume: 30 }),
      generateProductItem({ productId: cream4.id, creamType: 2, volume: 50 }),
      generateProductItem({ productId: cream4.id, creamType: 2, volume: 100 }),

      // Last products
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
      generateProductItem({ productId: 18 }),
      generateProductItem({ productId: 19 }),
      generateProductItem({ productId: 20 }),
      generateProductItem({ productId: 21 }),
      generateProductItem({ productId: 22 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story1_ftohvr.png",
      },
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729585/story2_szwpfp.png",
      },
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729585/story3_xairgo.png",
      },
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story4_ilxmii.png",
      },
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story1_ftohvr.png",
      },
      {
        previewImageUrl:
          "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729585/story2_szwpfp.png",
      },
    ],
  });

  // await prisma.storyItem.createMany({
  //   data: [
  //     {
  //       storyId: 1,
  //       sourceUrl:
  //         "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story1_ftohvr.png",
  //     },
  //     {
  //       storyId: 1,
  //       sourceUrl:
  //         "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729585/story2_szwpfp.png",
  //     },
  //     {
  //       storyId: 1,
  //       sourceUrl:
  //         "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story4_ilxmii.png",
  //     },
  //     {
  //       storyId: 1,
  //       sourceUrl:
  //         "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story4_ilxmii.png",
  //     },
  //     {
  //       storyId: 1,
  //       sourceUrl:
  //         "https://res.cloudinary.com/dslhlosqo/image/upload/v1753729586/story1_ftohvr.png",
  //     },
  //   ],
  // });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
