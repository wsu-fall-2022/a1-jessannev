// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)


let std_name = "Jessica Evans"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`


import * as d3 from "d3";

//create svg1
let svg1 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', 0)
    .style('background', '#8DB1B5')
    .style('fill', 'black')

//add camera icon to svg1
let obj_button = svg1.append("rect")
    .attr('rx',2)
    .attr('ry',1)
    .attr('x', 22)
    .attr('y', 27)
    .attr('width', 8)
    .attr('height', 3)
    .style('stroke','black')
    .style('fill', 'black')
svg1.append("rect")
    .attr("rx", 2)
    .attr("ry", 2)
    .attr('x', 15)
    .attr('y', 30)
    .attr('width', 70)
    .attr('height', 40)
    .style('stroke','black')
    .style('fill', 'white')
svg1.append("circle")
    .attr('cx',50)
    .attr('cy', 52)
    .attr('r', 18)
    .attr('stroke-width',2)
    .style('stroke', 'black')
    .style('fill', 'white')
svg1.append("circle")
    .attr('cx',50)
    .attr('cy', 52)
    .attr('r', 16.1)
    .style('stroke', 'black')
    .style('fill', 'black')
svg1.append("circle")
    .attr('cx',50)
    .attr('cy', 52)
    .attr('r', 15)
    .style('stroke', 'white')
    .style('fill', 'none')
let obj_lens = svg1.append("circle")
    .attr('cx',50)
    .attr('cy', 52)
    .attr('r', 6)
    .style('stroke', 'white')
    .style('fill', 'white')
svg1.append("circle")
    .attr('cx',50)
    .attr('cy', 52)
    .attr('r', 7)
    .style('stroke-width',.5)
    .style('stroke', 'white')
    .style('fill', 'none')
svg1.append("rect")
    .attr('x', 69)
    .attr('y', 32)
    .attr('width', 12)
    .attr('height', 8)
    .style('stroke','black')
    .style('fill', 'black')
svg1.append("rect")
    .attr('x', 69.5)
    .attr('y', 32.5)
    .attr('width', 11)
    .attr('height', 7)
    .style('stroke-width', .5)
    .style('stroke','white')
    .style('fill', 'none')
 svg1.append("path")
     .style("stroke", "black")
     .style('fill', 'white')
     .style('stroke-width', 1)
     .attr("d", "M35,30 L35,25, L40,20 L60,20 L65, 25 L65,30Z")
svg1.append("rect")
    .attr('rx', .5)
    .attr('x', 41)
    .attr('y', 22)
    .attr('width', 18)
    .attr('height', 6)
    .style('stroke','black')
    .style('fill', 'black')

//animate camera icon
function animateCamera(){
 svg1.transition()
     .delay(2000)
     .duration(2000)
     .style('background', '#CBC3E3')
     .transition()
     .delay(2200)
     .duration(2000)
     .attr('transform', 'translate(0,75)')
 obj_lens.transition()
     .delay(800)
     .attr('r', 0)
     .duration(500)
     .transition()
     .attr('r', 6)
     .duration(500)
 obj_button.transition()
     .delay(500)
     .attr('transform', 'translate(0,1.5)')
}
animateCamera()


//create svg2
let svg2 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', 130)
    .style('background', '#ACD0C0')
    .style('fill', 'transparent')

//add flower icon to svg2
svg2.append("path")
    .style('stroke', 'black')
    .style('stroke-width', 2)
    .attr("d", "M48, 85 Q46, 65 53,40 ")
let obj_leaf2 = svg2.append("path")
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .style('fill', "#228B22")
    .attr("d", "M48, 65 Q40, 64 38,55 Q35, 45 31, 40 Q 45, 35 48,65")
let obj_leaf1 = svg2.append("path")
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .style('fill', "#228B22")
    .attr("d", "M47, 75 Q55, 72 58,64 Q60, 58 68, 55 Q 55, 45 47,75")
svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',55)
    .attr('cy', 25)
    .attr('r', 10)
    .style('fill', 'purple')
    .style('stroke-width', 2)
svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',65)
    .attr('cy', 30)
    .attr('r', 9)
    .style('fill', 'purple')
    .style('stroke-width', 2)
svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',45)
    .attr('cy', 30)
    .attr('r', 9)
    .style('fill', 'purple')
    .style('stroke-width', 2)
svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',60)
    .attr('cy', 40)
    .attr('r', 9)
    .style('fill', 'purple')
    .style('stroke-width', 2)
svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',50)
    .attr('cy', 40)
    .attr('r', 9)
    .style('fill', 'purple')
    .style('stroke-width', 2)
let obj_center = svg2.append("circle")
    .style('stroke', 'black')
    .attr('cx',55)
    .attr('cy', 32)
    .attr('r', 5)
    .style('fill', "#4B0082")

//animate flower icon
function animate_flower(){
obj_leaf1
    .transition()
    .attr('transform', 'translate(50, 80)')
    .duration(3000)
 obj_leaf2
     .transition()
     .attr('transform', 'translate(-30,90)')
     .delay(2000)
     .duration(3000)
 svg2
     .transition()
     .delay(2000)
     .duration(2000)
     .style('background', '#b19cd9')
     .transition()
     .delay(1000)
     .attr('transform', 'translate(0,50)')
}
animate_flower()


//create svg3
let svg3 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', 0)
    .attr('y', 150)
    .style('background', '#A7C7E7')
    .style('fill', 'transparent')

//add cat icon to svg3
svg3.append('path')
    .style("stroke", "black")
    .style('fill', 'black')
    .style('stroke-width', 2)
    .attr("d", "M31,46 Q26,38 25,30 Q38, 35 40, 38 Q50, 35 60,38 Q62,35 75, 28 Q77,38 69,47")
svg3.append('ellipse')
    .attr('cx',50)
    .attr('cy', 54)
    .attr('rx', 23)
    .attr('ry', 20)
    .attr('stroke-width',.5)
    .style('stroke', 'black')
    .style('fill', 'black')
let obj_cateye1 = svg3.append('path')
    .style("stroke", "black")
    .style('fill', 'white')
    .style('stroke-width', 2)
    .attr("d", "M33,50 Q45,45 48,55 Q38, 62 33, 50")
let obj_cateye2 = svg3.append('path')
    .style("stroke", "black")
    .style('fill', 'white')
    .style('stroke-width', 2)
    .attr("d", "M67,50 Q55,45 52,55 Q62, 62 67,50")
let obj_pupil1 = svg3.append('ellipse')
    .attr('cx',60)
    .attr('cy', 52)
    .attr('rx', 1)
    .attr('ry', 4)
    .style('stroke', 'black')
    .style('fill', 'black')
let obj_pupil2 = svg3.append('ellipse')
    .attr('cx',40)
    .attr('cy', 52)
    .attr('rx', 1)
    .attr('ry', 4)
    .style('stroke', 'black')
    .style('fill', 'black')
svg3.append("path").style("fill", "pink").style('stroke-width', .4)
    .attr("d", "M48,58 L50,61 52,58z")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M53,60 Q60,55 90,56")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M53,61 Q60,58 85,60")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M53,61.5 Q60,61 90,64")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M53,60.8 Q62,62 90,69")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M47,60 Q40,55 10,58")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M47,61 Q40,58 15,60")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M47,61.5 Q40,61 10,64")
svg3.append("path").style("stroke", "white").style('stroke-width', .4)
    .attr("d", "M47,60.8 Q42,62 10,69")

//animate cat icon
function animate_cat(){
  obj_cateye1
      .transition()
      .duration(2000)
      .attr("d", "M33,50 Q38,62 48,55 Q38, 62 33, 50")
      .transition()
      .duration(2000)
      .attr("d", "M33,50 Q42,48 48,55 Q38, 62 33, 50")
      .style('fill', '#A7C7E7')
 obj_cateye2
     .transition()
     .duration(2000)
     .attr("d", "M67,50 Q62,62 52,55 Q62, 62 67,50")
     .transition()
     .duration(2000)
     .attr("d", "M67,50 Q58,48 52,55 Q62, 62 67,50")
     .style('fill', '#A7C7E7')
 obj_pupil1
     .transition()
     .delay(2000)
     .attr('cy', 53)
     .attr('rx', 2.5)
     .attr('ry', 2.5)
 obj_pupil2
     .transition()
     .delay(2000)
     .attr('cy', 53)
     .attr('rx', 2.5)
     .attr('ry', 2.5)
 svg3
     .transition()
     .delay(3000)
     .duration(3000)
     .attr('transform', 'translate(0,100)')
     .transition()
     .delay(1500)
     .duration(2000)
     .attr('transform', 'translate(0,-10)')
}
animate_cat()


//create svg4
let svg4 = d3.select('main')
    .append('svg:svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', 250)
    .style('background', '#b19cd9')
    .style('fill', 'transparent')

//add face icon to svg4
svg4.append("circle")
    .attr('cx',50)
    .attr('cy', 50)
    .attr('r', 35)
    .attr('stroke-width',2)
    .style('stroke', 'black')
    .style('fill', 'transparent')
svg4.append('ellipse')
    .attr('cx', 37)
    .attr('cy', 45)
    .attr('rx', 8)
    .attr('ry', 5)
    .style('fill', 'white')
    .style('stroke', 'black')
let obj_eye2 = svg4.append("circle")
    .attr('cx',35)
    .attr('cy', 45)
    .attr('r', 4.5)
    .attr('stroke-width',.5)
    .style('stroke', 'black')
    .style('fill', 'black')
svg4.append('ellipse')
    .attr('cx', 63)
    .attr('cy', 45)
    .attr('rx', 8)
    .attr('ry', 5)
    .style('fill', 'white')
    .style('stroke', 'black')
let obj_eye1 = svg4.append("circle")
    .attr('cx',61)
    .attr('cy', 45)
    .attr('r', 4.5)
    .attr('stroke-width',.5)
    .style('stroke', 'black')
    .style('fill', 'black')
let obj_mouth = svg4.append("path")
    .style("stroke", "black")
    .style('fill', '#FF6961')
    .style('fill-opacity', .5)
    .style('stroke-width', 2)
    .attr("d", "M35,70 Q50,60 65,70 Q50,50 35,70")

//animate the face icon
function animate_face(){
 svg4
     .transition()
     .delay(2000)
     .duration(2000)
     .style('background', '#ACD0C0')
     .transition()
     .delay(1000)
     .attr('transform', 'translate(0,50)')
 obj_eye1
     .transition()
     .delay(1000)
     .duration(1500)
     .attr('cx',65)
     .transition()
     .duration(1500)
     .attr('cx',61)
     .transition()
     .duration(1500)
     .attr('cx',63)
 obj_eye2
     .transition()
     .delay(1000)
     .duration(1500)
     .attr('cx',39)
     .transition()
     .duration(1500)
     .attr('cx',35)
     .transition()
     .duration(1500)
     .attr('cx',37)
  obj_mouth
      .transition()
      .delay(4500)
      .duration(2000)
      .attr("d", "M35,60 Q50,79 65,60, Q50,69 35,60")
}
animate_face()


//create svg5
let svg5 = d3.select('main')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#CBC3E3')
    .style('fill', 'transparent')

//add lightning icon to svg5
let obj_lb = svg5.append("path")
    .style("stroke", "black")
    .style('fill', 'white')
    .style('stroke-width', 1)
    .attr("d", "M65,20 L45,20, L35,40 L45,40 L35,60 L45,60 L35,80 L60,55 L50,55 L65, 35 L55,35Z")
let interpol_rotate = d3.interpolateString('rotate(0, 30,40)', 'rotate(360, 70, 10)')

//animate the lightning icon
function animate_lb(){
  obj_lb
    .transition()
    .duration(1000)
    .style('fill', 'blue')
    .transition()
    .duration(6000)
    .attrTween('transform', function(d,i,a){return interpol_rotate})
    .duration(2000)
    .style('fill', '#FDFD96')
    .transition()
  svg5
    .transition()
    .delay(2000)
    .duration(2000)
    .style('background', '#8DB1B5')
    .transition()
    .delay(2200)
    .duration(2000)
    .attr('transform', 'translate(0,75)')
}
animate_lb()







