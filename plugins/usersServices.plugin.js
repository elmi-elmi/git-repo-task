import createUsersService from "~/services/usersService";

export default (ctx, inject) => {
  const usersService = createUsersService(ctx.$axios)
  inject('usersService', usersService)
}
