var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_level-1_starbucks",
      "name": "ERC_Level 1_Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5593325272691239,
        "pitch": -0.11673507586680287,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -0.5303594376220264,
          "pitch": 0.1626473097623755,
          "rotation": 0,
          "target": "1-erc_level-2_nearescalator_photo_1512"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.355146718013815,
          "pitch": 0.10156396135842982,
          "title": "Elevator",
          "text": "Turn right here to take the elevator"
        }
      ]
    },
    {
      "id": "1-erc_level-2_nearescalator_photo_1512",
      "name": "ERC_Level 2_NearEscalator_PHOTO_1512",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.3443120783216704,
        "pitch": -0.03565962996616179,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -2.4849213254785756,
          "pitch": 0.20786105083436013,
          "rotation": 0,
          "target": "2-erc_level-2_tembusu-tree"
        },
        {
          "yaw": -1.1124698648381255,
          "pitch": 0.033716354931693004,
          "rotation": 15.707963267948973,
          "target": "0-erc_level-1_starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.123627916661979,
          "pitch": 0.18591347597190122,
          "title": "Education Resource Centre (ERC) Pickup Point",
          "text": "Wait here for your taxi"
        }
      ]
    },
    {
      "id": "2-erc_level-2_tembusu-tree",
      "name": "ERC_Level 2_Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.24433569402216904,
        "pitch": -0.006061042328408206,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -2.3890493419316634,
          "pitch": 0.16656969409315536,
          "rotation": 5.497787143782138,
          "target": "1-erc_level-2_nearescalator_photo_1512"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7820798298041556,
          "pitch": 0.3258417984245021,
          "title": "Tembusu Tree",
          "text": "Fun fact: The tree has been around longer than the building. The building was built around the tree."
        },
        {
          "yaw": 1.4371922995942228,
          "pitch": 0.05717325397672823,
          "title": "Mac Commons",
          "text": "Study room equipped with Mac computers"
        }
      ]
    }
  ],
  "name": "UTown_ERC_Maureen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
