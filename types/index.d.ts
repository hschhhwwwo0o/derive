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

interface ICard {
  id: number;
  balance: number;
  paymentSystem: string;
  number: string;
  endDate: string;
  colorId: number;
}

interface IGoal {
  id: number;
  name: string;
  description: string;
  finalAmount: number;
  currentAmount: number;
}

interface ITransaction {
  id: number;
  cardId: number;
  amount: number;
  date: string;
  type: string;
  actionType: string;
}

type IPaymentSystem = "Visa" | "Paypal" | "Mir";
