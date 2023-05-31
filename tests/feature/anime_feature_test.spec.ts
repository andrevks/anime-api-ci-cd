import { test } from '@japa/runner'
import Anime from 'App/Models/Anime'

test('list all animes', async () => {
  const anime = await Anime.create({
    title: 'Example Anime',
    synopsis: 'An example anime',
    imageUrl: 'https://via.placeholder.com/150',
  })
  const animes = await Anime.all()
})
