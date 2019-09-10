export const MATERIAL_FOLDERS = {
  poster: {
    title: 'Posters',
    url: '/poster/',
  },
  square: {
    title: 'Square/Post-its',
    url: '/square/',
  },
  bcard: {
    title: 'Business Cards',
    url: '/bcard/',
  },
  sticker: {
    title: 'Stickers',
    url: '/sticker/',
  },
  handout: {
    title: 'Handouts',
    url: '/handout/',
  },
  banner: {
    title: 'Banners',
    url: '/banner/',
  },
}

/**
 * abstraction for material data, includes getters for images etc
 */
export default class Material {
  constructor(material) {
    this.category = material.category
    this.date = material.date
    this.originalUrl = material.original_url
    this.creator = material.creator
    this.path = material.path
    this.filename = material.filename
    this.slug = material.slug
    this.folderId = material.folder
    this.title = material.title
    this.description = material.description
    this.srcPath = material.src_path
    this.buyUrl = material.buy_url
  }

  get url() {
    return `${this.folder.url}${this.slug}`
  }

  get thumbSrc() {
    const [pathFilename] = this.filename.split('.')
    return `/media/${this.path}/thumb/${pathFilename}.jpg`
  }

  get downloadUrl() {
    return `/media/${this.path}/${this.filename}`
  }

  get downloadUrlExt() {
    return this.downloadUrl.split('.')[1]
  }

  get folder() {
    return MATERIAL_FOLDERS[this.folderId] || {}
  }
}

/**
 * Given a list of material entries, instantiate classes for them
 */
export const toMaterialEntity = data => {
  return data.map(datum => new Material(datum))
}
