let myFruits = [
  { 
    fruit: 'apple',
    color: 'green',
    image: 'Images/greenApple.png',
    descr: "An apple is a round, edible fruit produced by an apple tree (Malus domestica)" 
  },
  { 
    fruit: 'pear', 
    color: 'green',
    image: 'Images/greenPear.webp',
    descr: "Pears are fruits produced and consumed around the world, growing on a tree."
  },
  { 
    fruit: 'mango', 
    color: 'red',
    image: 'Images/redMango.avif',
    descr: "Mangoes are tropical stone fruits, part of the drupe family, known for their sweet taste."
  }
];

class Fruit {
  constructor(name, color, image, descr) {
    this.name = name;
    this.color = color;
    this.image = image;
    this.descr = descr;
  }

  render() {
    let fruitContainer = document.getElementById("fruitDesc")

    let fruitItem = document.createElement("div");
    fruitItem.className = "fruitItem";

    let title = document.createElement("h3");
    title.textContent = this.name;
    fruitItem.appendChild(title);

    let picture = document.createElement("img");
    picture.src = this.image;
    fruitItem.appendChild(picture);

    let content = document.createElement("p");
    content.textContent = this.descr;
    fruitItem.appendChild(content);

    fruitContainer.appendChild(fruitItem);
  }
}

class ColorBlock {
  constructor(color) {
    this.color = color;
  }

  show() {
    this.element = document.createElement('button');
    this.element.setAttribute('data-color', this.color);
    this.element.style.backgroundColor = this.color;
    document.querySelector('#colorPanel').appendChild(this.element);
  }
}

$('#colorPanel').on('click', 'button', function () {
  let color = $(this).data('color');
  $('#colorPanel button').css('box-shadow', 'none');
  $('#colorPanel button[data-color="' + color + '"]').css(
    'box-shadow',
    '4px 4px 1px black'
  );

  let selected = myFruits.filter(f => f.color === color);
  let container = document.getElementById("fruitDesc");
  //empties the container to get rid of previous fruits
  container.innerHTML = "";

  selected.forEach(f => {
    let fruit = new Fruit(f.fruit, f.color, f.image, f.descr);
    fruit.render();
  });
});

let coloredButtons = [...new Set(myFruits.map(f => f.color))];
coloredButtons.forEach(c => {
  let btn = new ColorBlock(c);
  btn.show();
});