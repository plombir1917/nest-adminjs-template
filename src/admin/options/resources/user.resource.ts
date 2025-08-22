import { BadRequestException } from '@nestjs/common';

export const UserResourceOptions = {
  listProperties: ['id', 'email', 'name'],
  actions: {
    list: {
      handler: async (request, response, context) => {
        const res = await fetch(`${process.env.ADMIN_API_BASE_URL}/user`, {
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
    },
    show: {
      handler: async (request, response, context) => {
        const { recordId } = request.params as any;
        const res = await fetch(
          `${process.env.ADMIN_API_BASE_URL}/user/${recordId}`,
          {
            method: 'GET',
          },
        );
        const item = await res.json();
        const record = context.resource.build(item);
        return { record };
      },
    },
    new: {
      handler: async (request, response, context) => {
        try {
          const payload = (request as any).payload || {};
          const res = await fetch(`${process.env.ADMIN_API_BASE_URL}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          console.log(res);
          const created = await res.json();
          const record = context.resource.build(created);
          return {
            record,
            redirectUrl: context.h.resourceUrl({
              resourceId: context.resource.id(),
            }),
          };
        } catch (error) {
          throw new BadRequestException(error.message);
        }
      },
    },
    edit: {
      handler: async (request, response, context) => {
        const { recordId } = request.params as any;
        const payload = (request as any).payload || {};
        const res = await fetch(
          `${process.env.ADMIN_API_BASE_URL}/user/${recordId}`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          },
        );
        const updated = await res.json();
        const record = context.resource.build(updated);
        return {
          record,
          redirectUrl: context.h.recordActionUrl({
            resourceId: context.resource.id(),
            recordId,
            actionName: 'show',
          }),
        };
      },
    },
    delete: {
      handler: async (request, response, context) => {
        const { recordId } = request.params as any;
        await fetch(`${process.env.ADMIN_API_BASE_URL}/user/${recordId}`, {
          method: 'DELETE',
        });
        return {
          redirectUrl: context.h.resourceUrl({
            resourceId: context.resource.id(),
          }),
        };
      },
    },
  },
};
