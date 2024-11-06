import React from 'react'


    
    const games = [
      {
        title: "Grand Theft Auto V",
        imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",  // Replace with actual image URL
        videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257010267/movie480_vp9.webm?t=1711059406", 
        extraVideo:[
          "https://video.cloudflare.steamstatic.com/store_trailers/257036516/movie480_vp9.webm?t=1720472941"
        ], // Replace with actual video URL
        description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        allReviews: {
          recent: {
            count: 14354,
            rating: "Very Positive"
          },
          overall: {
            count: 1731045,
            rating: "Very Positive"
          }
        },
        releaseDate: "14 Apr, 2015",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        userDefinedTags: ["Open World", "Action", "Multiplayer", "Crime", "Mature"],
        price: "$29.99", // Replace with actual price if necessary
        platforms: ["Windows", "PlayStation 3", "PlayStation 4", "PlayStation 5", "Xbox 360", "Xbox One", "Xbox Series X/S"],
        genres: ["Action", "Adventure", "Open World"],
        requirements: {
          minimum: {
            os: "Windows 7 64-Bit",
            processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz",
            memory: "4 GB RAM",
            graphics: "NVIDIA 9800 GT 1GB",
            storage: "72 GB available space"
          },
          recommended: {
            os: "Windows 10 64-Bit",
            processor: "Intel Core i5 3470 @ 3.2GHz",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 660 2GB",
            storage: "72 GB available space"
          }
        },
        languages: ["English", "French", "German", "Italian", "Spanish", "Japanese", "Korean", "Portuguese (Brazil)", "Chinese (Simplified)", "Russian"],
        achievements: 77,
        rating: "Mature",
        smallImages: [
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_b1a1cb7959d6a0e6fcb2d06ebf97a66c9055cef3.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_bc5fc79d3366c837372327717249a4887aa46d63.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_d2eb9d3e50f9e4cb8db37d2976990b3795da8187.600x338.jpg?t=1726606628",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/ss_bd944debbec9936769f6dfb39ee456ca605615e3.600x338.jpg?t=1726606628"
          // Additional small images if needed
        ]
      },
      
        {
          title: "Hitman",
          imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/header.jpg?t=1712238033",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257016359/movie480_vp9.webm?t=1713268525",
          extraVideo:[
            "https://video.cloudflare.steamstatic.com/store_trailers/2028135/movie480.webm?t=1447357057",
            "https://video.cloudflare.steamstatic.com/store_trailers/2028134/movie480.webm?t=1447357056",
          ],
          description: "The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.",
          allReviews: {
            recent: {
              count: 502,
              rating: "Overwhelmingly Positive"
            },
            overall: {
              count: 38331,
              rating: "Very Positive"
            }
          },
          releaseDate: "20 Nov, 2012",
          developer: "Io-Interactive A/S",
          publisher: "Io-Interactive A/S",
          userDefinedTags: ["Stealth", "Action", "Third Person", "Assassin", "Tactical"],
          price: "$19.99",
          platforms: ["Windows", "PlayStation 3", "Xbox 360"],
          genres: ["Action", "Stealth"],
          requirements: {
            minimum: {
              os: "Windows Vista, 7",
              processor: "2.4 GHz dual core Intel or AMD processor",
              memory: "2 GB RAM",
              graphics: "NVIDIA 8600 512 MB or better",
              storage: "24 GB available space"
            },
            recommended: {
              os: "Windows 7 64-bit",
              processor: "2.6 GHz quad core Intel or AMD processor",
              memory: "4 GB RAM",
              graphics: "NVIDIA GeForce GTX 260 or ATI Radeon HD 5770",
              storage: "24 GB available space"
            }
          },
          languages: ["English", "French", "German", "Spanish", "Italian", "Russian", "Japanese"],
          achievements: 46,
          rating: "Mature",
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_02033e4c2383bee25e72d2591fac1b436f5483f4.600x338.jpg?t=1712238033",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_9474fb068b723003f15ee205e05f819f116cc64a.600x338.jpg?t=1712238033",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_7d091c81c962cef3c4f5a1044a068cfe0afffa49.600x338.jpg?t=1712238033",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_c315fe5dfeb97a7105d75595ae0202421e020d07.600x338.jpg?t=1712238033",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_6651474a83682dec029aebc3858ef366524f2052.600x338.jpg?t=1712238033",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/ss_67dd8f7a1bb731f013d167d0570aac7d064d12cc.600x338.jpg?t=1712238033",// Additional small images if needed
          ]
        },
        {
          title: "Forza Horizon 5",
          imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1727883919",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257053032/movie480_vp9.webm?t=1725950927",
          description: "Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Join a thrilling game of chase with our new 5v1 Multiplayer Experience: Hide & Seek.",
          allReviews: {
            recent: {
              count: 2132,
              rating: "Very Positive"
            },
            overall: {
              count: 180358,
              rating: "Very Positive"
            }
          },
          releaseDate: "9 Nov, 2021",
          developer: "Playground Games",
          publisher: "Xbox Game Studios",
          userDefinedTags: ["Racing", "Open World", "Driving", "Multiplayer", "Arcade"],
          price: "$59.99",
          platforms: ["Windows", "Xbox Series X/S", "Xbox One"],
          genres: ["Racing", "Open World"],
          requirements: {
            minimum: {
              os: "Windows 10",
              processor: "Intel i5-4460 or AMD Ryzen 3 1200",
              memory: "8 GB RAM",
              graphics: "NVIDIA GTX 970 or AMD RX 470",
              storage: "110 GB available space"
            },
            recommended: {
              os: "Windows 10 64-bit",
              processor: "Intel i7-10700K or AMD Ryzen 7 3700X",
              memory: "16 GB RAM",
              graphics: "NVIDIA RTX 2080 or AMD RX 6700 XT",
              storage: "110 GB available space"
            }
          },
          languages: ["English", "Spanish", "French", "German", "Chinese (Simplified)", "Japanese", "Portuguese (Brazil)"],
          achievements: 80,
          rating: "Everyone",
          smallImages: [
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_cf56e25a0290556ba83229eb0ab370d10be0407c.600x338.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_00f0090174380eeaf8753bd3d1028b6772c3aebf.600x338.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.600x338.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_0a13a7ccd38e7c3e6a5f1720050732833b53b6a8.600x338.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_0bc32360d32b21abdf889422385cd753862dd73e.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_1da0673f82eccc3c9d222237dec40e36bf10eef3.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_78e4f63e05d50e59b9966ba8da9a53dbf84fd8f4.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_c8390c1e88ba5e660a58e8e435ebc77dcda5c91d.1920x1080.jpg?t=1727883919", 
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_3c16188972c826942f47991d91b0f6dc17e01fc9.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_49297af1ddef7779e644c2deb1df611a5f5cd344.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_733100a0e305025cfea4797c14cb55a9e2673521.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_4f2da231c28c5cb6a1ed4f62aaad6f51ca4a5c05.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_af9712cbc5121307926cb3e7dfc7228d45940557.1920x1080.jpg?t=1727883919",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/ss_d26239d188301bb6f2475c6d323ae007195b7542.1920x1080.jpg?t=1727883919"
// Additional small images if needed
            // Additional small images if needed
          ]
        },
        {
          title: "The Witcher 3: Wild Hunt",
          imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1730124454",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256927226/movie480_vp9.webm?t=1674829926",
          description: "A story-driven, open-world RPG set in a beautiful fantasy universe full of meaningful choices.",
          allReviews: {
            count: 482962,
            rating: "Overwhelmingly Positive"
          },
          releaseDate: "19 May, 2015",
          developer: "CD Projekt Red",
          publisher: "CD Projekt",
          userDefinedTags: [
            "RPG",
            "Open World",
            "Adventure"
          ],
          // Additional fields
          price: "$39.99", // Current price of the game
          platforms: ["Windows", "PlayStation 4", "Xbox One", "Nintendo Switch"], // Available platforms
          genres: ["RPG", "Adventure", "Fantasy"], // Genres of the game
          requirements: {
            minimum: {
              os: "Windows 7/8/10",
              processor: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
              memory: "6 GB RAM",
              graphics: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
              storage: "35 GB available space"
            },
            recommended: {
              os: "Windows 10",
              processor: "Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz",
              memory: "8 GB RAM",
              graphics: "Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290",
              storage: "35 GB available space"
            }
          },
          languages: ["English", "French", "German", "Spanish", "Japanese"], // Supported languages
          achievements: 78, // Number of in-game achievements
          rating: "Mature 17+", // ESRB rating
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.600x338.jpg?t=1730124454",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.600x338.jpg?t=1730124454",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.600x338.jpg?t=1730124454",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_d1b73b18cbcd5e9e412c7a1dead3c5cd7303d2ad.600x338.jpg?t=1730212926",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1730212926",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1730212926",
            'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_dc55eeb409d6e187456a8e159018e8da098fa468.600x338.jpg?t=1730212926'
          ]
        },
        {
          title: "Cyberpunk 2077",
          description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
          releaseDate: "10 Dec, 2020",
          developer: "CD PROJEKT RED",
          publisher: "CD PROJEKT RED",
          allReviews: {
            rating: "Very Positive",
            count: 688298,
            recentRating: "Overwhelmingly Positive",
            recentCount: 6775,
          },
          price: "$59.99", // Or the actual price if available
          rating: "Mature",
          achievements: "65 Achievements",
          userDefinedTags: ["Cyberpunk", "Open World", "Nudity", "RPG", "Sci-fi"],
          platforms: ["Windows", "PlayStation", "Xbox"],
          genres: ["Action", "RPG", "Open World", "Sci-fi"],
          requirements: {
            minimum: {
              OS: "Windows 7 or 10",
              Processor: "Intel Core i5-3570K or AMD FX-8310",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 780 or AMD Radeon RX 470",
              Storage: "70 GB available space",
            },
            recommended: {
              OS: "Windows 10",
              Processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
              Memory: "12 GB RAM",
              Graphics: "GTX 1060 6GB, GTX 1660 Super, or Radeon RX 590",
              Storage: "70 GB SSD",
            },
          },
          languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Russian", "Chinese"],
          imageUrl:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1730212296",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256983891/movie480_vp9.webm?t=1700653184", // Replace with actual video URL if available
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_4bda6f67580d94832ed2d5814e41ebe018ba1d9e.600x338.jpg?t=1730212296",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_872822c5e50dc71f345416098d29fc3ae5cd26c1.600x338.jpg?t=1730212296",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_ae4465fa8a44dd330dbeb7992ba196c2f32cabb1.600x338.jpg?t=1730212296",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_bb1a60b8e5061caef7208369f42c5c9d574c9ac4.600x338.jpg?t=1730212296",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_429db1d013a0366417d650d84f1eff02d1a18c2d.600x338.jpg?t=1730212296",
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.600x338.jpg?t=1730212296",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_e5a94665dbfa5a30931cff2f45cdc0ebea9fcebb.600x338.jpg?t=1730212296"
          ], // Replace with actual URLs of images
        },
        {
          title: "Dead by Daylight",
          description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
          releaseDate: "14 Jun, 2016",
          developer: "Behaviour Interactive Inc.",
          publisher: "Behaviour Interactive Inc.",
          allReviews: {
            rating: "Very Positive",
            count: null, // Replace with actual count if available
            recentRating: "Mostly Positive",
            recentCount: null, // Replace with actual recent review count if available
          },
          price: "$19.99", // Replace with actual price if available
          rating: "Mature",
          achievements: "167 Achievements",
          userDefinedTags: ["Horror", "Survival Horror", "Multiplayer", "Online Co-Op"],
          platforms: ["Windows", "PlayStation", "Xbox", "Switch"],
          genres: ["Horror", "Multiplayer", "Survival Horror"],
          requirements: {
            minimum: {
              OS: "Windows 7 or 10",
              Processor: "Intel Core i3-4170 or AMD FX-8120",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 460 or AMD HD 6850",
              Storage: "25 GB available space",
            },
            recommended: {
              OS: "Windows 10",
              Processor: "Intel Core i5-750 or AMD FX-8100",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 760 or AMD HD 8800",
              Storage: "25 GB available space",
            },
          },
          languages: ["English", "French", "German", "Spanish", "Japanese", "Korean", "Russian", "Chinese"],
          extraVideo:[
            "https://video.cloudflare.steamstatic.com/store_trailers/256686761/movie480.webm?t=1683120259"
          ],
          imageUrl:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1730209905",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256855514/movie480_vp9.webm?t=1683120692", // Replace with actual video URL if available
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_659500624438a4aa77bfdf304cba3ecebcd92ed9.600x338.jpg?t=1730209905",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_ca6b39f2fcac8feb75d23976b1be31290d58d159.600x338.jpg?t=1730209905",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_4075aac79adfe1a5b71665d2cc5ff7d52122650b.600x338.jpg?t=1730209905",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_430577c364a68dbe24e8a1d895bd678ea04b87d5.600x338.jpg?t=1730209905",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_969a7841466e12f063c2d9a72520cce1c3b2f331.600x338.jpg?t=1730209905",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/ss_cd57ce3a42d66d90164534ad71388527f1e0cf7b.600x338.jpg?t=1730209905",
          ], // Replace with actual URLs of images
        },
        {
          title: "The Last of Us",
          description: "Discover the award-winning game that inspired the critically acclaimed television show. Guide Joel and Ellie through a post-apocalyptic America, and encounter unforgettable allies and enemies in The Last of Us™.",
          releaseDate: "28 Mar, 2023",
          developer: "Naughty Dog LLC, Iron Galaxy Studios",
          publisher: "PlayStation Publishing LLC",
          allReviews: {
            rating: "Mostly Positive",
            count: null, // Replace with actual total count if available
            recentRating: "Very Positive",
            recentCount: null, // Replace with actual recent review count if available
          },
          price: "$49.99", // Replace with actual price if available
          rating: "Mature",
          achievements: "200 Achievements", // Replace with actual achievement count if available
          userDefinedTags: ["Story Rich", "Shooter", "Post-apocalyptic", "Horror"],
          platforms: ["Windows", "PlayStation"],
          genres: ["Action", "Adventure", "Story Rich"],
          requirements: {
            minimum: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i5-7500 or AMD Ryzen 5 1500X",
              Memory: "16 GB RAM",
              Graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
              Storage: "100 GB available space",
            },
            recommended: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i7-4770K or AMD Ryzen 7 2700X",
              Memory: "16 GB RAM",
              Graphics: "NVIDIA GeForce GTX 1080 or AMD Radeon RX 5700 XT",
              Storage: "100 GB available space",
            },
          },
          languages: ["English", "French", "German", "Spanish", "Japanese", "Italian"],
          imageUrl:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256936971/movie480_vp9.webm?t=1680015399", // Replace with actual video URL if available
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/ss_3f1805ecddafacee7f61f87cb8e4624435a83ee3.600x338.jpg?t=1728603021",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/ss_89fffc2857dcae29dee2a09f1be33d745610e19d.600x338.jpg?t=1728603021",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/ss_8cd55ab975b2e47f4d4d9a0da4ae6948040ef807.600x338.jpg?t=1728603021",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/ss_98b476104b239764ba2a3280b1a9e09a24701041.600x338.jpg?t=1728603021",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/ss_abc373417afe2172ddf7b6d91442a14366a46975.600x338.jpg?t=1728603021",
          ], // Replace with actual URLs of images
        },
        {
          title: "Max Caulfield's Parallel",
          description: "When Max Caulfield finds her friend Safi dead in the snow, she tears open the way to a parallel timeline. Here, Safi is still alive - and still in danger! With her new power to Shift between two timelines, can Max solve and prevent the same murder?",
          releaseDate: "29 Oct, 2024",
          developer: "Deck Nine Games",
          publisher: "Square Enix",
          allReviews: {
            rating: "Mostly Positive",
            count: null, // Replace with actual review count if available
          },
          userDefinedTags: ["Choices Matter", "LGBTQ+", "Female Protagonist"],
          platforms: ["Windows", "PlayStation", "Xbox"],
          genres: ["Adventure", "Mystery", "Interactive Story"],
          requirements: {
            minimum: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i3-6100 or AMD FX-6300",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 750 Ti or AMD Radeon R7 260X",
              Storage: "20 GB available space",
            },
            recommended: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i5-6500 or AMD Ryzen 3 1200",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 970 or AMD Radeon R9 390",
              Storage: "20 GB available space",
            },
          },
          languages: ["English", "French", "German", "Spanish", "Japanese"],
          imageUrl:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/header.jpg?t=1730224684",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257069453/movie480_vp9.webm?t=1730223946", // Replace with actual video URL if available
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_3356d63bf2b2fa2306a43e6a0553908e17732db8.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_7fc1fbd1fbcfe04d2a32972983ff3e465483edcd.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_a85aea632c7828e8084eb0f640b375bbaf6f348b.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_4eeac7642ef1bea76a8d7fb6a5e2acbbf03d70fc.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_a00a878586b3057eae6e509338f5d943a715ea03.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_5f78d1dedaf261f256a53bf7e72270f41f824b29.600x338.jpg?t=1730224684",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1874000/ss_dfab79e5bc51b669383780f19bd47b90e8030713.600x338.jpg?t=1730224684",
          ], // Replace with actual URLs of images
        },
        {
          title: "Yokohama Noir",
          description: "When a police officer discloses the murder of the student teacher who bullied his son to suicide, the twisted secrets of a Yokohama high school bleed out. Nothing in this case is black and white.",
          releaseDate: "14 Sep, 2022",
          developer: "Ryu Ga Gotoku Studio",
          publisher: "SEGA",
          allReviews: {
            rating: "Very Positive",
            count: null, // Replace with actual review count if available
          },
          userDefinedTags: ["Action", "Adventure", "Beat 'em up", "Action-Adventure"],
          platforms: ["Windows", "PlayStation", "Xbox"],
          genres: ["Action", "Adventure", "Crime Drama"],
          requirements: {
            minimum: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i5-3470 or AMD FX-6300",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 660 or AMD Radeon HD 7870",
              Storage: "30 GB available space",
            },
            recommended: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i7-3770 or AMD FX-8350",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
              Storage: "30 GB available space",
            },
          },
          languages: ["English", "Japanese", "French", "Spanish", "Korean"],
          imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2058190/header.jpg?t=1704379998",
          videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256901469/movie480_vp9.webm?t=1663168041", 
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2058190/ss_fbc9cbe8c4e5864ed010606ff039e7b0fbc6766a.600x338.jpg?t=1704379998",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2058190/ss_e8a048bc0b746b5c51e2e705fbaf41a4e3ffa33e.600x338.jpg?t=1704379998",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2058190/ss_0e6499eea014409ea82d3651afe8280543fb1755.600x338.jpg?t=1704379998",
          ], // Replace with actual URLs of images
        },
        {
          title: "Street Fighter 6",
          description: "Here comes Capcom’s newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023, and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground, and Battle Hub.",
          releaseDate: "1 Jun, 2023",
          developer: "CAPCOM Co., Ltd.",
          publisher: "CAPCOM Co., Ltd.",
          allReviews: {
            rating: "Very Positive",
            count: null, // Replace with actual review count if available
          },
          userDefinedTags: ["2D Fighter", "Fighting", "Character Customization", "PvP"],
          platforms: ["Windows", "PlayStation", "Xbox"],
          genres: ["Fighting", "Arcade", "Multiplayer"],
          requirements: {
            minimum: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i5-7500 or AMD Ryzen 3 1200",
              Memory: "8 GB RAM",
              Graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
              Storage: "60 GB available space",
            },
            recommended: {
              OS: "Windows 10 (64-bit)",
              Processor: "Intel Core i7-8700 or AMD Ryzen 5 3600",
              Memory: "16 GB RAM",
              Graphics: "NVIDIA GeForce GTX 1080 or AMD Radeon RX 5700",
              Storage: "60 GB available space",
            },
          },
          languages: ["English", "Japanese", "French", "Spanish", "Portuguese"],
          imageUrl:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg?t=1727156844",
              videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257048074/movie480_vp9.webm?t=1724216001",
      extraVideo:[
        "https://video.cloudflare.steamstatic.com/store_trailers/257029842/movie480_vp9.webm?t=1717986925",
      ],
          smallImages: [
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.600x338.jpg?t=1727156844",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.600x338.jpg?t=1727156844",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/ss_ed46aaa9ed94dd6f35a703070f8df16cee5aef61.600x338.jpg?t=1727156844",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/ss_449d488d2edbe785c4e6010fede1c3b8dae8e388.600x338.jpg?t=1727156844",
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1364780/ss_2cfc2472e7ff99fd354935135d91e36e81951795.600x338.jpg?t=1727156844",
          ], // Replace with actual URLs of images
        },
        {
            title: "Batman™: Arkham Knight",
            imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg?t=1713268531",  // Replace with actual image URL
            videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/2038213/movie480.webm?t=1447372011",  
            extraVideo:[
                "https://video.cloudflare.steamstatic.com/store_trailers/2031313/movie480.webm?t=1447360737"
            ],
            // Replace with actual video URL
            description: "Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile.",
            allReviews: {
              count: 400000,  // Replace with actual count if known
              rating: "Very Positive"
            },
            releaseDate: "23 Jun, 2015",
            developer: "Rocksteady Studios",
            publisher: "WB Games",
            userDefinedTags: ["Action", "Open World", "Superhero", "Stealth", "Fighting"],
            price: "$19.99",
            platforms: ["Windows", "PlayStation 4", "Xbox One"],
            genres: ["Action", "Adventure", "Superhero"],
            requirements: {
              minimum: {
                os: "Windows 7/8/8.1 (64-bit)",
                processor: "Intel Core i5-750, 2.67 GHz / AMD Phenom II X4 965, 3.4 GHz",
                memory: "6 GB RAM",
                graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
                storage: "45 GB available space"
              },
              recommended: {
                os: "Windows 7/8/8.1 (64-bit)",
                processor: "Intel Core i7-3770, 3.4 GHz / AMD FX-8350, 4.0 GHz",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
                storage: "55 GB available space"
              }
            },
            languages: ["English", "French", "German", "Spanish", "Italian", "Russian", "Japanese"],
            achievements: 113,
            rating: "Mature 17+",
            smallImages: [
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/ss_4c9d5fb849b1a7169184a37db000919b276056fe.600x338.jpg?t=1702934528",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/ss_43ac2ec5dc64f59b1816b1cc0ba5b430d36c636f.600x338.jpg?t=1702934528",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/ss_9ccb4ec0388cd868c0f49580f98da94e8bd0e213.600x338.jpg?t=1702934528",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/ss_8dd2a78400463d6924b9dc8ce1e734420414af3d.600x338.jpg?t=1702934528",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/ss_315ff2cdd5f50d28614ae9cfa45283bb2b9f969e.600x338.jpg?t=1702934528",
              // Additional small images if needed
            ]
          },
          {
            title: "Batman: Arkham Origins",
            imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/header.jpg?t=1726531070",  // Replace with actual image URL
            videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/2028808/movie480.webm?t=1447358115",  // Replace with actual video URL
            description: "As of December 4, 2016, the online services portion of Batman: Arkham Origins will be retired. We thank those that have joined us to battle over the last 3 years. The Single player campaign may still be played and enjoyed offline. For any questions relating to Batman: Arkham Origins, please contact WB Games customer service.",
            allReviews: {
              count: 150000,  // Replace with actual count if known
              rating: "Very Positive"
            },
            releaseDate: "25 Oct, 2013",
            developer: "WB Games Montreal, Splash Damage",
            publisher: "Warner Bros. Interactive Entertainment",
            userDefinedTags: ["Action", "Open World", "Superhero", "Adventure", "RPG"],
            price: "$19.99",
            platforms: ["Windows", "PlayStation 3", "Xbox 360"],
            genres: ["Action", "Adventure", "Superhero"],
            requirements: {
              minimum: {
                os: "Windows XP, Vista or 7 (32 or 64 bit)",
                processor: "Dual-core CPU 2.4 GHz",
                memory: "2 GB RAM",
                graphics: "NVIDIA 8800 series or ATI 3800 with 512MB video memory",
                storage: "17.5 GB free disk space"
              },
              recommended: {
                os: "Windows 7 (64-bit)",
                processor: "Dual-core CPU 2.5 GHz",
                memory: "4 GB RAM",
                graphics: "NVIDIA GeForce GTX 460 or ATI Radeon HD 6850 with 768MB+ of VRAM (DirectX 11 compatible)",
                storage: "17.5 GB free disk space"
              }
            },
            languages: ["English", "French", "German", "Spanish", "Italian", "Russian", "Japanese"],
            achievements: 50,
            rating: "Teen",
            smallImages: [
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/ss_41f68844251c4acbf5d8b68899b212705c6afc0e.600x338.jpg?t=1726531070",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/ss_16fcb3b8bdc21baa947adba5dced4f4cef398cfd.600x338.jpg?t=1726531070",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/ss_462c48dd9fa9e76d1f3f8159eeadea3da6b0e43e.600x338.jpg?t=1726531070",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/ss_c627d2ffac1be5b846af610342ea99a0d2891434.600x338.jpg?t=1726531070",
"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/209000/ss_1f444402878ebdef6d54386d2a0cdfacbc7b4ee4.600x338.jpg?t=1726531070",

              // Additional small images if needed
            ]
          },
          
          {
            title: "War Thunder",
            imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/header.jpg",  // Replace with actual image URL
            videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/257053798/movie480_vp9.webm?t=1725966822",
            extraVideo:[
              'https://video.cloudflare.steamstatic.com/store_trailers/2032399/movie480.webm?t=1576785190'
            ] , // Replace with actual video URL
            description: "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.",
            allReviews: {
              recent: {
                count: 9159,
                rating: "Mostly Positive"
              },
              overall: {
                count: 554139,
                rating: "Mostly Positive"
              }
            },
            releaseDate: "15 Aug, 2013",
            developer: "Gaijin Entertainment",
            publisher: "Gaijin Network Ltd",
            userDefinedTags: ["Free to Play", "Simulation", "Vehicular Combat", "VR"],
            price: "Free-to-play",
            platforms: ["Windows", "macOS", "Linux", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
            genres: ["Simulation", "Vehicular Combat", "MMO"],
            requirements: {
              minimum: {
                os: "Windows 7/Vista/8/10",
                processor: "Dual-core 2.2 GHz",
                memory: "4 GB RAM",
                graphics: "NVIDIA GeForce 460 or AMD Radeon 5550",
                storage: "17 GB available space"
              },
              recommended: {
                os: "Windows 10 64-bit",
                processor: "Quad-core 2.4 GHz",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce 660 or better",
                storage: "17 GB available space"
              }
            },
            languages: ["English", "Russian", "German", "French", "Spanish", "Chinese (Simplified)", "Italian", "Portuguese (Brazil)"],
            achievements: 50,
            rating: "Teen",
            smallImages: [
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_a5812428a7709edd1e53310bc9357f418ea2032d.600x338.jpg?t=1726558105",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_ab307923f93a44acea6ef3314048c7404b1fe654.600x338.jpg?t=1726558105",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_258eede8c5ee4ccd73216bb24c7b5db8a2b214ed.600x338.jpg?t=1726558105",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_fd4f5710add369314f72666e98f998036bf2e139.600x338.jpg?t=1726558105",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_fc8ee5cc6816996943aa1d7487113d15b8f84c44.600x338.jpg?t=1726558105",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_b407d35fec756a31d6c934fbbd4fb22d54ff02ba.600x338.jpg?t=1726558105",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_e54b59429ee1a4519fc9c3cac0a56bb44b87552f.600x338.jpg?t=1726558105",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_8c5c57e42894258fd4e8f2898eb6b87284f7ffdc.600x338.jpg?t=1726558105",
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/ss_427637a5144799428eba4f86f77e85a97ea1d49b.600x338.jpg?t=1726558105"
            ]
          },
          
          {
            title: "Ready or Not",
            imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/header.jpg", // Replace with actual image URL
            videoUrl: "https://video.cloudflare.steamstatic.com/store_trailers/256987629/movie480_vp9.webm?t=1702510541",
            extraVideo:[
              "https://video.cloudflare.steamstatic.com/store_trailers/256956326/movie480_vp9.webm?t=1688390709"
            ], // Replace with actual video URL
            description: "Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.",
            allReviews: {
              recent: {
                count: 2202,
                rating: "Very Positive"
              },
              overall: {
                count: 154069,
                rating: "Very Positive"
              }
            },
            releaseDate: "13 Dec, 2023",
            developer: "VOID Interactive",
            publisher: "VOID Interactive",
            userDefinedTags: ["Tactical", "Realistic", "FPS", "Shooter", "Multiplayer"],
            price: "$39.99", // Replace with actual price if necessary
            platforms: ["Windows"],
            genres: ["Action", "Simulation", "Tactical FPS"],
            requirements: {
              minimum: {
                os: "Windows 10",
                processor: "Intel Core i5-4430 / AMD FX-6300",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R7 370",
                storage: "50 GB available space"
              },
              recommended: {
                os: "Windows 10",
                processor: "Intel Core i5-7600K / AMD Ryzen 5 1600",
                memory: "8 GB RAM",
                graphics: "NVIDIA GTX 1060 / AMD Radeon RX 580",
                storage: "50 GB available space"
              }
            },
            languages: ["English", "French", "German", "Spanish", "Italian", "Portuguese (Brazil)", "Russian"],
            achievements: 60,
            rating: "Mature",
            smallImages: [
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_beb0f53b0db7e85ba9e7cf99e8511e60156f19a4.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_ae831bb4725dd0a3d6e7378c4a7bf1d792bd55f8.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_acb90abcbaca1ab69231e4ecf50dace60280c09c.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_dabab3ea40e97137c0001219a98dd04a53761b1c.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_795edc39907b6c6aba8db40fcb34cc0eb27f5547.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_a39d02adc2bcd0bb3e96f868c939cb829984ad53.600x338.jpg?t=1729782693",
              "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1144200/ss_f0e0b11fa6f1bf6b436f1e17cd3f72f956180405.600x338.jpg?t=1729782693",
              // Additional small images if needed
            ]
          }
          
        // Additional games can 
        // Additional games can follow 
      ];
      


export default games