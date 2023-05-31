import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Anime from 'App/Models/Anime'

export default class AnimeController {
  public async index({}: HttpContextContract) {
    // const animes = await Anime.all()
    const animeList = [
      { id: 1, title: 'Naruto', genre: 'Action' },
      { id: 2, title: 'One Piece', genre: 'Adventure' },
      { id: 3, title: 'Bleach', genre: 'Fantasy' },
    ]
    return animeList
  }
}
