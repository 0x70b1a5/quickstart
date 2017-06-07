import { Injectable } from '@angular/core'
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 1337, name: "The Hacker"},
  {id: 666, name: "El Diablo"},
  {id: 777, name: "Al'Eister"},
  {id: 101, name: "The Dalmatian"}
]

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 2000)
    })
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
  }
}
