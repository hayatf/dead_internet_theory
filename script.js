// Select dots and sections
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');
const container = document.querySelector('.container');

// Track if chat animation has been triggered
let chatAnimationTriggered = false;

// Intersection Observer for detecting which section is visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Remove active from all dots first
        dots.forEach((dot) => dot.classList.remove('active'));
        // Add active to the matching dot
        const activeDot = document.querySelector(`.dot[href="#${id}"]`);
        if (activeDot) {
          activeDot.classList.add('active');
        }

        // Trigger chat animation when section3 comes into view
        if (id === 'section3' && !chatAnimationTriggered) {
          chatAnimationTriggered = true;
          const messages = document.querySelectorAll('.message-container');
          messages.forEach((msg) => {
            msg.classList.add('animate');
          });
        }
      }
    });
  },
  { 
    root: container,
    threshold: 0.6  // Simplified - removed rootMargin
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scroll when clicking dots
dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = dot.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Wait for DOM content to be loaded before creating the pie chart
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('Creating pie chart...');
    
    // Dimensions and radius
    const width = 600, height = 600, radius = Math.min(width, height) / 2;

    // Color scheme
    const color = d3.scaleOrdinal()
      .domain(["Human", "Bot"])
      .range(["#286cd8ff", "#ec1010ff"]);

    // Create the SVG container
    const chartDiv = document.getElementById('chart');
    if (!chartDiv) {
      console.error('#chart element not found');
      return;
    }

    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius - 20);

    const pie = d3.pie()
      .sort(null)
      .value(d => d.count);

    // Sample data
    const data = [
      { type: "Human", count: 96.76 },
      { type: "Bot", count: 3.24 }
    ];

    console.log('Data for pie chart:', data);

    // Create pie slices
    const arcs = pie(data);

    // Add paths
    svg.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("fill", d => color(d.data.type))
      .attr("d", arc)
      .attr("stroke", "white")
      .attr("stroke-width", 1);

    // Add labels
    svg.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => `${d.data.type} (${((d.data.count / d3.sum(data, d=>d.count))*100).toFixed(1)}%)`);

    console.log('Pie chart created successfully');
  } catch (error) {
    console.error('Error creating pie chart:', error);
    const chartEl = document.getElementById('chart');
    if (chartEl) {
      chartEl.innerHTML = '<p style="color:#fff; text-align:center; padding:2rem;">Error creating pie chart. Check console for details.</p>';
    }
  }
});



