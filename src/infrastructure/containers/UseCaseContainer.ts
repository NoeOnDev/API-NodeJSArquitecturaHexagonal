// src/infrastructure/containers/UseCaseContainer.ts
import { container } from 'tsyringe';
import { CreateUser } from '../../application/use-cases/user/CreateUser';
import { GetUserById } from '../../application/use-cases/user/GetUserById';
import { GetAllUsers } from '../../application/use-cases/user/GetAllUsers';
import { CreateStreet } from '../../application/use-cases/street/CreateStreet';
import { GetStreetById } from '../../application/use-cases/street/GetStreetById';
import { GetAllStreets } from '../../application/use-cases/street/GetAllStreets';

container.register('CreateUser', { useClass: CreateUser });
container.register('GetUserById', { useClass: GetUserById });
container.register('GetAllUsers', { useClass: GetAllUsers });
container.register('CreateStreet', { useClass: CreateStreet });
container.register('GetStreetById', { useClass: GetStreetById });
container.register('GetAllStreets', { useClass: GetAllStreets });
