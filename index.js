const svg = document.getElementById('canvas')

const seats = []

function drawSeat(angle, distance, color) {
  const x = 425 + distance * Math.cos(angle)
  const y = 408 - distance * Math.sin(angle)
  const r = 7

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute('cx', x)
  circle.setAttribute('cy', y)
  circle.setAttribute('r', r)
  circle.setAttribute('fill', color)
  svg.appendChild(circle)
}

function drawRow(distance, n) {
  for (let i = 0; i < n; i++) {
    seats.push({
      theta: (Math.PI / 180) * ((200 * i) / (n - 1) - 10),
      r: distance,
    })
  }
}

for (let i = 0; i < 13; i++) {
  drawRow(158 + i * 19.1, 30 + Math.round((i * 10) / 3))
}

// Sort all the seats by angle before drawing them
// so that when we loop through them to colour them
// it'll go around the arc from left to right.
seats.sort((a, b) => b.theta - a.theta)

for (let i = 0; i < seats.length; i++) {
  drawSeat(
    seats[i].theta,
    seats[i].r,
    i < 191
      ? 'salmon'
      : i < 348
        ? 'mintcream'
        : i < 500
          ? 'rosybrown'
          : i < 570
            ? 'moccasin'
            : i < 598
              ? 'navajowhite'
              : i < 632
                ? 'lightsalmon'
                : 'tomato'
  )
}
