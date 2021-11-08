export const resolvers = {
  Query: {
    teches: (
      _parent: any,
      _args: any,
      ctx: { prisma: { tech: { findMany: () => any } } }
    ) => {
      return ctx.prisma.tech.findMany();
    },
    categories: (
      _parent: any,
      _args: any,
      ctx: { prisma: { category: { findMany: () => any } } }
    ) => {
      return ctx.prisma.category.findMany();
    },
  },
  Category: {
    id: (_parent: any) => _parent.id,
    name: (_parent: any) => _parent.name,
    teches: (
      _parent: any,
      _args: any,
      ctx: {
        prisma: {
          tech: { findMany: (arg0: { where: { categoryId: any } }) => any };
        };
      }
    ) => {
      return ctx.prisma.tech.findMany({
        where: { categoryId: _parent.id },
      });
    },
  },
  Tech: {
    id: (_parent: any) => _parent.id,
    name: (_parent: any) => _parent.name,
    image: (_parent: any) => _parent.image,
    lavel: (_parent: any) => _parent.lavel,
    categoryId: (_parent: any) => _parent.categoryId,
    Category: (_parent: any, _args: any, ctx: any) => {
      return ctx.prisma.category.findFirst({
        where: { id: _parent.categoryId },
      });
    },
  },
};
