import React, { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Stree 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTEyYzVjYjEtNWYzZi00NWRhLTgyZjUtNDlkZjBiNWIxYTEwXkEyXkFqcGc@._V1_.jpg",
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/KVnheXywIbY", // Replace with actual video URL
    cast: [
      {
        name: "Shraddha Kapoor",
        role: "Stree",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlD3uUzwShz5arr3Dl83tTFMyGh69ahRgBd6bTiJ75TLvtWHCa",
      },
      {
        name: "Rajkummar Rao",
        role: "Vicky",
        image:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1hpNx9lCsjIRWlF9MMwp_ozLslmvgG8pf51xgAYUHMzQOs2DC",
      },
      {
        name: "Pankaj Tripathi",
        role: "Rudra",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKJpVECqQusohIyWHkKttpQkiD05jvgrTJSweetbdJgQwVKmsA",
      },
      {
        name: "Varun Dhawan",
        role: "Special Appearance",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHBXv4rXJ8vlSCrS6j5rioCbF_PudcsOEMuhCgJtk11ijeeHRX",
      },
      {
        name: "Abhishek Banerjee",
        role: "Bittu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/66/Aparshakti-Khurana.jpg",
      }, // Add correct image URL
      {
        name: "Vijay Raaz",
        role: "Shopkeeper",
        image:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5UmBjviJUMh__ok9M9fn4DSkKZeF85vo5FYDFpS9sDcBab_gl",
      }, // Add correct image URL
    ],

    additionalInfo: {
      releaseDate: "August 15, 2024",
      director: "Amar Kaushik",
      cinematography: "Jishnu Bhattacharjee",
    },
  },
  {
    id: 2,
    title: "The Union",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2I0YmNiNmEtNWI2My00NDU5LWIwZWItNWNkNjFmYWJjNTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // Replace with actual image URL
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/poC4zrkL5RQ", // Replace with actual video URL
    cast: [
      {
        name: "Mark Wahlberg",
        role: "Mike McKenna",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPHgx5pGEqxTayn4vDwH2qxyelewvLWFwSjWvNx3S__i-LKcl",
      },
      {
        name: "Halle Berry",
        role: "Roxanne Hall",
        image:
          "https://www.nme.com/wp-content/uploads/2024/09/halle-berry-michael-loccisano-1-696x442.jpg",
      },
      {
        name: "Mike Colter",
        role: "Nick Faraday",
        image:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR0VG0GDdKydpk9x2xW9pJpPjhpQo9ThUwaNZYl4hrOHOAd8jU0KpvabsHe0qKx3VgB3B8Aja34yX2uPIw",
      },
      {
        name: "Adewale Akinnuoye-Agbaje",
        role: "Frank Pfeiffer",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmiv4wqgXOHVjq-xNtlPZfAJPrKcghHmcygg9tZmU1dlGMoEYy",
      },
      {
        name: "Jessica De Gouw",
        role: "Juliet Quinn",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRvcobunFTWwzYtQSDcN6ha6DGxnPtfhPSIIVOV4KvTOa7VytVAKKZIg2W6oFMpGv36TYRjugDszSHPqmQ",
      },
      {
        name: "Alice Lee",
        role: "Athena Kim",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU0CDEnlEt0U_0ivcz53AqQ0p5l7bAocNbEsfT1hQC6tLTv4Z",
      },
      {
        name: "Jackie Earle Haley",
        role: "Foreman",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFlUW_0wPVCKWtyMmlS2wjvDQao5M3WfrtMl0YZA5jrvSteu6p",
      },
      {
        name: "J. K. Simmons",
        role: "Tom Brennan",
        image:
          "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSBwaafRg5ja2rAxz0In-BJn2IaTMIBEEKepotTTHg0_pQxp84NDxLFOUO8cnNi80eAclwy-7tzHr5o4iM",
      },
      {
        name: "Lorraine Bracco",
        role: "Lorraine McKenna",
        image:
          "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRBfV7qxbPc4SH2exAPrc5L7m3iW68_aud3v3A7JCPsiT21zVOwPfnjn5Xf2icJEokFEO9yV3PExA8eOII",
      },
      {
        name: "Dana Delany",
        role: "Nicole",
        image:
          "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTDRzkCtllZILbUBAJkiGbkOUzHyvWXZ03Pt6sJVKnLkgjGbayhVd-ekm3Wa3NMKHpO-z008qc7dXMM4Jw",
      },
    ],

    details:
      "Mike, a down-to-earth construction worker, is thrust into the world of super spies and secret agents when his high school sweetheart, Roxanne, recruits him on a high-stakes US intelligence mission.",
    additionalInfo: {
      releaseDate: "August 16, 2024",
      director: "Julian Farino",
      cinematography: "Alan Stewart",
      costumeDesign: "Beatrix Aruna Pasztor",
      distributedBy: "Netflix",
      editors: "Pia Di Ciaula, Paul Rubell",
    },
  },
  {
    id: 3,
    title: "The Conjuring: The Devil Made Me Do It",
    image: "https://m.media-amazon.com/images/M/MV5BOTU0OGFkZTctYjFmMS00MWEyLWJkZWYtNTFjYTg1YTc0NDIzXkEyXkFqcGc@._V1_.jpg", // Replace with actual image URL
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/h9Q4zZS2v1k", // Replace with actual video URL
    cast: [
      {
        name: "Patrick Wilson",
        role: "Ed Warren",
        image: "https://ucarecdn.com/f9423e41-2e8e-471d-b277-002be3418f5a/-/crop/1190x1000/5,0/-/resize/1035x870/",
      },
      {
        name: "Vera Farmiga",
        role: "Lorraine Warren",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQWSTXbFafFBFRsKwJViolXOVXAm0Ez4rS3xTWe7TwQLDvGMjniFEsxGStF-7mN5ThRYvnDUillXFy9GRc",
      },
      {
        name: "Ruairi O'Connor",
        role: "Arne Cheyenne Johnson",
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/lSnYC598qzvh20VfSDOa3tpcLBo.jpg",
      },
      {
        name: "Sarah Catherine Hook",
        role: "Debbie Glatzel",
        image: "https://m.media-amazon.com/images/M/MV5BNzg0NDJiNzQtNmU5My00MWY0LTg1NzEtNzQ2YTE3MjY5MzU1XkEyXkFqcGc@._V1_.jpg",
      },
 
    ],
    details: "The Warrens investigate a murder case linked to demonic possession, showcasing the intersection of horror and legal drama.",
    additionalInfo: {
      releaseDate: "June 4, 2021",
      director: "Michael Chaves",
      cinematography: "Michael Burgess",
      distributedBy: "Warner Bros. Pictures",
    },
  },
  

  {
    id: 3,
    title: "Venom: Let There Be Carnage",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGFlZmEyZjktZjM2Zi00N2JhLWIxZGUtZjViYmE0YzI4NGFhXkEyXkFqcGc@._V1_.jpg", // Replace with actual image URL
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/-FmWuCgJmxo", // Replace with actual video URL
    cast: [
      {
        name: "Tom Hardy",
        role: "Eddie Brock / Venom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWAoQLrWIIWDhRBhGL9wgOdOiHOsOmA1W8L9kpq8bDteiXs-m",
      },
      {
        name: "Woody Harrelson",
        role: "Cletus Kasady / Carnage",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTwDg3DJR35o7-kvkJqvtP5QBsXC22-YMuSgYRfIAhzIrw4LZL",
      },
      {
        name: "Michelle Williams",
        role: "Anne Weying",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTURpw5IYVlQh82Kl5fP57beiKAcWy2klEdqtiDV0c3m3lnoupW",
      },
      {
        name: "Naomie Harris",
        role: "Frances Barrison / Shriek",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbfl8VtzElopBPY5sUFs7F4cMB6fC9Nkz5H1OgdJLd6Mn0ZT3Q",
      },
      {
        name: "Reid Scott",
        role: "Dan Lewis",
        image:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQv3Tqv5wEf-ITgVjyqs1k1QjLK0ScsUR5ISbOUJss31yZxZvqH",
      },
    ],
    details:
      "Mike, a down-to-earth construction worker, is thrust into the world of super spies and secret agents when his high school sweetheart, Roxanne, recruits him on a high-stakes US intelligence mission.",
    additionalInfo: {
      releaseDate: "August 16, 2024",
      director: "Julian Farino",
      cinematography: "Alan Stewart",
      costumeDesign: "Beatrix Aruna Pasztor",
      distributedBy: "Netflix",
      editors: "Pia Di Ciaula, Paul Rubell",
    },
  },
  {
    id: 4,
    title: "Dune",
    image: "https://smalltowncreepy.com/wp-content/uploads/2023/02/17ecd-dunemovieposter.jpg",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/n9xhJrPXop4",
    cast: [
      {
        name: "Timothée Chalamet",
        role: "Paul Atreides",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8ZMqeDUbbtIUQav7EIjY31jxvmuwXEjogY_fbIh0LhxM4IrO",
      },
      {
        name: "Rebecca Ferguson",
        role: "Lady Jessica",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p-8r_5owQcoQzbLWNanBUpqoAR3TcS7d6dyH9UUR5svZxPdb",
      },
      {
        name: "Oscar Isaac",
        role: "Duke Leto Atreides",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRG8pqRi1mxRjhjfwPFL50Yl_lQ_wnUs5DPZs0We0JNS5bRkCFo",
      },
      {
        name: "Josh Brolin",
        role: "Gurney Halleck",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQs0DKpCUQzcIxW7UZSjt-CAedOc2bmpyXwmlnewAg_FFFKS3jK",
      },
      {
        name: "Zendaya",
        role: "Chani",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBsx4E1n6-JMuDl6MgO_9TWez6KxJVc6LwZ0acPdhEZwU4WHm",
      },
    ],
    details: "A noble family becomes embroiled in a battle for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    additionalInfo: {
      releaseDate: "October 22, 2021",
      director: "Denis Villeneuve",
      cinematography: "Greig Fraser",
      distributedBy: "Warner Bros. Pictures",
    },
  },
  {
    id: 5,
    title: "No Time to Die",
    image: "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_.jpg",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/N_gD9-Oa0fg",
    cast: [
      {
        name: "Daniel Craig",
        role: "James Bond",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Daniel_Craig_in_2015.jpg",
      },
      {
        name: "Rami Malek",
        role: "Safin",
        image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Rami_Malek_in_2018.jpg",
      },
      {
        name: "Léa Seydoux",
        role: "Dr. Madeleine Swann",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3b/L%C3%A9a_Seydoux_in_2015.jpg",
      },
      {
        name: "Ben Whishaw",
        role: "Q",
        image: "https://upload.wikimedia.org/wikipedia/en/5/58/Ben_Whishaw_%282012%29.jpg",
      },
      {
        name: "Naomie Harris",
        role: "Moneypenny",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ef/Naomie_Harris_2013.jpg",
      },
    ],
    details: "James Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    additionalInfo: {
      releaseDate: "September 30, 2021",
      director: "Cary Joji Fukunaga",
      cinematography: "Linus Sandgren",
      distributedBy: "United Artists Releasing",
    },
  },
  {
    id: 6,
    title: "The Matrix Resurrections",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEK88RzeM3Ajey6K6L_BvuoPendq3xpXFFg&s",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/4kedxJ7smEg",
    cast: [
      {
        name: "Keanu Reeves",
        role: "Neo",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Keanu_Reeves_2019.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        role: "Trinity",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Carrie-Anne_Moss_in_2018.jpg",
      },
      {
        name: "Yahya Abdul-Mateen II",
        role: "Morpheus",
        image: "https://upload.wikimedia.org/wikipedia/en/0/09/Yahya_Abdul-Mateen_II_at_the_2019_Sundance_Film_Festival.jpg",
      },
      {
        name: "Jessica Henwick",
        role: "Bugs",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jessica_Henwick_2019.jpg",
      },
      {
        name: "Neil Patrick Harris",
        role: "The Analyst",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Neil_Patrick_Harris_2017.jpg",
      },
    ],
    details: "Return to the iconic world of The Matrix, where Neo, now living a normal life as Thomas Anderson, must once again confront the forces of the Matrix.",
    additionalInfo: {
      releaseDate: "December 22, 2021",
      director: "Lana Wachowski",
      cinematography: "John Toll",
      distributedBy: "Warner Bros. Pictures",
    },
  },
  {
    id: 7,
    title: "Spider-Man: No Way Home",
    image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/JfVOs4VSpmA",
    cast: [
      {
        name: "Tom Holland",
        role: "Peter Parker / Spider-Man",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Tom_Holland_in_2019.jpg",
      },
      {
        name: "Zendaya",
        role: "MJ",
        image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Zendaya_2019.jpg",
      },
      {
        name: "Benedict Cumberbatch",
        role: "Doctor Strange",
        image: "https://upload.wikimedia.org/wikipedia/en/3/36/Benedict_Cumberbatch_in_2016.jpg",
      },
      {
        name: "Alfred Molina",
        role: "Doc Ock",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c9/Alfred_Molina_%282016%29.jpg",
      },
      {
        name: "Jamie Foxx",
        role: "Electro",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ef/Jamie_Foxx_%282013%29.jpg",
      },
    ],
    details: "With Spider-Man's identity now revealed, Peter Parker seeks the help of Doctor Strange to erase his secret from everyone, leading to multiversal chaos.",
    additionalInfo: {
      releaseDate: "December 17, 2021",
      director: "Jon Watts",
      cinematography: "Matthew J. Lloyd",
      distributedBy: "Columbia Pictures",
    },
  },

      
  {
    id: 8,
    title: "The French Dispatch",
    image: "https://m.media-amazon.com/images/M/MV5BMTU1YmNkZWYtYmExNC00YWE1LTk2NWEtMTQ2ODhmYTA5MmZiXkEyXkFqcGc@._V1_.jpg",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/3DOp3A_2fIM",
    cast: [
      {
        name: "Benicio del Toro",
        role: "Wolfgang",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/Benicio_del_Toro_2021.jpg",
      },
      {
        name: "Adrien Brody",
        role: "Herbsaint Sazerac",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Adrien_Brody_at_The_2nd_Annual_Metropolitan_Museum_of_Art_Gala_2011_%28cropped%29.jpg",
      },
      {
        name: "Tilda Swinton",
        role: "J.K.L. Berensen",
        image: "https://upload.wikimedia.org/wikipedia/en/7/75/Tilda_Swinton_2019.jpg",
      },
      {
        name: "Frances McDormand",
        role: "Lucinda Krementz",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Frances_McDormand_2019.jpg",
      },
      {
        name: "Timothée Chalamet",
        role: "Zeffirelli",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Timoth%C3%A9e_Chalamet%2C_Sonoma_International_Film_Festival%2C_2018_%28cropped%29.jpg",
      },
    ],
    details: "A love letter to journalists, this film tells the story of an outpost of an American newspaper in a fictional 20th-century French city and features three storylines.",
    additionalInfo: {
      releaseDate: "October 22, 2021",
      director: "Wes Anderson",
      cinematography: "Robert Yeoman",
      distributedBy: "Searchlight Pictures",
    },
  },
  {
    id: 9,
    title: "West Side Story",
    image: "https://m.media-amazon.com/images/M/MV5BOWZkYzY2OGUtOGU4Ni00NmI0LTg2ZjAtZDA5OWE0YTNiZWRiXkEyXkFqcGc@._V1_.jpg",
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/A5GJLwWiYSg",
    cast: [
      {
        name: "Ansel Elgort",
        role: "Tony",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Ansel_Elgort_in_2018.jpg",
      },
      {
        name: "Rachel Zegler",
        role: "Maria",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Rachel_Zegler_%28cropped%29.jpg",
      },
      {
        name: "Ariana DeBose",
        role: "Anita",
        image: "https://upload.wikimedia.org/wikipedia/en/7/73/Ariana_DeBose_2019.jpg",
      },
      {
        name: "David Alvarez",
        role: "Bernardo",
        image: "https://upload.wikimedia.org/wikipedia/en/4/49/David_Alvarez_2020.jpg",
      },
      {
        name: "Mike Faist",
        role: "Riff",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Mike_Faist_2019.jpg",
      },
    ],
    details: "A modern adaptation of Romeo and Juliet set against the backdrop of rival street gangs in New York City.",
    additionalInfo: {
      releaseDate: "December 10, 2021",
      director: "Steven Spielberg",
      cinematography: "Janusz Kamiński",
      distributedBy: "20th Century Studios",
    },
  },  
  {
    id: 11,
    title: "Killers of the Flower Moon",
    image: "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    year: 2023,
    videoUrl: "https://www.youtube.com/embed/EG0si5bSd6I",
    cast: [
      {
        name: "Leonardo DiCaprio",
        role: "Ernest Burkhart",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/Leonardo_DiCaprio_2019.jpg",
      },
      {
        name: "Lily Gladstone",
        role: "Mollie Burkhart",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Lily_Gladstone_2022.jpg",
      },
      {
        name: "Robert De Niro",
        role: "William Hale",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Robert_De_Niro_2019.jpg",
      },
      {
        name: "Tantoo Cardinal",
        role: "Lizzie Q",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Tantoo_Cardinal_2018.jpg",
      },
      {
        name: "Jesse Plemons",
        role: "Tom White",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b7/Jesse_Plemons_2018.jpg",
      },
    ],
    details: "In 1920s Oklahoma, members of the Osage Nation are murdered under mysterious circumstances, sparking a major FBI investigation led by Tom White.",
    additionalInfo: {
      releaseDate: "October 20, 2023",
      director: "Martin Scorsese",
      cinematography: "Rodrigo Prieto",
      distributedBy: "Apple Original Films",
    },
  },
  
  {
    id: 10,
    title: "Khel Khel Mein",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjIxYzA3ZjItYWM5YS00NjI5LWEzNTQtZWQ3M2Y0NDFkMzc5XkEyXkFqcGc@._V1_.jpg", // Add an image URL
    year: 2024,
    videoUrl: "https://www.youtube.com/watch?v=iP-l9zQEL3U.", // Replace with the actual video URL
    cast: [
      {
        name: "Akshay Kumar",
        role: "Lead",
        image: "https://example.com/akshay-kumar.jpg",
      },
      {
        name: "Vaani Kapoor",
        role: "Lead",
        image: "https://example.com/vaani-kapoor.jpg",
      },
      {
        name: "Taapsee Pannu",
        role: "Lead",
        image: "https://example.com/taapsee.jpg",
      },
      {
        name: "Ammy Virk",
        role: "Supporting",
        image: "https://example.com/ammy-virk.jpg",
      },
      {
        name: "Fardeen Khan",
        role: "Supporting",
        image: "https://example.com/fardeen-khan.jpg",
      },
      {
        name: "Aditya Seal",
        role: "Supporting",
        image: "https://example.com/aditya-seal.jpg",
      },
      {
        name: "Pragya Jaiswal",
        role: "Supporting",
        image: "https://example.com/pragya.jpg",
      },
    ],
    details:
      "The revelation of the shocking fact that friends and spouses are nothing more than masked strangers, dwelling behind a phony pile of lies.",
    additionalInfo: {
      releaseDate: "August 15, 2024",
      director: "Mudassar Aziz",
      cinematography: "Manoj Kumar Khatoi",
    },
  },
];

const TopMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div class="container">

    <img
      src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
      class="background-image"
      alt="Background"
    />
  
    <div class="grid-container">
      {movies.map((movie) => (
        <div
          key={movie.id}
          class="movie-card"
          onClick={() => handleMovieClick(movie)}
        >
          <img
            class="movie-image"
            src={movie.image}
            alt={movie.title}
          />
          <h2 class="movie-title">{movie.title}</h2>
          <p class="movie-year">Year: {movie.year}</p>
        </div>
      ))}
    </div>
  
    {selectedMovie && (
      <div class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <iframe
            width="100%"
            src={selectedMovie.videoUrl}
            title={selectedMovie.title}
            frameBorder="0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            class="modal-video"
          ></iframe>
  
          <button class="close-button" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
  
          <div class="modal-info">
            <h2 class="modal-title">{selectedMovie.title}</h2>
  
            <div class="additional-info">
              <p><strong>Release Date:</strong> {selectedMovie.additionalInfo.releaseDate}</p>
              <p><strong>Director:</strong> {selectedMovie.additionalInfo.director}</p>
              <p><strong>Cinematography:</strong> {selectedMovie.additionalInfo.cinematography}</p>
              <p><strong>Distributed By:</strong> {selectedMovie.additionalInfo.distributedBy}</p>
            </div>
  
            <hr />
  
            <div class="cast-container">
              {selectedMovie.cast.map((actor, index) => (
                <div key={index} class="actor-card">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    class="actor-image"
                  />
                  <div>
                    <p class="actor-name">{actor.name}</p>
                    <p class="actor-role">{actor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  

  );
};

export default TopMovies;
