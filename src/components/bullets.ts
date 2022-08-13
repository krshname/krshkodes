import { Component } from '../library/component'

export class BulletComponent extends Component {
  private bullets: string[]

  constructor (bullets: string[]) {
    super()

    this.bullets = bullets
  }

  private template (bullets: string[]): string {
    return `<tr> <td> \n<p> •${bullets.join('</p>\n<p> •')}</p>\n </td> </tr>`
  }

  compile (): string {
    return this.template(this.bullets)
  }
}
