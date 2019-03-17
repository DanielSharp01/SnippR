class Masonry {
  constructor(elem) {
    this.container = elem;

    document.addEventListener("DOMContentLoaded", this.layout);
    window.addEventListener("resize", this.layout);
  }

  layout = () => {
    // Reset
    const panels = this.container.querySelectorAll(".masonry-panel");
    const paddings = this.container.querySelectorAll(".masonry-padding");
    let heights = [];
    paddings.forEach(p => p.remove());
    this.container.removeAttribute("style");

    // Compute heights and flexbox order
    const colCount = this.getColumnCount();

    panels.forEach((p, i) => {
      const { height } = getComputedStyle(p);
      const order = ((i + 1) % colCount == 0) ? colCount : (i + 1) % colCount;
      p.style.order = order;

      if (!heights[order - 1]) heights[order - 1] = 0;

      heights[order - 1] += parseFloat(height);
    });

    // Set container height to wrap
    const maxHeight = Math.max(...heights);
    this.container.style.height = `${maxHeight}px`;

    //Setup paddings
    heights.map((height, i) => {
      if (height < maxHeight && height > 0) {
        const padding = document.createElement("div");
        padding.className = "masonry-padding";
        padding.style.height = `${maxHeight - height}px`;
        padding.style.order = i + 1;
        this.container.appendChild(padding);
      }
    });
  }

  getColumnCount() {
    return Math.floor(this.container.clientWidth / this.elementWidth);
  }
}