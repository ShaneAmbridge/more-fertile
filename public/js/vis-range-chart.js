class VisRangeChart {
  constructor(
    el,
    {
      domain,
      minRefValue,
      minRefLabel,
      maxRefValue,
      maxRefLabel,
      value,
      valueLabel,
      minValue,
      minValueLabel,
      maxValue,
      maxValueLabel,
    }
  ) {
    this.el = el;
    this.domain = domain;
    this.minRefValue = minRefValue;
    this.minRefLabel = minRefLabel;
    this.maxRefValue = maxRefValue;
    this.maxRefLabel = maxRefLabel;
    this.value = value;
    this.valueLabel = valueLabel;
    this.minValue = minValue;
    this.minValueLabel = minValueLabel;
    this.maxValue = maxValue;
    this.maxValueLabel = maxValueLabel;
    this.init();
  }

  init() {
    this.setup();
    this.scaffold();
    this.wrangle();
    this.resize();
  }

  setup() {
    const id = this.uid();
    this.refId = `ref-${id}`;
    this.valueId = `value-${id}`;

    this.marginTop = 30;
    this.marginRight = 10;
    this.marginBottom = 30;
    this.marginLeft = 10;
    this.height = this.marginTop + this.marginBottom;
    this.rRef = 10;
    this.rValue = 8;

    this.x = d3.scaleLinear().domain(this.domain);
  }

  scaffold() {
    this.container = d3.select(this.el).classed("vis-range-chart", true);
    this.svg = this.container.append("svg").attr("class", "chart-svg");
    this.gRef = this.svg.append("g").attr("class", "ref-g");
    this.gradientRef = this.gRef
      .append("linearGradient")
      .attr("id", this.refId);
    this.pathRef = this.gRef
      .append("path")
      .attr("class", "ref-path")
      .attr("fill", `url(#${this.refId})`);
    this.textRef = this.gRef.append("g").selectAll(".ref-text");
    this.gValue = this.svg.append("g").attr("class", "value-g");
    this.gradientValue = this.gValue
      .append("linearGradient")
      .attr("id", this.valueId);
    this.pathValue = this.gValue
      .append("path")
      .attr("class", "value-path")
      .attr("fill", `url(#${this.valueId})`);
    this.textValue = this.gValue.append("g").selectAll(".value-text");
  }

  wrangle() {
    this.gradientRefData = [
      {
        offset: "0%",
        stopColor: "#F5EBF2",
        stopOpacity: this.minRefValue === undefined ? 0 : 1,
      },
      {
        offset: "100%",
        stopColor: "#F5EBF2",
        stopOpacity: this.maxRefValue === undefined ? 0 : 1,
      },
    ];

    this.pathRefData = {
      min: this.minRefValue,
      max: this.maxRefValue,
      r: this.rRef,
    };

    this.textRefData = [
      { label: this.minRefLabel, value: this.minRefValue, textAnchor: "start" },
      { label: this.maxRefLabel, value: this.maxRefValue, textAnchor: "end" },
    ].filter((d) => d.value !== undefined);

    this.gradientValueData = [
      {
        offset: "0%",
        stopColor: "#7F2E75",
        stopOpacity: this.maxValue !== undefined ? 0 : 1,
      },
      {
        offset: "100%",
        stopColor: "#7F2E75",
        stopOpacity: this.minValue !== undefined ? 0 : 1,
      },
    ];

    this.pathValueData = {
      min: this.minValue,
      value: this.value,
      max: this.maxValue,
      r: this.rValue,
    };

    this.textValueData = [
      { label: this.minValueLabel, value: this.minValue, textAnchor: "start" },
      { label: this.valueLabel, value: this.value, textAnchor: "middle" },
      { label: this.maxValueLabel, value: this.maxValue, textAnchor: "end" },
    ].filter((d) => d.value !== undefined);
  }

  resize() {
    this.width = this.container.node().clientWidth;
    this.x.range([this.marginLeft, this.width - this.marginRight]);
    this.svg.attr("viewBox", [0, -this.marginTop, this.width, this.height]);
    this.render();
  }

  render() {
    this.gradientRef
      .selectAll("stop")
      .data(this.gradientRefData)
      .join((enter) =>
        enter
          .append("stop")
          .attr("offset", (d) => d.offset)
          .attr("stop-color", (d) => d.stopColor)
          .attr("stop-opacity", (d) => d.stopOpacity)
      );

    this.pathRef.attr("d", this.pathGenerator(this.pathRefData));

    this.textRef = this.textRef
      .data(this.textRefData)
      .join((enter) =>
        enter
          .append("text")
          .attr("dy", "0.71em")
          .attr("y", this.rRef + 5)
          .attr("text-anchor", (d) => d.textAnchor)
          .text((d) => d.label)
      )
      .attr("x", (d) => this.x(d.value));

    this.gradientValue
      .selectAll("stop")
      .data(this.gradientValueData)
      .join((enter) =>
        enter
          .append("stop")
          .attr("offset", (d) => d.offset)
          .attr("stop-color", (d) => d.stopColor)
          .attr("stop-opacity", (d) => d.stopOpacity)
      );

    this.pathValue.attr("d", this.pathGenerator(this.pathValueData));

    this.textValue = this.textValue
      .data(this.textValueData)
      .join((enter) =>
        enter
          .append("text")
          .style("color", "#7F2E75")
          .attr("y", -this.rRef - 5)
          .attr("text-anchor", (d) => d.textAnchor)
          .text((d) => d.label)
      )
      .attr("x", (d) => this.x(d.value));
  }

  pathGenerator({ min, value, max, r }) {
    const p = d3.path();
    const pi = Math.PI;
    if (value !== undefined) {
      const x = this.x(value);
      p.moveTo(x, -r);
      p.arc(x, 0, r, -pi / 2, pi / 2, false);
      p.arc(x, 0, r, pi / 2, (pi / 2) * 3, false);
    } else if (min === undefined) {
      const x1 = this.x.range()[0];
      const x2 = this.x(max);
      p.moveTo(x1, -r);
      p.lineTo(x2, -r);
      p.arc(x2, 0, r, -pi / 2, pi / 2, false);
      p.lineTo(x1, r);
    } else if (max === undefined) {
      const x1 = this.x(min);
      const x2 = this.x.range()[1];
      p.moveTo(x2, -r);
      p.lineTo(x2, r);
      p.lineTo(x1, r);
      p.arc(x1, 0, r, pi / 2, (pi / 2) * 3, false);
    } else {
      const x1 = this.x(min);
      const x2 = this.x(max);
      p.moveTo(x1, -r);
      p.lineTo(x2, -r);
      p.arc(x2, 0, r, -pi / 2, pi / 2, false);
      p.lineTo(x1, r);
      p.arc(x1, 0, r, pi / 2, (pi / 2) * 3, false);
    }
    p.closePath();
    return p.toString();
  }

  uid() {
    const a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (
      performance.now().toString(36) +
      Array.from(a)
        .map((A) => A.toString(36))
        .join("")
    ).replace(/\./g, "");
  }
}
