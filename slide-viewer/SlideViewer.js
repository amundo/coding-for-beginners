export class SlideViewer extends HTMLElement {
  constructor() {
    super()
    this.listen()
  }

  connectedCallback(){
    Array.from(this.children)
      .forEach((child, i) => child.id = `slide-${i+1}`)
  }

  next(){
    this.insertAdjacentElement('beforeend', this.firstElementChild)
    this.dispatchEvent(new Event('slide-changed'))
  }

  previous(){
    this.insertAdjacentElement('afterbegin', this.lastElementChild)
    this.dispatchEvent(new Event('slide-changed'))
  }
  
  listen() {
    document.addEventListener('slide-changed', ev => {
      let children = Array.from(this.children)

    })

    document.addEventListener('keydown', ev => {
      if (ev.key == 'ArrowRight') {
        this.next()
      }
      if (ev.key == 'ArrowLeft') {
        this.previous()
      }
    })

    this.addEventListener('slide-changed', slideChangedEvent => {
      document.location.hash = this.firstElementChild.id
    })
  }
}

customElements.define('slide-viewer', SlideViewer)