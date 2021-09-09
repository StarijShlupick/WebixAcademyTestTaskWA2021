import deleteTag from '../../../assets/icons/cancel_white_24dp.svg'

export class TagListElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.render()
  }
  get tagContent() {
    return this.getAttribute('tagContent')
  }

  render() {
    this.shadow.innerHTML =`
    <main class="tag-list">
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