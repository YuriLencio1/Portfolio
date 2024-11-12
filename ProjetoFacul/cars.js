const carImages = {
   'Carro A': ['carro_a1.jpg', 'carro_a2.jpg', 'carro_a3.jpg'],
   'Carro B': ['carro_b1.jpg', 'carro_b2.jpg', 'carro_b3.jpg'],
   'Carro C': ['carro_c1.jpg', 'carro_c2.jpg', 'carro_c3.jpg']
};
let currentImageIndex = 0;
function showCarDetails(carName) {
   document.getElementById('carTitle').textContent = carName;
   document.getElementById('carImage').src = carImages[carName][0];
   currentImageIndex = 0;
   document.getElementById('carDetailsModal').style.display = 'block';
   loadCalendar();
}
function closeModal() {
   document.getElementById('carDetailsModal').style.display = 'none';
}
function changeImage(direction) {
   const carName = document.getElementById('carTitle').textContent;
   currentImageIndex = (currentImageIndex + direction + carImages[carName].length) % carImages[carName].length;
   document.getElementById('carImage').src = carImages[carName][currentImageIndex];
}
function loadCalendar() {
   const calendar = document.getElementById('calendar');
   const today = new Date();
   calendar.innerHTML = '';
   for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateButton = document.createElement('button');
      dateButton.textContent = date.toLocaleDateString('pt-BR');
      dateButton.className = 'date-button';
      dateButton.onclick = () => alert(`Data selecionada: ${dateButton.textContent}`);
      calendar.appendChild(dateButton);
   }

   document.getElementById('confirm-dates').addEventListener('click', function () {
      const pickupDate = document.getElementById('pickup-date').value;
      const returnDate = document.getElementById('return-date').value;
      if (!pickupDate || !returnDate) {
         alert('Por favor, selecione as datas de retirada e devolução.');
         return;
      }
      if (new Date(pickupDate) > new Date(returnDate)) {
         alert('A data de retirada não pode ser posterior à data de devolução.');
         return;
      }
      // Simular confirmação das datas
      console.log('Carro reservado de', pickupDate, 'até', returnDate);
      alert('Carro reservado com sucesso!');
   });
}