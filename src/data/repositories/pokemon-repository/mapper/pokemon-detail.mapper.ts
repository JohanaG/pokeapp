import { Mapper } from 'src/base/mapper';
import { IPokemonDetailsEntity } from '../entity/pokemon-details.entity';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';
import { PokemonTypes } from 'src/app/models/enums/pokemon-type.enum';

export class PokemonDetailMapper extends Mapper<
  IPokemonDetailsEntity,
  IPokemonDetailModel
> {
  mapFrom(param: IPokemonDetailsEntity): IPokemonDetailModel {
    return {
      cover: param.sprites.other?.dream_world.front_default,
      types: param.types.map((value) => {
        return { ...value.type, background: PokemonTypes[value.type.name] };
      }),
      peso: param.weight,
      altura: param.height,
      habilidades: param.abilities.map((value) => {
        return value.ability;
      }),
    };
  }
}
