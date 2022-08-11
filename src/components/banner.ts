import { Component, ComponentConfig } from '../library/component'

export class BannerComponent extends Component {
  bannerUrl: string
  name: string

  constructor (bannerUrl: string, name: string, config: ComponentConfig) {
    super(config)

    this.bannerUrl = bannerUrl
    this.name = name
  }

  template (bannerUrl: string, name: string): string {
    return `<img align="center" alt="Welcome to ${name}'s github profile" src="${bannerUrl}" />`
  }

  compile (): string {
    return this.template(this.bannerUrl, this.name)
  }
}