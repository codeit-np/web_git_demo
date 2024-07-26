export async function fetchMeals() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    );
    if (response.ok) {
      let data = await response.json();
      let result = document.getElementById("result");
      data.meals.map((m) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h5 = document.createElement("h5");

        img.src = m.strMealThumb;
        h5.innerHTML = m.strMeal;

        div.appendChild(img);
        div.appendChild(h5);

        result.appendChild(div);
      });
    }
  } catch (err) {
    console.err(err);
  }
}
