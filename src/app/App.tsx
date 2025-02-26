import { Paths } from 'src/constants';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { TasksPage } from 'src/pages/TasksPage';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { PageContainer } from 'src/components';
import { GlobalStyle } from 'src/index.style';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route path={Paths.TASK_LIST} element={<TasksPage />} />
              <Route
                path={Paths.NOT_FOUND}
                element={<div>Данной страницы не существует</div>}
              />
            </Routes>
          </HashRouter>
        </Provider>
      </PageContainer>
    </>
  );
};
