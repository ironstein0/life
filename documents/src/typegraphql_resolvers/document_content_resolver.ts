@Resolver(of => Document)
export class CustomUserResolver {
  @FieldResolver(type => Post, { nullable: true })
  async favoritePost(
    @Root() user: User,
    @Ctx() { prisma }: Context,
  ): Promise<Post | undefined> {
    const [favoritePost] = await prisma.user
      .findUniqueOrThrow({ where: { id: user.id } })
      .posts({ first: 1 });

    return favoritePost;
  }
}