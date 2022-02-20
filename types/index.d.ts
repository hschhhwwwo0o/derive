interface INavigation {
  push: (path: string, params?: any) => any;
  navigate: (path: string, params?: any) => any;
  goBack: () => any;
}

interface IRoute {
  key: string;
  path: string;
  name: string;
  params: any;
}
interface IScreen {
  navigation: INavigation;
  route: IRoute;
}
