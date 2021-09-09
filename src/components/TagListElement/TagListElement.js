export class TagListElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.render()
    const closeButton = this.shadow.querySelector('.tag-list__close')
    closeButton.addEventListener('click', (e) => {
      this.dispatchEvent(new CustomEvent("tagClosed",{
        detail: e.target.closest('main').getAttribute('index')
      }))
    })
  }

  get tagContent() {
    return this.getAttribute('tagContent')
  }

  get tagIndex() {
    return this.getAttribute('index')
  }

  render() {
    this.shadow.innerHTML =`
    <main class="tag-list" index="${this.tagIndex}">
      <div class="tag-list__text">${this.tagContent}</div>
      <button class="tag-list__close">❌</button>
    </main>

    <style>
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      .tag-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        min-height: 40px;
        padding: 5px 10px;
        background-color: #F0F3F4;
        border-radius: 10px;
        margin: 10px auto;
        font-size: 20px;
      }
      .tag-list__text {
        max-width: 85%;
        word-wrap: break-word;
      }
      .tag-list__close {
        display: block;
        padding: 0;
        margin: 0 0 0 5px;
        border: none;
        border-radius: 100%;
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
        line-height: 0;
      }
    </style>
    `
  }
}