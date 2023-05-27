/* global use, db */
// MongoDB Playground

const database = "delivery";

use(database);

// shops
const shops = [];

for (let i = 1; i <= 10; i++) {
  const shop = {
    id: i,
    name: `Shop ${i}`,
  };
  shops.push(shop);
}
db.shops.insertMany(shops);

// products
const products = [];

for (let i = 1; i <= 50; i++) {
  const shopId = Math.floor(Math.random() * 10) + 1;
  const product = {
    id: i,
    photo: "",
    name: `Product ${i}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit amet. Cras semper auctor neque vitae. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Dignissim convallis aenean et tortor at risus. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Sed pulvinar proin gravida hendrerit. Ac tortor vitae purus faucibus ornare suspendisse. Vitae suscipit tellus mauris a diam. Augue interdum velit euismod in.",
    shopId: shopId,
    price: parseFloat((Math.random() * (100 - 1) + 1).toFixed(2)),

    currency: "USD",
  };
  products.push(product);
}
db.products.insertMany(products);

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "name",
        "email",
        "phone",
        "address",
        "total_price",
        "total_products",
        "products_list",
      ],
      properties: {
        name: {
          bsonType: "string",
          description: "required string field 'name'",
        },
        email: {
          bsonType: "string",
          description: "required string field 'email'",
        },
        phone: {
          bsonType: "string",
          description: "required string field 'phone'",
        },
        address: {
          bsonType: "string",
          description: "required string field 'address'",
        },
        total_price: {
          bsonType: "double",
          description: "required double field 'total_price'",
        },
        total_products: {
          bsonType: "int",
          description: "required int field 'total_products'",
        },
        products_list: {
          bsonType: "array",
          description: "required array field 'products_list'",
          items: {
            bsonType: "object",
            required: ["id", "quantity"],
            properties: {
              id: {
                bsonType: "int",
                description: "required int field 'id'",
              },
              quantity: {
                bsonType: "int",
                description: "required int field 'quantity'",
              },
            },
          },
        },
      },
    },
  },
});
