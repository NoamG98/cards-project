import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ROUTES from './routesModel';
import CardsPage from '../cards/pages/CardsPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import SandBox from '../sandbox/SandBox';
import SignupPage from '../users/pages/SignupPage';
import LoginPage from '../users/pages/LoginPage';
import ForgotPasswordPage from '../users/pages/ForgotPasswordPage';
import ResetPasswordPage from '../users/pages/ResetPasswordPage';
import ParentComponent from '../sandbox/optimization/ParentComponent';
import ParentComponentPage from '../sandbox/context/ParentComponentPage';
import AddCardPage from '../cards/pages/AddCardPage';
import EditCardPage from '../cards/pages/EditCardPage';
import FormExample from '../sandbox/FormExmple';
import MyCards from '../cards/components/MyCards';
import HomePage from '../pages/HomePage';
import ProfilePage from '../users/pages/profile/ProfilePage';
import SearchResultsPage from '../pages/SearchResultsPage';
import EditUserPage from '../users/pages/EditUserPage';
import FavoritCardsPage from '../cards/pages/FavoritCardsPage';

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + '/:id'} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoritCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + '/:id'} element={<EditCardPage />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.SEARCH_RESULTS} element={<SearchResultsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="form" element={<FormExample />} />
        <Route path="optimization" element={<ParentComponent />} />
        <Route path="context" element={<ParentComponentPage />} />
        <Route path="my-cards" element={<MyCards />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
