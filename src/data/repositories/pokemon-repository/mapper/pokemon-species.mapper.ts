import { Mapper } from 'src/base/mapper';
import { IPokemonSpeciesModel } from 'src/domain/models/pokemon-species.model';
import { ISpeciesDetailsEntity } from '../entity/pokemon-species.entity';

export class PokemonSpeciesMapper extends Mapper<
  ISpeciesDetailsEntity,
  IPokemonSpeciesModel
> {
  mapFrom(param: ISpeciesDetailsEntity): IPokemonSpeciesModel {
    return {
      description: param.flavor_text_entries
        .filter((text) => text.language.name === 'es')
        .map((value) => value.flavor_text)
        .join(' '),
      category:
        param.genera.find((text) => text.language.name === 'es')?.genus ?? '',
      urlEvolution: param.evolution_chain.url,
      eggGroup: param.egg_groups[0],
    };
  }
}
