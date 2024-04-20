import { Mapper } from 'src/base/mapper';
import { IPokemonDetailsEntity } from '../entity/pokemon-details.entity';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';
import { PokemonTypes } from 'src/app/models/enums/pokemon-type.enum';

export class PokemonDetailMapper extends Mapper<
  IPokemonDetailsEntity,
  IPokemonDetailModel
> {
  mapFrom(param: IPokemonDetailsEntity): IPokemonDetailModel {
    const imageDefault = param.sprites.front_default;
    return {
      id: param.id,
      cover: param.sprites.other?.dream_world.front_default ?? imageDefault,
      types: param.types.map((value) => {
        return { ...value.type, background: PokemonTypes[value.type.name] };
      }),
      weight: param.weight,
      height: param.height,
      abilities: param.abilities.map((value) => {
        return value.ability;
      }),
      species: param.species,
      name: param.name[0].toUpperCase() + param.name.substring(1),
    };
  }
}
