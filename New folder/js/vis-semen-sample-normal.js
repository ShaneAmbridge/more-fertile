class VisSemenSampleNormal {
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
        title: "Duration of abstinence (days)",
        type: "range",
        data: {
          domain: [2, 5],
          minRefValue: 2,
          minRefLabel: "2",
          maxRefValue: 5,
          maxRefLabel: "5",
          value: 3,
          valueLabel: "3",
        },
        tooltip: /*html*/ `
          <div><b>Duration of abstinence (days)</b></div>
          <div>Patient: <b>3</b></div>
          <div>WHO [2009]: <b>2-5</b></div>
        `,
      },
      {
        title: "Time for ejaculation (mins)",
        type: "range",
        data: {
          domain: [0, 60],
          maxRefValue: 60,
          maxRefLabel: "<60",
          value: 40,
          valueLabel: "40",
        },
        tooltip: /*html*/ `
          <div><b>Time for ejaculation (mins)</b></div>
          <div>Patient: <b>40</b></div>
          <div>WHO [2009]: <b><60</b></div>
        `,
      },
      {
        title: "<b>Macroscopic examination<b>",
      },
      {
        title: "Volume (ml)",
        type: "range",
        data: {
          domain: [1.5, 7.6],
          minRefValue: 1.5,
          minRefLabel: ">1.5",
          value: 4.1,
          valueLabel: "4.1",
        },
        tooltip: /*html*/ `
          <div><b>Volume (ml)</b></div>
          <div>Patient: <b>4.1</b></div>
          <div>WHO [2009]: <b>>1.5</b></div>
        `,
      },
      {
        title: "Appearance",
        type: "text",
        data: "Normal",
        tooltip: /*html*/ `
          <div><b>Appearance</b></div>
          <div>Patient: <b>Normal</b></div>
          <div>WHO [2009]: <b>Normal</b></div>
        `,
      },
      {
        title: "Liquefaction",
        type: "text",
        data: "Complete",
        tooltip: /*html*/ `
          <div><b>Liquefaction</b></div>
          <div>Patient: <b>Complete</b></div>
          <div>WHO [2009]: <b>Complete</b></div>
        `,
      },
      {
        title: "pH",
        type: "range",
        data: {
          domain: [7.2, 8.0],
          minRefValue: 7.2,
          minRefLabel: "7.2",
          maxRefValue: 8.0,
          maxRefLabel: "8.0",
          value: 8.0,
          valueLabel: "8.0",
        },
        tooltip: /*html*/ `
          <div><b>pH</b></div>
          <div>Patient: <b>8.0</b></div>
          <div>WHO [2009]: <b>7.2-8.0</b></div>
        `,
      },
      {
        title: "Viscosity",
        type: "text",
        data: "Normal",
        tooltip: /*html*/ `
          <div><b>Viscosity</b></div>
          <div>Patient: <b>Normal</b></div>
          <div>WHO [2009]: <b>Normal</b></div>
        `,
      },
      {
        title: "Debris",
        type: "text",
        data: "Not significant",
        tooltip: /*html*/ `
          <div><b>Debris</b></div>
          <div>Patient: <b>Not significant</b></div>
        `,
      },
      {
        title: "Agglutination",
        type: "text",
        data: "None seen",
        tooltip: /*html*/ `
          <div><b>Agglutination</b></div>
          <div>Patient: <b>None seen</b></div>
        `,
      },
      {
        title: "<b>Motility (% spermatozoa)<b>",
      },
      {
        title: "Rapid progression",
        type: "percentageBar",
        data: {
          value: 45,
          valueLabel: "45%",
        },
        tooltip: /*html*/ `
          <div><b>Rapid progression</b></div>
          <div>Patient: <b>45%</b></div>
          <div>WHO [2009]: <b>>32%</b></div>
        `,
      },
      {
        title: "Slow progression",
        type: "percentageBar",
        data: {
          value: 17,
          valueLabel: "17%",
        },
        tooltip: /*html*/ `
          <div><b>Slow progression</b></div>
          <div>Patient: <b>17%</b></div>
          <div>WHO [2009]: <b>Rapid + Slow > 40%</b></div>
        `,
      },
      {
        title: "Non-progression",
        type: "percentageBar",
        data: {
          value: 4,
          valueLabel: "4%",
        },
        tooltip: /*html*/ `
          <div><b>Non-progression</b></div>
          <div>Patient: <b>4%</b></div>
        `,
      },
      {
        title: "Immotile",
        type: "percentageBar",
        data: {
          value: 34,
          valueLabel: "34%",
        },
        tooltip: /*html*/ `
          <div><b>Immotile</b></div>
          <div>Patient: <b>34%</b></div>
        `,
      },
      {
        title: "Vitality (%)",
        type: "range",
        data: {
          domain: [50, 92],
          minRefValue: 58,
          minRefLabel: ">58",
          minValue: 50,
          minValueLabel: ">50",
        },
        tooltip: /*html*/ `
          <div><b>Vitality (%)</b></div>
          <div>Patient: <b>>50</b></div>
          <div>WHO [2009]: <b>>58</b></div>
        `,
      },
      {
        title: "<b>Antisperm antibodies<b>",
      },
      {
        title: "MAR test for IgA",
        type: "range",
        data: {
          domain: [0, 10],
          maxRefValue: 10,
          maxRefLabel: "<10",
          maxValue: 10,
          maxValueLabel: "<10",
        },
        tooltip: /*html*/ `
          <div><b>MAR test for IgA</b></div>
          <div>Patient: <b><10</b></div>
          <div>WHO [2009]: <b><10</b></div>
        `,
      },
      {
        title: "MAR test for IgG",
        type: "range",
        data: {
          domain: [0, 10],
          maxRefValue: 10,
          maxRefLabel: "<10",
          maxValue: 10,
          maxValueLabel: "<10",
        },
        tooltip: /*html*/ `
          <div><b>MAR test for IgG</b></div>
          <div>Patient: <b><10</b></div>
          <div>WHO [2009]: <b><10</b></div>
        `,
      },
      {
        title: "<b>Concentration<b>",
      },
      {
        title: "Count (10<sup>6</sup>/ml)",
        type: "range",
        data: {
          domain: [15, 259],
          minRefValue: 15,
          minRefLabel: ">15",
          value: 37,
          valueLabel: "37",
        },
        tooltip: /*html*/ `
          <div><b>Count (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>37</b></div>
          <div>WHO [2009]: <b>>15</b></div>
        `,
      },
      {
        title: "Total count in the sample (10<sup>6</sup>)",
        type: "range",
        data: {
          domain: [39, 928],
          minRefValue: 39,
          minRefLabel: ">39",
          value: 152,
          valueLabel: "152",
        },
        tooltip: /*html*/ `
          <div><b>Total count in the sample (10<sup>6</sup>)</b></div>
          <div>Patient: <b>152</b></div>
          <div>WHO [2009]: <b>>39</b></div>
        `,
      },
      {
        title: "<b>Other cells<b>",
      },
      {
        title: "Round cells (10<sup>6</sup>/ml)",
        type: "range",
        data: {
          domain: [0, 10],
          maxRefValue: 5,
          maxRefLabel: "<5",
          value: 0.3,
          valueLabel: "0.3",
        },
        tooltip: /*html*/ `
          <div><b>Round cells (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>0.3</b></div>
          <div>WHO [2009]: <b><5</b></div>
        `,
      },
      {
        title: "Leukocytes (WBC) (10<sup>6</sup>/ml)",
        type: "range",
        data: {
          domain: [0, 2],
          maxRefValue: 1,
          maxRefLabel: "<1",
          value: 0,
          valueLabel: "0",
        },
        tooltip: /*html*/ `
          <div><b>Leukocytes (WBC) (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>0</b></div>
          <div>WHO [2009]: <b><1</b></div>
        `,
      },
      {
        title: "<b>Morphology (%)<b>",
      },
      {
        title: "Normal",
        type: "percentageBar",
        data: {
          value: 15,
          valueLabel: "15%",
        },
        tooltip: /*html*/ `
          <div><b>Normal</b></div>
          <div>Patient: <b>15%</b></div>
          <div>WHO [2009]: <b>>4%</b></div>
        `,
      },
      {
        title: "Abnormal",
        type: "percentageBar",
        data: {
          value: 85,
          valueLabel: "85%",
        },
        tooltip: /*html*/ `
          <div><b>Abnormal</b></div>
          <div>Patient: <b>85%</b></div>
        `,
      },
      {
        title: "Head defects",
        type: "percentageBar",
        data: {
          value: 85,
          valueLabel: "85%",
        },
        tooltip: /*html*/ `
          <div><b>Head defects</b></div>
          <div>Patient: <b>85%</b></div>
        `,
      },
      {
        title: "Mid-piece defects",
        type: "percentageBar",
        data: {
          value: 12,
          valueLabel: "12%",
        },
        tooltip: /*html*/ `
          <div><b>Mid-piece defects</b></div>
          <div>Patient: <b>12%</b></div>
        `,
      },
      {
        title: "Tail defects",
        type: "percentageBar",
        data: {
          value: 4,
          valueLabel: "4%",
        },
        tooltip: /*html*/ `
          <div><b>Tail defects</b></div>
          <div>Patient: <b>4%</b></div>
        `,
      },
      {
        title: "Cytoplasmic droplets",
        type: "percentageBar",
        data: {
          value: 1,
          valueLabel: "1%",
        },
        tooltip: /*html*/ `
          <div><b>Cytoplasmic droplets</b></div>
          <div>Patient: <b>1%</b></div>
        `,
      },
      {
        title: "Teratozoospermia Index [TZI]",
        type: "range",
        data: {
          domain: [0, 1.6],
          maxRefValue: 1.6,
          maxRefLabel: "<1.6",
          maxValue: 1.2,
          maxValueLabel: "<1.2",
        },
        tooltip: /*html*/ `
          <div><b>Teratozoospermia Index [TZI]</b></div>
          <div>Patient: <b>1.2</b></div>
          <div>WHO [2009]: <b><1.6</b></div>
        `,
      },
    ];
  }

  render() {
    this.container = d3
      .select(this.el)
      .append("div")
      .attr("class", "vis vis-card vis-flow vis-semen-sample-normal");

    this.tooltip = new VisTooltip();

    this.legend = this.container.append("div").attr("class", "vis-legend");
    new VisRangeChart(this.legend.node(), {
      width: this.legend.node().clientWidth,
      domain: [0, 1],
      minRefValue: 0,
      minRefLabel: "WHO [2009]",
      maxRefValue: 1,
      maxRefLabel: "",
      value: 0.5,
      valueLabel: "Patient",
    });

    this.row = this.container
      .selectAll(".vis-row")
      .data(this.data)
      .join("div")
      .attr("class", "vis-row");

    this.colTitle = this.row.append("div").attr("class", "vis-col-title");

    this.colTitle
      .append("div")
      .attr("class", "vis-title")
      .html((d) => d.title);

    this.row
      .append("div")
      .attr("class", "vis-col-body")
      .each((d, i, n) => {
        const el = n[i];
        switch (d.type) {
          case "range":
            this.charts.push(new VisRangeChart(el, d.data));
            break;
          case "percentageBar":
            this.charts.push(new VisPercentageBarChart(el, d.data));
            break;
          case "text":
            d3.select(el).style("color", "#7F2E75").text(d.data);
            break;
          default:
            break;
        }
      })
      .filter((d) => d.tooltip)
      .on("mouseenter", (event, d) => {
        this.tooltip.show(d.tooltip);
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
