import welcomeRoute from './welcomeRoutes';

const urlPreffix = '/api/v1';

const routes = (app) => {
  app.use(urlPreffix, welcomeRoute);

  return app;
};
export default routes;
