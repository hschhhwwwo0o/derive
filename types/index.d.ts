interface INavigation {
  push: (path: string) => any;
  navigate: (path: string) => any;
  goBack: () => any;
}
interface IScreen {
  navigation: INavigation;
}
