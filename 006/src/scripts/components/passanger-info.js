export class PassangerInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createPassangerInfo());
    shadow.appendChild(this.style());
  }

  createPassanger() {
    const passanger = document.createElement("div");
    passanger.setAttribute("class", "container__middle__passanger");

    const passangerTitle = document.createElement("h2");
    passangerTitle.textContent = "Passageiro";

    const passangerSubtitle = document.createElement("h3");
    passangerSubtitle.textContent = this.getAttribute("passanger");

    passanger.appendChild(passangerTitle);
    passanger.appendChild(passangerSubtitle);

    return passanger;
  }

  createSeat() {
    const seat = document.createElement("div");
    seat.setAttribute("class", "container__middle__seat");

    const seatTitle = document.createElement("h2");
    seatTitle.textContent = "Assento";

    const seatSubtitle = document.createElement("h3");
    seatSubtitle.textContent = this.getAttribute("seat");

    seat.appendChild(seatTitle);
    seat.appendChild(seatSubtitle);

    return seat;
  }

  createPassangerInfo() {
    const passangerInfoPass = document.createElement("section");
    passangerInfoPass.setAttribute("class", "container__middle");

    passangerInfoPass.appendChild(this.createPassanger());
    passangerInfoPass.appendChild(this.createSeat());

    return passangerInfoPass;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `

        h2,
        h3,
        h4 {
            margin: inherit;
        }

        .container__middle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 0.1rem dashed var(--color-black-32);
            padding: 2.4rem 3.2rem;
            background-color: var(--color-white);
            mask: var(--mask-middle);
            -webkit-mask: var(--mask-middle);
        }

        .container__middle__passanger h2,
        .container__middle__seat h2 {
            color: var(--color-black-64);
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: -0.028rem;
        }
        
        .container__middle__passanger h2,
        .container__middle__seat h2,
        .container__middle__passanger h3 {
            text-transform: capitalize;
        }

        .container__middle__passanger h3,
        .container__middle__seat h3 {
            color: var(--color-black-88);
            font-weight: 500;
            font-size: 1.6rem;
            letter-spacing: -0.032rem;
        }

        .container__middle__seat h3 {
            text-transform: uppercase;
        }

    `;

    return style;
  }
}
