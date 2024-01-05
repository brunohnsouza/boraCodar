export class BoardingInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createBoardingInfo());
    shadow.appendChild(this.style());
  }

  createTime() {
    const time = document.createElement("div");
    time.setAttribute("class", "container__bottom__top__boarding__time");

    const timeTitle = document.createElement("h2");
    timeTitle.textContent = "Embarque";

    const timeBadge = document.createElement("span");
    timeBadge.setAttribute("class", "badge-time");
    timeBadge.textContent = this.getAttribute("boarding-time");

    time.appendChild(timeTitle);
    time.appendChild(timeBadge);

    return time;
  }

  createTerminal() {
    const terminal = document.createElement("div");
    terminal.setAttribute(
      "class",
      "container__bottom__top__boarding__terminal"
    );

    const terminalTitle = document.createElement("h2");
    terminalTitle.textContent = "Terminal";

    const terminalSubtitle = document.createElement("h3");
    terminalSubtitle.textContent = this.getAttribute("terminal");

    terminal.appendChild(terminalTitle);
    terminal.appendChild(terminalSubtitle);

    return terminal;
  }

  createGate() {
    const gate = document.createElement("div");
    gate.setAttribute("class", "container__bottom__top__boarding__gate");

    const gateTitle = document.createElement("h2");
    gateTitle.textContent = "Portão";

    const gateSubtitle = document.createElement("h3");
    gateSubtitle.textContent = this.getAttribute("gate");

    gate.appendChild(gateTitle);
    gate.appendChild(gateSubtitle);

    return gate;
  }

  createBoarding() {
    const boarding = document.createElement("div");
    boarding.setAttribute("class", "container__bottom__top__boarding");

    boarding.appendChild(this.createTime());
    boarding.appendChild(this.createTerminal());
    boarding.appendChild(this.createGate());

    return boarding;
  }

  createQR() {
    const qr = document.createElement("div");
    qr.setAttribute("class", "container__bottom__top__qr");

    const img = document.createElement("img");
    img.src = this.getAttribute("src-qr");
    img.alt = this.getAttribute("alt-qr");

    const boardingGroupParagraph = document.createElement("p");
    boardingGroupParagraph.textContent = `Grupo de embarque: ${this.getAttribute(
      "boarding-group"
    )}`;

    qr.appendChild(img);
    qr.appendChild(boardingGroupParagraph);

    return qr;
  }

  createContainerTop() {
    const containerTop = document.createElement("div");
    containerTop.setAttribute("class", "container__bottom__top");

    containerTop.appendChild(this.createBoarding());
    containerTop.appendChild(this.createQR());

    return containerTop;
  }

  createBoardingInfo() {
    const boardingInfoPass = document.createElement("section");
    boardingInfoPass.setAttribute("class", "container__bottom");

    const attentionStrong = document.createElement("strong");
    attentionStrong.textContent = "Atenção:";

    const attentionInfo = document.createElement("p");
    attentionInfo.appendChild(attentionStrong);
    attentionInfo.innerHTML += " o portão fecha 16:45";

    boardingInfoPass.appendChild(this.createContainerTop());
    boardingInfoPass.appendChild(attentionInfo);

    return boardingInfoPass;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    
      h2,
      h3,
      h4,
      p {
        margin: inherit;
      }

      .container__bottom {
        display: flex;
        flex-direction: column;
        padding: 2.4rem 3.2rem;
        background-color: var(--color-white);
        row-gap: 2.4rem;
        mask: var(--mask-bottom);
        -webkit-mask: var(--mask-bottom);
        border-bottom-left-radius: 2.4rem;
        border-bottom-right-radius: 2.4rem;
      }

      .container__bottom > p,
      .container__bottom > p strong {
        font-weight: 500;
        letter-spacing: -0.032rem;
      }

      .container__bottom > p {
        text-align: center;
        color: var(--color-black-80);
        font-weight: 400;
        line-height: 2rem;
      }

      .container__bottom__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .container__bottom__top__boarding {
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
      }

      .container__bottom__top__boarding__time h2,
      .container__bottom__top__boarding__terminal h2,
      .container__bottom__top__boarding__gate h2 {
        color: var(--color-black-64);
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: -0.028rem;
      }

      .badge-time {
        display: inline-block;
        border-radius: 0.8rem;
        padding: 0.4rem 0.8rem;
        background-color: var(--purple-color);
        color: var(--color-white);
      }

      .container__bottom__top__boarding__terminal h3,
      .container__bottom__top__boarding__gate h3 {
        color: var(--color-black-88);
        font-weight: 500;
        letter-spacing: -0.032rem;
      } 

      .container__bottom__top__qr {
        display: flex;
        flex-direction: column;
      }
      
      .container__bottom__top__qr img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
      }

      .container__bottom__top__qr p {
        color: var(--color-black-64);
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: -0.028rem;
        text-align: center;
      }

    `;

    return style;
  }
}
