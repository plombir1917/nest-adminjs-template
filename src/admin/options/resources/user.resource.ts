import { UserEntity } from '../../../api/user/entities/user.entity.js';
import {
  deleteAction,
  editAction,
  newAction,
  showAction,
} from '../../../admin/actions.js';
import { ResourceOptions } from 'adminjs';

const resource = 'user';

export const UserResourceOptions: ResourceOptions = {
  listProperties: Object.keys(UserEntity),
  navigation: { icon: 'User' },
  actions: {
    new: newAction(resource),

    show: showAction(resource),

    edit: editAction(resource),

    delete: deleteAction(resource),
  },
};
