class VisPercentageBarChart {
  constructor(el, { value, valueLabel }) {
    this.el = el;
    this.value = value;
    this.valueLabel = valueLabel;
    this.init();
  }

  init() {
    this.setup();
    this.scaffold();
    this.wrangle();
    this.resize();
  }

  setup() {
    this.marginTop = 15;
    this.marginRight = 10;
    this.marginBottom = 15;
    this.marginLeft = 0;
    this.height = this.marginTop + this.marginBottom;
    this.r = 10;

    this.x = d3.scaleLinear().domain([0, 100]);
  }

  scaffold() {
    this.container = d3
      .select(this.el)
      .classed("vis-percentage-bar-chart", true);
    this.svg = this.container.append("svg").attr("class", "chart-svg");
    this.gRef = this.svg.append("g").attr("class", "ref-g");
    this.pathRef = this.gRef
      .append("path")
      .attr("class", "ref-path")
      .attr("fill", "#F4F4F4");
    this.gValue = this.svg.append("g").attr("class", "value-g");
    this.pathValue = this.gValue
      .append("path")
      .attr("class", "value-path")
      .attr("fill", "#7F2E75");
    this.textValue = this.gValue.append("g").selectAll(".value-text");
  }

  wrangle() {
    this.pathRefData = {
      value: 100,
      r: this.r,
    };

    this.pathValueData = {
      value: this.value,
      r: this.r,
    };

    this.textValueData = [{ label: this.valueLabel, value: this.value }];
  }

  resize() {
    this.width = this.container.node().clientWidth;
    this.x.range([this.marginLeft, this.width - this.marginRight]);
    this.svg.attr("viewBox", [0, -this.marginTop, this.width, this.height]);
    this.render();
  }

  render() {
    this.pathRef.attr("d", this.pathGenerator(this.pathRefData));

    this.pathValue.attr("d", this.pathGenerator(this.pathValueData));

    this.textValue = this.textValue
      .data(this.textValueData)
      .join((enter) =>
        enter
          .append("text")
          .attr("dy", "0.35em")
          .text((d) => d.label)
          .each((d, i, n) => {
            this.textWidth = Math.ceil(n[i].getBoundingClientRect().width);
          })
      )
      .attr("x", (d) => this.x(d.value))
      .each((d, i, n) => {
        const flipped =
          this.x.range()[1] - this.x(d.value) < this.r + 5 + this.textWidth;
        d3.select(n[i])
          .style("color", flipped ? "#FFF" : "#7F2E75")
          .attr("text-anchor", flipped ? "end" : "start")
          .attr("dx", flipped ? 0 : this.r + 5);
      });
  }

  pathGenerator({ value, r }) {
    const p = d3.path();
    const pi = Math.PI;
    const x1 = this.x(0);
    const x2 = this.x(value);
    p.moveTo(x1, -r);
    p.lineTo(x2, -r);
    p.arc(x2, 0, r, -pi / 2, pi / 2, false);
    p.lineTo(x1, r);
    p.closePath();
    return p.toString();
  }
}
