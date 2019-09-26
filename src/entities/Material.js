import lastIndexOf from 'lodash/lastIndexOf'
import Tag from './Tag'
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
  ganged: {
    title: 'Combo',
    url: '/ganged/',
  },
  banner: {
    title: 'Banners',
    url: '/banner/',
  },
  invite: {
    title: 'Invites',
    url: '/invite/',
  },
}

function splitFileExt(filename) {
  const possibleFilename = filename.split('/').pop()
  const idx = lastIndexOf(possibleFilename, '.')
  if (idx !== -1) {
    return [possibleFilename.substr(0, idx), possibleFilename.substr(idx + 1)]
  }
  return []
}

function processTags(tags) {
  return (tags || '').split(',').map(x => x.trim().toUpperCase())
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
    this.tags = processTags(material.tags)
    this.tagEntities = this.tags.map(tag => new Tag(tag))
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
    const parts = splitFileExt(this.downloadUrl)
    return parts[1] ? parts[1] : null
  }

  get srcExt() {
    const parts = splitFileExt(this.srcPath)
    return parts[1] ? parts[1] : null
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
