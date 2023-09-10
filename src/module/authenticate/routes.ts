import { authController } from "./controller/auth.controller";
import { validateAuthApis } from "./policies/auth.policies";
class AuthRoutes {
  constructor(private authRouter: any) {
    this.authRouter = authRouter;
    this.registerRoutes();
  }
  registerRoutes() {
    this.authRouter.get("/signup", authController.signUp);
  }
}

const authRoutes = (AuthRouter: any) => {
  return new AuthRoutes(AuthRouter);
};

export = {
  AuthRoutes: AuthRoutes,
  authRoutes: authRoutes,
};
