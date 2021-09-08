export class TagComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"})
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =`
    <main class="container">
      <section class="controll">
        <input class="controll__input" type="text">
        <button class="controll__button">Add</button>
        <label class="checkbox-lable" for="readonly">Readonly Mode</label>
        <input type="checkbox" id="readonly">
      </section>
    </main>
    `
  }
}