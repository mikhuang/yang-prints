import lastIndexOf from 'lodash/lastIndexOf'
import Tag from './Tag'
export const MATERIAL_FOLDERS = {
  bcard: {
    title: 'Business Cards',
    shortTitle: 'Biz Cards',
    url: '/bcard/',
  },
  poster: {
    title: 'Posters',
    url: '/poster/',
  },
  handout: {
    title: 'Handouts',
    url: '/handout/',
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
  banner: {
    title: 'Banners',
    url: '/banner/',
  },
  tshirt: {
    title: 'T-Shirts',
    url: '/tshirt/',
  },
  button: {
    title: 'Buttons',
    url: '/button/',
    isRound: true,
    gridSizes: { xs: 4, sm: 3, lg: 2, xl: 2 },
  },
  ganged: {
    title: 'Many per Sheets',
    shortTitle: 'Many',
    url: '/ganged/',
    hide: true,
  },
  invite: {
    title: 'Invites',
    url: '/invite/',
  },
  hanger: {
    title: 'Hangers',
    url: '/hanger/',
  },
}

/**
 * Return [file, ext] for file.ext. Doesn't work if filename is not in URL. Rudimentary support for '?'
 * @param {string} filename - Full filename
 */
function splitFileExt(filename) {
  const possibleFilename = filename.split('/').pop()
  const idx = lastIndexOf(possibleFilename, '.')
  if (idx !== -1) {
    const ext = possibleFilename.substr(idx + 1).split('?')[0]
    return [possibleFilename.substr(0, idx), ext]
  }
  return []
}

function processTags(tags) {
  return (tags || '').split(',').reduce((acc, x) => {
    const possibleTag = x.trim().toUpperCase()
    if (possibleTag) {
      acc.push(possibleTag)
    }
    return acc
  }, [])
}

/**
 * abstraction for material data, includes getters for images etc
 */
export default class Material {
  constructor(material) {
    const tags = processTags(material.tags)
    this.buyUrl = material.buy_url
    this.category = material.category
    this.creator = material.creator
    this.date = material.date
    this.description = material.description
    this.filename = material.filename
    this.folderId = material.folder
    this.originalUrl = material.original_url
    this.path = material.path
    this.rawTags = material.tags
    this.replacedBy = material.replaced_by
    this.slug = material.slug
    this.srcPath = material.src_path
    this.tagEntities = tags.map(tag => new Tag(tag))
    this.tags = tags
    this.title = material.title
    this.transcription = material.transcription || ''
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
    return this.folder.isRound && !this.tags.includes('GANGED')
  }

  get isVisible() {
    // Should this material be generally shown?
    return !this.replacedBy
  }

  get editURL() {
    // URL from which edits to this material can be suggested
    const e = encodeURIComponent
    return `https://docs.google.com/forms/d/e/1FAIpQLSdRUDCwMzof14qp4mKYtv55ZzdkDsgcxSiRMLloZ0adGwvMtg/viewform?usp=pp_url&entry.2085137922=${e(
      this.url
    )}&entry.1766080520=${e(this.title)}&entry.1527464278=${e(
      this.description
    )}&entry.53038913=${e(this.rawTags)}&entry.115847501=${e(
      this.transcription
    )}`
  }
}

/**
 * Given a list of material entries, instantiate classes for them
 */
export const toMaterialEntity = data => {
  return data.map(datum => new Material(datum))
}
