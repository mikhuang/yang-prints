import lastIndexOf from 'lodash/lastIndexOf'
export const MATERIAL_FOLDERS = {
  poster: {
    title: 'Posters',
    url: '/poster/',
  },
  bcard: {
    title: 'Business Cards',
    shortTitle: 'Biz Cards',
    url: '/bcard/',
  },
  button: {
    title: 'Buttons',
    url: '/button/',
    isRound: true,
    gridSizes: { xs: 4, sm: 3, lg: 2, xl: 2 },
  },
  square: {
    title: 'Square/Post-its',
    shortTitle: 'Post-its',
    url: '/square/',
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

function splitFileExt(filename) {
  const idx = lastIndexOf(filename, '.')
  return [filename.substr(0, idx), filename.substr(idx + 1)]
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
    const [pathFilename] = splitFileExt(this.filename)
    return `/media/${this.path}/thumb/${pathFilename}.jpg`
  }

  get downloadUrl() {
    return `/media/${this.path}/${this.filename}`
  }

  get downloadUrlExt() {
    return splitFileExt(this.downloadUrl)[1]
  }

  get folder() {
    return MATERIAL_FOLDERS[this.folderId] || {}
  }

  get isRound() {
    return this.folder.isRound
  }
}

/**
 * Given a list of material entries, instantiate classes for them
 */
export const toMaterialEntity = data => {
  return data.map(datum => new Material(datum))
}
