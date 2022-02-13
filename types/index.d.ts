interface INavigation {
  push: (path: string, params?: any) => any;
  navigate: (path: string, params?: any) => any;
  goBack: () => any;
}
interface IScreen {
  navigation: INavigation;
}
