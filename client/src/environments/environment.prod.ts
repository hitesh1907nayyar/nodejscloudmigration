export const environment = {
  production: true,
  serverRoot: "https://nodejsmigration.azurewebsites.net/api",
  endpoints: {
    auth: {
      signUp: "/users/signup",
      signIn: "/users/signIn",  
    },
    todos: "/todos"
  }
};
