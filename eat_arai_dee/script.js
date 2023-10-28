fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const foodData = data.menu;

    function randomFood() {
      const randomMenuIndex = Math.floor(Math.random() * foodData.length);
      const randomMenu = foodData[randomMenuIndex];

      const randomFood = randomMenu[0];
      
      const foodElement = document.getElementById('food');
      foodElement.innerHTML = `<p>สิ่งที่มึงต้องแดกคือ : <em>${randomMenu}</em></p>`;
    }

    document.getElementById('randomButton').addEventListener('click', randomFood);
  });
