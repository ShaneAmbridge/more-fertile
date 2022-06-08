export const style = `

:root {
    --bg-color: #f2f6f9;
    --active-color: #25be64;
    --inactive-color: red;
    --new-color: #febf02;
    --text-color: #141a4e;
    --table-bg-color: #fefefe;
    --table-head-bg-color: #d289b1;
    --table-border-color: #edeef2;
    --hover-bg-color: #b5e6d8;
    --hover-text-color: #000000;
  }
  
.container {
  width: 100%;
  background-color: red;

  padding: 0;
}



.responsive-table th,
td {
  padding: 1rem;
}

/* Responsive Table Style */

/* start table head */

.responsive-table {
  background-color: var(--table-bg-color);
  border-collapse: collapse;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(#000000, #000000, #000000, 0.02);
  width: 100%;
  margin: 2rem 0;
  overflow: hidden;
}
.responsive-table .responsive-table__head {
  background-color: var(--table-head-bg-color);
}

.responsive-table .responsive-table__row {
  display: grid;
  border-bottom: 1px solid var(--table-border-color);
  padding: 0 1.5rem;
}

.responsive-table .responsive-table__head__title {
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: capitalize;
}

/* .responsive-table .responsive-table__head .responsive-table__head__title--name {
}

.responsive-table
  .responsive-table__head
  .responsive-table__head__title--status {
}

.responsive-table
  .responsive-table__head
  .responsive-table__head__title--types {
}

.responsive-table
  .responsive-table__head
  .responsive-table__head__title--update {
}

.responsive-table
  .responsive-table__head
  .responsive-table__head__title--country {
} */

/* start table body */
/* .responsive-table .responsive-table__body {
} */

.responsive-table__body .responsive-table__row {
  transition: 0.1s linear;
  transition-property: color, background;
}
.responsive-table__body .responsive-table__row:last-child {
  border-bottom: none;
}
.responsive-table__body .responsive-table__row:hover {
  color: var(--hover-text-color);
  background-color: var(--hover-bg-color);
}

.responsive-table__body .responsive-table__body__text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}

.responsive-table__body .responsive-table__body__text::before {
  margin-right: 1rem;
  font-weight: 600;
  text-transform: capitalize;
}

.responsive-table__body .responsive-table__body__text--name {
  font-weight: 600;
}

.responsive-table .responsive-table__body .status-indicator {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: #222222;
  margin-right: 0.5rem;
}

.responsive-table .responsive-table__body .status-indicator--inactive {
  background: var(--inactive-color);
}
.responsive-table .responsive-table__body .status-indicator--active {
  background: var(--active-color);
}
.responsive-table .responsive-table__body .status-indicator--new {
  background: var(--new-color);
}
/* SVG Up Arrow Style */
.up-arrow {
  height: 100%;
  max-height: 1.8rem;
  margin-left: 1rem;
}

/* SVG User Icon Style */
.user-icon {
  width: 100%;
  max-width: 4rem;
  height: auto;
  margin-right: 1rem;
}
/* mobile-xxs */
@media screen and (max-width: 400px) {
  .responsive-table__body__text::before {
    width: 100%;
    margin-bottom: 1rem;
  }
  .responsive-table .responsive-table__row {
    padding: 0;
  }
}

/* min-tablet */
@media screen and (min-width: 768px) {
  /* start table head */

  .responsive-table .responsive-table__row {
    grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
  }

  .responsive-table .responsive-table__body__text--name::before {
    display: none;
  }
}

/* desktop */
@media screen and (max-width: 991px) {
  .responsive-table .responsive-table__head {
    display: none;
  }

  .responsive-table .responsive-table__body__text::before {
    content: attr(data-title) " :";
  }
}

/* tablet-to-desktop */
@media (min-width: 768px) and (max-width: 991px) {
  .responsive-table .responsive-table__row {
    grid-template-columns: 1fr 2fr 1fr;
  }

  .responsive-table .responsive-table__body__text--name {
    grid-column: 1 / 2;
    flex-direction: column;
  }

  .responsive-table .responsive-table__body__text--status,
  .responsive-table__body__text--types,
  .responsive-table__body__text--update {
    grid-column: 2/ 3;
    /* background-color: red; */
  }

  .responsive-table .responsive-table__body__text--country {
    grid-column: 3/ -1;
  }

  .responsive-table .responsive-table__body__text--name,
  .responsive-table__body__text--country {
    grid-row: 2;
  }
}
`;
