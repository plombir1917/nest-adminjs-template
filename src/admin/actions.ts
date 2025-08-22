// ACTIONS || Переопределённые операции с ресурсами/сущностями

/**
 * Создать запись || Create
 *
 * @param resource - Название ресурса/сущности
 * @returns
 */
export function newAction(resource: string) {
  return {
    handler: async (request, response, context) => {
      const payload = (request as any).payload || {};
      const res = await fetch(`${process.env.ADMIN_API_BASE_URL}/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return {
          notice: {
            message: errorData.message || 'Ошибка при создании',
            type: 'error',
          },
        };
      }

      const created = await res.json();
      const record = context.resource.build(created);
      return {
        record,
        redirectUrl: context.h.resourceUrl({
          resourceId: context.resource.id(),
        }),
        notice: {
          message: 'Успешно создано',
          type: 'success',
        },
      };
    },
  };
}

/**
 * Получить все записи || GetAll
 *
 * @param resource - Название ресурса/сущности
 * @returns
 */
export function listAction(resource: string) {
  return {
    handler: async (request, response, context) => {
      const res = await fetch(`${process.env.ADMIN_API_BASE_URL}/${resource}`, {
        method: 'GET',
      });
      const items = await res.json();
      const records = Array.isArray(items)
        ? items.map((i: any) => context.resource.build(i))
        : [];
      return {
        records,
        meta: {
          total: Array.isArray(items) ? items.length : 0,
        },
      };
    },
  };
}

/**
 * Получить одну запись || GetOne
 *
 * @param resource - Название ресурса/сущности
 * @returns
 */
export function showAction(resource: string) {
  return {
    handler: async (request, response, context) => {
      const { recordId } = request.params as any;
      const res = await fetch(
        `${process.env.ADMIN_API_BASE_URL}/${resource}/${recordId}`,
        {
          method: 'GET',
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        return {
          notice: {
            message: errorData.message || 'Ошибка при получении',
            type: 'error',
          },
        };
      }

      const item = await res.json();
      const record = context.resource.build(item);
      return {
        record: record.toJSON(),
      };
    },
  };
}

/**
 * Редактировать запись || Update
 *
 * @param resource - Название ресурса/сущности
 * @returns
 */
export function editAction(resource: string) {
  return {
    handler: async (request, response, context) => {
      const { recordId } = request.params as any;
      const payload = (request as any).payload || {};
      const res = await fetch(
        `${process.env.ADMIN_API_BASE_URL}/${resource}/${recordId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        return {
          notice: {
            message: errorData.message || 'Ошибка при обновлении',
            type: 'error',
          },
        };
      }

      const updated = await res.json();
      const record = context.resource.build(updated);
      return {
        record: record.toJSON(),
        redirectUrl: context.h.recordActionUrl({
          resourceId: context.resource.id(),
          recordId,
          actionName: 'show',
        }),
        notice: {
          message: 'Успешно обновлено',
          type: 'success',
        },
      };
    },
  };
}

/**
 * Удалить запись || Delete
 *
 * @param resource - Название ресурса/сущности
 * @returns
 */
export function deleteAction(resource: string) {
  return {
    handler: async (request, response, context) => {
      const { recordId } = request.params as any;
      const res = await fetch(
        `${process.env.ADMIN_API_BASE_URL}/${response}/${recordId}`,
        {
          method: 'DELETE',
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        return {
          notice: {
            message: errorData.message || 'Ошибка при удалении',
            type: 'error',
          },
        };
      }

      const deleted = await res.json();
      const record = context.resource.build(deleted);
      return {
        record: record.toJSON(),
        redirectUrl: context.h.resourceUrl({
          resourceId: context.resource.id(),
        }),
        notice: {
          message: 'Успешно удалено',
          type: 'success',
        },
      };
    },
  };
}
