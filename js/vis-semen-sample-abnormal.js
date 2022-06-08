class VisSemenSampleAbnormal {
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
          value: 55,
          valueLabel: "55",
        },
        tooltip: /*html*/ `
          <div><b>Time for ejaculation (mins)</b></div>
          <div>Patient: <b>55</b></div>
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
          value: 5.8,
          valueLabel: "5.8",
        },
        tooltip: /*html*/ `
          <div><b>Volume (ml)</b></div>
          <div>Patient: <b>5.8</b></div>
          <div>WHO [2009]: <b>>1.5</b></div>
        `,
      },
      {
        title: "Appearance",
        warning: true,
        type: "text",
        data: "Gel bodies",
        tooltip: /*html*/ `
          <div><b>Appearance</b></div>
          <div>Patient: <b>Gel bodies</b></div>
          <div>WHO [2009]: <b>Normal</b></div>
        `,
      },
      {
        title: "Liquefaction",
        warning: true,
        type: "text",
        data: "Partial",
        tooltip: /*html*/ `
          <div><b>Liquefaction</b></div>
          <div>Patient: <b>Partial</b></div>
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
          value: 59,
          valueLabel: "59%",
        },
        tooltip: /*html*/ `
          <div><b>Rapid progression</b></div>
          <div>Patient: <b>59%</b></div>
          <div>WHO [2009]: <b>>32%</b></div>
        `,
      },
      {
        title: "Slow progression",
        type: "percentageBar",
        data: {
          value: 12,
          valueLabel: "12%",
        },
        tooltip: /*html*/ `
          <div><b>Slow progression</b></div>
          <div>Patient: <b>12%</b></div>
          <div>WHO [2009]: <b>Rapid + Slow > 40%</b></div>
        `,
      },
      {
        title: "Non-progression",
        type: "percentageBar",
        data: {
          value: 5,
          valueLabel: "5%",
        },
        tooltip: /*html*/ `
          <div><b>Non-progression</b></div>
          <div>Patient: <b>5%</b></div>
        `,
      },
      {
        title: "Immotile",
        type: "percentageBar",
        data: {
          value: 24,
          valueLabel: "24%",
        },
        tooltip: /*html*/ `
          <div><b>Immotile</b></div>
          <div>Patient: <b>24%</b></div>
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
          value: 33,
          valueLabel: "33",
        },
        tooltip: /*html*/ `
          <div><b>Count (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>33</b></div>
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
          value: 128,
          valueLabel: "128",
        },
        tooltip: /*html*/ `
          <div><b>Total count in the sample (10<sup>6</sup>)</b></div>
          <div>Patient: <b>128</b></div>
          <div>WHO [2009]: <b>>39</b></div>
        `,
      },
      {
        title: "<b>Other cells<b>",
      },
      {
        title: "Round cells (10<sup>6</sup>/ml)",
        warning: true,
        type: "range",
        data: {
          domain: [0, 10],
          maxRefValue: 5,
          maxRefLabel: "<5",
          value: 6.2,
          valueLabel: "6.2",
        },
        tooltip: /*html*/ `
          <div><b>Round cells (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>6.2</b></div>
          <div>WHO [2009]: <b><5</b></div>
        `,
      },
      {
        title: "Leukocytes (WBC) (10<sup>6</sup>/ml)",
        warning: true,
        type: "range",
        data: {
          domain: [0, 2],
          maxRefValue: 1,
          maxRefLabel: "<1",
          value: 1.9,
          valueLabel: "1.9",
        },
        tooltip: /*html*/ `
          <div><b>Leukocytes (WBC) (10<sup>6</sup>/ml)</b></div>
          <div>Patient: <b>1.9</b></div>
          <div>WHO [2009]: <b><1</b></div>
        `,
      },
      {
        title: "<b>Morphology (%)<b>",
      },
      {
        title: "Normal",
        warning: true,
        type: "percentageBar",
        data: {
          value: 1,
          valueLabel: "1%",
        },
        tooltip: /*html*/ `
          <div><b>Normal</b></div>
          <div>Patient: <b>1%</b></div>
          <div>WHO [2009]: <b>>4%</b></div>
        `,
      },
      {
        title: "Abnormal",
        type: "percentageBar",
        data: {
          value: 99,
          valueLabel: "99%",
        },
        tooltip: /*html*/ `
          <div><b>Abnormal</b></div>
          <div>Patient: <b>99%</b></div>
        `,
      },
      {
        title: "Head defects",
        type: "percentageBar",
        data: {
          value: 99,
          valueLabel: "99%",
        },
        tooltip: /*html*/ `
          <div><b>Head defects</b></div>
          <div>Patient: <b>99%</b></div>
        `,
      },
      {
        title: "Mid-piece defects",
        type: "percentageBar",
        data: {
          value: 25,
          valueLabel: "25%",
        },
        tooltip: /*html*/ `
          <div><b>Mid-piece defects</b></div>
          <div>Patient: <b>25%</b></div>
        `,
      },
      {
        title: "Tail defects",
        type: "percentageBar",
        data: {
          value: 18,
          valueLabel: "18%",
        },
        tooltip: /*html*/ `
          <div><b>Tail defects</b></div>
          <div>Patient: <b>18%</b></div>
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
          maxValue: 1.44,
          maxValueLabel: "<1.44",
        },
        tooltip: /*html*/ `
          <div><b>Teratozoospermia Index [TZI]</b></div>
          <div>Patient: <b>1.44</b></div>
          <div>WHO [2009]: <b><1.6</b></div>
        `,
      },
    ];
  }

  render() {
    this.container = d3
      .select(this.el)
      .append("div")
      .attr("class", "vis vis-card vis-flow vis-semen-sample-abnormal");

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

    this.colTitle
      .filter((d) => d.warning)
      .append("div")
      .attr("class", "vis-warning").html(`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    `);

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
