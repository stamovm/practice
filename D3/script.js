d3.select('div').selectAll('p')

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then((response) => response.json())
  .then((data) => {
    // document.getElementById('title').innerHTML = JSON.stringify(data)
    console.log(data.data[5])
  })
