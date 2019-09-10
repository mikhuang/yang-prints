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
    this.slug = material.slug
    this.folderId = material.folder
    this.description = material.description
    this.srcPath = material.src_path
    this.buyUrl = material.buy_url
  }

  get url() {
    return `${this.folder.url}${this.slug}`
  }

  get thumbSrc() {
    const [pathFolder, pathFile] = this.path.split('/')
    const [pathFilename] = pathFile.split('.')
    return `/media/${pathFolder}/thumb/${pathFilename}.jpg`
  }

  get downloadUrlExt() {
    return this.downloadUrl.split('.')[1]
  }

  get downloadUrl() {
    return `/media/${this.path}`
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
