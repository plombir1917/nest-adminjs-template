import { UserEntity } from '../../../api/user/entities/user.entity.js';
import {
  deleteAction,
  editAction,
  listAction,
  newAction,
  showAction,
} from '../../../admin/actions.js';

const resource = 'user';

export const UserResourceOptions = {
  listProperties: Object.keys(UserEntity),
  navigation: { icon: 'User' },
  actions: {
    new: newAction(resource),

    list: listAction(resource),

    show: showAction(resource),

    edit: editAction(resource),

    delete: deleteAction(resource),
  },
};
