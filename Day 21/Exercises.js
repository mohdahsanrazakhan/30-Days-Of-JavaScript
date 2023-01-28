/* Exercises Level 1 */

// Question 1: Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
document.querySelector('p')

// Question 2: Get each of the the paragraph using document.querySelector('#id') and by their id
document.querySelector('#para1')

// Question 3: ​Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let nodeList = document.querySelectorAll('p')

// Question 4: Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i])
}

// Question 5: Set a text content to paragraph the fourth paragraph,Fourth Paragraph
nodeList[3].textContent = "Fourth Paragraph";

// Question 6: Set id and class attribute for all the paragraphs using different attribute setting methods
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].className = "text";
    nodeList[i].id = `id${i}`;
}



/* Exercises Level 2 */

// Question 1: Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
arr.forEach(a => {
    a.style.fontSize = '25px';
    a.style.color = 'red';
    a.style.background = 'green';
    a.style.border = '5px solid black';
})

// Question 2: Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
arr.forEach((a, i) => {
    if (i == 0 || i == 2) {
        a.style.color = 'green';
    }
    else if (i == 1 || i == 3) {
        a.style.color = 'red';
    }
    else {
        a.style.color = 'blue';
    }
    a.style.background = 'yellow';
})


// Question 3: Set text content, id and class to each paragraph
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = `This is renamed paragraph ${i}`;
    nodeList[i].className = "text";
    nodeList[i].id = `id${i}`;
}



/* Exercise Level 3 is in another file */