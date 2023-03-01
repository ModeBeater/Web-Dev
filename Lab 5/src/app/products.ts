export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  image: string;
  img1:string;
  img2:string;
  img3:string;
  link:string;
  category:string;
  like:number;
}

export var products = [
  {
    id: 1,
    name: 'Xiaomi Redmi 10C',
    price: 258,
    description: 'Xiaomi Redmi 10C 4 ГБ/128 ГБ grey',
    rating:3,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h05/h78/49939925073950/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h9d/51224096735262/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h58/51224097194014/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/h97/51224097652766/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-4.jpg",
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    category:'xiaomi',
    like: 0
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 699,
    description: 'Apple iPhone 14 128Gb Black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/hc8/63072540065822/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h7c/63072540360734/apple-iphone-14-128gb-cernyj-106363023-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/hfd/63075491479582/apple-iphone-14-128gb-cernyj-106363023-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h96/63075491708958/apple-iphone-14-128gb-cernyj-106363023-4.jpg",
    link:"https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    category:'iphone',
    like: 0
  },
  {
    id: 3,
    name: 'Samsung Galaxy A23',
    price: 300,
    description: 'Samsung Galaxy A23 6 ГБ/128 ГБ Black',
    rating:4,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfe/h14/49792685113374/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h8d/49792687636510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hab/51166993940510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h2e/51166994169886/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-4.jpg",
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000",
    category:'samsung',
    like: 0
  },
  {
    id: 4,
    name: 'Samsung Galaxy A33',
    price: 287,
    description: 'Samsung Galaxy A33 5G 6 ГБ/128 ГБ Black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/h3f/49894748028958/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h76/51215744040990/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h50/51215744270366/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h79/51215744729118/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-4.jpg",
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000",
    category:'samsung',
    like: 0
  },
  {
    id: 5,
    name: 'Apple iPhone 13',
    price: 400,
    description: 'Apple iPhone 13 128Gb White',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/hc9/46392664162334/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h25/45664378716190/apple-iphone-13-128gb-belyj-102298420-5-Container.jpg",
    link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    category:'iphone',
    like: 0
  },
  {
    id: 6,
    name: 'Xiaomi Redmi Note 11',
    price: 358,
    description: 'Xiaomi Redmi Note 11 4 ГБ/128 ГБ grey',
    rating:3,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h5a/hb1/64321774059550.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/hfd/49957800771614/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hc8/49957801000990/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h01/49957801230366/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-4.jpg",
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000",
    category:'xiaomi',
    like: 0
  },
  {
    id: 7,
    name: 'Samsung Galaxy A53',
    price: 430,
    description: 'Samsung Galaxy A53 5G 6 ГБ/128 ГБ black',
    rating:3,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h6f/h8d/64381860446238.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h37/49613532987422/samsung-galaxy-a53-5g-6-gb-128-gb-cernyj-104253225-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hc9/49613533446174/samsung-galaxy-a53-5g-6-gb-128-gb-cernyj-104253225-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he6/haf/49613533904926/samsung-galaxy-a53-5g-6-gb-128-gb-cernyj-104253225-4.jpg",
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000",
    category:'samsung',
    like: 0
  },
  {
    id: 8,
    name: 'Poco X4 Pro',
    price: 475,
    description: 'Poco X4 Pro 8 ГБ/256 ГБ black',
    rating:4,
    image:"https://resources.cdn-kaspi.kz/img/m/p/ha3/hc3/64455327514654.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/ha9/51223279730718/poco-x4-pro-8-gb-256-gb-cernyj-104227418-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/hbc/51223280189470/poco-x4-pro-8-gb-256-gb-cernyj-104227418-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h0f/51223280648222/poco-x4-pro-8-gb-256-gb-cernyj-104227418-4.jpg",
    link:"https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000",
    category:'others',
    like: 0
  },
  {
    id: 9,
    name: 'OPPO Reno 7',
    price: 460,
    description: 'OPPO Reno 7 8 ГБ/128 ГБ black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h29/hcd/64924362178590.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hcb/50459865251870/orro-reno-7-8-128gb-cernyj-104705829-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h3c/51167477268510/orro-reno-7-8-128gb-cernyj-104705829-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h6c/51167477497886/orro-reno-7-8-128gb-cernyj-104705829-4.jpg",
    link:"https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000",
    category:'others',
    like: 0
  },
  {
    id: 10,
    name: 'Samsung Galaxy A73',
    price: 560,
    description: 'Samsung Galaxy A73 5G 6 ГБ/128 ГБ grey',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/img/m/p/ha5/hd2/64385646559262.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/hda/50196541440030/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794-2.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h32/50196541669406/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794-3.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h06/50196541898782/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794-4.jpg",
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794/?c=750000000",
    category:'samsung',
    like: 0
  },
  {
    id: 11,
    name: 'Apple iPhone 11',
    price: 450,
    description: 'Apple iPhone 11 64Gb Slim Box Black',
    rating:4,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4c/h6b/32690569838622/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hfa/32690571706398/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/hd7/32690575212574/apple-iphone-11-64gb-slim-box-cernyj-100692387-2-Container.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/hdb/32690579505182/apple-iphone-11-64gb-slim-box-cernyj-100692387-3-Container.jpg",
    link:"https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000",
    category:'iphone',
    like: 0
  },
  {
    id: 12,
    name: 'Apple iPhone 13',
    price: 450,
    description: 'Apple iPhone 13 128Gb Pink',
    rating:3,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h61/hc2/46392660557854/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h43/45664458997790/apple-iphone-13-128gb-rozovyj-102298145-5-Container.jpg",
    link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000",
    category:'iphone',
    like: 0
  },
  {
    id: 13,
    name: 'Apple iPhone 14 Pro',
    price: 450,
    description: 'Apple iPhone 14 Pro 256Gb gold',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/img/m/p/hbd/h0d/64503549853726.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h51/63073985822750/apple-iphone-14-pro-128gb-zolotistyj-106363312-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/hd4/63073986052126/apple-iphone-14-pro-128gb-zolotistyj-106363312-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hb9/63073986281502/apple-iphone-14-pro-128gb-zolotistyj-106363312-3.jpg",
    link:"https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-zolotistyi-106363312/?c=750000000",
    category:'iphone',
    like: 0
  },
  {
    id: 14,
    name: 'Samsung Galaxy A03',
    price: 160,
    description: 'Samsung Galaxy A03 Core 2 ГБ/32 ГБ Black',
    rating:2,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h59/h7b/49613525123102/smartfon-samsung-galaxy-a53-5g-256gb-sm-a536ezkhskz-black-104253200-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/he7/51190896394270/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hff/51190897442846/samsung-galaxy-a03-core-2-gb-32-gb-cernyj-103153817-3.jpg",
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000",
    category:'samsung',
    like: 0
  },
  {
    id: 15,
    name: 'Xiaomi Redmi Note 11S',
    price: 358,
    description: 'Xiaomi Redmi Note 11S 8 ГБ/128 ГБ grey',
    rating:4,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h23/h70/49684457127966/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/h0e/49684457717790/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/he6/49684458176542/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-3.jpg",
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000",
    category:'xiaomi',
    like: 0
  },
  {
    id: 16,
    name: 'Xiaomi 12T',
    price: 570,
    description: 'Xiaomi 12T 8 ГБ/256 ГБ Black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h47/he7/64349605036062.jpg?format=preview-medium",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h46/63228133474334/xiaomi-12t-8-gb-256-gb-cernyj-106866405-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/ha6/63228133933086/xiaomi-12t-8-gb-256-gb-cernyj-106866405-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hed/63228134391838/xiaomi-12t-8-gb-256-gb-cernyj-106866405-3.jpg",
    link:"https://kaspi.kz/shop/p/xiaomi-12t-8-gb-256-gb-chernyi-106866405/?c=750000000",
    category:'xiaomi',
    like: 0
  },
  {
    id: 17,
    name: 'Xiaomi Redmi 9A',
    price: 100,
    description: 'Xiaomi Redmi 9A 2 ГБ/32 ГБ',
    rating:1,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf2/h11/50489568296990/xiaomi-redmi-9a-2-32gb-zelenyj-100436948-1-Container.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/ha0/50489568362526/xiaomi-redmi-9a-2-32gb-zelenyj-100436948-1-Container.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h66/50489568657438/xiaomi-redmi-9a-2-32gb-zelenyj-100436948-2-Container.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h5a/50489897123870/xiaomi-redmi-9a-2-gb-32-gb-zelenyj-100436948-3.jpg",
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-zelenyi-100436948/?c=750000000",
    category:'xiaomi',
    like: 0
  },
  {
    id: 18,
    name: 'OnePlus 10 Pro',
    price: 660,
    description: 'OnePlus 10 Pro 12 ГБ/256 ГБ black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf4/h20/49730556461086/oneplus-10-pro-12-gb-256-gb-chernyi-104314136-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/hb2/49730556592158/oneplus-10-pro-12-gb-256-gb-chernyi-104314136-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h97/51508397015070/oneplus-10-pro-12-gb-256-gb-chernyi-104314136-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/hca/51508397473822/oneplus-10-pro-12-gb-256-gb-chernyi-104314136-3.jpg",
    link:"https://kaspi.kz/shop/p/oneplus-10-pro-12-gb-256-gb-chernyi-global-version-104314136/?c=750000000",
    category:'others',
    like: 0
  },
  {
    id: 19,
    name: 'OnePlus Ace Pro',
    price: 670,
    description: 'OnePlus Ace Pro 16 ГБ/512 ГБ black',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha5/hfe/63387607498782/oneplus-ace-pro-16-gb-512-gb-chernyi-106955104-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h19/63387607629854/oneplus-ace-pro-16-gb-512-gb-chernyi-106955104-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/hdb/63387608088606/oneplus-ace-pro-16-gb-512-gb-chernyi-106955104-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7d/h37/63387608547358/oneplus-ace-pro-16-gb-512-gb-chernyi-106955104-3.jpg",
    link:"https://kaspi.kz/shop/p/oneplus-ace-pro-16-gb-512-gb-chernyi-106955104/?c=750000000",
    category:'others',
    like: 0
  },
  {
    id: 20,
    name: 'OPPO A96',
    price: 340,
    description: 'OPPO A96 6 ГБ/128 ГБ blue',
    rating:5,
    image:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/h67/62020765319198/oppo-a96-6-gb-128-gb-goluboj-105612807-1.jpg",
    img1:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h0a/62020765384734/oppo-a96-6-gb-128-gb-goluboj-105612807-1.jpg",
    img2:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/hd9/62020765614110/oppo-a96-6-gb-128-gb-goluboj-105612807-2.jpg",
    img3:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/hf7/62020765843486/oppo-a96-6-gb-128-gb-goluboj-105612807-3.jpg",
    link:"https://kaspi.kz/shop/p/oppo-a96-6-gb-128-gb-goluboi-105612807/?c=750000000",
    category:'others',
    like: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/