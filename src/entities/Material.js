export default class Material {
  constructor(material) {
    this.category = material.category
    this.date = material.date
    this.originalUrl = material.original_url
    this.creator = material.creator
    this.path = material.path
    this.slug = material.slug
    this.folder = material.folder
    this.description = material.description
    this.srcPath = material.src_path
  }

  get url() {
    return `/${this.folder}/${this.slug}`
  }

  get thumbSrc() {
    const [pathFolder, pathFile] = this.path.split('/')
    const [pathFilename, pathFileExt] = pathFile.split('.')
    return require(`../media/${pathFolder}/thumb/${pathFilename}.jpg`)
  }

  get src() {
    return require(`../media/${this.path}`)
  }
}

export const toMaterialEntity = data => {
  return data.map(datum => new Material(datum))
}
