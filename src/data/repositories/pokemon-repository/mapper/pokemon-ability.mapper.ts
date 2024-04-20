import { Mapper } from 'src/base/mapper';
import { IPokemonAbilityModel } from 'src/domain/models/pokemon-ability.model';
import { IAbilityEntity } from '../entity/pokemon-ability.entity';

export class PokemonAbilityMapper extends Mapper<
  IAbilityEntity,
  IPokemonAbilityModel
> {
  mapFrom(param: IAbilityEntity): IPokemonAbilityModel {
    return {
      description:
        param.flavor_text_entries.find((text) => text.language.name === 'es')
          ?.flavor_text ?? '',
      pokemon: param.pokemon.map((value) => value.pokemon),
      name: param.names
        .filter(
          (text) => text.language.name === 'es' || text.language.name === 'en',
        )
        .map((text) => text.name)
        .join(' / '),
    };
  }
}
