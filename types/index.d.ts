interface IScreen {
  navigation: {
    push: (path: string) => any;
    navigate: (path: string) => any;
  };
}
