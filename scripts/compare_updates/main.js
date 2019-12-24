import csv from 'csvtojson'
import Material from '../../src/entities/Material'

class Update {
  constructor(update) {
    this.url = update['Material Path']
    this.description = update['Description']
    this.title = update['Title']
    this.tags = update['Tags']
    this.transcription = update['Transcription']
    this.notes = update['Notes to YangPrints']
    this.internal = update['YP Notes']
    this.email = update['Email Address']
  }

  get isUnhandled() {
    return this.internal === '' || this.internal.toUpperCase() === 'TODO'
  }
}

const main = async () => {
  const updatesData = await csv().fromFile('./data/updates.csv')
  const updates = updatesData.map(x => new Update(x))
  const materialsData = await csv().fromFile('./data/materials.csv') // TODO: consider using the JSON file?
  const materials = materialsData.map(x => new Material(x))
  const materialsByUrl = materials.reduce((acc, x) => {
    acc[x.url] = x
    return acc
  }, {})

  // loop through notes, output diff
  updates.forEach(update => {
    const material = materialsByUrl[update.url]
    if (update.isUnhandled) {
      if (!material) {
        console.log(`no match ${update.url}\n`)
        return
      }
      console.log(update.url)
      if (material.description !== update.description) {
        console.log(`Description: ${update.description}`)
      }
      if (material.tags !== update.tags) {
        console.log(`Tags: ${update.tags}`)
      }
      if (material.title !== update.title) {
        console.log(`Title: ${update.title}`)
      }
      if (update.notes) {
        console.log(`Notes: ${update.notes}`)
      }
      console.log(`Email: ${update.email}\n`)
    }
  })
  // console.log(updates)
}

main()
