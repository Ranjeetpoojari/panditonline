// const jsonData = [
//     {
//       imageSrc: "assets/images/Gueshpuja.png",
//       imageName: "Image 1",
//       description: "Description for Image 1"
//     },
//     {
//       imageSrc: "assets/images/Gueshpuja.png",
//       imageName: "Image 2",
//       description: "Description for Image 2"
//     },
//     // Add more data objects as needed
//   ];
  
//   const searchInput = document.getElementById("searchInput");
//   const imageElements = document.querySelectorAll(".imagelist");
//   const imageNameElements = document.querySelectorAll(".imageName");
//   const descriptionElements = document.querySelectorAll(".description");
  
//   searchInput.addEventListener("input", function () {
//     const searchValue = searchInput.value.toLowerCase();
  
//     jsonData.forEach((item, index) => {
//       if (item.imageName.toLowerCase().includes(searchValue)) {
//         imageElements[index].src = item.imageSrc;
//         imageElements[index].alt = item.imageName;
//         imageNameElements[index].textContent = item.imageName;
//         descriptionElements[index].textContent = item.description;
//       } else {
//         // Clear the content if it doesn't match the search
//         imageElements[index].src = "";
//         imageElements[index].alt = "";
//         imageNameElements[index].textContent = "";
//         descriptionElements[index].textContent = "";
//       }
//     });
//   });

const userData = [
    {
        username: "Ganesh Pooja",
        imgSrc: "assets/images/ganesh_Puja.png",
        detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt saepe magni dignissimos inventore esse atque vero aliquam . "
    },
    {
        username: "Satyanaran",
        imgSrc: "assets/images/satyanarayan_puja.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt saepe magni dignissimos inventore esse atque vero aliquam "
    },
    {
        username: "Rudarabhishek",
        imgSrc: "assets/images/rudarabhishek.png",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt saepe magni dignissimos inventore esse atque vero aliquam "
    },
    // Add more user data as needed
];

// Function to populate user details
function displayUserDetails(user) {
    $(".person-img").attr("src", user.imgSrc);
    $(".person-name").text(user.username);
    $(".person-detail").text(user.detail);
    $(".user-details").show();
}

// Function to search users
function search() {
    const input = $("#search-input").val().toLowerCase();
    const results = $("#results");
    results.empty();

    userData.forEach(user => {
        if (user.username.toLowerCase().includes(input)) {
            const userTemplate = $("<li>");
const userImage = $("<img>").attr("src", user.imgSrc).addClass("user-img");
const userGroup = $("<div>").addClass("pooja-detail-group"); // Create the group div
const userName = $("<h6>").text(user.username);
const userdis = $("<div>").addClass("pooja-discription");
const userDetail = $("<p>").text(user.detail);

userGroup.append(userName, userDetail); // Add h6 and p to the group div

const userDetailWrapper = $("<div>").addClass("pooja-dis");
userDetailWrapper.append(userDetail); // Wrap the 'p' element with a new 'div'

userTemplate.append(userImage, userGroup, userDetailWrapper); // Add the image, the group, and the wrapped 'p' element to the template
userTemplate.click(() => displayUserDetails(user));
results.append(userTemplate);

        }
    });
}

$(document).ready(() => {
    $("#search-input").on("input", search);
});
function search1() {
    const input = $("#search-input1").val().toLowerCase();
    const results = $("#results1");
    results.empty();

    userData.forEach(user => {
        if (user.username.toLowerCase().includes(input)) {
            const userTemplate = $("<li>");
const userImage = $("<img>").attr("src", user.imgSrc).addClass("user-img1");
const userGroup = $("<div>").addClass("pooja-detail-group1"); // Create the group div
const userName = $("<h6>").text(user.username);
const userdis = $("<div>").addClass("pooja-discription1");
const userDetail = $("<p>").text(user.detail);

userGroup.append(userName, userDetail); // Add h6 and p to the group div

const userDetailWrapper = $("<div>").addClass("pooja-dis1");
userDetailWrapper.append(userDetail); // Wrap the 'p' element with a new 'div'

userTemplate.append(userImage, userGroup, userDetailWrapper); // Add the image, the group, and the wrapped 'p' element to the template
userTemplate.click(() => displayUserDetails(user));
results.append(userTemplate);

        }
    });
}

$(document).ready(() => {
    $("#search-input1").on("input", search1);
});