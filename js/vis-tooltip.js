class VisTooltip {
  constructor() {
    this.tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "vis vis-tooltip");
  }

  show(content) {
    this.tooltip.html(content).classed("is-visible", true);
    const tbox = this.tooltip.node().getBoundingClientRect();
    this.width = tbox.width;
    this.height = tbox.height;
  }

  hide() {
    this.tooltip.classed("is-visible", false);
  }

  move(event) {
    const offset = 10;

    let x = event.x - this.width / 2;
    if (x < offset) {
      x = offset;
    } else if (x + this.width > window.innerWidth - offset) {
      x = window.innerWidth - offset - this.width;
    }

    let y = event.y - this.height - offset;
    if (y < offset) {
      y = event.y + offset;
      if (y + this.height > window.innerHeight - offset) {
        y = window.innerHeight - offset - this.height;
      }
    }

    this.tooltip.style("transform", `translate(${x}px,${y}px)`);
  }
}
