const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },})
const arr = [
  {
    image: "./img/Designing Dashboards.png",
    title: "designingDashboard",
    year: "2020",
    category: "dashboard",
    description: "firstDescription",
  },
  {
    image: "./img/Vibrant Portraits of 2020.png",
    title: "vibrantPortraitsOf2020",
    year: "2018",
    category: "illustration",
    description: "secondDescription",
  },
  {
    image: "./img/36 Days of Malayalam type.png",
    title: "36DaysOfMalayalamType",
    year: "2018",
    category: "typography",
    description: "thirdDescription",
  },
  {
    image: "./img/36 Days of Malayalam type.png",
    title: "36DaysOfMalayalamType",
    year: "2018",
    category: "typography",
    description: "fourthDescription",
  },
];


// arr.forEach((item, index) => {
//   const div = document.createElement("div");
//   div.setAttribute("id", index);
//   const title = document.createElement("p");
//   const description = document.createElement("h2");
//   title.innerHTML = item.title;
//   description.innerHTML = item.description;
//   console.log(div);
//   console.log(index);
//   document.getElementById("kerim").appendChild(title);
//   document.getElementById("kerim").appendChild(description);
// });
