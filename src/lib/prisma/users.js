import prisma from '.'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return { user: userFromDB }
  } catch (error) {
    return { error } 
  }
}

export async function updateUser(email, data) {
  try {
    await prisma.user.update({
      where: { email },
      data: data,
    });
    return { data }
  } catch (error) {
    return { error }
  }
}

export async function deleteUser(email) {
  try {
    await prisma.user.delete({
      where: { email },
    });
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        subscriptions: true,
        accounts: true,
      }
    })
    return { user}
  } catch (error) {
    return { error }
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return user;
    } else {
      return "User not found";
    }
  } catch (error) {
    return { error };
  }
}