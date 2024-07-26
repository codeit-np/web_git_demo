export async function fetchCourses() {
  try {
    const response = await fetch("https://codeit.com.np/api/popular-courses");
    if (response.ok) {
      let data = await response.json();
      //   console.log(data);
      let result = document.getElementById("result");
      data.data.map((c) => {
        // console.log(c.course_name);
        let parentDiv = document.createElement("div");

        let firstChild = document.createElement("div");
        let secondChild = document.createElement("div");

        secondChild.style.padding = "0 16px";
        let img = document.createElement("img"); // Course Image
        let h1 = document.createElement("h1"); //Course Name
        let firstP = document.createElement("p");
        let secondP = document.createElement("p");

        img.src = c.featured;
        h1.innerHTML = c.course_name;

        firstP.innerHTML = "Course Fee";
        secondP.innerHTML = c.price;

        firstChild.appendChild(img);
        secondChild.appendChild(h1);
        secondChild.appendChild(firstP);
        secondChild.appendChild(secondP);

        parentDiv.appendChild(firstChild);
        parentDiv.appendChild(secondChild);

        result.appendChild(parentDiv);
      });
    }
  } catch (err) {
    console.error(err);
  }
}
