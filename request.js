/*
Product ID  : 100524655453
Product SKU : 1552898555
*/


let client = "183****"
let apiKey = "fdf68ae7-4416-497a-**************"

let items = [
  "attributes": [
    { "id": 31, "values": [ { "dictionary_value_id": "5074417" } ] },
    { "id": 4298, "values": [ { "dictionary_value_id": "23466" } ] },
    { "id": 8229, "values": [ { "dictionary_value_id": "91264" } ] },
    { "id": 8292, "values": [ { "value": "test_kart" } ] },
    { "id": 9163, "values": [ { "dictionary_value_id": "22880" } ] },
    { "id": 10096, "values": [ { "dictionary_value_id": 61574 } ] },
    { "id": 33, "values": [ { "value": "Anka" } ] },
    { "id": 4305, "values": [ { "dictionary_value_id": "61713" } ] },
    { "id": 4389, "values": [ { "value": "Türkiye" } ] },
    { "id": 4495, "values": [ { "value": "Yaz" } ] },
    { "id": 4496, "values": [ { "dictionary_value_id": "61713" } ] },
    { "id": 4501, "values": [ { "value": "Klasik" } ] },
    { "id": 4503, "values": [ { "value": "İlkbahar Yaz 2024" } ] },
    { "id": 4516, "values": [ { "dictionary_value_id": "61713" } ] },
    { "id": 4519, "values": [ { "value": "Croslite" } ] },
    { "id": 8802, "values": [ { "value": "12" } ] },
    { "id": 9248, "values": [ { "value": "Türkiye" } ] },
    { "id": 9630, "values": [ { "value": "Nötr" } ] },
    { "id": 10550,"values": [ { "dictionary_value_id": "970729097" } ] },
    { "id": 9048, "values": [ { "value": "card524655453" } ] },
    { "id": 4191, "values": [ { "value": "<p>Детские летние черные сандалии GEZER с подсветкой и фигурой космонавта</p><p><br></p>"}]},
    { "id": 9533, "values": [ { "value": "28-29" } ] }
  ],
  "barcode": "103524655453",
  "category_id": 76241279,
  "color_image": "https://cdn.dsmcdn.com//ty801/product/media/images/20230327/17/313423706/897628307/1/1_org_zoom.jpg",
  "complex_attributes": [],
  "currency_code": "USD",
  "depth": 100,
  "dimension_unit": "mm",
  "height": 110,
  "images": [
    "https://cdn.dsmcdn.com//ty801/product/media/images/20230327/17/313423706/897628307/1/1_org_zoom.jpg",
    "https://cdn.dsmcdn.com//ty803/product/media/images/20230327/17/313423706/897628307/2/2_org_zoom.jpg",
    "https://cdn.dsmcdn.com//ty803/product/media/images/20230327/17/313423706/897628307/3/3_org_zoom.jpg",
    "https://cdn.dsmcdn.com//ty803/product/media/images/20230327/17/313423706/897628307/4/4_org_zoom.jpg",
    "https://cdn.dsmcdn.com//ty803/product/media/images/20230327/17/313423706/897628307/5/5_org_zoom.jpg"
  ],
  "name": "Детские летние черные сандалии с подсветкой и фигуркой космонавта",
  "offer_id": "103524655453",
  "old_price": "29.8485",
  "premium_price": "22.11",
  "price": "22.11",
  "vat": "0",
  "weight": 100,
  "weight_unit": "g",
  "width": 150
]

url = 'https://api-seller.ozon.ru/v2/product/import'
const headers = {
  'Client-Id': client,
  'Api-Key': apiKey
}
const data = {
  "items": items
}
const sendPost = await axios.post(url, data, { headers })
console.log(sendPost.data.result) //{ task_id: 1153057177 }


