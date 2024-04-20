import { Mapper } from 'src/base/mapper';
import { IPokemonEggGroupModel } from 'src/domain/models/pokemon-egg-group.model';
import { IEggGroupEntity } from '../entity/pokemon-egg-group.entity';

export class PokemonEggGroupMapper extends Mapper<
  IEggGroupEntity,
  IPokemonEggGroupModel
> {
  mapFrom(param: IEggGroupEntity): IPokemonEggGroupModel {
    const nameES =
      param.names.find((text) => text.language.name === 'es')?.name ?? '';
    const name = param.name + (nameES.length > 0 ? '/' + nameES : '');
    return {
      name,
      id: param.id,
      pokemons: param.pokemon_species,
    };
  }
}
