import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

async function main() {
  // Create User
  // const user = await prisma.user.create({
  //   data: {
  //     name: "James Kirk",
  //     email: "kirk@uss.enterprise.com",
  //   },
  // });

  // Get all users
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });

  // Create article and associate with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Dealing with Vulcan Officers",
  //     body: "My first article as Captain",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // Get all articles
  const articles = await prisma.article.findMany();

  // Create user and article and association
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Mr. Spock",
  //     email: "spock@vulcan.com",
  //     articles: {
  //       create: {
  //         title: "Dealing with human Captains",
  //         body: "This is my first article as XO",
  //       },
  //     },
  //   },
  // });

  // Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Sample Article",
  //     body: "This is a sample article",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // Loop over articles
  // users.forEach((user) => {
  //   console.log(`User ${user.name}, Email: ${user.email}`);
  //   console.log("Articles:");
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //   });
  //   console.log("\n");
  // });

  // Update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Captain Kirk",
  //   },
  // });

  // Remove data
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });

  console.log(articles);
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
