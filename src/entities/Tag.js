/** this only ever expects to see uppercase strings with whitespace */
function slugify(tag) {
  return tag.toLowerCase().replace(/\s/g, '-')
}
/**
 * abstraction for tag data
 */
export default class Tag {
  constructor(tag, count = 1) {
    this.tag = tag
    this.title = `${tag}`
    this.slug = slugify(tag)
    this.count = count
  }

  get url() {
    return `/tags/${this.slug}`
  }
}
