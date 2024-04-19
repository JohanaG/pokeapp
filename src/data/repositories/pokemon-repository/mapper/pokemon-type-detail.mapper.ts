import { Mapper } from 'src/base/mapper';
import { IPokemonTypeDetails } from '../entity/pokemon-type-details.entity';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';
import { PokemonTypes } from 'src/app/models/enums/pokemon-type.enum';

export class PokemonTypeDetailMapper extends Mapper<
  IPokemonTypeDetails,
  IPokemonTypeModel[]
> {
  mapFrom(param: IPokemonTypeDetails): IPokemonTypeModel[] {
    return param.damage_relations.double_damage_from.map((value) => {
      return { ...value, background: PokemonTypes[value.name] };
    });
  }
}
