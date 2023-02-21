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
}

export const products = [
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
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
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
    link:"https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000"
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
    link:"https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794/?c=750000000"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/