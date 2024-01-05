export class FlightInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createFlightInfo());
    shadow.appendChild(this.style());
  }

  createFlightNumber() {
    const flightNumber = document.createElement("div");
    flightNumber.setAttribute("class", "container__top__top__flight-number");

    const flightNumberTitle = document.createElement("h2");
    flightNumberTitle.textContent = "Voo";

    const flightNumberSubtitle = document.createElement("h3");
    flightNumberSubtitle.textContent = this.getAttribute("voo");

    flightNumber.appendChild(flightNumberTitle);
    flightNumber.appendChild(flightNumberSubtitle);

    return flightNumber;
  }

  createFlightDate() {
    const flightDate = document.createElement("div");
    flightDate.setAttribute("class", "container__top__top__flight-date");

    const flightDateTitle = document.createElement("h2");
    flightDateTitle.textContent = "Data";

    const flightDateSubtitle = document.createElement("h3");
    flightDateSubtitle.textContent = this.getAttribute("date");

    flightDate.appendChild(flightDateTitle);
    flightDate.appendChild(flightDateSubtitle);

    return flightDate;
  }

  createContainerTop() {
    const containerTop = document.createElement("div");
    containerTop.setAttribute("class", "container__top__top");

    containerTop.appendChild(this.createFlightNumber());
    containerTop.appendChild(this.createFlightDate());

    return containerTop;
  }

  createDeparture() {
    const departure = document.createElement("div");
    departure.setAttribute("class", "container__top__bottom__departure");

    const departureTitle = document.createElement("h2");
    departureTitle.textContent = this.getAttribute("departure");

    const departureSubtitleOne = document.createElement("h3");
    departureSubtitleOne.textContent = this.getAttribute("departure-airport");

    const departureSubtitleTwo = document.createElement("h4");
    departureSubtitleTwo.textContent = this.getAttribute("boarding-time");

    departure.appendChild(departureTitle);
    departure.appendChild(departureSubtitleOne);
    departure.appendChild(departureSubtitleTwo);

    return departure;
  }

  createArrival() {
    const arrival = document.createElement("div");
    arrival.setAttribute("class", "container__top__bottom__arrival");

    const arrivalTitle = document.createElement("h2");
    arrivalTitle.textContent = this.getAttribute("arrival");

    const arrivalSubtitleOne = document.createElement("h3");
    arrivalSubtitleOne.textContent = this.getAttribute("arrival-airport");

    const arrivalSubtitleTwo = document.createElement("h4");
    arrivalSubtitleTwo.textContent = this.getAttribute("arrival-time");

    arrival.appendChild(arrivalTitle);
    arrival.appendChild(arrivalSubtitleOne);
    arrival.appendChild(arrivalSubtitleTwo);

    return arrival;
  }

  createContainerBottom() {
    const containerBottom = document.createElement("div");
    containerBottom.setAttribute("class", "container__top__bottom");

    const airplane = document.createElement("img");
    airplane.src = "./assets/airplane.svg";
    airplane.alt = "Avião";

    containerBottom.appendChild(this.createDeparture());
    containerBottom.appendChild(airplane);
    containerBottom.appendChild(this.createArrival());

    return containerBottom;
  }

  createFlightInfo() {
    const flightInfoPass = document.createElement("section");
    flightInfoPass.setAttribute("class", "container__top");

    flightInfoPass.appendChild(this.createContainerTop());
    flightInfoPass.appendChild(this.createContainerBottom());

    return flightInfoPass;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    
        h2,
        h3,
        h4 {
          margin: inherit;
        }

        .container__top {
            display: flex;
            flex-direction: column;
            row-gap: 2.4rem;
            padding: 2.4rem 3.2rem;
            background-color: var(--color-white);
            mask: var(--mask-top);
            -webkit-mask: var(--mask-top);
            border-top-right-radius: 2.4rem;
            border-top-left-radius: 2.4rem;
            border-bottom: 0.1rem dashed var(--color-black-32);
        }
    
        .container__top__top,
        .container__top__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .container__top__top__flight-number h2,
        .container__top__top__flight-date h2,
        .container__top__bottom__departure h2,
        .container__top__bottom__arrival h2 {
            color: var(--color-black-64);
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: -0.028rem;
        }

        .container__top__top__flight-number h2,
        .container__top__top__flight-date h2 {
          text-transform: capitalize;
        }

        .container__top__top__flight-number h3,
        .container__top__top__flight-date h3,
        .container__top__bottom__arrival h3 {
            color: var(--color-black-88);
            font-weight: 500;
            font-size: 1.6rem;
            letter-spacing: -0.032rem;
        }

        .container__top__top__flight-number h3,
        .container__top__bottom__departure h3,
        .container__top__bottom__arrival h3 {
            text-transform: uppercase;
        }

        .container__top__bottom__departure h3,
        .container__top__bottom__arrival h3 {
            color: var(--color-black-88);
            font-weight: 500;
            font-size: 4rem;
            letter-spacing: -0.08rem;
        }

        .container__top__bottom {
            position: relative;
        }

        .container__top__bottom img {
            height: 2.4rem;
            width: 2.4rem;
            object-fit: cover;
            position: absolute;
            right: 50%;
            transform: translate(50%);
        }

        .container__top__bottom__departure h4,
        .container__top__bottom__arrival h4 {
            color: var(--color-black-80);
            font-weight: 400;
            font-size: 1.6rem;
            letter-spacing: -0.032rem;
        }

        .container__top__bottom__arrival {
            text-align: right;
        }

        .container__top__bottom__arrival h4 {
            position: relative;
            margin-right: 1rem;
        }

        .container__top__bottom__arrival h4::after {
            content: "+1";
            position: absolute;
            font-size: 1rem;
            letter-spacing: -0.02rem;
        }
    `;

    return style;
  }
}
