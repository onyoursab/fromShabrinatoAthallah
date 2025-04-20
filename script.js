const photos = [
  {
    src: "foto1.jpg",
    caption: `Our child memory, foto yang paling aku suka. kita udah bareng bareng dari kecil yaa? suka gemes kalau liat foto kita berdua yang ini 🥹`
  },
  {
    src: "foto2.jpg",
    caption: "Ini waktu kita jalan-jalan ke Yogyakarta tahun 2017 setelah pulang dari Bondowoso, aku baru mau naik ke kelas 9, kalo kamu baru mau naik ke kelas 8 💫"
  },
  {
    src: "foto3.jpg",
    caption: "Kita lucu banget di sini, lagi makan ice cream. aku masih imut banget yah disini? hehehe 🥹"
  },
  {
    src: "foto4.jpg",
    caption: `Puncak memory tahun 2023, 
    ini kita lagi jalan-jalan ke Safari Night. ini jalan jalan kita abis lebaran sebelum kamu berangkat ke Madinah. pengen lagi deh ke Safari Night, seru banget ya ternyata 🥰`
  },
  {
    src: "foto5.jpg",
    caption: "Pertama kali nganter kamu ke bandara untuk berangkat ke Madinah, aku sedih banget disini tapi bangga juga hehe, aku selalu bangga sama kamu 💕"
  },
  {
    src: "foto6.jpg",
    caption: "Ini waktu ke kopi nako sore sore, seru banget naik motor terjauh sama kamu. aku berharap kita bisa motoran kayak gini lagi aku seneeeeeng banget 🌹"
  }
];

function showPhoto(index) {
  const photoBox = document.querySelector('.photo-box');
  const photo = document.getElementById('photo');
  const caption = document.getElementById('caption');

  photo.src = photos[index].src;
  caption.textContent = photos[index].caption;
  photoBox.style.display = "flex";
}
