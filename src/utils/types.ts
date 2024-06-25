export interface IGeneralState {
  token: string | null;
  expiresIn: string | null;
  user: any;
  appLanguage: string;
  userIsCreated: boolean;
  firstTimeAppInstall: boolean;
  loginAsAGuest: boolean;
  loading: boolean;
}
