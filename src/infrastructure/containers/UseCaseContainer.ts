// src/infrastructure/containers/UseCaseContainer.ts
import { container } from 'tsyringe';
import { CreateUser } from '../../application/use-cases/user/CreateUser';
import { GetUserById } from '../../application/use-cases/user/GetUserById';
import { GetAllUsers } from '../../application/use-cases/user/GetAllUsers';
import { DeleteUser } from '../../application/use-cases/user/DeleteUser';
import { UpdateUser } from '../../application/use-cases/user/UpdateUser';
import { CreateStreet } from '../../application/use-cases/street/CreateStreet';
import { GetStreetById } from '../../application/use-cases/street/GetStreetById';
import { GetAllStreets } from '../../application/use-cases/street/GetAllStreets';
import { DeleteStreet } from '../../application/use-cases/street/DeleteStreet';
import { UpdateStreet } from '../../application/use-cases/street/UpdateStreet';

container.register('CreateUser', { useClass: CreateUser });
container.register('GetUserById', { useClass: GetUserById });
container.register('GetAllUsers', { useClass: GetAllUsers });
container.register('DeleteUser', { useClass: DeleteUser });
container.register('UpdateUser', { useClass: UpdateUser });
container.register('CreateStreet', { useClass: CreateStreet });
container.register('GetStreetById', { useClass: GetStreetById });
container.register('GetAllStreets', { useClass: GetAllStreets });
container.register('DeleteStreet', { useClass: DeleteStreet });
container.register('UpdateStreet', { useClass: UpdateStreet });
