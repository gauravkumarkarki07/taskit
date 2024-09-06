import { plainToInstance } from 'class-transformer';

export class DtoMapper {
  public static mapDto<Entity, Dto>(entity: Entity, dtoClass: new () => Dto) {
    return plainToInstance(dtoClass, entity, {
      excludeExtraneousValues: true,
    });
  }
}
