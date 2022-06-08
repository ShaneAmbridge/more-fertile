class VisSemenValuesDistribution {
  constructor(el) {
    this.el = el;
    this.resize = this.resize.bind(this);
    this.init();
  }

  init() {
    this.setup();
    this.wrangle();
    this.render();
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  setup() {
    this.breakpoint = 600;
    this.charts = [];
  }

  wrangle() {
    this.data = [
      {
        title: "Volume (ml)",
        data: {
          domain: [1.2, 7.6],
          minRefValue: 1.5,
          minRefLabel: "1.5",
          maxRefValue: 6.8,
          maxRefLabel: "6.8",
          value: 3.7,
          valueLabel: "3.7",
        },
      },
      {
        title: "Concentration (10<sup>6</sup>/ml)",
        data: {
          domain: [9, 259],
          minRefValue: 15,
          minRefLabel: "15",
          maxRefValue: 213,
          maxRefLabel: "213",
          value: 73,
          valueLabel: "73",
        },
      },
      {
        title: "Total number (10<sup>6</sup>/ejaculate)",
        data: {
          domain: [23, 928],
          minRefValue: 39,
          minRefLabel: "39",
          maxRefValue: 802,
          maxRefLabel: "802",
          value: 255,
          valueLabel: "255",
        },
      },
      {
        title: "Total motility (%)",
        data: {
          domain: [34, 81],
          minRefValue: 40,
          minRefLabel: "40",
          maxRefValue: 78,
          maxRefLabel: "78",
          value: 61,
          valueLabel: "61",
        },
      },
      {
        title: "Progressive motility (%)",
        data: {
          domain: [28, 75],
          minRefValue: 32,
          minRefLabel: "32",
          maxRefValue: 72,
          maxRefLabel: "72",
          value: 55,
          valueLabel: "55",
        },
      },
      {
        title: "Normal forms (%)",
        data: {
          domain: [3, 48],
          minRefValue: 3,
          minRefLabel: "3",
          maxRefValue: 44,
          maxRefLabel: "44",
          value: 15,
          valueLabel: "15",
        },
      },
      {
        title: "Vitality (%)",
        data: {
          domain: [53, 92],
          minRefValue: 58,
          minRefLabel: "58",
          maxRefValue: 91,
          maxRefLabel: "91",
          value: 79,
          valueLabel: "79",
        },
      },
    ];
  }

  render() {
    this.container = d3
      .select(this.el)
      .append("div")
      .attr("class", "vis vis-card vis-flow vis-semen-values-distribution");

    this.tooltip = new VisTooltip();

    this.legend = this.container.append("div").attr("class", "vis-legend");
    new VisRangeChart(this.legend.node(), {
      width: this.legend.node().clientWidth,
      domain: [0, 1],
      minRefValue: 0,
      minRefLabel: "Lower limit",
      maxRefValue: 1,
      maxRefLabel: "Upper limit",
      value: 0.5,
      valueLabel: "Average",
    });

    this.row = this.container
      .selectAll(".vis-row")
      .data(this.data)
      .join("div")
      .attr("class", "vis-row");

    this.row
      .append("div")
      .attr("class", "vis-col-title")
      .append("div")
      .attr("class", "vis-title")
      .html((d) => d.title);

    this.row
      .append("div")
      .attr("class", "vis-col-body")
      .each((d, i, n) => {
        const el = n[i];
        this.charts.push(new VisRangeChart(el, d.data));
      })
      .on("mouseenter", (event, d) => {
        const content = /*html*/ `
          <div><b>${d.title}</b></div>
          <div>Lower limit (5<sup>th</sup> centile): <b>${d.data.minRefLabel}</b></div>
          <div>Average (50<sup>th</sup> centile): <b>${d.data.valueLabel}</b></div>
          <div>Upper limit (95<sup>th</sup> centile): <b>${d.data.maxRefLabel}</b></div>
        `;
        this.tooltip.show(content);
      })
      .on("mousemove", (event) => {
        this.tooltip.move(event);
      })
      .on("mouseleave", () => {
        this.tooltip.hide();
      });
  }

  resize() {
    this.row.classed("is-stacked", this.el.clientWidth < this.breakpoint);

    this.charts.forEach((chart) => chart.resize());
  }
}
