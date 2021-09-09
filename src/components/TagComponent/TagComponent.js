import { TagListElement } from "../TagListElement/TagListElement";

export class TagComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }
  
  connectedCallback() {
    setTimeout(() => customElements.define('tag-list-element', TagListElement));
    if (window.localStorage.getItem('tag-list') === null) {
      window.localStorage.setItem('tag-list', '')
    }
    this.tagList = window.localStorage.getItem('tag-list')
    this.render()
    const checkbox = this.shadow.querySelector('.checkbox-button')
    checkbox.addEventListener('click', this.changeReadonly.bind(this))
    const addButton = this.shadow.querySelector('.controll__button')
    addButton.addEventListener('click', this.addTag.bind(this))
  }
  
  static get observedAttributes() {
    return ['readonly', 'tag-list']
  }

  get readonly() {
    return this.getAttribute('readonly')
  }

  set readonly(value) {
    this.setAttribute('readonly', value)
  }

  get tagList() {
    return this.getAttribute('tag-list')
  }

  set tagList(value) {
    this.setAttribute('tag-list', value)
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) {
      return
    }
    this.render();
    const checkbox = this.shadow.querySelector('.checkbox-button')
    checkbox.addEventListener('click', this.changeReadonly.bind(this))
    this.readonly === 'true' ? checkbox.classList.add('active') : checkbox.classList.remove('active')
    const addButton = this.shadow.querySelector('.controll__button')
    addButton.addEventListener('click', this.addTag.bind(this))
  }

  changeReadonly() {
    this.readonly === 'false' ? this.readonly = 'true' : this.readonly = 'false'    
  }

  addTag() {
    if (this.readonly === 'true') {
      alert('Set Readonly mode to "FALSE"')
      return
    }
    const input = this.shadow.querySelector('.controll__input')
    const inputValue = input.value
    if (!inputValue) {
      return
    }
    const tagListArray = window.localStorage.getItem('tag-list').split(',').filter((el) => el)
    const newTagList = [inputValue, ...tagListArray].filter((el) => el).join(',')
    window.localStorage.setItem('tag-list', newTagList)
    this.shadow.querySelector('.controll__input').value = ''
    this.tagList = newTagList
  }

  render() {
    const tags = this.tagList.split(',').map((el) => {
      return `<tag-list-element tagContent=${el}></tag-list-element>`
    }).join('')
    this.shadow.innerHTML =`
    <main class="container">
      <section class="controll">
          <input class="controll__input" type="text">
          <button class="controll__button">Add</button>
      </section>
      <section class="tag-list">
        ${tags}
      </section>
      <button class="checkbox-button">Readonly mode: ${this.readonly}</button>
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
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EBEDEF;
        padding: 10px;
        border-radius: 15px;
      }
      .checkbox-button.active {
        background-color: red
      }
      .tag-list {
        padding: 5px;
        margin: 5px;
        height: 320px;
        width: 100%;
        border-radius: 15px 0 0 15px;
        background-color: #ffffff;
        overflow: hidden;
        overflow-y: auto;
      }
    </style>
    `
  }
}