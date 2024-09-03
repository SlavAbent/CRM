import { Provider } from "react-redux";
import { RoutesContainer } from "./RoutesContainer";
import { ThemeProvider } from 'styled-components'
import { baseTheme } from "./client/shared";
import { store } from "./store";

export const AppRoutes = () => (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <RoutesContainer />
      </ThemeProvider>
    </Provider>
  );