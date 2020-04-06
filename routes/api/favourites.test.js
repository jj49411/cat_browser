const mongoose = require('mongoose')
const FavouriteModel = require('../../models/Favourite')
const catMock = {
  name: 'Cat',
  url: 'testUrl',
  description: 'testDes'
}

describe('Favourite model unit test', () => {

  beforeAll(async () => {
      await mongoose.connect(global.__MONGO_URI__, { 
      useNewUrlParser: true, 
      useCreateIndex: true 
    }, (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
    })
  })
  
  it('should add a new cat data successfully', async () => {
    const cat = new FavouriteModel(catMock)
    await cat.save()

    expect(cat._id).toBeDefined()
    expect(cat.name).toEqual('Cat')
    expect(cat.url).toEqual('testUrl')
    expect(cat.description).toEqual('testDes')
  })

  it('should fail to add a new cat without required field', async () => {
    const catMockError = new FavouriteModel({ name: 'Meow' })
    let err
    try {
        const savedCatError = await catMockError.save()
        error = savedCatError
    } catch (error) {
        err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    expect(err.errors.url).toBeDefined()
  })

  it('should delete the selected cat from database', async () => {
    const cat = new FavouriteModel(catMock)
    await cat.save()
    await cat.deleteOne({ name: 'cat' })
    expect(cat.url).toBeDefined
  })


  afterEach(async () => {
    await FavouriteModel.deleteMany()
  })
  
})
