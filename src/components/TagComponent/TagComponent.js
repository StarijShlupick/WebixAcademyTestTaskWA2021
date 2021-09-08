export class TagComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }
  
  connectedCallback() {
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
    this.shadow.innerHTML =`
    <main class="container">
      <section class="controll">
          <input class="controll__input" type="text">
          <button class="controll__button">Add</button>
      </section>
      <section class="tag-list">
        ${this.tagList}
      </section>
      <button class="checkbox-button">Readonly mode: ${this.readonly}</button>
    </main>
    <style>
      .checkbox-button.active {
        background-color: red
      }
    </style>
    `
  }
}