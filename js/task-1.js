const categories = document.querySelectorAll("li.item").length;
console.log("Number of categories: " + categories);

document.querySelectorAll("li.item").forEach((li) => {
  console.log("Category: " + li.querySelector("h2").textContent);
  console.log("Elements: " + li.querySelectorAll("li").length);
});
