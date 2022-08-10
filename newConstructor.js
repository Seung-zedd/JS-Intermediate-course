function Item(title, price) {
  this.title = title; //this는 빈 객체
  this.price = price;
  this.showPrice = function () {
    console.log(`이 상품의 가격은 ${price}원 입니다.`);
  };
}

const item1 = new Item("사과", 1500);
const item2 = new Item("바나나", 1900);
const item3 = new Item("딸기", 2500);
const item4 = new Item("수박", 3000);

item2.showPrice();
item4.showPrice();
