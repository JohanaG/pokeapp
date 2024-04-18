import { Mapper } from 'src/base/mapper';
import { IPokemonDetailsEntity } from '../entity/pokemon-details.entity';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';

export class PokemonDetailMapper extends Mapper<
  IPokemonDetailsEntity,
  IPokemonDetailModel
> {
  mapFrom(param: IPokemonDetailsEntity): IPokemonDetailModel {
    return {
      cover: param.sprites.front_default,
      types: param.types.map((value) => value.type),
    };
  }
}
