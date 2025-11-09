const stores = [
  {
    ivr: "1801517",
    name: "淡水竹圍",
    placeId: "ChIJcfH2zHWvQjQRpWq0dQCd88Y",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/1Xtsng54pP8S2xx7A"
  },
  {
    ivr: "1801396",
    name: "淡水北新",
    placeId: "ChIJlSxj7lWlQjQR3c_yERP0lZA",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/VfeyYLUCkdRc8tp28"
  },
  {
    ivr: "1801361",
    name: "基隆大武崙",
    placeId: "ChIJYc6Vdd1NXTQRT5kpNwj6ffY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/xteXJtuFFpftg8rG7"
  },
  {
    ivr: "1801530",
    name: "蘆洲中原",
    placeId: "ChIJg7UHyzSpQjQRkSDDVPywquc",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/qQVaidgyN4Tas3jh8"
  },
  {
    ivr: "1805109",
    name: "台北瑞芳",
    placeId: "ChIJU82qo_dPXTQRDCTNmaLJrJ4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/oGiLzLdR2qQzVpCG7"
  },
  {
    ivr: "1801312",
    name: "基隆暖暖",
    placeId: "ChIJ2Z6f0O5RXTQRCVg800aJyzE",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Zna1dsuZYRsE2Xas6"
  },
  {
    ivr: "1805111",
    name: "瑞芳民生",
    placeId: "ChIJe7QRRfdPXTQRRzT7NTV2_gU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/W6ovdLiFfqZ8GNnBA"
  },
  {
    ivr: "1801447",
    name: "新莊西盛",
    placeId: "ChIJdQmXll4daDQRDj6apX5zP7c",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/YTmykwzBdZJWdnij6"
  },
  {
    ivr: "1801529",
    name: "三重三和",
    placeId: "ChIJ5-xntw6pQjQR382FPm7-E0s",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/CPnKhEw1JUq6ycqj6"
  },
  {
    ivr: "1801286",
    name: "三重溪尾",
    placeId: "ChIJz2D0YtaoQjQRKMG5HpJoRp0",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/uRnoqzVnEYXPjYPX8"
  },
  {
    ivr: "1801511",
    name: "三重五華",
    placeId: "ChIJD7guYJypQjQR8xDWnSJT3Fs",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/eeQmv4U2LNzCWSobA"
  },
  {
    ivr: "1801181",
    name: "淡水新市",
    placeId: "ChIJg5Wi2gO7QjQRYn2k1fplEds",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/heZ3G9pThCuuDb5M9"
  },
  {
    ivr: "1801423",
    name: "樹林中華二",
    placeId: "ChIJLejWYEgdaDQR23vveJnodUU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/6gDiysx7ezAi52o8A"
  },
  {
    ivr: "1801482",
    name: "基隆百福",
    placeId: "ChIJH4T39k1TXTQR2SjxEOb8ouY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/7U4FzX2JA2GzytPj6"
  },
  {
    ivr: "1801500",
    name: "八里中山",
    placeId: "ChIJs-fqLBqlQjQRn4JWBB6onE4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/U28NPsE7vFEF1kto7"
  },
  {
    ivr: "1801489",
    name: "新莊富國",
    placeId: "ChIJG1w1ZD6nQjQRBlO6rjXvEEo",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/oFWH8y756oKjxfXT9"
  },
  {
    ivr: "1801289",
    name: "三峽北大",
    placeId: "ChIJbbM7SgocaDQR56insh14W9g",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/tcCC5otUogn2wFtL7"
  },
  {
    ivr: "1801450",
    name: "萬華桂林",
    placeId: "ChIJQyNLlGmpQjQR60fbB_Bhd7Y",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/EHmJrvux4jww4tg86"
  },
  {
    ivr: "1801427",
    name: "鶯歌建國",
    placeId: "ChIJuVRuK6oeaDQR2M9xKVekZiw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/aNuaQ1aV3eBGbm8z9"
  },
  {
    ivr: "1801390",
    name: "三重中正北",
    placeId: "ChIJCzEu7MKoQjQR-UIHew7bL6M",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Qh3BijenmrfMsU7B9"
  },
  {
    ivr: "1801532",
    name: "木柵木新",
    placeId: "ChIJmZ7Tb6cBaDQR2MaGr_3a-nM",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/MefVfJ3D1vgU8cGB9"
  },
  {
    ivr: "1801507",
    name: "新莊幸福",
    placeId: "ChIJD9KGnn6oQjQRLuuXN6448r0",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/xrgsruPEVrNn5ppQA"
  },
  {
    ivr: "1801239",
    name: "土城金城",
    placeId: "ChIJfV6yXicDaDQRNPILhbacyxU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/ySthwm2jce32pFEV7"
  },
  {
    ivr: "1801100",
    name: "中和員山",
    placeId: "ChIJU8aAIIMCaDQRD3gfzGHnp28",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/KP8sytfG5YStsNeh8"
  },
  {
    ivr: "1801307",
    name: "新莊中港",
    placeId: "ChIJJYqbx8WpQjQRrJ3EYR0_Vms",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/MAPvpQepENbDS74N9"
  },
  {
    ivr: "1808101",
    name: "五股新城",
    placeId: "ChIJMQMJk82pQjQR-uqeUYn-CFw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/rPTCtS36e1FujCoc7"
  },
  {
    ivr: "1801115",
    name: "蘆洲長安",
    placeId: "ChIJI-ogO7qoQjQRrPqI-_OsOS4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/vNX1yX87ebkAPuxw8"
  },
  {
    ivr: "1801503",
    name: "五股成泰",
    placeId: "ChIJR9i4eRmmQjQR9MoB4IyYMKw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/kxHvkEYwfyobMwJQ9"
  },
  {
    ivr: "1801524",
    name: "七堵明德",
    placeId: "ChIJVx7HCB9SXTQR8dHa3H082_U",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/sz32fFLnZLvSeaGm7"
  },
  {
    ivr: "1801534",
    name: "基隆聖心",
    placeId: "ChIJ-Z6T2qJPXTQRw7AEIJAfA7o",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/GvoTW6PJ8BSnCWcWA"
  },
  {
    ivr: "1801514",
    name: "羅東中正",
    placeId: "ChIJ1f6eTG3nZzQR-luuEYNn0qg",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/LkV6RY3nvTd7wNGJ9"
  },
  {
    ivr: "1801497",
    name: "羅東興東二",
    placeId: "ChIJLZnIVCrnZzQROpaV_HW9oBI",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/95XyShw6MRwBnwTm7"
  },
  {
    ivr: "1801469",
    name: "板橋篤行",
    placeId: "ChIJD7JCnzwdaDQRQUJo_eaitf0",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/vB26JhrVrNdkhses8"
  },
  {
    ivr: "1801512",
    name: "三重三民二",
    placeId: "ChIJXcrPmXKpQjQR9LOW0nmT3vw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/PqjBYCu99S6TtoXcA"
  },
  {
    ivr: "1801537",
    name: "樹林育英",
    placeId: "ChIJ2wNQwpsdaDQRY6jhDgo6LfA",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/KYtpcoz9kRiCs3CQ6"
  },
  {
    ivr: "1801485",
    name: "林口麗林",
    placeId: "ChIJ_54NEAWnQjQRK0CNc8e1Iu8",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/fA2ErdDFAKbNr3vM6"
  },
  {
    ivr: "1801379",
    name: "宜蘭頭城",
    placeId: "ChIJPab-WEL3ZzQRbX4daKxUlEo",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/ZekMzq6iyEdxywKH7"
  },
  {
    ivr: "1808171",
    name: "花蓮中山",
    placeId: "ChIJ8buLA-WfaDQRMHgRV8PI-HU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/xN5CQquAjwQDXSpu7"
  },
  {
    ivr: "1801536",
    name: "宜蘭礁溪",
    placeId: "ChIJb8bKWUn6ZzQRuBaQNPkPoJ4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/C5kwo8CuJCtSviTn8"
  },
  {
    ivr: "1801531",
    name: "泰山明志二",
    placeId: "ChIJ4datG8ynQjQRKtjmPHEmXK0",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/DRmQ7WaWzCgKt5pT9"
  },
  {
    ivr: "1801431",
    name: "吉安中華",
    placeId: "ChIJATXRpJ2faDQRqZXOmWc5DT8",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/jiXjKkhJfhxs8NQR8"
  },
  {
    ivr: "1801343",
    name: "蘇澳中山",
    placeId: "ChIJiY1QEDfoZzQRRr2u9WzB0mA",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/R4SRsXaj3BqLUKGS8"
  },
  {
    ivr: "1801172",
    name: "鶯歌南昌",
    placeId: "ChIJxSinw6seaDQRMB2pr6MSqcY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Ti32VSe8NRbXqJG89"
  },
  {
    ivr: "1801433",
    name: "林口文化二",
    placeId: "ChIJF3kMoQmnQjQR9x7OgYIxyOs",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/AbM4GF4Gbf4cVBxX9"
  },
  {
    ivr: "1801493",
    name: "中和泰和",
    placeId: "ChIJGQ66XxblZzQRgX7M5xFfAck",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/zLTQj7dozh9Cbvds6"
  },
  {
    ivr: "1801454",
    name: "宜蘭員山",
    placeId: "ChIJ0X33weLlZzQRxmDrU3qz49I",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/SMcGi8rZiAcGQg326"
  },
  {
    ivr: "1801317",
    name: "樹林樹新",
    placeId: "ChIJrdFwoXkdaDQRBYU_p7sG2-A",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/N23VTrTuZdTf3x3g8"
  },
  {
    ivr: "1801336",
    name: "三峽文化",
    placeId: "ChIJqUmvzvIbaDQR9lOqJNfY4Wo",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/n4DvASz2Kfe7NGQ38"
  },
  {
    ivr: "1805116",
    name: "基隆深溪",
    placeId: "ChIJrYVcXaNPXTQRQ96qktRUmf8",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/3ZbmPixbhEdXM77u6"
  },
  {
    ivr: "1808199",
    name: "花蓮玉里",
    placeId: "ChIJh-eIRHlqbzQRKbGVAkTVack",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/7dUeYhtHHfYzyTev7"
  },
  {
    ivr: "1801398",
    name: "蘆洲民族三",
    placeId: "ChIJ7VJ1bL6pQjQRU4_aX-nDOVY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Vwq8Pyfo1SPCALg78"
  },
  {
    ivr: "1801366",
    name: "三峽光明",
    placeId: "ChIJQZXasO0baDQRWDUcv06TPoc",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/u1v3HR3N2hVRaUyBA"
  },
  {
    ivr: "1807037",
    name: "桃園鶯桃",
    placeId: "ChIJRzd4nSIfaDQRKwcbAJHQeeI",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/rfH6pNadmMdim1tS9"
  },
  {
    ivr: "1807038",
    name: "台南東寧二",
    placeId: "ChIJZ9MJmJZ2bjQRsiUezfl1sYs",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/QCXhWAKAfM8tLaBM8"
  },
  {
    ivr: "1807023",
    name: "中和景平",
    placeId: "ChIJY5ZLIncCaDQREKpdNW2XxHs",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/jGapmovvzm3p95mj7"
  },
  {
    ivr: "1807014",
    name: "永康中北",
    placeId: "ChIJwxM2lc5wbjQRqAfbhaI-pW4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/kUu7xJ4K6k2W9Pws5"
  },
  {
    ivr: "1807001",
    name: "嘉義義竹",
    placeId: "ChIJrW18EPiDbjQRCZKgI3-WTlY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/vq8SDHVcCqp2NBsQ8"
  },
  {
    ivr: "1807005",
    name: "學甲中正",
    placeId: "ChIJJRhAmhl_bjQRXhE_BUwKCpU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/aKuYyDgAmi4wKN1K9"
  },
  {
    ivr: "1807006",
    name: "白河康樂",
    placeId: "ChIJyS8p4aGPbjQRfuYVencnIj4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/337UtuxwggskPdJ28"
  },
  {
    ivr: "1807008",
    name: "關廟中山",
    placeId: "ChIJUdPL_PNxbjQR7mzrSWX-DbU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/YBN2SFrqkiKVG1jL9"
  },
  {
    ivr: "1807011",
    name: "苗栗公館",
    placeId: "ChIJoRcKBF6raTQRIg9HzR2gSq4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/ZRUUSDY7TuPYtTUs7"
  },
  {
    ivr: "1807016",
    name: "台南西港",
    placeId: "ChIJaXNlch95bjQR3onXGofN_zw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/utY1kEWjb23DuV6t5"
  },
  {
    ivr: "1807018",
    name: "屏東大連",
    placeId: "ChIJF3lzwr8XbjQRDydstfdqHH4",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/j7TXZsCVzhgqawTG7"
  },
  {
    ivr: "1807024",
    name: "屏東廣東二",
    placeId: "ChIJ149vFwsXbjQR7gp22c1cjAw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/R95QKbYb7ZUEjNvm6"
  },
  {
    ivr: "1807030",
    name: "鳳山南京",
    placeId: "ChIJ7UBB8FQbbjQRVYHJGHzU_9Y",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/V6qyzuFDTQG6w7Tq9"
  },
  {
    ivr: "1807039",
    name: "大溪康莊",
    placeId: "ChIJYUQg0W0ZaDQRAwuC0LiVGLg",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/aWoH9L36L29qAHab8"
  },
  {
    ivr: "1807012",
    name: "水上中山",
    placeId: "ChIJLYDSfiKRbjQRxn-F29U-LOM",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/kHCygkh2YK9r1iBu7"
  },
  {
    ivr: "1807015",
    name: "善化中正",
    placeId: "ChIJGSqTc_97bjQRHhiCrMKdq9Q",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/jxt3ha3QJU9oRcR26"
  },
  {
    ivr: "1807021",
    name: "屏東萬丹",
    placeId: "ChIJj0kjb2QZbjQReCqH73O4Bvg",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/PnSHV3Li8eGMcDgF8"
  },
  {
    ivr: "1807027",
    name: "金山中山二",
    placeId: "ChIJ_Wu7BahMXTQRP0ow_mJY0Vk",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/DFM9n8iiuKJyWnks7"
  },
  {
    ivr: "1807029",
    name: "仁德中正",
    placeId: "ChIJW05cPvZzbjQRwqi8UJgY9jo",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/bsfixqZ46K8vS1TP8"
  },
  {
    ivr: "1807042",
    name: "蘆洲集賢",
    placeId: "ChIJnfCCYxipQjQRUmBdUBN2dEY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/CvvuQ7K4umrp1EYW8"
  },
  {
    ivr: "1807004",
    name: "屏東林邊",
    placeId: "ChIJyRRWX4XgcTQRG1GiqpbW7Yw",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/GqmJHMjgLdpUQ77x5"
  },
  {
    ivr: "1807022",
    name: "屏東屏一",
    placeId: "ChIJUdUJbzMXbjQRHew3zikSV3g",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/piJJEZQCyaKRg69Y7"
  },
  {
    ivr: "1807031",
    name: "台東東海",
    placeId: "ChIJVfJixD25bzQRS0o6CgO-6LU",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/RbNtGrthi66Kp2mn8"
  },
  {
    ivr: "1807036",
    name: "台南麻豆",
    placeId: "ChIJkxjfPlZ_bjQRp4TGB1qke-Q",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/trrY8PTZy5VCmu5U8"
  },
  {
    ivr: "1807017",
    name: "屏東明治",
    placeId: "ChIJB8AdEaQXbjQR5_n-Q0tvV5c",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/K1kZi4G4ZzFNzzmg8"
  },
  {
    ivr: "1807034",
    name: "竹北三民",
    placeId: "ChIJfW0B1Oo2aDQRQDZeT8YVB_w",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/24psh4zQJobg9oUP6"
  },
  {
    ivr: "1808181",
    name: "土城裕民二",
    placeId: "ChIJb49eR-cDaDQRbuBXLWHkR18",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/rmEPvnQZD6bajJ2D7"
  },
  {
    ivr: "1801198",
    name: "板橋南雅",
    placeId: "ChIJZ-exwKgCaDQRXR4OJNnj7nM",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/QToRaPbzV6WYJyno6"
  },
  {
    ivr: "1801384",
    name: "蘆洲光華",
    placeId: "ChIJz-drycmoQjQR4cHpjESE02g",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/3PaVZP42fHqHoDXD8"
  },
  {
    ivr: "1801209",
    name: "台北深坑",
    placeId: "ChIJ1XHeKc6qQjQRa-bWk3l55rI",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/uRfusccmYRaArxoF9"
  },
  {
    ivr: "1801146",
    name: "板橋新海",
    placeId: "ChIJsdPPQRGoQjQR3-rMf0jF-Jo",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/J6MLqXSKag69GSkMA"
  },
  {
    ivr: "1801179",
    name: "板橋忠孝",
    placeId: "ChIJ0Z1dX6ECaDQRx8D41_bmN40",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/QneLXfqCuwCFBDaLA"
  },
  {
    ivr: "1801385",
    name: "新莊民安",
    placeId: "ChIJH-t4E_SnQjQRyf7-ZCWx2c0",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/uQFmMusK7Z4ye7Kp6"
  },
  {
    ivr: "1801214",
    name: "樹林中山二",
    placeId: "ChIJ-V-bMD4daDQR-cKp_Du-i_s",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/2Z3QW49ixY8y2QbH6"
  },
  {
    ivr: "1803263",
    name: "高雄茄萣",
    placeId: "ChIJfwuNiXN1bjQRPoCNs3zn6IY",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/8q3FKJ7XGY79jxqX8"
  },
  {
    ivr: "1801346",
    name: "汐止忠孝",
    placeId: "ChIJYwPzRG1TXTQRN0Ma6LxzY2M",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Jw8N6F5NG6BFnkeD7"
  },
  {
    ivr: "1803261",
    name: "麻豆中山",
    placeId: "ChIJ3z7ajVZ_bjQRvxDfhcy67us",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/Dpayeykf5H4vN2wh7"
  },
  {
    ivr: "1803100",
    name: "嘉義興業",
    placeId: "ChIJMdRw7DCXbjQRkl6vb-L130U",
    mapsUrl: "https://www.google.com/maps?q=https://maps.app.goo.gl/5FAyzAPSpXDQSntY8"
  },
];